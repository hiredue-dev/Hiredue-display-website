"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { HowWeDoItSection } from "./defualt";
import DimmedCard from "./dimmedCard";




function TimeLineCardVertical({ events,className }: { events: HowWeDoItSection[],className:string }) {
	const containerRef = useRef<HTMLOListElement | null>(null);

	useEffect(() => {
		if (!containerRef.current) return;

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
		<div className={className}>
		<ol
			ref={containerRef}
			className="relative space-y-8 before:absolute before:-ml-px before:h-full before:w-0.5 before:rounded-full before:bg-gray-200 dark:before:bg-gray-700"
		>

		<div className="w-fit ml-3 text-center text-md h-fit
		font-semibold sm:text-2xl">Hire Due</div>

			{
				events.map((event, idx) => (
					<li key={idx} className="relative -ms-1.5 flex rounded-full items-start gap-4">

						<span className="block w-3 h-3 rounded-full bg-brand/70 opacity-30"></span>

						<DimmedCard heading={event.heading} description={event.description} className="mt-2"></DimmedCard>

					</li>
				))
			}

		<div className="w-fit ml-3 text-center text-md h-fit
		font-semibold sm:text-2xl">Hired You</div>

		</ol>
		</div>
	);
}





export default TimeLineCardVertical;

