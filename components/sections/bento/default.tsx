import { ReactNode } from "react";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import { Button, type ButtonProps } from "../../ui/button";
// import Glow from "../../ui/glow";
import { Section } from "../../ui/section";
import { ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card";
import Glow from "@/components/ui/glow";

const cardClass = "pl-5 pt-4 rounded-lg shadow-md glass-3 from-brand-foreground/20 to-brand-foreground/0 bg-radial hover:from-brand-foreground/30 transition delay-150 duration-300 ease-in-out hover:to-brand-foreground/0";
// const cardClass = "pl-5 pt-4 rounded-lg shadow-md glass-3 from-brand-foreground/20 to-brand-foreground/0 bg-radial hover:from-brand-foreground/30 hover:to-brand-foreground/0 transition-all duration-3000";
export default function Bento() {
  return (
    <Section className={cn("group relative overflow-hidden")}>
        <div className="max-w-container relative z-10 mx-auto flex flex-col items-center gap-6 text-center sm:gap-8">
        <h2 className="max-w-[640px] text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
            It's all about design quality
        </h2>
        <div className="max-w-3xl text-muted-foreground text-xl">In a world where everybody can vibe-code a new thing overnight, the key is to stand out. Generic-looking shadcn/ui blocks won't help you to get noticed. With HireDue, you can make sure that your design is unique and memorable.</div>
        </div>

        {/* <div className="flex h-full w-full items-center justify-center p-10"> */}
            <div className="grid h-full w-full gap-4 p-3 grid-cols-10 grid-rows-30 rounded-lg shadow-md px-15 py-10">
                <div className={cn("col-span-4 row-span-20", cardClass)}>
                    <h2 className="text-xl font-bold">Design-first</h2>
                    <div className="mt-3 text-muted-foreground max-w-xs">Each block and component is carefully crafted to give a unique look and feel AI would never come up with</div>
                </div>
                <div className={cn("col-span-6 row-span-20", cardClass)}>
                    <h2 className="text-xl font-bold">Made for fast development</h2>
                    <div className="mt-3 text-muted-foreground max-w-lg">With lightweigh code, modern tooling, and best practices, 
                        <br />HireDue is as fast in the browser as it is to build with.</div>
                </div>

                <div className={cn("col-span-6 row-span-10", cardClass)}>
                    <h2 className="text-xl font-bold">The code is yours</h2>
                    <div className="mt-3 text-muted-foreground max-w-lg">With HireDue, the code is yours forever. 
                        <br />Never bother about subscriptions and lock-ins.</div>

                </div>
                <div className={cn("col-span-4 row-span-10", cardClass)}>
                    <h2 className="text-xl font-bold">Top-level performance</h2>
                    <div className="mt-3 text-muted-foreground max-w-sm">Made for static site while avoiding heavy assets, your website will feel snappy and load instantly.</div>
                </div>

                <div className={cn("col-span-4 row-span-10", cardClass)}>
                    <h2 className="text-xl font-bold">Data-agnostic</h2>
                    <div className="mt-3 text-muted-foreground max-w-sm">All the data is separate from the components so you can edit it in seconds or make it dynamic. 
                        <br /> Easily connected to a CMS of your choice.
                    </div>
                </div>
                <div className={cn("col-span-6 row-span-10", cardClass)}>
                    <h2 className="text-xl font-bold">Fights right into your stack</h2>
                    <div className="mt-3 text-muted-foreground max-w-sm">Build your website and product with the same technologies and frameworks. Forget about multiple codebases and unnecessary APIs. 
                        <br /> No extra dependencies, no extra maintainence.
                    </div>
                </div>
            </div>
        {/* </div> */}
  
    </Section>
  );
}
