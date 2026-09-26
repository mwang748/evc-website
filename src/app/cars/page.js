"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import "./cars.css";
import { yearData, chipLabel } from "./yearData";

/**
 * The timeline video is ~9MB. A plain `autoPlay` tag downloads it on page load
 * even though its entry sits far down the timeline, so we show the poster frame
 * and only attach the source once it's actually near the viewport.
 */
function LazyVideo({ src, poster, className }) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el || visible) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { rootMargin: "200px" }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, [visible]);

    // Asking to play is what actually starts the download — under preload="none"
    // the browser does resource selection but fetches no media data on its own, so
    // waiting on a loadeddata event here would wait forever. play() resolves once
    // enough has buffered; it's muted and inline, so autoplay policy allows it.
    useEffect(() => {
        if (!visible || !ref.current) return;
        ref.current.play().catch((err) => console.log("Video autoplay failed:", err));
    }, [visible]);

    return (
        <video
            ref={ref}
            loop
            muted
            playsInline
            poster={poster}
            preload="none"
            src={visible ? src : undefined}
            className={className}
        >
            Your browser does not support the video tag.
        </video>
    );
}

const isVideoFile = (src) => /\.(mp4|webm|ogg)$/i.test(src);

const prefersReducedMotion = () =>
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Scroll the window to `targetY` over a short ease.
 *
 * Done by hand rather than with `behavior: "smooth"` so the page keeps working in
 * the environments that drop smooth scrolls (headless/automated Chrome does), and
 * so the sticky navbar + chip bar offset is applied to the exact same number the
 * animation lands on.
 */
