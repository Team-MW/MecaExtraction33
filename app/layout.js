import "./globals.css";
import { Newsreader, Oswald, Source_Sans_3 } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";

const display = Oswald({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-display",
  display: "swap",
});

const sans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const serif = Newsreader({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
  variable: "--font-serif",
  display: "swap",
});

export const metadata = {
  title: "Méca-Extraction33 · Extraction mécanique à Bordeaux",
  description:
    "Extraction d’injecteurs grippés, bougies de préchauffage cassées, écrous antivol et vis cassées. Déplacement en urgence à Bordeaux. Compresseurs de clim. 06 14 31 91 09.",
};

export const viewport = {
  themeColor: "#0c1016",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: "Méca-Extraction33",
  telephone: "+33614319109",
  image: "/images/hero.jpg",
  address: {
    "@type": "PostalAddress",
    streetAddress: "34 Rue du Professeur Devaux",
    postalCode: "33800",
    addressLocality: "Bordeaux",
    addressCountry: "FR",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "45",
    bestRating: "5",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${display.variable} ${sans.variable} ${serif.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
