import "./globals.css";
import Navbar from "@/components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Heading3 from "@/components/Heading3/heading3";

export const metadata = {
  title: "Divisas y criptomonedas App",
  description: "Sistema de estadísticas para divisas y criptomonedas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        <Heading3 />
        {children}
      </body>
    </html>
  );
}
