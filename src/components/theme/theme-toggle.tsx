"use client"
 
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { STROKE_WIDTH } from "@/constants/iconConstants";
import { useTheme } from "next-themes"
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {getLangDir} from 'rtl-detect';
import { useLocale } from "next-intl";
 
export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const t = useTranslations("Theme"); 
  const locale = useLocale();
  const direction = getLangDir(locale);

  
  return (
    <DropdownMenu dir={direction}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <SunIcon strokeWidth={STROKE_WIDTH} className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon strokeWidth={STROKE_WIDTH} className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">{t("toggleTheme")}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem 
          className={`${theme === "light" ? "font-bold" : ""}`} 
          onClick={() => setTheme("light")}
        >
          {t("lightMode")}
        </DropdownMenuItem>
        <DropdownMenuItem 
          className={`${theme === "dark" ? "font-bold" : ""}`} 
          onClick={() => setTheme("dark")}
        >
          {t("darkMode")}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}