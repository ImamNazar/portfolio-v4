import Link from "next/link";
import { cn } from "@/lib/cn";

type CTAProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  external?: boolean;
};

export function CTA({ href, children, variant = "primary", external }: CTAProps) {
  const className = cn(
    "inline-flex items-center gap-2.5 px-6 py-3.5",
    "font-mono text-[11.5px] uppercase tracking-[0.12em] font-medium no-underline",
    "border transition-all duration-300 ease-out",
    variant === "primary" &&
      "bg-acc text-bg border-transparent hover:bg-acc-soft hover:shadow-glow",
    variant === "ghost" &&
      "text-ink border-line-mid hover:border-acc hover:text-acc"
  );

  const content = (
    <>
      <span className={cn("font-semibold", variant === "ghost" && "text-acc")}>›</span>
      {children}
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {content}
    </Link>
  );
}
