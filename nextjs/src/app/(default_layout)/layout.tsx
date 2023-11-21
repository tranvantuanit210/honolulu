import MainLayout from "@/layouts/MainLayout";
import * as React from "react";

export interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return <MainLayout>{children}</MainLayout>;
}
