"use client";

import Image from "next/image";
import ProjectDialog from "./ProjectDialog";
import { assets } from "@/assets";
import Link from "next/link";

export default function Project() {
  return (
    <section
      id="project"
      className="flex min-h-screen w-full items-center justify-center"
    >
      <div className="flex w-full flex-col gap-4 md:w-1/2">
        <h2 className="border-none text-2xl font-bold lg:text-6xl">
          📂Projects I&apos;m Proud Of
        </h2>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>
            <ProjectDialog
              trigger={<span className="font-bold">DawahPlay</span>}
              image={
                <Image
                  src={assets.dawahPlay}
                  alt="DawahPlay"
                  className="w-full"
                />
              }
              demo="https://dawahplay.vercel.app"
              title="DawahPlay"
              description="A platform for streaming Islamic lectures without ads,
            leveraging Next.js and TailwindCSS for a smooth user experience."
            />{" "}
            – A platform for streaming Islamic lectures without ads, leveraging
            Next.js and TailwindCSS for a smooth user experience.
          </li>
          <li>
            <ProjectDialog
              trigger={<span className="font-bold">DelokFilm</span>}
              image={
                <Image
                  src={assets.delokFilm}
                  alt="DelokFilm"
                  className="w-full"
                />
              }
              demo="https://delokfilm.vercel.app"
              title="DelokFilm"
              description="A platform dedicated to Asian movies and dramas,
            providing a curated and immersive browsing experience for fans."
            />{" "}
            – A platform dedicated to Asian movies and dramas, providing a
            curated and immersive browsing experience for fans.
          </li>
          <li>
            <Link
              href="https://introvesia.com"
              target="_blank"
              className="font-bold"
            >
              Introvesia.com
            </Link>{" "}
            – Volunteered to develop a platform that promotes personal growth
            and self-reflection.
          </li>
          <li>
            <Link
              href="https://www.jabirdev.com"
              target="_blank"
              className="font-bold"
            >
              Jabirdev.com
            </Link>{" "}
            – Developed modern web solutions for clients, enhancing online
            presence and functionality.
          </li>
        </ul>
      </div>
    </section>
  );
}
