import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

interface Props {
  title?: string
  className?: string;
}

export const Title = ({ children, className, title }: PropsWithChildren<Props>) => {
  return <h1 title={title} className={cn("text-2xl font-bold", className)}>{children}</h1>;
};
