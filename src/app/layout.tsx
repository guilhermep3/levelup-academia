import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";

const roboto = Roboto({
   weight: ['400','500','700'],
   subsets: ['latin']
})


export const metadata: Metadata = {
   title: "LevelUP Gym",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="pt-BR">
         <body
            className={`${roboto.className} antialiased`}
         >
            {children}
         </body>
      </html>
   );
}
