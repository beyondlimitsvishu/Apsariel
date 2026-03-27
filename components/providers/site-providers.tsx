"use client";

import type { PropsWithChildren } from "react";

import { ThemeProvider } from "@/components/providers/theme-provider";

export function SiteProviders({ children }: PropsWithChildren) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
