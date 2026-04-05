import { Newsreader, Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";

const newsreader = Newsreader({
  variable: "--font-headline",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-label",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Ayush Mishra | Portfolio",
  description:
    "Undergraduate student at IIEST Shibpur. Specializing in Information Technology with a focus on Machine Learning, Deep Learning, and full-stack development.",
  keywords: [
    "Ayush Mishra",
    "Portfolio",
    "IIEST Shibpur",
    "Machine Learning",
    "Deep Learning",
    "Full Stack Developer",
    "Information Technology",
  ],
  authors: [{ name: "Ayush Mishra" }],
  openGraph: {
    title: "Ayush Mishra | Portfolio",
    description:
      "IT undergrad & aspiring researcher crafting intelligent digital experiences.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${plusJakartaSans.variable} ${spaceGrotesk.variable}`}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
