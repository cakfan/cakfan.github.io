import { ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t py-8">
      <div className="container-section flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Taufan Fatahillah. All rights
          reserved.
        </p>
        <a
          href="#home"
          className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          Back to top
          <ArrowUp size={14} />
        </a>
      </div>
    </footer>
  );
}
