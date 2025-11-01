"use client";
import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import "./cars.css";
import Image from "next/image";

function Timeline() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  const [isReady, setIsReady] = useState(false);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    // Wait for component to be fully mounted
    setIsReady(true);
  }, []);

  useEffect(() => {
    if (!isReady || !sectionRef.current || !triggerRef.current) {
      return;
    }

    let animation;

    const setupAnimation = () => {
      const sections = sectionRef.current.querySelectorAll(".scroll-section");
      const numSections = sections.length;

      if (numSections === 0) {
        console.error("No sections found!");
        return;
      }

      const totalScrollWidth = (numSections - 1) * window.innerWidth;

      // Kill any existing ScrollTriggers
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());

      animation = gsap.to(sectionRef.current, {
        x: -totalScrollWidth,
        ease: "none",
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: () => `+=${totalScrollWidth}`,
          scrub: 0.6,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    };

    // Small delay to ensure everything is rendered
    const timer = setTimeout(setupAnimation, 200);

    return () => {
      clearTimeout(timer);
      if (animation) {
        if (animation.scrollTrigger) {
          animation.scrollTrigger.kill();
        }
        animation.kill();
      }
    };
  }, [isReady]);

  return (
    <section className="scroll-section-outer">
      <div ref={triggerRef}>
        <div ref={sectionRef} className="scroll-section-inner">
          <div className="scroll-section">
            <h1 className="orange-header">2023-2024</h1>
            <div className="content-wrapper">
              <p className="text-description">
                Initial design sketches of our upcoming car, EV3, laying the
                groundwork for this year's build.
              </p>
              <div className="image-row">
                <Image
                  src="/images/ourcars/2023-2024_car_1.jpg"
                  alt="our_car_1"
                  width={400}
                  height={300}
                />
                <Image
                  src="/images/ourcars/2023-2024_car_2.jpg"
                  alt="our_car_2"
                  width={400}
                  height={300}
                />
              </div>

              <p className="text-description">
                The completed EV2, used in last year's competition.
              </p>
              <div className="image-row">
                <Image
                  src="/images/ourcars/2023-2024_car_3.jpg"
                  alt="our_car_3"
                  width={400}
                  height={300}
                />
              </div>
            </div>
          </div>

          <div className="scroll-section">
            <h1 className="orange-header">2022-2023</h1>
            <div className="content-wrapper">
              <p className="text-description">
                Autonomous testing setup from last year's development phase.
              </p>
              <div className="image-row">
                <Image
                  src="/images/ourcars/2022-2023_car_4.jpg"
                  alt="our_car_4"
                  width={400}
                  height={300}
                />
                <Image
                  src="/images/ourcars/2022-2023_car_5.jpg"
                  alt="our_car_5"
                  width={400}
                  height={300}
                />
              </div>
            </div>
          </div>

          <div className="scroll-section">
            <h1 className="orange-header">2021-2022</h1>
            <div className="content-wrapper">
              <p className="text-description">
                Our team competed with updates to the electrical systems and
                additions to the mechanical systems on last year's car.
              </p>
              <div className="image-row">
                <Image
                  src="/images/ourcars/2021-2022_car_6.jpg"
                  alt="our_car_6"
                  width={500}
                  height={375}
                />
              </div>
            </div>
          </div>

          <div className="scroll-section">
            <h1 className="orange-header">2020-2021</h1>
            <div className="content-wrapper">
              <p className="text-description">
                Eco-Marathon 2020 took a break for COVID, but we're ready to
                come back stronger next year!
              </p>
            </div>
          </div>

          <div className="scroll-section">
            <h1 className="orange-header">2019-2020</h1>
            <div className="content-wrapper">
              <p className="text-description">
                Loading up the car, excited and ready for the competition.
              </p>
              <div className="image-row">
                <Image
                  src="/images/ourcars/2019-2020_car_7.jpg"
                  alt="our_car_7"
                  width={500}
                  height={375}
                />
              </div>
            </div>
          </div>

          <div className="scroll-section">
            <h1 className="orange-header">2018-2019</h1>
            <div className="content-wrapper">
              <p className="text-description">
                The vehicle's body is similar to the 2017-2018 design, but the
                chassis has been extensively revamped. Changes include a
                redesigned rear section for better subsystem mounting, improved
                front end geometry for increased stiffness, and the use of
                lighter core materials. Electronics were upgraded with more
                efficient BLDC motors and an advanced battery management system.
              </p>
              <div className="image-row">
                <Image
                  src="/images/ourcars/2018-2019_car_8.jpeg"
                  alt="our_car_8"
                  width={350}
                  height={262}
                />
                <Image
                  src="/images/ourcars/2018-2019_car_9.jpeg"
                  alt="our_car_9"
                  width={350}
                  height={262}
                />
                <Image
                  src="/images/ourcars/2018-2019_car_10.jpg"
                  alt="our_car_10"
                  width={350}
                  height={262}
                />
              </div>
            </div>
          </div>

          <div className="scroll-section">
            <h1 className="orange-header">2017-2018</h1>
            <div className="content-wrapper">
              <p className="text-description">
                This is our first year transitioning to the battery electric
                category with a brand-new body, chassis, battery, and custom
                motor controller. We're excited about the progress and looking
                forward to future improvements.
              </p>
              <div className="image-row">
                <Image
                  src="/images/ourcars/2017-2018_car_11.jpg"
                  alt="our_car_11"
                  width={400}
                  height={300}
                />
                <Image
                  src="/images/ourcars/2017-2018_car_12.jpg"
                  alt="our_car_12"
                  width={400}
                  height={300}
                />
              </div>
            </div>
          </div>

          <div className="scroll-section">
            <h1 className="orange-header">2016-2017</h1>
            <div className="content-wrapper">
              <p className="text-description">
                After overcoming some challenges at the competition, we were
                able to complete a successful run around the full track.
              </p>
              <div className="image-row">
                <Image
                  src="/images/ourcars/2016-2017_car_13.jpg"
                  alt="our_car_13"
                  width={500}
                  height={375}
                />
              </div>
            </div>
          </div>

          <div className="scroll-section">
            <h1 className="orange-header">2015-2016</h1>
            <div className="content-wrapper">
              <p className="text-description">
                <a
                  href="https://mechse.illinois.edu/news/eco-concept-car-team-advances-world-championship"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-highlight"
                >
                  EcoConcept advances to the Driver's World Championship!
                </a>
              </p>

              <p className="text-description">
                <a
                  href="https://mechse.illinois.edu/news/world-travels-re-energize-illini-ecoconcept-car-team"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-highlight"
                >
                  Our adventures at the Shell Driver's World Championship!
                </a>
              </p>
              <div className="image-row">
                <Image
                  src="/images/ourcars/2015-2016_car_14.jpg"
                  alt="our_car_14"
                  width={400}
                  height={300}
                />
                <Image
                  src="/images/ourcars/2015-2016_car_15.jpg"
                  alt="our_car_15"
                  width={400}
                  height={300}
                />
              </div>
            </div>
          </div>

          <div className="scroll-section">
            <h1 className="orange-header">2014-2015</h1>
            <div className="content-wrapper">
              <p className="text-description">
                The car faced some challenges during the competition, including
                steering and brake issues. However, we were thrilled to have the
                opportunity to be interviewed by Jay Leno.
              </p>
              <div className="image-row">
                <Image
                  src="/images/ourcars/2014-2015_car_16.jpg"
                  alt="our_car_16"
                  width={500}
                  height={375}
                />
              </div>
            </div>
          </div>

          <div className="scroll-section">
            <h1 className="orange-header">2013-2014</h1>
            <div className="content-wrapper">
              <p className="text-description">
                Despite having to switch from a hydrogen fuel cell to a gasoline
                engine just before the competition, we adapted and finished in
                5th place.
              </p>
              <div className="image-row">
                <Image
                  src="/images/ourcars/2013-2014_car_17.jpg"
                  alt="our_car_17"
                  width={500}
                  height={375}
                />
              </div>
            </div>
          </div>

          <div className="scroll-section">
            <h1 className="orange-header">2012-2013</h1>
            <div className="content-wrapper">
              <p className="text-description">
                Secured 2nd place in the hydrogen fuel cell category with an
                impressive efficiency of 11 miles/kWh.
              </p>
              <div className="image-row">
                <Image
                  src="/images/ourcars/2012-2013_car_18.png"
                  alt="our_car_18"
                  width={500}
                  height={375}
                />
              </div>
            </div>
          </div>

          <div className="scroll-section">
            <h1 className="orange-header">2011-2012</h1>
            <div className="content-wrapper">
              <p className="text-description">
                2012 was our first year competing, and since then we have been
                continually improving. This year, we placed first in the
                hydrogen fuel cell category with an efficiency of 18 miles/kWh.
              </p>
              <p className="text-description">
                <a
                  href="https://mechse.illinois.edu/news/eco-marathon-team-brings-home-first-place-trophy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-highlight"
                >
                  Eco-Marathon team brings home first-place trophy!
                </a>
              </p>
              <div className="video-container">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/KSJPjoQTk_w"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Timeline;