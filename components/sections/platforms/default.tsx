"use client";

import { ReactNode, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


import Figma from "@/public/logos/figma";
import ReactLogo from "@/public/logos/react";
import ShadcnUi from "@/public/logos/shadcn-ui";
import Tailwind from "@/public/logos/tailwind";
import TypeScript from "@/public/logos/typescript";
import Macos from "@/public/logos/macos";
import Windows from "@/public/logos/windows";
import Linux from "@/public/logos/linux";

import { Badge } from "../../ui/badge";
import Logo from "../../ui/logo";
import { Section } from "../../ui/section";

gsap.registerPlugin(ScrollTrigger);

interface PlatformsProps {
  title?: string;
  badge?: ReactNode | false;
  logos?: ReactNode[] | false;
  className?: string;
}

export default function Platforms({
  title = "Supported Platforms",
  badge = (
    <Badge variant="outline" className="border-brand/30 text-brand">
      Last updated: {"5th Oct 2025"}
    </Badge>
  ),
  logos = [
    <Logo key="figma" image={Figma} name="Figma" />,
    <Logo key="react" image={ReactLogo} name="React" version="19.1.1" />,
    <Logo key="typescript" image={TypeScript} name="TypeScript" version="5.9.2" />,
    <Logo key="macos" image={Macos} name="MacOS" version="5.9+" />,
    <Logo key="windows" image={Windows} name="Windows" version="7.0+" />,
    <Logo key="linux" image={Linux} name="Linux" badge="New" />,
    <Logo key="shadcn" image={ShadcnUi} name="Shadcn/ui" version="2.10.0" />,
    <Logo key="tailwind" image={Tailwind} name="Tailwind" version="4.1" />,
  ],
  className,
}: PlatformsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const track = trackRef.current;
      if (!track) return;

      track.innerHTML += track.innerHTML;

      const scrollTween = gsap.to(track, {
        xPercent: -50,
        repeat: -1,
        ease: "linear",
        duration: 20,
      });
			if (track){
				const handleMouseEnter = () => scrollTween.pause();
				const handleMouseLeave = () => scrollTween.resume();

				track.addEventListener("mouseenter", handleMouseEnter);
				track.addEventListener("mouseleave", handleMouseLeave);

				return () => {
					track.removeEventListener("mouseenter", handleMouseEnter);
					track.removeEventListener("mouseleave", handleMouseLeave);
				};
			}
		}, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <Section ref={containerRef} className={className}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-8 text-center overflow-hidden relative">
        {/* Header */}
        <div className="flex flex-col items-center gap-6 z-10">
          {badge !== false && badge}
          <h2 className="text-md font-semibold sm:text-2xl">{title}</h2>
        </div>

        {/* Fading edges */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-neutral-950 via-neutral-950/80 to-transparent z-10"></div>
        <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-neutral-950 via-neutral-950/80 to-transparent z-10"></div>

        {/* track */}
        <div
          ref={trackRef}
          className="flex gap-8 items-center justify-center whitespace-nowrap will-change-transform"
        >
          {logos}
        </div>
      </div>
    </Section>
  );
}
