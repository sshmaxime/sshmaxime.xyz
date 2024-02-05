"use client";

import { useTheme } from "next-themes";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const useClient = () => {
  const [mounted, setMounted] = useState(false);
  const usedTheme = useTheme();

  const router = useRouter();
  const fullRoute = usePathname().substring(1);
  const [route, subroute] = fullRoute.split("/");

  useEffect(() => {
    setMounted(true);
  }, []);

  const go = (path: string) => {
    router.push("/" + path);
  };

  const isRoute = (route: string) => {
    return fullRoute.includes(route);
  };

  const toggleTheme = () =>
    usedTheme.setTheme(usedTheme.theme === "dark" ? "light" : "dark");

  return {
    mounted,
    ...usedTheme,
    isRoute,
    toggleTheme,
    fullRoute,
    route,
    subroute,
    go,
  };
};
