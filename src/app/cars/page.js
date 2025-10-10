import './cars.css';
import Image from "next/image";

export default function Cars() {
    return (
        <div>
            <div className='gradient-overlay'>
                <Image
                    src="/images/contacts/classiccarcropped.jpg"
                    alt="Classic Car"
                    width={5000}
                    height={500}
                />
            </div>
            <div className="section-header">
                <h2 className="section-title">OUR CARS</h2>
            </div>
            <div className="section-body">
                <p>
                    Explore the evolution of our car designs over the years. We take great pride in the dedication and
                    innovation of our business and technical teams, which have driven every step of our journey.
                    From EV1 and EV2 to our current project, EV3, we’re continually advancing.
                </p>
            </div>

            <div className="timeline">

                <div className="container left-container">
                    <div className="timeline-circle">
                        <Image
                            src="/images/ourcars/orange-circle.png"
                            alt="orange circle"
                            width="50"
                            height="50"
                        />
                    </div>
                    <div className="text-box">
                        <h1 className="orange-header">2023-2024</h1>
                        <p>Initial design sketches of our upcoming car, EV3, laying the groundwork for this year’s build. </p>
                        <span className="left-container-arrow"></span>

                        <div className="pb-4 pt-8">
                            <Image
                                src="/images/ourcars/2023-2024_car_1.jpg"
                                alt="our_car_1"
                                width="500"
                                height="500"
                            />
                        </div>

                        <div className="pb-8 pt-4">
                            <Image
                                src="/images/ourcars/2023-2024_car_2.jpg"
                                alt="our_car_2"
                                width="500"
                                height="500"
                            />
                        </div>

                        <p>The completed EV2, used in last year’s competition. </p>

                        <div className="pb-4 pt-4">
                            <Image
                                src="/images/ourcars/2023-2024_car_3.jpg"
                                alt="our_car_3"
                                width="500"
                                height="500"
                            />
                        </div>
                    </div>
                </div>

                <div className="container right-container">
                    <div className="timeline-circle">
                        <Image
                            src="/images/ourcars/orange-circle.png"
                            alt="orange circle"
                            width="50"
                            height="50"
                        />
                    </div>
                    <div className="text-box">
                        <h1 className="orange-header">2022-2023</h1>
                        <p>Autonomous testing setup from last year’s development phase. </p>
                        <span className="right-container-arrow"></span>

                        <div className="pb-4 pt-4">
                            <Image
                                src="/images/ourcars/2022-2023_car_4.jpg"
                                alt="our_car_4"
                                width="500"
                                height="500"
                            />
                        </div>

                        <div className="pb-4 pt-4">
                            <Image
                                src="/images/ourcars/2022-2023_car_5.jpg"
                                alt="our_car_5"
                                width="500"
                                height="500"
                            />
                        </div>
                    </div>
                </div>

                <div className="container left-container">
                    <div className="timeline-circle">
                        <Image
                            src="/images/ourcars/orange-circle.png"
                            alt="orange circle"
                            width="50"
                            height="50"
                        />
                    </div>
                    <div className="text-box">
                        <h1 className="orange-header">2021-2022</h1>
                        <p>Our team competed with updates to the electrical systems and additions to the mechanical systems on last year’s car. </p>
                        <span className="left-container-arrow"></span>
                        <div className="pb-4 pt-8">
                            <Image
                                src="/images/ourcars/2021-2022_car_6.jpg"
                                alt="our_car_1"
                                width="500"
                                height="500"
                            />
                        </div>
                    </div>
                </div>

                <div className="container right-container">
                    <div className="timeline-circle">
                        <Image
                            src="/images/ourcars/orange-circle.png"
                            alt="orange circle"
                            width="50"
                            height="50"
                        />
                    </div>
                    <div className="text-box">
                        <h1 className="orange-header">2020-2021</h1>
                        <p>Eco-Marathon 2020 took a break for COVID, but we’re ready to come back stronger next year! </p>
                        <span className="right-container-arrow"></span>
                    </div>
                </div>

                <div className="container left-container">
                    <div className="timeline-circle">
                        <Image
                            src="/images/ourcars/orange-circle.png"
                            alt="orange circle"
                            width="50"
                            height="50"
                        />
                    </div>
                    <div className="text-box">
                        <h1 className="orange-header">2019-2020</h1>
                        <p>Loading up the car, excited and ready for the competition.</p>
                        <span className="left-container-arrow"></span>

                        <div className="pb-4 pt-8">
                            <Image
                                src="/images/ourcars/2019-2020_car_7.jpg"
                                alt="our_car_1"
                                width="500"
                                height="500"
                            />
                        </div>
                    </div>
                </div>

                <div className="container right-container">
                    <div className="timeline-circle">
                        <Image
                            src="/images/ourcars/orange-circle.png"
                            alt="orange circle"
                            width="50"
                            height="50"
                        />
                    </div>
                    <div className="text-box">
                        <h1 className="orange-header">2018-2019</h1>
                        <p>
                            The vehicle’s body is similar to the 2017-2018 design, but the chassis has been
                            extensively revamped. Changes include a redesigned rear section for better
                            subsystem mounting, improved front end geometry for increased stiffness, and
                            the use of lighter core materials. Electronics were upgraded with more efficient
                            BLDC motors and an advanced battery management system.
                        </p>
                        <span className="right-container-arrow"></span>

                        <div className="pb-4 pt-4">
                            <Image
                                src="/images/ourcars/2018-2019_car_8.jpeg"
                                alt="our_car_4"
                                width="500"
                                height="500"
                            />
                        </div>

                        <div className="pb-4 pt-4">
                            <Image
                                src="/images/ourcars/2018-2019_car_9.jpeg"
                                alt="our_car_5"
                                width="500"
                                height="500"
                            />
                        </div>

                        <div className="pb-4 pt-4">
                            <Image
                                src="/images/ourcars/2018-2019_car_10.jpg"
                                alt="our_car_5"
                                width="500"
                                height="500"
                            />
                        </div>
                    </div>
                </div>

                <div className="container left-container">
                    <div className="timeline-circle">
                        <Image
                            src="/images/ourcars/orange-circle.png"
                            alt="orange circle"
                            width="50"
                            height="50"
                        />
                    </div>
                    <div className="text-box">
                        <h1 className="orange-header">2017-2018</h1>
                        <p>
                            This is our first year transitioning to the battery electric category with a brand-new body,
                            chassis, battery, and custom motor controller. We’re excited about the progress and
                            looking forward to future improvements.
                        </p>
                        <span className="left-container-arrow"></span>

                        <div className="pb-4 pt-8">
                            <Image
                                src="/images/ourcars/2017-2018_car_11.jpg"
                                alt="our_car_1"
                                width="500"
                                height="500"
                            />
                        </div>

                        <div className="pb-8 pt-4">
                            <Image
                                src="/images/ourcars/2017-2018_car_12.jpg"
                                alt="our_car_2"
                                width="500"
                                height="500"
                            />
                        </div>
                    </div>
                </div>

                <div className="container right-container">
                    <div className="timeline-circle">
                        <Image
                            src="/images/ourcars/orange-circle.png"
                            alt="orange circle"
                            width="50"
                            height="50"
                        />
                    </div>
                    <div className="text-box">
                        <h1 className="orange-header">2016-2017</h1>
                        <p>After overcoming some challenges at the competition, we were able to complete a successful run around the full track. </p>
                        <span className="right-container-arrow"></span>

                        <div className="pb-4 pt-4">
                            <Image
                                src="/images/ourcars/2016-2017_car_13.jpg"
                                alt="our_car_4"
                                width="500"
                                height="500"
                            />
                        </div>
                    </div>
                </div>

                <div className="container left-container">
                    <div className="timeline-circle">
                        <Image
                            src="/images/ourcars/orange-circle.png"
                            alt="orange circle"
                            width="50"
                            height="50"
                        />
                    </div>
                    <div className="text-box">
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
                        <span className="left-container-arrow"></span>

                        <div className="pb-4 pt-8">
                            <Image
                                src="/images/ourcars/2015-2016_car_14.jpg"
                                alt="our_car_1"
                                width="500"
                                height="500"
                            />
                        </div>

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

                        <div className="pb-4 pt-4">
                            <Image
                                src="/images/ourcars/2015-2016_car_15.jpg"
                                alt="our_car_3"
                                width="500"
                                height="500"
                            />
                        </div>
                    </div>
                </div>

                <div className="container right-container">
                    <div className="timeline-circle">
                        <Image
                            src="/images/ourcars/orange-circle.png"
                            alt="orange circle"
                            width="50"
                            height="50"
                        />
                    </div>
                    <div className="text-box">
                        <h1 className="orange-header">2014-2015</h1>
                        <p>
                            The car faced some challenges during the competition, including steering and brake issues.
                            However, we were thrilled to have the opportunity to be interviewed by Jay Leno.
                        </p>
                        <span className="right-container-arrow"></span>

                        <div className="pb-4 pt-4">
                            <Image
                                src="/images/ourcars/2014-2015_car_16.jpg"
                                alt="our_car_4"
                                width="500"
                                height="500"
                            />
                        </div>
                    </div>
                </div>

                <div className="container left-container">
                    <div className="timeline-circle">
                        <Image
                            src="/images/ourcars/orange-circle.png"
                            alt="orange circle"
                            width="50"
                            height="50"
                        />
                    </div>
                    <div className="text-box">
                        <h1 className="orange-header">2013-2014</h1>
                        <p>Despite having to switch from a hydrogen fuel cell to a gasoline engine just before the competition, we adapted and finished in 5th place. </p>
                        <span className="left-container-arrow"></span>

                        <div className="pb-4 pt-8">
                            <Image
                                src="/images/ourcars/2013-2014_car_17.jpg"
                                alt="our_car_1"
                                width="500"
                                height="500"
                            />
                        </div>
                    </div>
                </div>

                <div className="container right-container">
                    <div className="timeline-circle">
                        <Image
                            src="/images/ourcars/orange-circle.png"
                            alt="orange circle"
                            width="50"
                            height="50"
                        />
                    </div>
                    <div className="text-box">
                        <h1 className="orange-header">2012-2013</h1>
                        <p>Secured 2nd place in the hydrogen fuel cell category with an impressive efficiency of 11 miles/kWh.</p>
                        <span className="right-container-arrow"></span>

                        <div className="pb-4 pt-4">
                            <Image
                                src="/images/ourcars/2012-2013_car_18.png"
                                alt="our_car_4"
                                width="500"
                                height="500"
                            />
                        </div>
                    </div>
                </div>

                <div className="container left-container">
                    <div className="timeline-circle">
                        <Image
                            src="/images/ourcars/orange-circle.png"
                            alt="orange circle"
                            width="50"
                            height="50"
                        />
                    </div>
                    <div className="text-box">
                        <h1 className="orange-header">2011-2012</h1>
                        <p>
                            2012 was our first year competing, and since then we have been continually improving.
                            This year, we placed first in the hydrogen fuel cell category with an efficiency of 18 miles/kWh.
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
                        <span className="left-container-arrow"></span>

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
        </div>


    );
}
