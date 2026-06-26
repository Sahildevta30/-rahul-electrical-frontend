import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export const metadata: Metadata = {
  title: "Rahul Electrical Works | Electrical Products & Repair Services",
  description:
    "Electrical products, motor rewinding, transformer repair, house wiring, electrical spare parts in Brajrajnagar, Jharsuguda, Odisha.",
  keywords: "electrical products, motor rewinding, transformer repair, house wiring, LED bulbs, Brajrajnagar, Jharsuguda",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
