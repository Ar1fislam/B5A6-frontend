import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

interface Faq1Props {
  heading?: string;
  items?: FaqItem[];
}

const FAQ = ({
  heading = "Questions about Wallet Nest?",
  items = [
    {
      id: "faq-1",
      question: "Who can use Wallet Nest?",
      answer:
        "Anyone with a mobile device can sign up and use Wallet Nest to manage their digital money. Both individuals and local businesses are welcome.",
    },
    {
      id: "faq-2",
      question: "How do I receive money with Wallet Nest?",
      answer:
        "You can get funds from friends or clients directly into your Wallet Nest account, either by wallet-to-wallet transfer or by sharing your unique QR code.",
    },
    {
      id: "faq-3",
      question: "What if I lose my phone?",
      answer:
        "If your phone is lost or stolen, your funds remain safe. Just log in from a new device using your credentials—our multi-factor security keeps your account protected.",
    },
    {
      id: "faq-4",
      question: "Are all transactions instant?",
      answer:
        "Yes, all wallet transfers and payments made within Wallet Nest are processed immediately, so you never have to wait.",
    },
    {
      id: "faq-5",
      question: "Is there customer support if I run into trouble?",
      answer:
        "Absolutely! Reach out to our Wallet Nest support team anytime via email, phone, or live chat in the app. We’re here to help.",
    },
  ],
}: Faq1Props) => {
  return (
    <section className="py-32">
      <div className="container max-w-3xl mx-auto">
        <h1 className="mb-4 text-3xl font-semibold md:mb-11 md:text-4xl">
          {heading}
        </h1>
        <Accordion type="single" collapsible>
          {items.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="font-semibold hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};


export default FAQ;
