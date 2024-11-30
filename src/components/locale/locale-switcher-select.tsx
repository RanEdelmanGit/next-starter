"use client";

import { useTransition, useState, useEffect } from "react";
import { GlobeIcon } from "@radix-ui/react-icons";
import { STROKE_WIDTH } from "@/constants/iconConstants";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Locale } from "@/i18n/config";
import { setUserLocale } from "@/services/locale";
import {getLangDir} from 'rtl-detect';
import { useLocale } from "next-intl";

type Props = {
  defaultValue: string;
  items: Array<{ value: string; label: string }>;
};

export default function LocaleSwitcherSelect({ defaultValue, items }: Props) {
  const [isPending, startTransition] = useTransition();
  const [selectedLocale, setSelectedLocale] = useState<string>(defaultValue);
  const locale = useLocale();
  const direction = getLangDir(locale);
  


  useEffect(() => {
    setSelectedLocale(defaultValue);
  }, [defaultValue]);

  function handleLocaleChange(locale: string) {
    startTransition(() => {
      setUserLocale(locale as Locale);
      setSelectedLocale(locale); // Update state with the selected locale
    });
  }

  return (
    <DropdownMenu dir={direction}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <GlobeIcon
            strokeWidth={STROKE_WIDTH}
            className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
          />
          <GlobeIcon
            strokeWidth={STROKE_WIDTH}
            className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
          />
          <span className="sr-only">Language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {items.map((item) => (
          <DropdownMenuItem
            key={item.value}
            onClick={() => handleLocaleChange(item.value)}
            className={`${isPending ? "pointer-events-none opacity-60" : ""} ${
              selectedLocale === item.value ? "font-bold" : ""
            }`}
          >
            {item.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
