import { ReactNode } from "react";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import { Button, type ButtonProps } from "../../ui/button";
import Glow from "../../ui/glow";
import { Section } from "../../ui/section";
import { ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input"

interface CTAButtonProps {
  href: string;
  text: string;
  variant?: ButtonProps["variant"];
  icon?: ReactNode;
  iconRight?: ReactNode;
}

interface CTAProps {
  title?: string;
  description?: string;
  buttons?: CTAButtonProps[] | false;
  className?: string;
}

export default function CTA({
  title = "Get Early Access",
  description = "Be among the first to experience the future of job applications. Join thousands of professionals already on our waitlist.",
  buttons = [
    {
      href: siteConfig.getStartedUrl,
      text: "Get Early Access",
      variant: "default",
      iconRight: <ArrowRight className="ml-2 h-4 w-4" />,
    },
  ],
  className,
}: CTAProps) {
  return (
    <Section className={cn("group relative overflow-hidden", className)}>
      <div className="max-w-container relative z-10 mx-auto flex flex-col items-center gap-6 text-center sm:gap-8">
        <h2 className="max-w-[640px] text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
          {title}
        </h2>
        <div className="max-w-2xl text-muted-foreground">{description}</div>
        {buttons !== false && buttons.length > 0 && (
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Input type="email" placeholder="Enter your email for early access and offers" className="min-w-85 h-10 px-4 py-2 glass-3" />
            {buttons.map((button, index) => (
              <Button 
                key={index}
                variant={button.variant || "default"}
                size="lg"
                asChild
              >
                <a href={button.href}>
                  {button.icon}
                  {button.text}
                  {button.iconRight}
                </a>

              </Button>
            ))}
          </div>
        )}
      </div>
      <div className="absolute top-0 left-0 h-full w-full translate-y-[1rem] opacity-80 transition-all duration-500 ease-in-out group-hover:translate-y-[-2rem] group-hover:opacity-100">
        <Glow variant="bottom" />
      </div>
    </Section>
  );
}
