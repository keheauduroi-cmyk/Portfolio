import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kéheau Duroi | E-portfolio marketing",
  description: "E-portfolio immersif de Kéheau Duroi, étudiant en marketing à HELMo Campus Guillemins."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
