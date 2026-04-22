import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  id?: string;
  className?: string;
  children: React.ReactNode;
};

const ComponentLayout = ({ children, className, id }: Props) => {
  return (
    <section
      id={id}
      className={cn(
        "w-full px-4 md:px-10 lg:px-15 xl:px-20 mx-auto",
        className,
      )}>
      {children}
    </section>
  );
};

export default ComponentLayout;
