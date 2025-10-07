"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import {
	Card,
	CardDescription,
	CardContent,
	CardHeader,
} from "@/components/ui/card";
import { HowWeDoItSection } from "./defualt";




function TimeLineCardVertical({ events,className }: { events: HowWeDoItSection[],className:string }) {
	const containerRef = useRef<HTMLUListElement | null>(null);

	useEffect(() => {
		if (!containerRef.current) return;

		const items = containerRef.current.querySelectorAll("li");

		const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });
		items.forEach((item) => {
			const dot = item.querySelector("span");
			const card = item.querySelector(".card-anim");

			tl.to([dot, card], {
				opacity: 1,
				boxShadow: "0 0 10px rgba(96,165,250,0.7)",
				duration: 0.8,
				ease: "power1.inOut",
			}).to([dot, card], {
				opacity: 0.3,
				boxShadow: "0 0 0px rgba(0,0,0,0)",
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
			{
				events.map((event, idx) => (
					<li key={idx} className="relative -ms-1.5 flex items-start gap-4">
						<span className="block w-3 h-3 rounded-full bg-brand/70 opacity-30 shadow-lg shadow-brand"></span>
						<Card className="mt-4 flex flex-col opacity-30 card-anim">
							<CardContent>
								<CardHeader>{event.heading}</CardHeader>
								<CardDescription>{event.description}</CardDescription>
							</CardContent>
						</Card>

						<div className="-mt-2">
						</div>
					</li>
				))
			}
		</ol>
		</div>
	);
}





export default TimeLineCardVertical;

