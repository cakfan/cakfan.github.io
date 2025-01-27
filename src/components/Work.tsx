export default function Work() {
  return (
    <section
      id="work"
      className="flex min-h-screen w-full items-center justify-center"
    >
      <div className="flex w-full flex-col gap-4 px-10 md:w-1/2 md:px-0">
        <h2 className="border-none text-2xl font-bold lg:text-6xl">
          💻What I Do?
        </h2>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>
            <span className="font-bold">Next.js</span>: Building scalable and
            performant web applications
          </li>
          <li>
            <span className="font-bold">React</span>: Creating dynamic user
            interfaces
          </li>
          <li>
            <span className="font-bold">TypeScript</span>: Writing reliable,
            maintainable code
          </li>
          <li>
            <span className="font-bold">TailwindCSS</span>: Designing sleek,
            responsive UI
          </li>
        </ul>
      </div>
    </section>
  );
}
