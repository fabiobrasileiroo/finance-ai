import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { ScrollArea } from "./_components/ui/scroll-area";

const mulish = Mulish({
  subsets: ["latin-ext"],
});

export const metadata: Metadata = {
  title: "Finance AI",
  description: "Gerenciamento de transações rápido e prático",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${mulish.className} dark antialiased`}>
        <ClerkProvider
          appearance={{
            baseTheme: dark,
          }}
        >
          {/* Apply ScrollArea globally */}
          <ScrollArea className="h-full w-full">{children}</ScrollArea>
        </ClerkProvider>
      </body>
    </html>
  );
}
