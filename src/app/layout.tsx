import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./Providers";
import { Navbar } from "@/widgets/navbar";
import clsx from "clsx";
import { text } from "@/shared/config/text";

export const metadata: Metadata = {
  title: "Tasks border - главная страница",
  description:
    "Управляйте своим временем, планируйте задачи на короткий и длинный срок",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className="bg-primary text-color-primary">
        <Providers>
          <Navbar />
          <main className={clsx(text({ size: "sm" }), "max-w-300 p-5 mx-auto")}>
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
