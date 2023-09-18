"use client";

import { Moon, Sun } from "lucide-react";

import { Button } from "./ui/button";
import React from "react";
import { useTheme } from "next-themes";

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();
  const switchTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };
  return (
    <Button
      className="rounded-full border-1 border-solid dark:border-light/10 border-dark/10"
      onClick={switchTheme}
      variant="ghost"
      size="icon"
    >
      {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
    </Button>
  );
};

export default ThemeSwitch;
