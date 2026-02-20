export const metadata = {
  title: "A Salute Per Tutti",
  description: "Plateforme Premium de Révision Médecine",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        {children}
      </body>
    </html>
  );
}
