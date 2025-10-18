"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import "./cars.css";
import Image from "next/image";

function Timeline() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const sections =
      sectionRef.current.querySelectorAll(".scroll-section").length;

    const totalScrollWidth = (sections - 1) * window.innerWidth;

    const animation = gsap.to(sectionRef.current, {
      x: () => -totalScrollWidth,
      ease: "none",
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top top",
        end: () => `+=${totalScrollWidth}`,
        scrub: 0.6,
        pin: true,
        anticipatePin: 1,
      },
    });

    return () => {
      animation.kill();
    };
  }, []);

  return (
    <section className="scroll-section-outer">
      <div ref={triggerRef}>
        <div ref={sectionRef} className="scroll-section-inner">
          <div className="scroll-section">
            <h1 className="orange-header flex justify-center items-center">
              2023-2024
            </h1>
            <p className="text-center">
              Initial design sketches of our upcoming car, EV3, laying the
              groundwork for this year’s build.{" "}
            </p>
            <div className="image-row">
              <Image
                src="/images/ourcars/2023-2024_car_1.jpg"
                alt="our_car_1"
                width="500"
                height="500"
              />
              <Image
                src="/images/ourcars/2023-2024_car_2.jpg"
                alt="our_car_2"
                width="500"
                height="500"
              />
            </div>

            <p>The completed EV2, used in last year’s competition. </p>
            <div className="image-row">
              <Image
                src="/images/ourcars/2023-2024_car_3.jpg"
                alt="our_car_3"
                width="500"
                height="500"
              />
            </div>
          </div>

          <div className="scroll-section">
            <h1 className="orange-header">2022-2023</h1>
            <p>Autonomous testing setup from last year’s development phase. </p>
            <div className="image-row">
              <Image
                src="/images/ourcars/2022-2023_car_4.jpg"
                alt="our_car_4"
                width="500"
                height="500"
              />
              <Image
                src="/images/ourcars/2022-2023_car_5.jpg"
                alt="our_car_5"
                width="500"
                height="500"
              />
            </div>
          </div>

          <div className="scroll-section">
            <h1 className="orange-header">2021-2022</h1>
            <p>
              Our team competed with updates to the electrical systems and
              additions to the mechanical systems on last year’s car.{" "}
            </p>
            <div className="image-row">
              <Image
                src="/images/ourcars/2021-2022_car_6.jpg"
                alt="our_car_1"
                width="500"
                height="500"
              />
            </div>
          </div>

          <div className="scroll-section">
            <h1 className="orange-header">2020-2021</h1>
            <p>
              Eco-Marathon 2020 took a break for COVID, but we’re ready to come
              back stronger next year!{" "}
            </p>
          </div>

          <div className="scroll-section">
            <h1 className="orange-header">2019-2020</h1>
            <p>Loading up the car, excited and ready for the competition.</p>
            <div className="image-row">
              <Image
                src="/images/ourcars/2019-2020_car_7.jpg"
                alt="our_car_1"
                width="500"
                height="500"
              />
            </div>
          </div>

          <div className="scroll-section">
            <h1 className="orange-header">2018-2019</h1>
            <p>
              The vehicle’s body is similar to the 2017-2018 design, but the
              chassis has been extensively revamped. Changes include a
              redesigned rear section for better subsystem mounting, improved
              front end geometry for increased stiffness, and the use of lighter
              core materials. Electronics were upgraded with more efficient BLDC
              motors and an advanced battery management system.
            </p>
            <div className="image-row">
              <Image
                src="/images/ourcars/2018-2019_car_8.jpeg"
                alt="our_car_4"
                width="500"
                height="500"
              />
              <Image
                src="/images/ourcars/2018-2019_car_9.jpeg"
                alt="our_car_5"
                width="500"
                height="500"
              />
              <Image
                src="/images/ourcars/2018-2019_car_10.jpg"
                alt="our_car_5"
                width="500"
                height="500"
              />
            </div>
          </div>

          <div className="scroll-section">
            <h1 className="orange-header">2017-2018</h1>
            <p>
              This is our first year transitioning to the battery electric
              category with a brand-new body, chassis, battery, and custom motor
              controller. We’re excited about the progress and looking forward
              to future improvements.
            </p>
            <div className="image-row">
              <Image
                src="/images/ourcars/2017-2018_car_11.jpg"
                alt="our_car_1"
                width="500"
                height="500"
              />
              <Image
                src="/images/ourcars/2017-2018_car_12.jpg"
                alt="our_car_2"
                width="500"
                height="500"
              />
            </div>
          </div>

          <div className="scroll-section">
            <h1 className="orange-header">2016-2017</h1>
            <p>
              After overcoming some challenges at the competition, we were able
              to complete a successful run around the full track.{" "}
            </p>
            <div className="image-row">
              <Image
                src="/images/ourcars/2016-2017_car_13.jpg"
                alt="our_car_4"
                width="500"
                height="500"
              />
            </div>
          </div>

          <div className="scroll-section">
            <h1 className="orange-header">2015-2016</h1>
            <p>
              <a
                href="https://mechse.illinois.edu/news/eco-concept-car-team-advances-world-championship"
                target="_blank"
                rel="noopener noreferrer"
                className="link-highlight"
              >
                EcoConcept advances to the Driver’s World Championship!
              </a>
            </p>

            <p>
              <a
                href="https://mechse.illinois.edu/news/world-travels-re-energize-illini-ecoconcept-car-team"
                target="_blank"
                rel="noopener noreferrer"
                className="link-highlight"
              >
                Our adventures at the Shell Driver’s World Championship!
              </a>
            </p>
            <div className="image-row">
              <Image
                src="/images/ourcars/2015-2016_car_14.jpg"
                alt="our_car_1"
                width="500"
                height="500"
              />
              <Image
                src="/images/ourcars/2015-2016_car_15.jpg"
                alt="our_car_3"
                width="500"
                height="500"
              />
            </div>
          </div>

          <div className="scroll-section">
            <h1 className="orange-header">2014-2015</h1>
            <p>
              The car faced some challenges during the competition, including
              steering and brake issues. However, we were thrilled to have the
              opportunity to be interviewed by Jay Leno.
            </p>
            <div className="image-row">
              <Image
                src="/images/ourcars/2014-2015_car_16.jpg"
                alt="our_car_4"
                width="500"
                height="500"
              />
            </div>
          </div>

          <div className="scroll-section">
            <h1 className="orange-header">2013-2014</h1>
            <p>
              Despite having to switch from a hydrogen fuel cell to a gasoline
              engine just before the competition, we adapted and finished in 5th
              place.{" "}
            </p>
            <div className="image-row">
              <Image
                src="/images/ourcars/2013-2014_car_17.jpg"
                alt="our_car_1"
                width="500"
                height="500"
              />
            </div>
          </div>

          <div className="scroll-section">
            <h1 className="orange-header">2012-2013</h1>
            <p>
              Secured 2nd place in the hydrogen fuel cell category with an
              impressive efficiency of 11 miles/kWh.
            </p>
            <div className="image-row">
              <Image
                src="/images/ourcars/2012-2013_car_18.png"
                alt="our_car_4"
                width="500"
                height="500"
              />
            </div>
          </div>

          <div className="scroll-section">
            <h1 className="orange-header">2011-2012</h1>
            <p>
              2012 was our first year competing, and since then we have been
              continually improving. This year, we placed first in the hydrogen
              fuel cell category with an efficiency of 18 miles/kWh.
            </p>
            <p>
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
                width="420"
                height="230"
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
    </section>
  );
}

export default Timeline;
