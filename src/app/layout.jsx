import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "RecipeHub",
  description: "RecipeHub: Donde Cada Receta Cuenta una Historia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="h-[calc(100vh-5rem)] container mx-auto">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
