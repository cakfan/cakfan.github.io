import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import ContactPageContent from "@/components/pages/contact-page-content";

export const metadata: Metadata = createPageMetadata({
  title: "Contact",
  description:
    "Get in touch with Taufan Fatahillah — open to full-time opportunities and interesting projects.",
  path: "/contact",
  keywords: ["Taufan Fatahillah", "Contact", "Software Engineer", "Indonesia"],
  type: "profile",
});

export default function ContactPage() {
  return <ContactPageContent />;
}
