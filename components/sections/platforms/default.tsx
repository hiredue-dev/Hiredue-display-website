import { ReactNode } from "react";

import { siteConfig } from "@/config/site";

import Figma from "@/public/logos/figma";
import React from "@/public/logos/react";
import ShadcnUi from "@/public/logos/shadcn-ui";
import Tailwind from "@/public/logos/tailwind";
import TypeScript from "@/public/logos/typescript";
import { Badge } from "../../ui/badge";
import Logo from "../../ui/logo";
import { Section } from "../../ui/section";
import Macos from "@/public/logos/macos";
import Windows from "@/public/logos/windows";
import Linux from "@/public/logos/linux";

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
      Last updated: {"5th oct 2025"}
    </Badge>
  ),
  logos = [
    <Logo key="figma" image={Figma} name="Figma" />,
    <Logo key="react" image={React} name="React" version="19.1.1" />,
    <Logo
      key="typescript"
      image={TypeScript}
      name="TypeScript"
      version="5.9.2"
    />,
    <Logo
      key="macos"
      image={Macos}
      name="Macos"
      version="5.9+"
    />,
    <Logo
      key="windows"
      image={Windows}
      name="Windows"
      version="7.0+"
    />,
    <Logo
      key="linux"
      image={Linux}
      name="Linux"
			badge="new"
    />,
    <Logo
      key="shadcn"
      image={ShadcnUi}
      name="Shadcn/ui"
      version="2.10.0"
      badge="New"
    />,
    <Logo
      key="tailwind"
      image={Tailwind}
      name="Tailwind"
      version="4.1"
      badge="New"
    />,
  ],
  className,
}: PlatformsProps) {
  return (
    <Section className={className}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-8 text-center">
        <div className="flex flex-col items-center gap-6">
          {badge !== false && badge}
          <h2 className="text-md font-semibold sm:text-2xl">{title}</h2>
        </div>
        {logos !== false && logos.length > 0 && (
          <div className="flex flex-wrap lg:animate-marquee items-center justify-center gap-8">
					{logos}
          </div>
        )}
      </div>
    </Section>
  );
}
