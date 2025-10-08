import Link from "next/link";
import { ReactNode } from "react";

import { siteConfig } from "@/config/site";
// import { useContent } from "@/components/contexts/content-provider";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../ui/accordion";
import { Section } from "../../ui/section";

interface FAQItemProps {
  question: string;
  answer: ReactNode;
  value?: string;
}

interface FAQProps {
  title?: string;
  items?: FAQItemProps[] | false;
  className?: string;
}

export default function FAQ({
  
  title = "Questions and Answers",
  items = [
    {
      question:
        "Is my data safe?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[640px] text-balance">
            100%. Everything runs locally on your machine — no cloud storage, no third-party access. Your credentials and personal info stay with you, always.
          </p>
        </>
      ),
    },
    {
      question: "When do I get notified?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[600px]">
            You’ll get alerts as soon as your application status changes, or when a new opportunity matches your profile or only get notified when anything major happens like getting a response from a recruiter. Notifications are fully customizable — you’re always in control.
          </p>
        </>
      ),
    },
    {
      question:
        "Is it available on the phone?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[580px]">
            Absolutely! The HireDue mobile app lets you view your dashboard, track progress, and receive instant job alerts wherever you are.
          </p>
        </>
      ),
    },
    {
      question: 'Do I need to pay to get started?',
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[580px]">
            Nope — HireDue’s beta is completely free. Once launched, you’ll have flexible pricing options, including a free plan for core automation features.
          </p>
        </>
      ),
    },
    {
      question: "Which platforms does HireDue work with?",
      answer: (
        <p className="text-muted-foreground mb-4 max-w-[580px]">
          HireDue seamlessly integrates with LinkedIn, Naukri, Gmail, and major company portals — with more platforms being added every month.
        </p>
      ),
    },
    
  ],
  className,
}: FAQProps) {

  // const { faqQuestion1,faqQuestion2,faqQuestion3,faqQuestion4,faqQuestion5, faqAnswer1, faqAnswer2, faqAnswer3, faqAnswer4,faqAnswer5 } = useContent()
  

  return (
    <Section className={className}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-8">
        <h2 className="text-center text-3xl font-semibold sm:text-5xl">
          {title}
        </h2>
        {items !== false && items.length > 0 && (
          <Accordion type="single" collapsible className="w-full max-w-[800px]">
            {items.map((item, index) => (
              <AccordionItem
                key={index}
                value={item.value || `item-${index + 1}`}
              >
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        )}
      </div>
    </Section>
  );
}
