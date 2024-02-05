"use client";

import { Button } from "../../ui/button";
import { useClient } from "@/utils";
import { cn } from "@/utils/cn";
import { Settings } from "lucide-react";
import Link from "next/link";

type NavbarButtonProps = {
  link: string;
};

export const NavbarButton = ({ link }: NavbarButtonProps) => {
  const { isRoute } = useClient();

  return (
    <Link href={"/" + link}>
      <Button
        variant="ghost"
        size="icon"
        className={cn(isRoute(link) && "bg-accent")}
      >
        <Settings className="h-[1.2rem] w-[1.2rem] transition-all" />
      </Button>
    </Link>
  );
};
