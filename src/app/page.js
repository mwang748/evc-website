// this is the new home page

import Link from "next/link";

export default function Home() {
  return (
    <body>
      <div>
        <Link href="/about">about</Link>
      </div>
      <div>
        <Link href="/cars">cars</Link>
      </div>
      <div>
        <Link href="/contacts">contacts</Link>
      </div>
      <div>
        <Link href="/sponsors">sponsors</Link>
      </div>
      <div>
        <Link href="/team">team</Link>
      </div>
    </body>
  );
}
