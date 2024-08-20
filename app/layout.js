import "./globals.css";

export const metadata = {
  title: "Book Store",
  description: "eccormerce book store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
