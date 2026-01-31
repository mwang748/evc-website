import './cars.css';
import Image from "next/image";
import Timeline from './timeline';

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
            <div className="flex text-center lg:flex-row lg:py-6 lg:px-4 space-y-8 md:space-y-0 md:space-x-12 text-sm lg:text-2xl mx-3 sm:mx-6 md:mx-12 lg:mx-20 lg:mb-10 lg:mt-10 my-5">
                <p>
                    Explore the evolution of our car designs over the years. We take great pride in the dedication and
                    innovation of our business and technical teams, which have driven every step of our journey.
                    From EV1 and EV2 to our current project, EV3, we're continually advancing.
                </p>
            </div>
            
            <Timeline />

        </div>


    );
}
