import localFont from "next/font/local";
import "./globals.css";

export const metadata = {
  title: "dscrd.es",
  description: "Coming soon",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  );
}
