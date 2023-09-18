"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { Menu } from "lucide-react";
import { PrismicNextLink } from "@prismicio/next";
import React from "react";
import { Separator } from "./ui/separator";
import { SettingsDocumentData } from "@/prismicio-types";
import SocialList from "./social-list";
import ThemeSwitch from "./theme-switch";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  className: string;
  data: SettingsDocumentData;
}
const MobileMenu = ({ className, data }: MobileMenuProps) => {
  return (
    <div
      className={cn(
        "flex items-center gap-x-[10px] md:gap-x-[14px] justify-center",
        className,
      )}
    >
      <ThemeSwitch />
      <Sheet>
        <SheetTrigger asChild>
          <div className="h-[40px] cursor-pointer rounded-full overflow-hidden p-[2px] bg-primary-gradient">
            <div className="rounded-full h-full uppercase flex items-center justify-center font-switzer font-light text-[14px] gap-x-1 text-light bg-dark dark:text-dark dark:bg-white px-[14px] py-[7px]">
              <Menu size={18} /> menu
            </div>
          </div>
        </SheetTrigger>
        <SheetContent className="bg-light dark:bg-dark flex flex-col justify-between">
          <div className="flex flex-col gap-y-[22px] mt-5">
            {data.navigation.map(({ link, label }) => (
              <React.Fragment key={label}>
                <PrismicNextLink
                  field={link}
                  className="font-switzer font-dark dark:font-light text-[16px] uppercase font-medium transition hover:text-dark/80 dark:hover:text-light/80 tracking-wide"
                >
                  {label}
                </PrismicNextLink>
                <Separator className="dark:bg-light/10 bg-dark/10 last:hidden" />
              </React.Fragment>
            ))}
          </div>
          <div>
            <Separator className="dark:bg-light/10 bg-dark/10 mb-[22px]" />
            <SocialList data={data} />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileMenu;
