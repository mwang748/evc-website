/**
 * One entry per school year, newest first.
 *
 * `id` is the anchor target the year-chip bar links to.
 * Image `width`/`height` are the files' real intrinsic pixel dimensions — next/image
 * needs them to pick a source, and getting them wrong is what squashed the portrait
 * shots in the old layout. Re-check with `sips -g pixelWidth -g pixelHeight <file>`
 * if you swap a photo.
 *
 * Every entry has `text`, `links` and `images` so the renderer never has to guard for
 * a missing field. Three entries are deliberately odd and the layout handles each:
 *   2020-2021  no images at all (COVID year)
 *   2015-2016  no text — two news links carry the entry
 *   2011-2012  no images, one YouTube embed
 */
export const yearData = [
    {
        id: "2025-2026",
        year: "2025-2026",
        text: "We competed with EV2, passing technical inspection at Shell-Eco and running four laps on the track! EV3 is being prototyped and designed.",
        links: [],
        images: [
            { src: "/images/ourcars/2025-2026_car1.jpeg", alt: "EV2 on the competition track", width: 1200, height: 900 },
            { src: "/images/ourcars/2025-2026_car_work.jpeg", alt: "Members working on the car", width: 1200, height: 1600 },
            { src: "/images/ourcars/2025-2026_car_work2.jpeg", alt: "Members working on the car at competition", width: 1200, height: 900 },
            {
                src: "/images/ourcars/car_running.mp4",
                alt: "EV2 running a lap",
                poster: "/images/ourcars/car_running_poster.jpg",
                width: 1200,
                height: 675,
            },
        ],
    },
    {
        id: "2024-2025",
        year: "2024-2025",
        text: "We raced with EV2 again this year while still designing EV3, and passed the technical inspection at Shell-Eco!",
        links: [],
        images: [
            { src: "/images/ourcars/work_on_car_1.JPG", alt: "Members working on the car in the garage", width: 1200, height: 800 },
            { src: "/images/ourcars/work_on_car_2.JPG", alt: "Members assembling components", width: 1200, height: 800 },
            { src: "/images/ourcars/team_comp_photo_2024_2025.JPG", alt: "Team photo after passing technical inspection", width: 1200, height: 800 },
        ],
    },
    {
        id: "2023-2024",
        year: "2023-2024",
        text: "Initial design sketches of our upcoming car, EV3, laying the groundwork for this year's build. The completed EV2, used in last year's competition.",
        links: [],
        images: [
            { src: "/images/ourcars/2023-2024_car_1.jpg", alt: "Hand sketch of the EV3 concept", width: 768, height: 521 },
            { src: "/images/ourcars/2023-2024_car_2.jpg", alt: "CAD model of the EV3 body", width: 888, height: 671 },
            { src: "/images/ourcars/2023-2024_car_3.jpg", alt: "The completed EV2", width: 768, height: 576 },
        ],
    },
    {
        id: "2022-2023",
        year: "2022-2023",
        text: "Autonomous testing setup from last year's development phase.",
        links: [],
        images: [
            { src: "/images/ourcars/2022-2023_car_4.jpg", alt: "Autonomous testing hardware", width: 768, height: 576 },
            { src: "/images/ourcars/2022-2023_car_5.jpg", alt: "Autonomous testing setup on the bench", width: 768, height: 576 },
        ],
    },
    {
        id: "2021-2022",
        year: "2021-2022",
        text: "Our team competed with updates to the electrical systems and additions to the mechanical systems.",
        links: [],
        images: [
            { src: "/images/ourcars/2021-2022_car_6.jpg", alt: "The 2021 car", width: 768, height: 432 },
        ],
    },
    {
        id: "2020-2021",
        year: "2020-2021",
        text: "Eco-Marathon 2020 took a break for COVID, but we're ready to come back stronger!",
        links: [],
        images: [],
    },
    {
        id: "2019-2020",
        year: "2019-2020",
        text: "Loading up the car, excited and ready for the competition.",
        links: [],
        images: [
            { src: "/images/ourcars/2019-2020_car_7.jpg", alt: "Loading the car for competition", width: 768, height: 384 },
        ],
    },
    {
        id: "2018-2019",
        year: "2018-2019",
        text: "The vehicle's body is similar to the 2017-2018 design, but the chassis has been extensively revamped. Changes include a redesigned rear section for better subsystem mounting, improved front end geometry for increased stiffness, and the use of lighter core materials. Electronics were upgraded with more efficient BLDC motors and an advanced battery management system.",
        links: [],
        images: [
            { src: "/images/ourcars/2018-2019_car_8.jpeg", alt: "The 2018 car", width: 768, height: 576 },
            { src: "/images/ourcars/2018-2019_car_9.jpeg", alt: "The 2018 car chassis", width: 768, height: 576 },
            { src: "/images/ourcars/2018-2019_car_10.jpg", alt: "The 2018 car at competition", width: 768, height: 576 },
        ],
    },
    {
        id: "2017-2018",
        year: "2017-2018",
        text: "This is our first year transitioning to the battery electric category with a brand-new body, chassis, battery, and custom motor controller.",
        links: [],
        images: [
            { src: "/images/ourcars/2017-2018_car_11.jpg", alt: "The 2017 car", width: 768, height: 576 },
            { src: "/images/ourcars/2017-2018_car_12.jpg", alt: "The 2017 car at competition", width: 768, height: 576 },
        ],
    },
    {
        id: "2016-2017",
        year: "2016-2017",
        text: "After overcoming some challenges at the competition, we were able to complete a successful run around the full track.",
        links: [],
        images: [
            { src: "/images/ourcars/2016-2017_car_13.jpg", alt: "The 2016 car", width: 500, height: 281 },
        ],
    },
    {
        id: "2015-2016",
        year: "2015-2016",
        text: "",
        links: [
            {
                href: "https://mechse.illinois.edu/news/eco-concept-car-team-advances-world-championship",
                label: "EcoConcept advances to the Driver's World Championship!",
            },
            {
                href: "https://mechse.illinois.edu/news/world-travels-re-energize-illini-ecoconcept-car-team",
                label: "Our adventures at the Shell Driver's World Championship!",
            },
        ],
        images: [
            { src: "/images/ourcars/2015-2016_car_14.jpg", alt: "The 2015 car", width: 300, height: 300 },
            { src: "/images/ourcars/2015-2016_car_15.jpg", alt: "The 2015 car at competition", width: 960, height: 720 },
        ],
    },
    {
        id: "2014-2015",
        year: "2014-2015",
        text: "The car faced some challenges during the competition, including steering and brake issues. However, we were thrilled to have the opportunity to be interviewed by Jay Leno.",
        links: [],
        images: [
            { src: "/images/ourcars/2014-2015_car_16.jpg", alt: "The 2014 car", width: 960, height: 720 },
        ],
    },
    {
        id: "2013-2014",
        year: "2013-2014",
        text: "Despite having to switch from a hydrogen fuel cell to a gasoline engine just before the competition, we adapted and finished in 5th place.",
        links: [],
        images: [
            { src: "/images/ourcars/2013-2014_car_17.jpg", alt: "The 2013 car", width: 1200, height: 900 },
        ],
    },
    {
        id: "2012-2013",
        year: "2012-2013",
        text: "Secured 2nd place in the hydrogen fuel cell category with an impressive efficiency of 11 miles/kWh.",
        links: [],
        images: [
            { src: "/images/ourcars/2012-2013_car_18.png", alt: "The 2012 car", width: 378, height: 239 },
        ],
    },
    {
        id: "2011-2012",
        year: "2011-2012",
        text: "2012 was our first year competing, and since then we have been continually improving. This year, we placed first in the hydrogen fuel cell category with an efficiency of 18 miles/kWh.",
        links: [
            {
                href: "https://mechse.illinois.edu/news/eco-marathon-team-brings-home-first-place-trophy",
                label: "Eco-Marathon team brings home first-place trophy!",
            },
        ],
        images: [],
        embed: "https://www.youtube.com/embed/KSJPjoQTk_w",
    },
];

/** Short label for the year-chip bar: "2025-2026" -> "2025-26". */
export function chipLabel(year) {
    const [start, end] = year.split("-");
    return `${start}-${end.slice(2)}`;
}
