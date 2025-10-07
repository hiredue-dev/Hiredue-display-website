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

function TimeLineCardHorizontal({ events,className }: { events: HowWeDoItSection[] ,className:string}) {
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
        boxShadow: "0 0 12px rgba(96,165,250,0.7)",
        duration: 0.8,
        ease: "power1.inOut",
      }).to([dot, card], {
        opacity: 1,
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
      className="relative flex gap-8 before:absolute before:-mt-px before:h-0.5 before:w-full before:rounded-full before:bg-gray-200 dark:before:bg-gray-700"
    >
        {events.map((event, index) => (
					index % 2==0 ? 
          <li key={index} className="relative -mt-1.5">
          <span className="block w-3 h-3 rounded-full bg-brand/70 opacity-30 shadow-lg shadow-brand"></span>
          <Card className="mt-4 flex flex-col opacity-30 card-anim bg-muted card-anim">
            <CardContent>
              <CardHeader>{event.heading}</CardHeader>
              <CardDescription>{event.description}</CardDescription>
            </CardContent>
          </Card>
          </li>
						:
          <li key={index} className="relative translate-y-[-100%] h-fit card-anim ">
          <Card className="mb-4 flex flex-col opacity-30 card-anim bg-muted">
            <CardContent>
              <CardHeader>{event.heading}</CardHeader>
              <CardDescription>{event.description}</CardDescription>
            </CardContent>
          </Card>
          <span className="block w-3 h-3 rounded-full bg-brand/70 opacity-30 shadow-lg shadow-brand -mb-1.5"></span>
          </li>


        ))}
      </ol>
		</div>
  );
}

export default TimeLineCardHorizontal;
