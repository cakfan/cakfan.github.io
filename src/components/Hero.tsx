import { assets } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

export default function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-screen w-full items-center justify-center"
    >
      <div className="flex w-full flex-col gap-4 md:w-1/2">
        <h1 className="text-2xl font-bold lg:text-6xl">
          Hi, I&apos;m Taufan F.
        </h1>
        <span className="text-lead">
          I&apos;m a freelance developer based in Jember, Indonesia, passionate
          about crafting fast, modern, and user-friendly web applications.
        </span>
        <div className="flex">
          <Link
            className={buttonVariants({ variant: "link", size: "icon" })}
            href="https://linkedin.com/in/cakfan"
            target="_blank"
          >
            <Image src={assets.linkedin} alt="LinkedIn" className="w-6" />
          </Link>
          <Link
            className={buttonVariants({ variant: "link", size: "icon" })}
            href="https://instagram.com/withcakfan"
            target="_blank"
          >
            <Image
              src={assets.instagram}
              alt="LinkedIn"
              className="w-6 dark:invert"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
