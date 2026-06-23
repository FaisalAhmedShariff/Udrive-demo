import { Cinzel, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "U Drive Luxury - Exotic Car Rental Dubai",
  description: "Rent premium supercars, luxury SUVs, and executive sedans in Dubai. Best rates guaranteed, no security deposit required options, and free delivery.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${montserrat.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-luxury-black text-gray-100 selection:bg-gold-500 selection:text-black">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
