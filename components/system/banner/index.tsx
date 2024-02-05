import Box from "@/components/system/box";
import { useClient } from "@/hooks/useClient";
import { useStore } from "@/store";
import { cn } from "@/utils/cn";
import { X } from "lucide-react";

export type BannerProps = {
  message: string;
};

export const Banner = ({ message }: BannerProps) => {
  const { mounted } = useClient();
  const { open, toggle } = useStore();

  const isOpen = mounted ? open : false;

  return (
    <header
      className={cn(
        isOpen ? "h-8" : "h-0 opacity-0",
        `z-50 flex w-full items-center bg-muted text-sm backdrop-blur duration-500`,
      )}
    >
      <Box className="flex w-full flex-row justify-between">
        <div className="w-20"></div>
        <div className="flex flex-row justify-center">
          <p className="text-center">{message}</p>
        </div>
        <div className="flex w-20 flex-row-reverse items-center px-3">
          <X className="h-4 w-4 cursor-pointer" onClick={toggle} />
        </div>
      </Box>
    </header>
  );
};
