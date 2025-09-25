import "./globals.css";

export const metadata = {
  title: "HireDue",
  description: "HireDue is revolutionizing hiring. Stay tuned!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}
