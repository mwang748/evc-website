"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import "./cars.css";

gsap.registerPlugin(ScrollTrigger);

function Timeline() {
  const timelineRef = useRef(null);
  const wrapperRef = useRef(null);

  const years = [
    "2023-2024", "2022-2023", "2021-2022", "2020-2021", "2019-2020",
    "2018-2019", "2017-2018", "2016-2017", "2015-2016", "2014-2015",
    "2013-2014", "2012-2013", "2011-2012"
  ];

  useEffect(() => {
    const timeline = timelineRef.current;
    const wrapper = wrapperRef.current;
    const timelineBar = document.querySelector('.timeline-bar-container');

    if (!timeline || !wrapper) return;

    // Check if mobile - disable horizontal scroll on mobile
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      // On mobile, just show the timeline bar without animation
      if (timelineBar) {
        timelineBar.style.opacity = '0';
        timelineBar.style.visibility = 'hidden';
      }
      return;
    }

    const yearContainers = timeline.querySelectorAll(".year-container");
    const yearArray = Array.from(yearContainers);

    if (yearArray.length === 0) return;

    // Calculate total width - each year is 100vw
    const totalWidth = window.innerWidth * yearArray.length;

    // Create main timeline for scrolling
    const mainTl = gsap.timeline({
      scrollTrigger: {
        trigger: wrapper,
        pin: true,
        scrub: 1,
        start: "top top",
        end: () => `+=${totalWidth * 0.2}`,
        onUpdate: (self) => {
          const currentX = Math.abs(gsap.getProperty(timeline, "x"));
          const currentYearIndex = Math.min(
            Math.floor(currentX / window.innerWidth),
            yearArray.length - 1
          );

          // Update active year dot
          document.querySelectorAll('.year-dot').forEach((dot, index) => {
            if (index === currentYearIndex) {
              dot.classList.add('active');
            } else {
              dot.classList.remove('active');
            }
          });
        },
        onEnter: () => {
          if (timelineBar) {
            timelineBar.style.opacity = '1';
            timelineBar.style.visibility = 'visible';
          }
        },
        onLeave: () => {
          if (timelineBar) {
            timelineBar.style.opacity = '0';
            timelineBar.style.visibility = 'hidden';
          }
        },
        onEnterBack: () => {
          if (timelineBar) {
            timelineBar.style.opacity = '1';
            timelineBar.style.visibility = 'visible';
          }
        },
        onLeaveBack: () => {
          if (timelineBar) {
            timelineBar.style.opacity = '0';
            timelineBar.style.visibility = 'hidden';
          }
        }
      }
    });

    mainTl.to(timeline, {
      x: -totalWidth + window.innerWidth,
      ease: "none"
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div>
      {/* Timeline Bar with Year Dots */}
      <div className="timeline-bar-container">
        <div className="timeline-bar-line"></div>
        <div className="timeline-bar-dots">
          {years.map((year, index) => (
            <div key={year} className={`year-dot ${index === 0 ? 'active' : ''}`}>
              <span className="year-label">{year}</span>
            </div>
          ))}
        </div>
      </div>

      <div ref={wrapperRef} className="timeline-wrapper">
        <div ref={timelineRef} className="timeline-container">

          {/* 2023-2024 */}
          <div className="year-container">
            <h1 className="year-header">2023-2024</h1>
            <div className="content-container">
              <p className="year-text">
                Initial design sketches of our upcoming car, EV3, laying the groundwork for this year's build.
              </p>
              <div className="image-row">
                <Image src="/images/ourcars/2023-2024_car_1.jpg" alt="Design 1" width={400} height={300} className="timeline-image" />
                <Image src="/images/ourcars/2023-2024_car_2.jpg" alt="Design 2" width={400} height={300} className="timeline-image" />
              </div>
              <p className="year-text">The completed EV2, used in last year's competition.</p>
              <Image src="/images/ourcars/2023-2024_car_3.jpg" alt="EV2" width={500} height={375} className="timeline-image" />
            </div>
          </div>

          {/* 2022-2023 */}
          <div className="year-container">
            <h1 className="year-header">2022-2023</h1>
            <div className="content-container">
              <p className="year-text">Autonomous testing setup from last year's development phase.</p>
              <div className="image-row">
                <Image src="/images/ourcars/2022-2023_car_4.jpg" alt="Testing 1" width={400} height={300} className="timeline-image" />
                <Image src="/images/ourcars/2022-2023_car_5.jpg" alt="Testing 2" width={400} height={300} className="timeline-image" />
              </div>
            </div>
          </div>

          {/* 2021-2022 */}
          <div className="year-container">
            <h1 className="year-header">2021-2022</h1>
            <div className="content-container">
              <p className="year-text">
                Our team competed with updates to the electrical systems and additions to the mechanical systems.
              </p>
              <Image src="/images/ourcars/2021-2022_car_6.jpg" alt="2021 Car" width={500} height={375} className="timeline-image" />
            </div>
          </div>

          {/* 2020-2021 */}
          <div className="year-container">
            <h1 className="year-header">2020-2021</h1>
            <div className="content-container">
              <p className="year-text">
                Eco-Marathon 2020 took a break for COVID, but we're ready to come back stronger!
              </p>
            </div>
          </div>

          {/* 2019-2020 */}
          <div className="year-container">
            <h1 className="year-header">2019-2020</h1>
            <div className="content-container">
              <p className="year-text">Loading up the car, excited and ready for the competition.</p>
              <Image src="/images/ourcars/2019-2020_car_7.jpg" alt="2019 Car" width={500} height={375} className="timeline-image" />
            </div>
          </div>

          {/* 2018-2019 */}
          <div className="year-container">
            <h1 className="year-header">2018-2019</h1>
            <div className="content-container">
              <p className="year-text">
                The vehicle's body is similar to the 2017-2018 design, but the chassis has been extensively revamped.
                Changes include a redesigned rear section for better subsystem mounting, improved front end geometry for
                increased stiffness, and the use of lighter core materials. Electronics were upgraded with more efficient
                BLDC motors and an advanced battery management system.
              </p>
              <div className="image-row">
                <Image src="/images/ourcars/2018-2019_car_8.jpeg" alt="2018 Car 1" width={300} height={225} className="timeline-image" />
                <Image src="/images/ourcars/2018-2019_car_9.jpeg" alt="2018 Car 2" width={300} height={225} className="timeline-image" />
                <Image src="/images/ourcars/2018-2019_car_10.jpg" alt="2018 Car 3" width={300} height={225} className="timeline-image" />
              </div>
            </div>
          </div>

          {/* 2017-2018 */}
          <div className="year-container">
            <h1 className="year-header">2017-2018</h1>
            <div className="content-container">
              <p className="year-text">
                This is our first year transitioning to the battery electric category with a brand-new body, chassis,
                battery, and custom motor controller.
              </p>
              <div className="image-row">
                <Image src="/images/ourcars/2017-2018_car_11.jpg" alt="2017 Car 1" width={400} height={300} className="timeline-image" />
                <Image src="/images/ourcars/2017-2018_car_12.jpg" alt="2017 Car 2" width={400} height={300} className="timeline-image" />
              </div>
            </div>
          </div>

          {/* 2016-2017 */}
          <div className="year-container">
            <h1 className="year-header">2016-2017</h1>
            <div className="content-container">
              <p className="year-text">
                After overcoming some challenges at the competition, we were able to complete a successful run around the full track.
              </p>
              <Image src="/images/ourcars/2016-2017_car_13.jpg" alt="2016 Car" width={500} height={375} className="timeline-image" />
            </div>
          </div>

          {/* 2015-2016 */}
          <div className="year-container">
            <h1 className="year-header">2015-2016</h1>
            <div className="content-container">
              <p className="year-text">
                <a href="https://mechse.illinois.edu/news/eco-concept-car-team-advances-world-championship"
                   target="_blank" rel="noopener noreferrer" className="timeline-link">
                  EcoConcept advances to the Driver's World Championship!
                </a>
              </p>
              <p className="year-text">
                <a href="https://mechse.illinois.edu/news/world-travels-re-energize-illini-ecoconcept-car-team"
                   target="_blank" rel="noopener noreferrer" className="timeline-link">
                  Our adventures at the Shell Driver's World Championship!
                </a>
              </p>
              <div className="image-row">
                <Image src="/images/ourcars/2015-2016_car_14.jpg" alt="2015 Car 1" width={400} height={300} className="timeline-image" />
                <Image src="/images/ourcars/2015-2016_car_15.jpg" alt="2015 Car 2" width={400} height={300} className="timeline-image" />
              </div>
            </div>
          </div>

          {/* 2014-2015 */}
          <div className="year-container">
            <h1 className="year-header">2014-2015</h1>
            <div className="content-container">
              <p className="year-text">
                The car faced some challenges during the competition, including steering and brake issues.
                However, we were thrilled to have the opportunity to be interviewed by Jay Leno.
              </p>
              <Image src="/images/ourcars/2014-2015_car_16.jpg" alt="2014 Car" width={500} height={375} className="timeline-image" />
            </div>
          </div>

          {/* 2013-2014 */}
          <div className="year-container">
            <h1 className="year-header">2013-2014</h1>
            <div className="content-container">
              <p className="year-text">
                Despite having to switch from a hydrogen fuel cell to a gasoline engine just before the competition,
                we adapted and finished in 5th place.
              </p>
              <Image src="/images/ourcars/2013-2014_car_17.jpg" alt="2013 Car" width={500} height={375} className="timeline-image" />
            </div>
          </div>

          {/* 2012-2013 */}
          <div className="year-container">
            <h1 className="year-header">2012-2013</h1>
            <div className="content-container">
              <p className="year-text">
                Secured 2nd place in the hydrogen fuel cell category with an impressive efficiency of 11 miles/kWh.
              </p>
              <Image src="/images/ourcars/2012-2013_car_18.png" alt="2012 Car" width={500} height={375} className="timeline-image" />
            </div>
          </div>

          {/* 2011-2012 */}
          <div className="year-container">
            <h1 className="year-header">2011-2012</h1>
            <div className="content-container">
              <p className="year-text">
                2012 was our first year competing, and since then we have been continually improving.
                This year, we placed first in the hydrogen fuel cell category with an efficiency of 18 miles/kWh.
              </p>
              <p className="year-text">
                <a href="https://mechse.illinois.edu/news/eco-marathon-team-brings-home-first-place-trophy"
                   target="_blank" rel="noopener noreferrer" className="timeline-link">
                  Eco-Marathon team brings home first-place trophy!
                </a>
              </p>
              <div className="video-container">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/KSJPjoQTk_w"
                  title="YouTube video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Timeline;
