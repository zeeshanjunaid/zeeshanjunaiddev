"use client";

import Link from "next/link";
import React from "react";
import { SettingsDocumentData } from "@/prismicio-types";
import { useTheme } from "next-themes";
const Icon = ({ color }: { color: string }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="md:w-[18px] md:h-[18px]"
  >
    <circle cx="8" cy="8" r="8" fill="#A374FF" />
    <line x1="12.4319" y1="1.25194" x2="4.36995" y2="15.0724" stroke={color} />
  </svg>
);
interface LogoProps {
  data: SettingsDocumentData;
}
const Logo = ({ data }: LogoProps) => {
  const { theme } = useTheme();
  return (
    <Link
      className="font-ao text-[16px] md:text-[22px] text-dark dark:text-light font-bold tracking-tighter flex items-center justify-center gap-x-[8px]"
      href="/"
    >
      <Icon color={theme === "dark" ? "#1D1D1F" : "#FAFAF6"} />
      {data.site_title}
    </Link>
  );
};

export default Logo;
