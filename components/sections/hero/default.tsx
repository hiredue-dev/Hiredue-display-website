"use client"
import { ArrowRightIcon } from "lucide-react";
import { ReactNode } from "react";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import Github from "@/public/logos/github";
import { Badge } from "../../ui/badge";
import { Button, type ButtonProps } from "../../ui/button";
import Glow from "../../ui/glow";
import { Mockup, MockupFrame } from "../../ui/mockup";
import Screenshot from "../../ui/screenshot";
import { Section } from "../../ui/section";
import { imageUrls } from "@/config/images";
import { useContent } from "@/components/contexts/content-provider";


interface HeroButtonProps {
  href: string;
  text: string;
  variant?: ButtonProps["variant"];
  icon?: ReactNode;
  iconRight?: ReactNode;
}

interface HeroProps {
  title?: string;
  description?: string;
  mockup?: ReactNode | false;
  badge?: ReactNode | false;
  buttons?: HeroButtonProps[] | false;
  className?: string;
	textAlignment?:"left" | "center";
}

export default function Hero({
  title = "title",
  description = "description",
  mockup = (
    <Screenshot
      srcLight={imageUrls.hero.banner.light}
      srcDark={imageUrls.hero.banner.dark}
      alt="HireDue app screenshot"
      width={1248}
      height={765}
      className="w-full"
    />
  ),
  badge = (
    <Badge variant="outline" className="animate-appear">
      <span className="text-muted-foreground">
			title
      </span>
      <a href={siteConfig.getStartedUrl} className="flex items-center gap-1">
				trigger
        <ArrowRightIcon className="size-3" />
      </a>
    </Badge>
  ),
  // buttons = [
  //   {
  //     href: siteConfig.getStartedUrl,
  //     text: "Get Started",
  //     variant: "default",
  //   },
  //   {
  //     href: siteConfig.links.github,
  //     text: "Github",
  //     variant: "glow",
  //     icon: <Github className="mr-2 size-4" />,
  //   },
  // ],
  className,
	textAlignment = "left"
}: HeroProps) {

	const {HeroTitle,HeroSubTitle,HeroSubTrigger,HeroTitlDescription} = useContent()

  return (
    <Section
      className={cn(
        "fade-bottom overflow-hidden pb-0 sm:pb-0 md:pb-0",
        className,
      )}
    >
      <div className="max-w-container mx-auto flex flex-col gap-12 pt-4 sm:gap-24">
        <div className={`flex flex-col 
					items-${textAlignment ==="left"? "start": "center"} gap-6 
					text-${textAlignment} sm:gap-12`}>
			<Badge variant="outline" className="animate-appear">
				<span className="text-muted-foreground">
				{HeroSubTitle}
				</span>
				<a href={siteConfig.getStartedUrl} className="flex items-center gap-1">
				{HeroSubTrigger}
					<ArrowRightIcon className="size-3" />
				</a>
			</Badge>

          <h1 className="animate-appear from-foreground to-foreground dark:to-muted-foreground relative z-10 inline-block bg-linear-to-r bg-clip-text text-2xl leading-tight font-semibold text-balance text-transparent drop-shadow-2xl sm:text-6xl sm:leading-tight md:text-6xl md:leading-tight">
            {HeroTitle}
          </h1>
          <p className="text-md animate-appear text-muted-foreground relative z-10 max-w-[740px] font-medium text-balance opacity-0 delay-100 sm:text-xl">
            {HeroTitlDescription}
          </p>
          {/* {buttons !== false && buttons.length > 0 && ( */}
          {/*   <div className="animate-appear relative z-10 flex justify-center gap-4 opacity-0 delay-300"> */}
          {/*     {buttons.map((button, index) => ( */}
          {/*       <Button */}
          {/*         key={index} */}
          {/*         variant={button.variant || "default"} */}
          {/*         size="lg" */}
          {/*         asChild */}
          {/*       > */}
          {/*         <a href={button.href}> */}
          {/*           {button.icon} */}
          {/*           {button.text} */}
          {/*           {button.iconRight} */}
          {/*         </a> */}
          {/*       </Button> */}
          {/*     ))} */}
          {/*   </div>)} */}
          {mockup !== false && (
            <div className="relative w-full pt-16">
						<div className="group h-fit">
              <MockupFrame
                className="animate-appear absolute opacity-0 delay-700 transform -rotate-15 group-hover:translate-x-[-10rem] group-hover:-rotate-5 duration-500"
                size="small"
              >
                <Mockup
                  type="responsive"
                  className="bg-background/90 w-full rounded-xl border-0"
                >
                  {mockup}
                </Mockup>
              </MockupFrame>
              <MockupFrame
                className="animate-appear absolute opacity-0 delay-700 transform -rotate-15 translate-x-[4rem] md:translate-x-[10rem] translate-y-[2rem] group-hover:-rotate-5 duration-500"
                size="small"
              >
                <Mockup
                  type="responsive"
                  className="bg-background/90 w-full rounded-xl border-0"
                >
                  {mockup}
                </Mockup>
              </MockupFrame>
              <MockupFrame
                className="animate-appear opacity-0 delay-700 transform -rotate-15 translate-x-[8rem] md:translate-x-[20rem] translate-y-[4rem] group-hover:translate-x-[35rem] group-hover:-rotate-5 duration-500"
                size="small"
              >
                <Mockup
                  type="responsive"
                  className="bg-background/90 w-full rounded-xl border-0"
                >
                  {mockup}
                </Mockup>
              </MockupFrame>
						</div>
              <Glow
                variant="top"
                className="animate-appear-zoom opacity-0 delay-1000"
              />
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}
