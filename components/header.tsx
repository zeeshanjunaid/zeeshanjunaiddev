"use client";

import React, { useEffect, useState } from "react";

import Logo from "./logo";
import MobileMenu from "./mobile-menu";
import { PrismicNextLink } from "@prismicio/next";
import { Separator } from "./ui/separator";
import { SettingsDocumentData } from "@/prismicio-types";
import ThemeSwitch from "./theme-switch";

interface HeaderProps {
  data: SettingsDocumentData;
}

const Header = ({ data }: HeaderProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }
  return (
    <div className="fixed top-0 left-0 w-full h-[80px]">
      <div
        className="px-[16px] md:px-[28px] lg:px-[120px] py-[24px]
      flex items-center justify-between h-full max-w-[1200px] mx-auto"
      >
        <Logo data={data} />

        <div className="hidden lg:flex items-center gap-x-8">
          {data.navigation.map(({ link, label }) => (
            <PrismicNextLink
              field={link}
              key={label}
              className="font-switzer font-dark dark:font-light text-[14px] uppercase font-medium transition hover:text-dark/80 dark:hover:text-light/80 tracking-wide"
            >
              {label}
            </PrismicNextLink>
          ))}
          <ThemeSwitch />
        </div>
        <MobileMenu data={data} className="lg:hidden" />
      </div>
      <Separator className="dark:bg-light/10 bg-dark/10" />
    </div>
  );
};

export default Header;
