interface AboutProps {
  title?: string;
  description: string;
}

export default function About({ title = "About", description }: AboutProps) {
  return (
    <section className="flex flex-col gap-3">
      <h2 className="text-lg font-medium text-white">{title}</h2>
      <p className="leading-relaxed text-zinc-400">{description}</p>
    </section>
  );
}
