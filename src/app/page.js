// this is the new home page
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <div className="text-center">
        <header className="text-right pr-8 sm:pr-12 flex flex-col gap-2 absolute z-10 w-full top-24 md:top-56 lg:top-1/4">
          <h2 className="text-[#F7931E] font-semibold text-5xl md:text-6xl lg:text-8xl">
            ILLINI <br />
            EV <br />
            CONCEPT
          </h2>
          <p className="text-white italic text-sm sm:text-xl">
            Driving innovation to fuel our electric future.{" "}
          </p>
        </header>
        <Image
          src="/images/homepage/sunsetcar.JPG"
          alt="sunsetcar"
          width="2000"
          height="2"
          style={{ objectFit: "cover" }}
          className="relative z-0"
        />
      </div>
      <div className="bg-[#F7931E] p-4 flex flex-col lg:flex-row lg:pl-20 lg:pr-20 gap-2 lg:gap-20 h-30 lg:h-60 items-left lg:items-center">
        <h2 className="font-semibold text-2xl lg:text-6xl ">OUR MISSION:</h2>
        <div className="lg:ml-60 text-sm lg:text-xl italic lg:text-right">
          {" "}
          EV Concept is a team of interdisciplinary engineers dedicated to
          advancing electric vehicle technology. We research, design and
          manufacture our own vehicles from scratch for various competitions,
          most notably being the Shell-Eco Marathon.
        </div>
      </div>
      <Image
        src="/images/homepage/shellecocar.jpg"
        alt="carwflag"
        width="2000"
        height="2000"
        style={{ objectFit: "cover" }}
      />
      <div className="p-10 mb-12">
        <header className="font-semibold text-xl sm:text-3xl">
          WHY JOIN OUR TEAM?
        </header>
        <p className="pt-5 pb-16 text-sm sm:text-lg">
          Joining EV Concept will give you a unique, hands-on experience through
          the process of designing and building a car, as we design and make the
          whole car ourselves. We also let members choose projects to specialize
          in, allowing for a deeper understanding of key components and
          increased responsibility within the team.
          <br></br>
          Through EV Concept, many of our club alumni have gained the technical
          and career skills they needed to join elite tech companies after they
          graduated. If you're interested in getting personal mentorship in the
          mechanical and electrical processes of designing a car as well as
          first-hand experience in projects to help create the car, join our
          Discord and follow our Instagram to learn more!
        </p>
        <a
          href="https://discord.gg/Db4qpUrdtv"
          target="_blank"
          rel="noreferrer"
          className="text-center text-sm sm:text-xl p-3 border-4 border-solid border-[#F7931E]
                    shadow-custom-inset-2 hover:shadow-custom-inset"
          style={{
            WebkitTransition: "ease-out 0.4s",
            transition: "ease-out 0.4s",
          }}
        >
          Join our Discord to get started!
        </a>
      </div>
    </div>
  );
}
