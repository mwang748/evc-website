#!/bin/bash
# Runs on the cPanel server from cron every 15 minutes (Illinois' minimum interval).
#
# Does what clicking "Update from Remote" then "Deploy HEAD Commit" does in cPanel's
# Git Version Control, but only deploys when GitHub has published something new to
# the `deploy` branch. Silent on success; prints only on failure, so the cron email
# only arrives when something is wrong.
#
# Install on the server (cPanel -> Terminal):
#   mkdir -p ~/bin
#   curl -fsS -o ~/bin/deploy-site.sh https://raw.githubusercontent.com/mwang748/evc-website/master/deploy/cron-deploy.sh
#   chmod +x ~/bin/deploy-site.sh
# Cron command:  /bin/bash /home/evconcept/bin/deploy-site.sh

REPO=/home/evconcept/repositories/evc-website
GIT=/usr/local/cpanel/3rdparty/lib/path-bin/git
UAPI=/bin/uapi

ok() { grep -Eq '"status" *: *1'; }

before=$("$GIT" -C "$REPO" rev-parse HEAD 2>&1) || { echo "Can't read the repo at $REPO: $before"; exit 1; }

out=$("$UAPI" --output=json VersionControl update repository_root="$REPO" branch=deploy 2>&1)
echo "$out" | ok || { echo "Update from Remote failed:"; echo "$out"; exit 1; }

after=$("$GIT" -C "$REPO" rev-parse HEAD 2>&1)
[ "$before" = "$after" ] && exit 0   # nothing new on deploy

out=$("$UAPI" --output=json VersionControlDeployment create repository_root="$REPO" 2>&1)
echo "$out" | ok || { echo "Deploy HEAD Commit failed for ${after:0:7}:"; echo "$out"; exit 1; }
