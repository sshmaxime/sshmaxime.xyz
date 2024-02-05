import { cn } from "@/utils/cn";

type Props = React.InputHTMLAttributes<HTMLParagraphElement>;

const H1 = ({ children, className }: Props) => (
  <p className={cn("text-5xl tracking-tight", className)}>{children}</p>
);

const H2 = ({ children, className }: Props) => (
  <p className={cn("text-4xl tracking-tight", className)}>{children}</p>
);

const H3 = ({ children, className }: Props) => (
  <p className={cn("text-3xl tracking-tight", className)}>{children}</p>
);

const H4 = ({ children, className }: Props) => (
  <p className={cn("text-2xl tracking-tight", className)}>{children}</p>
);

const H5 = ({ children, className }: Props) => (
  <p className={cn("text-xl tracking-tight", className)}>{children}</p>
);

const H6 = ({ children, className }: Props) => (
  <p className={cn("text-lg tracking-tight", className)}>{children}</p>
);

const P = ({ children, className }: Props) => (
  <p className={cn("text-base", className)}>{children}</p>
);

const S = ({ children, className }: Props) => (
  <p className={cn("text-sm", className)}>{children}</p>
);

const X = ({ children, className }: Props) => (
  <p className={cn("text-xs", className)}>{children}</p>
);

export { H1, H2, H3, H4, H5, H6, P, S, X };
