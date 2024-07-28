import type { ComponentPropsWithoutRef, PropsWithChildren } from "react";
import { cn } from "@/server/cn";
import Link from "next/link";

export const Main = ({ children, className, ...props }: PropsWithChildren<ComponentPropsWithoutRef<"main">>) => (
  <main className={cn("text-balance", className)} {...props}>
    <div className="container gap-8 mx-auto my-8">
      {children}
    </div>
  </main>
);

export const Columns = ({ children, className, ...props }: PropsWithChildren<ComponentPropsWithoutRef<"div">>) => (
  <div className={cn(`grid gap-8 lg:grid-cols-2 mx-auto my-8 items-start`, className)} {...props}>
    {children}
  </div>
);

export const Section = ({ children, className, ...props }: PropsWithChildren<ComponentPropsWithoutRef<"section">>) => (
  <section className={cn("grid gap-8", className)} {...props}>
    {children}
  </section>);

const articleClasses = "grid items-center justify-center p-6 ring-1 ring-neutral-800/80 bg-neutral-900/30 hover:bg-neutral-900/40 rounded-xl hover:scale-[102%] transition duration-700";

export const MiniArticle = ({ children, className }: PropsWithChildren<{ className?: string }>) => (
  <article className={cn(
    articleClasses,
    className
  )}>
    {children}
  </article>
);

const Snow = ({ className }: { className?: string }) => (
  <span className={cn(
    "icon-[mingcute--snow-line] absolute text-blue-400/70",
    className
  )} />
);

type LinkArticle = {
  className?: string,
  href: string,
  frozen?: boolean
}
export const LinkArticle = ({ children, className, href, frozen = false }: PropsWithChildren<LinkArticle>) => (
  <Link href={href} target={href.startsWith("http") ? "_blank" : "_self"} className={cn(
    articleClasses,
    "flex gap-3 bg-neutral-900/60 hover:bg-neutral-900 relative",
    { " bg-neutral-900/20 hover:bg-neutral-900/70 hover:scale-[98%]": frozen },
    className
  )}>
    {frozen && <>
      <Snow className="top-3 left-3 scale-[1.5] rotate-6" />
      <Snow className="top-2 right-5 scale-[1.15] rotate-[24deg]" />
      <Snow className="bottom-2 left-7 scale-[1.3] rotate-[12deg]" />
      <Snow className="bottom-2 right-11 scale-[1.3] rotate-12" />
    </>}
    {children}
  </Link>
);

export const Article = ({ children, className }: PropsWithChildren<{ className?: string }>) => (
  <MiniArticle className={cn("justify-start gap-6", className)}>
    {children}
  </MiniArticle>
);