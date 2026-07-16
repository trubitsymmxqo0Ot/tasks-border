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
      <body className="bg-primary text-color-primary transition-colors duration-600">
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
