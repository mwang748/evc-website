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
          width={2048}
          height={1035}
          priority
          sizes="100vw"
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
        width={2048}
        height={701}
        sizes="100vw"
        style={{ objectFit: "cover" }}
      />
      <div className="p-10 mb-12">
        <header className="font-semibold text-xl lg:text-3xl">
          WHY JOIN OUR TEAM?
        </header>
        <p className="pt-5 pb-16 text-sm lg:text-lg">
          Joining EV Concept will give you a unique, hands-on experience through
          the process of designing and building a car, as we design and make the
          whole car ourselves. We also let members choose projects to specialize
          in, allowing for a deeper understanding of key components and
          increased responsibility within the team.
          <br></br>
          Through EV Concept, many of our club alumni have gained the technical
          and career skills they needed to join elite tech companies after they
          graduated. If you&apos;re interested in getting personal mentorship in the
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

// "use client";

// import React from "react";
// import "../styles/homepage.css"
// export default function Home() {
//   return (
//     <div className="bg-gray-900 min-h-screen">

//       {/* Hero Section */}
//       <div className="hero-section">
//         <div className="circuit-bg absolute inset-0 z-0"></div>

//         <img
//           src="/images/homepage/sunsetcar.JPG"
//           alt="Sunset Car"
//           className="hero-image"
//         />

//         <div className="hero-overlay"></div>

//         <div className="hero-content">
//           <h1 className="electric-title text-6xl md:text-7xl lg:text-8xl font-black leading-tight mb-4">
//             ILLINI
//             <br />
//             EV
//             <br />
//             CONCEPT
//           </h1>
//           <p className="hero-subtitle text-gray-300 italic text-lg md:text-xl lg:text-2xl">
//             Driving innovation to fuel our electric future.
//           </p>
//         </div>
//       </div>

//       {/* Mission Section */}
//       <div className="mission-card">
//         <div className="mission-section flex flex-col lg:flex-row items-center justify-between p-6 lg:p-12 gap-8">
//           <h2 className="mission-title text-4xl md:text-5xl lg:text-6xl font-bold text-white">
//             OUR <span style={{ color: "#f7931e" }}>MISSION:</span>
//           </h2>
//           <div className="mission-text lg:ml-20 text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl">
//             EV Concept is a team of interdisciplinary engineers dedicated to
//             advancing electric vehicle technology. We research, design and
//             manufacture our own vehicles from scratch for various competitions,
//             most notably being the{" "}
//             <span className="text-blue-400 font-semibold">
//               Shell Eco-Marathon
//             </span>
//             .
//           </div>
//         </div>
//       </div>

//       {/* Car Image Section */}
//       <div className="relative">
//         <img
//           src="/images/homepage/shellecocar.jpg"
//           alt="Shell Eco Car with Flag"
//           className="w-full h-64 md:h-96 lg:h-[500px] object-cover"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
//       </div>

//       {/* Why Join Section */}
//       <div className="max-w-6xl mx-auto px-6 py-16">
//         <div className="glass-card rounded-2xl p-8 md:p-12">
//           <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
//             WHY JOIN <span className="electric-title">OUR TEAM?</span>
//           </h2>

//           <div className="space-y-6 text-gray-300 text-lg leading-relaxed mb-12">
//             <p>
//               Joining EV Concept will give you a unique,{" "}
//               <span className="text-blue-400 font-semibold">
//                 hands-on experience
//               </span>{" "}
//               through the process of designing and building a car, as we design
//               and make the whole car ourselves. We also let members choose
//               projects to specialize in, allowing for a deeper understanding of
//               key components and increased responsibility within the team.
//             </p>

//             <p>
//               Through EV Concept, many of our club alumni have gained the
//               technical and career skills they needed to join{" "}
//               <span className="text-orange-400 font-semibold">
//                 elite tech companies
//               </span>{" "}
//               after they graduated. If you're interested in getting personal
//               mentorship in the mechanical and electrical processes of designing
//               a car as well as first-hand experience in projects to help create
//               the car, join our Discord and follow our Instagram to learn more!
//             </p>
//           </div>

//           <div className="text-center">
//             <a
//               href="https://discord.gg/Db4qpUrdtv"
//               target="_blank"
//               rel="noreferrer"
//               className="cta-button inline-block text-xl font-semibold px-8 py-4 rounded-xl transition-all duration-300 relative z-0"
//             >
//               Join our Discord to get started!
//             </a>
//           </div>
//         </div>

//         {/* Additional floating elements for visual interest */}
//         <div className="floating absolute top-20 right-10 w-4 h-4 bg-blue-400 rounded-full opacity-60 hidden lg:block"></div>
//         <div
//           className="floating absolute bottom-40 left-20 w-3 h-3 bg-orange-400 rounded-full opacity-40 hidden lg:block"
//           style={{ animationDelay: "1s" }}
//         ></div>
//         <div
//           className="floating absolute top-1/2 right-1/4 w-2 h-2 bg-blue-300 rounded-full opacity-50 hidden lg:block"
//           style={{ animationDelay: "2s" }}
//         ></div>
//       </div>
//     </div>
//   );
// }
