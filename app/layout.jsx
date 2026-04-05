import "./globals.css";

export const metadata = {
  title: "Verixa AI",
  description: "AI risk and hallucination detection",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}