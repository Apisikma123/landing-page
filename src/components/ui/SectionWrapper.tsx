import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  background?: "default" | "secondary" | "primary";
}

export function SectionWrapper({
  id,
  children,
  className,
  background = "default",
}: SectionWrapperProps) {
  const bgClass =
    background === "secondary"
      ? "bg-secondary"
      : background === "primary"
        ? "bg-primary text-white"
        : "bg-background";

  return (
    <section id={id} className={cn("section-padding", bgClass, className)}>
      <div className="container-narrow">{children}</div>
    </section>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  light?: boolean;
}

export function SectionHeader({
  title,
  subtitle,
  className,
  light,
}: SectionHeaderProps) {
  return (
    <div className={cn("mb-10 md:mb-12", className)}>
      <h2
        className={cn(
          "text-2xl md:text-3xl lg:text-4xl font-bold",
          light ? "text-white" : "text-foreground"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-3 text-base md:text-lg max-w-2xl",
            light ? "text-white/80" : "text-muted"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