function scrollWindowTo(targetY) {
    const startY = window.scrollY;
    const delta = targetY - startY;
    if (Math.abs(delta) < 2) return;

    if (prefersReducedMotion()) {
        window.scrollTo(0, targetY);
        return;
    }

    const duration = Math.min(900, Math.max(320, Math.abs(delta) * 0.35));
    const start = performance.now();
    const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

    const step = (now) => {
        const t = Math.min(1, (now - start) / duration);
        window.scrollTo(0, startY + delta * ease(t));
        if (t < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
}

/** One photo, video or embed in the entry's media grid. */
function MediaTile({ media, wide }) {
    const className = `car-tile ${wide ? "car-tile-wide" : ""}`;

    if (isVideoFile(media.src)) {
        return (
            <div className={className}>
                <LazyVideo src={media.src} poster={media.poster} className="car-tile-inner" />
            </div>
        );
    }

    return (
        <div className={className}>
            <Image
                src={media.src}
                alt={media.alt}
                width={media.width}
                height={media.height}
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 45vw, 90vw"
                className="car-tile-inner"
            />
        </div>
    );
}

export default function Cars() {
    const [activeId, setActiveId] = useState(yearData[0].id);
    const chipBarRef = useRef(null);
    const chipNavRef = useRef(null);

    // Land the entry just below the sticky navbar + chip bar rather than under them.
    const jumpToYear = (event, id) => {
        event.preventDefault();
        const target = document.getElementById(id);
        if (!target) return;

        const bar = chipNavRef.current;
        // The bar sticks directly under the 72px navbar; 16px of breathing room after.
        const offset = 72 + (bar ? bar.offsetHeight : 70) + 16;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;

        scrollWindowTo(Math.max(0, top));
        setActiveId(id);
        window.history.replaceState(null, "", `#${id}`);
    };

    // Light up the chip for the entry whose top has most recently passed the line
    // just under the sticky navbar + chip bar, so the bar doubles as a position
    // readout while you scroll. (An IntersectionObserver band was tried first, but
    // the previous entry's tail is still inside the band when a chip jump lands,
    // so the wrong chip lit up.)
    useEffect(() => {
        const entries = yearData
            .map((item) => document.getElementById(item.id))
            .filter(Boolean);
        if (!entries.length) return;

        let frame = 0;
        const update = () => {
            frame = 0;
            const bar = chipNavRef.current;
            // Same line jumpToYear lands on, plus a few px of slack for rounding.
            const line = 72 + (bar ? bar.offsetHeight : 70) + 16 + 4;

            let current = entries[0];
            for (const el of entries) {
                if (el.getBoundingClientRect().top <= line) current = el;
                else break;
            }
            // At the very bottom the last entries can never reach the line.
            const atBottom =
                window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
            if (atBottom) current = entries[entries.length - 1];

            setActiveId(current.id);
        };
        const onScroll = () => {
            if (!frame) frame = requestAnimationFrame(update);
        };

        update();
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onScroll);
            if (frame) cancelAnimationFrame(frame);
        };
    }, []);

    // Keep the active chip within the scrollable bar as the page moves.
    useEffect(() => {
        const bar = chipBarRef.current;
        const chip = bar?.querySelector(`[data-chip="${activeId}"]`);
        if (!bar || !chip) return;

        const left = chip.offsetLeft - bar.clientWidth / 2 + chip.clientWidth / 2;
        bar.scrollLeft = Math.max(0, left);
    }, [activeId]);

    return (
        <div>
            <div className="gradient-overlay">
                <Image
                    src="/images/contacts/classiccarcropped.jpg"
                    alt="Classic Car"
                    width={2560}
                    height={480}
                    priority
                    sizes="100vw"
                />
            </div>

            <div className="section-header">
                <h1 className="section-title">OUR CARS</h1>
            </div>

            <div className="flex text-center lg:flex-row lg:py-6 lg:px-4 space-y-8 md:space-y-0 md:space-x-12 text-sm lg:text-2xl mx-4 sm:mx-8 md:mx-12 lg:mx-20 lg:mb-10 lg:mt-10 my-5">
                <p>
                    Explore the evolution of our car designs over the years. We take great
                    pride in the dedication and innovation of our business and technical
                    teams, which have driven every step of our journey. From EV1 and EV2 to
                    our current project, EV3, we&apos;re continually advancing.
                </p>
            </div>

            <nav className="car-chipbar" aria-label="Jump to a year" ref={chipNavRef}>
                <div className="car-chipbar-scroll" ref={chipBarRef}>
                    {yearData.map((item) => (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            data-chip={item.id}
                            onClick={(event) => jumpToYear(event, item.id)}
                            className={`car-chip ${item.id === activeId ? "car-chip-active" : ""}`}
                            aria-current={item.id === activeId ? "true" : undefined}
                        >
                            {chipLabel(item.year)}
                        </a>
                    ))}
                </div>
            </nav>

            <div className="car-timeline">
                {yearData.map((item, index) => {
                    const media = item.images;
                    const isLast = index === yearData.length - 1;

                    return (
                        <article
                            key={item.id}
                            id={item.id}
                            className={`car-entry ${isLast ? "car-entry-last" : ""}`}
                        >
                            <div className="car-rail" aria-hidden="true">
                                <span className="car-rail-line" />
                                <span className="car-rail-node" />
                            </div>

                            <div className="car-entry-body">
                                <div className="car-entry-text">
                                    <h2 className="car-year">{item.year}</h2>
                                    <span className="car-year-rule" />
                                    {item.text && <p className="car-blurb">{item.text}</p>}
                                    {item.links.length > 0 && (
                                        <ul className="car-links">
                                            {item.links.map((link) => (
                                                <li key={link.href}>
                                                    <a
                                                        href={link.href}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className="link-highlight"
                                                    >
                                                        {link.label}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>

                                {item.embed ? (
                                    <div className="car-media">
                                        <div className="car-tile car-tile-wide car-tile-embed">
                                            <iframe
                                                src={item.embed}
                                                title={`${item.year} highlights`}
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                                className="car-tile-inner"
                                            />
                                        </div>
                                    </div>
                                ) : media.length > 0 ? (
                                    <div className="car-media">
                                        {media.map((entry, i) => (
                                            <MediaTile
                                                key={entry.src}
                                                media={entry}
                                                // An odd trailing tile spans the full width
                                                // so no row is ever left ragged.
                                                wide={media.length % 2 === 1 && i === media.length - 1}
                                            />
                                        ))}
                                    </div>
                                ) : null}
                            </div>
                        </article>
                    );
                })}
            </div>
        </div>
    );
}
