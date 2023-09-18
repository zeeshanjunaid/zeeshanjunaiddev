"use client";

import { TbBrandFiverr, TbBrandUpwork } from "react-icons/tb";

import { BsGithub } from "react-icons/bs";
import { Button } from "@nextui-org/react";
import { PrismicNextLink } from "@prismicio/next";
import React from "react";
import { RiLinkedinLine } from "react-icons/ri";
import { SettingsDocumentData } from "@/prismicio-types";

interface SocialListProps {
  data: SettingsDocumentData;
}
const SocialList = ({ data }: SocialListProps) => {
  const renderSocialIcon = (label: any, link: any) => {
    const styles = "border-1 border-solid dark:border-light/10 border-dark/10";
    switch (label) {
      case "linkedin":
        return (
          <PrismicNextLink field={link}>
            <Button
              radius="full"
              isIconOnly
              variant="ghost"
              aria-label={label}
              className={styles}
            >
              <RiLinkedinLine />
            </Button>
          </PrismicNextLink>
        );
      case "upwork":
        return (
          <PrismicNextLink field={link}>
            <Button
              radius="full"
              isIconOnly
              variant="ghost"
              aria-label={label}
              className={styles}
            >
              <TbBrandUpwork />
            </Button>
          </PrismicNextLink>
        );
      case "fiverr":
        return (
          <PrismicNextLink field={link}>
            <Button
              radius="full"
              isIconOnly
              variant="ghost"
              aria-label={label}
              className={styles}
            >
              <TbBrandFiverr />
            </Button>
          </PrismicNextLink>
        );
      case "github":
        return (
          <PrismicNextLink field={link}>
            <Button
              radius="full"
              isIconOnly
              variant="ghost"
              aria-label={label}
              className={styles}
            >
              <BsGithub />
            </Button>
          </PrismicNextLink>
        );
      default:
        return (
          <PrismicNextLink
            field={link}
            className="h-[40px] bg-primary-gradient rounded-full p-[1px]"
          >
            <Button
              className="uppercase text-[12px] h-full bg-light dark:bg-dark"
              radius="full"
              variant="ghost"
              aria-label={label}
            >
              {label}
            </Button>
          </PrismicNextLink>
        );
    }
  };
  return (
    <div className="flex items-center gap-[10px] justify-start flex-wrap">
      {data.social.map(({ link, label }) => (
        <React.Fragment key={label}>
          {renderSocialIcon(label, link)}
        </React.Fragment>
      ))}
    </div>
  );
};

export default SocialList;
