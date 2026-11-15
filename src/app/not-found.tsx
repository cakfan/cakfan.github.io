import { ArrowLeft } from "lucide-react";
import Container from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="flex min-h-svh items-center">
      <Container className="py-20">
        <p className="label-mono text-muted-foreground">
          <span className="text-accent">404</span>
          <span aria-hidden="true"> / </span>
          Not found
        </p>
        <h1 className="mt-5 max-w-[18ch] text-h1 font-semibold text-foreground">
          Page not found.
        </h1>
        <p className="mt-4 max-w-[46ch] text-base leading-relaxed text-muted-foreground">
          The page you are looking for doesn&apos;t exist or has been moved.
        </p>
        <ButtonLink href="/" className="mt-8">
          <ArrowLeft size={16} strokeWidth={1.75} aria-hidden="true" />
          Back to home
        </ButtonLink>
      </Container>
    </section>
  );
}
