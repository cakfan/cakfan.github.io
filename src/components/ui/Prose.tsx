export default function Prose({ text }: { text: string }) {
  return (
    <>
      {text.split(/\n{2,}/).map((paragraph, i) => (
        <p
          key={i}
          className="text-lg text-muted-foreground leading-[1.75] whitespace-pre-line text-pretty mb-5 last:mb-0"
        >
          {paragraph}
        </p>
      ))}
    </>
  );
}
