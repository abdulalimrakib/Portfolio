export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="space-y-2">
      {eyebrow && (
        <p className="font-mono text-xs uppercase tracking-widest text-muted/70">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
        {title}
      </h2>
      {description && <p className="max-w-2xl text-muted">{description}</p>}
    </div>
  );
}
