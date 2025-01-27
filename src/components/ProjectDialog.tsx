"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

export default function ProjectDialog({
  title,
  description,
  demo,
  trigger,
  image,
}: {
  title: string;
  description: string;
  demo: string;
  trigger: React.ReactNode;
  image: React.ReactNode;
}) {
  return (
    <Dialog>
      <DialogTrigger>{trigger}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <div className="w-full">{image}</div>
        <DialogFooter>
          <Link
            href={demo}
            className={buttonVariants({ variant: "default" })}
            target="_blank"
          >
            Demo
          </Link>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
