import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./Providers";
import { Navbar } from "@/widgets/navbar";

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
      <body>
        <Navbar/>
        <Providers>{children}</Providers></body>
    </html>
  );
}
