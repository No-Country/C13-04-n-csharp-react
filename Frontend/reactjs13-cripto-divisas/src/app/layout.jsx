import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Divisas y criptomonedas App",
  description: "Sistema de estadísticas para divisas y criptomonedas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
