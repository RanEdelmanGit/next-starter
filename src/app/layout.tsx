import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { getLangDir } from "rtl-detect";
import LocaleSwitcher from "@/components/locale/locale-switcher";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout: React.FC<RootLayoutProps> = async ({ children }) => {
  const locale = await getLocale();
  const messages = await getMessages();
  const direction = getLangDir(locale);

  return (
    <html lang={locale} dir={direction} suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider messages={messages}>
            <SidebarProvider>
            <AppSidebar />
            <SidebarTrigger className="p-1 m-1" />
              {children}
            </SidebarProvider>  
              <div className="fixed bottom-4 left-[40%] mb-[2px] flex items-center">
                <LocaleSwitcher />
              </div>
              <div className="fixed bottom-4 left-1/2 mb-[2px] flex items-center">
                <ThemeToggle />
              </div>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
