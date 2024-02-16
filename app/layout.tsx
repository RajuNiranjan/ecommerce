import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar/navbar";
import SideBar from "@/components/sidebar/sidebar";
import BottomMenu from "@/components/bottom_menu/bottom_menu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="h-screen relative">
          <NavBar />
          <div className="flex">
            <div>
              <SideBar />
            </div>
            <div className="p-2 md:p-10 w-full">{children}</div>
          </div>
          <div className="sm:hidden  bottom-0 fixed">
            <BottomMenu />
          </div>
        </div>
      </body>
    </html>
  );
}
