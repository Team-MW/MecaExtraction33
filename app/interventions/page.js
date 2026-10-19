import Link from "next/link";
import PageHero from "../components/PageHero";
import ServiceCard from "../components/ServiceCard";
import { offers } from "../data/site";
import Icon from "../components/Icons";

export const metadata = {
  title: "Interventions · Méca-Extraction33",
  description:
    "Injecteurs grippés, bougies de préchauffage cassées, écrous antivol, vis cassées, compresseurs de clim. Déplacement à Bordeaux.",
};

export default function InterventionsPage() {
  return (
    <main>
      <PageHero
        image="/images/hero.jpg"
        alt="Travail sur un moteur"
        position="70% 40%"
        eyebrow="Bordeaux"
        title="Six interventions."
        accent="Pas un garage généraliste."
        lead="Injecteurs, bougies, écrous antivol, vis cassées, compresseurs de clim. Et le déplacement, quand la voiture ne peut pas venir."
        crumbs={[{ href: "/", label: "Accueil" }]}
      />

      <section className="services">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="kicker">Les offres</p>
              <h2>
                Ce qui bloque,
                <br />
                et ce que j’en fais.
              </h2>
            </div>
            <div className="section-side">
              <p>
                Chaque page dit dans quel cas j’interviens, et ce qu’il est utile
                de me dire au téléphone. Pas de forfait inventé : on parle du
                véhicule, puis je me déplace.
              </p>
              <Link href="/contact">
                Appeler ou écrire
                <Icon name="arrow" />
              </Link>
            </div>
          </div>
          <div className="cards">
            {offers.map((offer) => (
              <ServiceCard key={offer.slug} offer={offer} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
