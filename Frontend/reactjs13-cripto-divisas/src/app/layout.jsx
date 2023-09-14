import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Cripto Divisas App",
  description: "Sistema de conversión entre divisas y criptomonedas",
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
