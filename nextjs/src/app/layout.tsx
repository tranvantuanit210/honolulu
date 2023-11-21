import React from "react";
import "./globals.css";

import StyledComponentsRegistry from "../lib/AntdRegistry";
import ThemeConfigProvider from "@/config/ThemeConfig";
import FormProvider from "@/contexts/form.context";
import ProviderQueryClient from "@/config/QueryClientConfig";
import localFont from "next/font/local";

const poppins = localFont({
  src: [
    {
      path: "../../public/fonts/Poppins-Thin.ttf",
      weight: "100",
    },
    {
      path: "../../public/fonts/Poppins-ExtraLight.ttf",
      weight: "200",
    },
    {
      path: "../../public/fonts/Poppins-Light.ttf",
      weight: "300",
    },
    {
      path: "../../public/fonts/Poppins-Regular.ttf",
      weight: "400",
    },
    {
      path: "../../public/fonts/Poppins-Medium.ttf",
      weight: "500",
    },
    {
      path: "../../public/fonts/Poppins-SemiBold.ttf",
      weight: "600",
    },
    {
      path: "../../public/fonts/Poppins-Bold.ttf",
      weight: "700",
    },
    {
      path: "../../public/fonts/Poppins-ExtraBold.ttf",
      weight: "800",
    },
    {
      path: "../../public/fonts/Poppins-Black.ttf",
      weight: "900",
    },
  ],
});

export const metadata = {
  title: "Honolulu Speech & Debate",
  description: "Generated by create next app",
};

const RootLayout = ({ children }: React.PropsWithChildren) => (
  <html lang="en">
    <body className={poppins.className} suppressHydrationWarning={true}>
      <ThemeConfigProvider>
        <StyledComponentsRegistry>
          <ProviderQueryClient>
            <FormProvider>{children}</FormProvider>
          </ProviderQueryClient>
        </StyledComponentsRegistry>
      </ThemeConfigProvider>
    </body>
  </html>
);

export default RootLayout;
