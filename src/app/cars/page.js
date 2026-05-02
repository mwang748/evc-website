"use client";
import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import './cars.css';
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const yearData = [
    {
        year: "2025-2026",
        text: "We competed with EV2, passing technical inspection at Shell-Eco and running four laps on the track! EV3 is being prototyped and designed.",
        images: [
            {src: "/images/ourcars/2025-2026_car1.jpeg", alt: "Car"},
            {src: "/images/ourcars/2025-2026_car_work.jpeg", alt: "Work On Car"},
            {src: "/images/ourcars/2025-2026_car_work2.jpeg", alt: "Work On Car 2"},
            {src: "/images/ourcars/car_running.mp4", alt: "Car running"},
        ],
    },
    {
        year: "2024-2025",
        text: "We raced with EV2 again this year while still designing EV3, and passed the technical inspection at Shell-Eco!",
        images: [
            {src: "/images/ourcars/work_on_car_1.JPG", alt: "Work on Car "},
            {src: "/images/ourcars/work_on_car_2.JPG", alt: "Work on Car"},
            {src: "/images/ourcars/team_comp_photo_2024_2025.JPG", alt: "Team Photo"},
        ],
    },
    {
        year: "2023-2024",
        text: "Initial design sketches of our upcoming car, EV3, laying the groundwork for this year's build. The completed EV2, used in last year's competition.",
        images: [
            { src: "/images/ourcars/2023-2024_car_1.jpg", alt: "Design 1" },
            { src: "/images/ourcars/2023-2024_car_2.jpg", alt: "Design 2" },
            { src: "/images/ourcars/2023-2024_car_3.jpg", alt: "EV2" },
        ],
    },
    {
        year: "2022-2023",
        text: "Autonomous testing setup from last year's development phase.",
        images: [
            { src: "/images/ourcars/2022-2023_car_4.jpg", alt: "Testing 1" },
            { src: "/images/ourcars/2022-2023_car_5.jpg", alt: "Testing 2" },
        ],
    },
    {
        year: "2021-2022",
        text: "Our team competed with updates to the electrical systems and additions to the mechanical systems.",
        images: [
            { src: "/images/ourcars/2021-2022_car_6.jpg", alt: "2021 Car" },
        ],
    },
    {
        year: "2020-2021",
        text: "Eco-Marathon 2020 took a break for COVID, but we're ready to come back stronger!",
        images: [],
    },
    {
        year: "2019-2020",
        text: "Loading up the car, excited and ready for the competition.",
        images: [
            { src: "/images/ourcars/2019-2020_car_7.jpg", alt: "2019 Car" },
        ],
    },
    {
        year: "2018-2019",
        text: "The vehicle's body is similar to the 2017-2018 design, but the chassis has been extensively revamped. Changes include a redesigned rear section for better subsystem mounting, improved front end geometry for increased stiffness, and the use of lighter core materials. Electronics were upgraded with more efficient BLDC motors and an advanced battery management system.",
        images: [
            { src: "/images/ourcars/2018-2019_car_8.jpeg", alt: "2018 Car 1" },
            { src: "/images/ourcars/2018-2019_car_9.jpeg", alt: "2018 Car 2" },
            { src: "/images/ourcars/2018-2019_car_10.jpg", alt: "2018 Car 3" },
        ],
    },
    {
        year: "2017-2018",
        text: "This is our first year transitioning to the battery electric category with a brand-new body, chassis, battery, and custom motor controller.",
        images: [
            { src: "/images/ourcars/2017-2018_car_11.jpg", alt: "2017 Car 1" },
            { src: "/images/ourcars/2017-2018_car_12.jpg", alt: "2017 Car 2" },
        ],
    },
    {
        year: "2016-2017",
        text: "After overcoming some challenges at the competition, we were able to complete a successful run around the full track.",
        images: [
            { src: "/images/ourcars/2016-2017_car_13.jpg", alt: "2016 Car" },
        ],
    },
    {
        year: "2015-2016",
        text: "",
        links: [
            { href: "https://mechse.illinois.edu/news/eco-concept-car-team-advances-world-championship", label: "EcoConcept advances to the Driver's World Championship!" },
            { href: "https://mechse.illinois.edu/news/world-travels-re-energize-illini-ecoconcept-car-team", label: "Our adventures at the Shell Driver's World Championship!" },
        ],
        images: [
            { src: "/images/ourcars/2015-2016_car_14.jpg", alt: "2015 Car 1" },
            { src: "/images/ourcars/2015-2016_car_15.jpg", alt: "2015 Car 2" },
        ],
    },
    {
        year: "2014-2015",
        text: "The car faced some challenges during the competition, including steering and brake issues. However, we were thrilled to have the opportunity to be interviewed by Jay Leno.",
        images: [
            { src: "/images/ourcars/2014-2015_car_16.jpg", alt: "2014 Car" },
        ],
    },
    {
        year: "2013-2014",
        text: "Despite having to switch from a hydrogen fuel cell to a gasoline engine just before the competition, we adapted and finished in 5th place.",
        images: [
            { src: "/images/ourcars/2013-2014_car_17.jpg", alt: "2013 Car" },
        ],
    },
    {
        year: "2012-2013",
        text: "Secured 2nd place in the hydrogen fuel cell category with an impressive efficiency of 11 miles/kWh.",
        images: [
            { src: "/images/ourcars/2012-2013_car_18.png", alt: "2012 Car" },
        ],
    },
    {
        year: "2011-2012",
        text: "2012 was our first year competing, and since then we have been continually improving. This year, we placed first in the hydrogen fuel cell category with an efficiency of 18 miles/kWh.",
        links: [
            { href: "https://mechse.illinois.edu/news/eco-marathon-team-brings-home-first-place-trophy", label: "Eco-Marathon team brings home first-place trophy!" },
        ],
        images: [],
        video: "https://www.youtube.com/embed/KSJPjoQTk_w",
    },
];

