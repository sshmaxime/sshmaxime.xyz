import { cn } from "@/utils/cn";
import { PropsWithChildren } from "react";
import { ClassNameValue } from "tailwind-merge";

type Props = {
  className?: ClassNameValue;
  full?: boolean;
} & PropsWithChildren;

const Box = ({ children, className, full }: Props) => (
  <div className={cn(!full && "mx-auto max-w-2xl px-4", className)}>
    {children}
  </div>
);

export default Box;
