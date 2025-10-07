"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

import { HowWeDoItSection } from "./defualt";
import DimmedCard from "./dimmedCard";

function TimeLineCardHorizontal({ events}: { events: HowWeDoItSection[] }) {
  const containerRef = useRef<HTMLOListElement|null>(null);

  useEffect(() => {
    if (!containerRef || !containerRef.current) return;

    const items = containerRef.current.querySelectorAll("li");

    const tl = gsap.timeline({ repeatDelay: 0.5 });
    items.forEach((item) => {
      const dot = item.querySelector("span");
      const card = item.querySelector(".card-anim");

      tl.to([dot, card], {
        opacity: 1,
        duration: 0.8,
        ease: "power1.inOut",
      }).to([dot, card], {
        opacity: 1,
        duration: 0.8,
        ease: "power1.inOut",
      });
    });
  }, []);

  return (
		<div className="hidden md:flex justify-center translate-y-full h-[200%] items-start mb-60">

		<div className="w-fit mr-3 text-center text-md h-fit translate-y-[-50%]
		font-semibold sm:text-2xl ">Hire Due</div>

    <ol
		ref={containerRef}
      className="relative flex gap-8 before:absolute before:-mt-px before:h-0.5 before:w-full before:rounded-full before:bg-gray-200 dark:before:bg-gray-700"
    >
        {events.map((event, index) => (
					index % 2==0 ? 

          <li key={index} className="relative -mt-1.5">
          <span className="block w-3 h-3 rounded-full bg-brand/70 opacity-30"></span>
					<DimmedCard heading={event.heading} description={event.description} className="mt-4"/>
          </li>

						:

          <li key={index} className="relative translate-y-[-100%] h-fit card-anim ">
					<DimmedCard heading={event.heading} description={event.description} className="mb-4"/>
          <span className="block w-3 h-3 rounded-full bg-brand/70 opacity-30 -mb-1.5"></span>
          </li>


        ))}
      </ol>

		<div className="w-fit ml-3 text-center text-md h-fit translate-y-[-50%]
		font-semibold sm:text-2xl ">Hired You</div>

		</div>
  );
}

export default TimeLineCardHorizontal;
