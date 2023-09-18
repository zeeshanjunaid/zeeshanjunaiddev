import "./globals.css";

import Header from "@/components/header";
import type { Metadata } from "next";
import { NUIProvider } from "@/components/providers/nextui-provider";
import { cn } from "@/lib/utils";
import { createClient } from "@/prismicio";
import localFont from "next/font/local";

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();

  const settings = await client.getSingle("settings");

  return {
    title: settings.data.site_title || "Zeeshan Junaid",
    description:
      settings.data.site_description ||
      "Portfolio website to showcase my services, experience and work",
    openGraph: {
      images: [settings.data.og_image.url || ""],
    },
  };
}

const switzer = localFont({
  src: [
    {
      path: "../public/fonts/Switzer-Bold.ttf",
      weight: "700",
    },
    {
      path: "../public/fonts/Switzer-Medium.ttf",
      weight: "500",
    },
    {
      path: "../public/fonts/Switzer-Light.ttf",
      weight: "300",
    },
  ],
  variable: "--font-switzer",
});

const antiqueOlive = localFont({
  src: [
    {
      path: "../public/fonts/Antique-Olive-Regular.ttf",
      weight: "400",
    },
    {
      path: "../public/fonts/AQBL.ttf",
      weight: "700",
    },
  ],
  variable: "--font-ao",
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const client = createClient();
  const settings = await client.getSingle("settings");
  return (
    <html lang="en" className="dark">
      <body
        className={cn(
          "dark:bg-dark bg-light",
          antiqueOlive.variable,
          switzer.variable,
        )}
      >
        <NUIProvider>
          <div className="w-[364px] h-[364px] md:w-[647px] md:h-[647px] lg:w-[772px] lg:h-[772px] fixed -top-1/2 left-1/2 -translate-x-1/2 bg-header-gradient rounded-full blur-[200px] md:blur-[250px] lg:blur-[400px]" />
          <Header data={settings.data} />
          {children}
        </NUIProvider>
      </body>
    </html>
  );
}
