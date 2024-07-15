import '@/styles/globals.css';
import React, { ReactNode } from 'react';
import Link from 'next/link';
import { logout } from './logout/action';
import { Inter as FontSans } from "next/font/google"
import { cn } from "@/lib/utils"

type Props = {
  children: ReactNode;
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

const RootLayout = ({ children }: Props) => {
  return (
    <html lang="ja">
      <head>
        <title>This is the default title</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </head>
      <body className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}>
        <header className="shadow-xl">
          <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-start p-6 lg:px-8">
            <Link href="/">
              <span className="text-sm font-semibold leading-6 text-gray-900">Home</span>
            </Link>
          </nav>
        </header>
        <div className="container mx-auto p-12">{children}</div>
        <footer className="container mb-5">
          <form className="space-y-6 text-right" action={logout}>
            <button type="submit" className="text-sm font-semibold leading-6 text-black underline text-right">
              ログアウト
            </button>
          </form>
        </footer>
      </body>
    </html>
  );
};

export default RootLayout;