export default function Cars() {
    const timelineRef = useRef(null);
    const wrapperRef = useRef(null);
    const progressFillRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const timeline = timelineRef.current;
        const wrapper = wrapperRef.current;

        if (!timeline || !wrapper) return;

        // Disable horizontal scroll on mobile
        const isMobile = window.innerWidth < 768;
        if (isMobile) return;

        const panels = timeline.querySelectorAll(".tl-panel");
        const panelArray = Array.from(panels);
        if (panelArray.length === 0) return;

        const totalWidth = panelArray.length * window.innerWidth;

        // Horizontal scroll timeline
        const mainTl = gsap.timeline({
            scrollTrigger: {
                trigger: wrapper,
                pin: true,
                scrub: 0.8,
                start: "top top",
                end: () => `+=${totalWidth * 0.5}`,
                onUpdate: (self) => {
                    // Progress bar
                    if (progressFillRef.current) {
                        progressFillRef.current.style.width = `${self.progress * 100}%`;
                    }
                    // Active dot
                    const newIndex = Math.round(self.progress * (panelArray.length - 1));
                    setActiveIndex(newIndex);
                },
            },
        });

        mainTl.to(timeline, {
            x: -totalWidth + window.innerWidth,
            ease: "none",
        });

        return () => {
            ScrollTrigger.getAll().forEach((t) => t.kill());
        };
    }, []);

    const hasVisualContent = (item) => item.images.length > 0 || item.video;

    return (
        <div>
            {/* Hero banner */}
            <div className="gradient-overlay">
                <Image
                    src="/images/contacts/classiccarcropped.jpg"
                    alt="Classic Car"
                    width={5000}
                    height={500}
                />
            </div>

            {/* Section header */}
            <div className="section-header">
                <h2 className="section-title">OUR CARS</h2>
            </div>
            <div className="flex text-center lg:flex-row lg:py-6 lg:px-4 space-y-8 md:space-y-0 md:space-x-12 text-sm lg:text-2xl mx-3 sm:mx-6 md:mx-12 lg:mx-20 lg:mb-10 lg:mt-10 my-5">
                <p>
                    Explore the evolution of our car designs over the years. We take great pride in the dedication and
                    innovation of our business and technical teams, which have driven every step of our journey.
                    From EV1 and EV2 to our current project, EV3, we&apos;re continually advancing.
                </p>
            </div>

            {/* Horizontal scroll timeline */}
            <div ref={wrapperRef} className="tl-wrapper">

                {/* Unified top progress bar with year labels + dots */}
                <div className="tl-topbar">
                    <div className="tl-topbar-labels">
                        {yearData.map((item, i) => (
                            <div
                                key={item.year}
                                className={`tl-topbar-item ${i <= activeIndex ? 'tl-topbar-item-active' : ''} ${i === activeIndex ? 'tl-topbar-item-current' : ''}`}
                            >
                                <span className="tl-topbar-year">{item.year}</span>
                                <div className="tl-topbar-dot" />
                            </div>
                        ))}
                    </div>
                    <div className="tl-topbar-track">
                        <div className="tl-topbar-fill" ref={progressFillRef} />
                    </div>
                </div>

                {/* Panels */}
                <div ref={timelineRef} className="tl-track">
                    {yearData.map((item, i) => {
                        const hasVisuals = hasVisualContent(item);
                        const imageCount = item.images.length;

                        return (
                            <div className="tl-panel" key={item.year}>
                                <div className={`tl-card ${!hasVisuals ? 'tl-card-text-only' : ''} ${imageCount === 1 ? 'tl-card-single-img' : ''}`}>

                                    {/* Image side — only render if there are images or video */}
                                    {hasVisuals && (
                                        <div className={`tl-images ${imageCount === 1 ? 'tl-images-single' : ''} ${imageCount === 2 ? 'tl-images-double' : ''} ${imageCount >= 3 ? 'tl-images-multi' : ''}`}>
                                            {item.images.length > 0 ? (
item.images.map((img, j) => {
                                                    // Check if this is a video file
                                                    const isVideo = img.src.endsWith('.mp4') || img.src.endsWith('.webm') || img.src.endsWith('.ogg');

                                                    if (isVideo) {
                                                        return (
                                                            <video
                                                                key={j}
                                                                autoPlay
                                                                loop
                                                                muted
                                                                playsInline
                                                                preload="auto"
                                                                className={`tl-video-inline ${imageCount === 1 ? 'tl-img-single' : ''} ${imageCount === 2 ? 'tl-img-double' : ''} ${imageCount >= 3 ? 'tl-img-multi' : ''}`}
                                                                onLoadedData={(e) => {
                                                                    e.target.play().catch(err => console.log('Video autoplay failed:', err));
                                                                }}
                                                            >
                                                                <source src={img.src} type="video/mp4" />
                                                                Your browser does not support the video tag.
                                                            </video>
                                                        );
                                                    }

                                                    return (
                                                        <Image
                                                            key={j}
                                                            src={img.src}
                                                            alt={img.alt}
                                                            width={600}
                                                            height={450}
                                                            className={`tl-img ${imageCount === 1 ? 'tl-img-single' : ''} ${imageCount === 2 ? 'tl-img-double' : ''} ${imageCount >= 3 ? 'tl-img-multi' : ''}`}
                                                        />
                                                    );
                                                })
                                            ) : item.video ? (
                                                <div className="tl-video">
                                                    <iframe
                                                        width="100%"
                                                        height="100%"
                                                        src={item.video}
                                                        title="YouTube video"
                                                        frameBorder="0"
                                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                        allowFullScreen
                                                    />
                                                </div>
                                            ) : null}
                                        </div>
                                    )}

                                    {/* Text side */}
                                    <div className={`tl-text-block ${!hasVisuals ? 'tl-text-block-centered' : ''}`}>
                                        <h2 className="tl-year">{item.year}</h2>
                                        {item.text && (
                                            <p className="tl-desc">{item.text}</p>
                                        )}
                                        {item.links && item.links.map((link, k) => (
                                            <a
                                                key={k}
                                                href={link.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="tl-link"
                                            >
                                                {link.label}
                                            </a>
                                        ))}
                                    </div>

                                </div>
                            </div>
                        );
                    })}
                </div>



            </div>
        </div>
    );
}