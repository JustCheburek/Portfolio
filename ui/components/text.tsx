import { ComponentPropsWithoutRef, PropsWithChildren } from "react";
import { cn } from "@server/cn";
import Link from "next/link";

type TextProps = PropsWithChildren<{
  className?: string
}>

export const H1 = (
  { children, className, color = true }: TextProps & { color?: boolean }
) => (
  <h1 className={cn(
    "text-3xl font-semibold",
    {"text-green-400": color},
    className
  )}>
    {children}
  </h1>
);

export const H1Box = ({children}: PropsWithChildren) => (
  <div className="grid grid-cols-5 mx-6">
    <Link href="/" className="flex items-center gap-1">
      <span className="icon-[pepicons-pencil--arrow-left] w-[1.5em] h-[1.5em]" />
      <span className="hidden sm:inline">Назад</span>
    </Link>

    <H1 className="text-center col-span-3">
      {children}
    </H1>
  </div>
)

export const H2 = (
  { children, className }: TextProps
) => (
  <h2 className={cn(
    "text-2xl font-medium",
    className
  )}>
    {children}
  </h2>
);

export const H3 = (
  { children, className }: TextProps
) => (
  <h3 className={cn(
    "text-xl text-neutral-300/85 font-medium",
    className
  )}>
    {children}
  </h3>
);

export const ListHeading = ({children}: PropsWithChildren) => (
  <H3 className="flex items-center gap-2">
    <span className="icon-[fluent--list-24-regular] w-[1.3em] h-[1.3em]"/>
    {children}
  </H3>
)

export const P = (
  { children, className, ...props }: PropsWithChildren<ComponentPropsWithoutRef<"p">>
) => (
  <p className={cn(
    "text-neutral-300/95",
    className
  )} {...props}>
    {children}
  </p>
);

export const Small = (
  { children, className }: TextProps
) => (
  <small className={cn(
    "text-neutral-400",
    className
  )}>
    {children}
  </small>
);
