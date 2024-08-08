import type { ComponentPropsWithoutRef, PropsWithChildren } from "react";
import { cn } from "@/server/cn";
import Link, { LinkProps } from "next/link";

export const Main = ({ children, className, ...props }: PropsWithChildren<ComponentPropsWithoutRef<"main">>) => (
  <main className={cn("container gap-8 mx-auto my-8", className)} {...props}>
    {children}
  </main>
);

export const Columns = ({ children, className, ...props }: PropsWithChildren<ComponentPropsWithoutRef<"div">>) => (
  <div className={cn(`grid gap-8 lg:grid-cols-2 mx-auto my-8 items-start`, className)} {...props}>
    {children}
  </div>
);

export const FlexBox = ({className, children, ...props}: PropsWithChildren<ComponentPropsWithoutRef<"div">>) => (
  <div className={cn("flex flex-wrap *:flex-1 gap-8 whitespace-nowrap font-medium", className)} {...props}>
    {children}
  </div>
)

export const Section = (
  {
    children,
    className,
    cols = false,
    ...props
  }: PropsWithChildren<ComponentPropsWithoutRef<"section"> & { cols?: boolean }>) => (
  <section className={cn("grid gap-8", { "font-medium": cols }, className)} {...props}>
    {children}
  </section>);

const Snow = ({ className }: { className?: string }) => (
  <span className={cn(
    "icon-[mingcute--snow-line] absolute text-blue-400/70",
    className
  )} />
);

interface MyLinkProps extends LinkProps {
  className?: string;
}

interface MyArticleProps extends ComponentPropsWithoutRef<"article"> {
  href?: undefined;
}

interface ExtendArticle extends PropsWithChildren {
  frozen?: boolean;
  box?: boolean
}

type LinkOrArticle = (MyLinkProps | MyArticleProps) & ExtendArticle

export const Article = (
  {
    children,
    className,
    href,
    frozen = false,
    box = false
  }: LinkOrArticle) => {
  return (
    <LinkOrArticle
      href={href}
      className={cn(
        "grid items-center justify-center p-6 ring-1 ring-neutral-800/80 bg-neutral-900/30 hover:bg-neutral-900/40 rounded-xl hover:scale-[102%] transition duration-700",
        { "lg:justify-start gap-6": box },
        { "flex gap-3 bg-neutral-900/60 hover:bg-neutral-900 relative": href },
        { "bg-neutral-900/20 hover:bg-neutral-900/70 hover:scale-[98%]": frozen },
        className
      )}>
      {frozen && <>
        <Snow className="top-3 left-3 scale-[1.5] rotate-6" />
        <Snow className="top-2 right-5 scale-[1.15] rotate-[24deg]" />
        <Snow className="bottom-2 left-7 scale-[1.3] rotate-[12deg]" />
        <Snow className="bottom-2 right-11 scale-[1.3] rotate-12" />
      </>}
      {children}
    </LinkOrArticle>
  );
};

function LinkOrArticle({ children, className, href }: LinkOrArticle) {
  if (typeof href === "string") {
    return (
      <Link
        href={href}
        target={href.startsWith("http") ? "_blank" : "_self"}
        className={className}
      >
        {children}
      </Link>
    );
  }

  return (
    <article className={className}>
      {children}
    </article>
  );
}