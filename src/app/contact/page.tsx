import type { Metadata } from "next";
import ContactPageContent from "@/components/pages/contact-page-content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Taufan Fatahillah — open to full-time opportunities and freelance projects.",
};

export default function ContactPage() {
  return <ContactPageContent />;
}
