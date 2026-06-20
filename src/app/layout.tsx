import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
