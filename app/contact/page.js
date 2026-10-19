import Link from "next/link";
import PageHero from "../components/PageHero";
import { MAPS, MAP_EMBED, PHONE, TEL, offers } from "../data/site";

export const metadata = {
  title: "Contact · Méca-Extraction33",
  description:
    "Appelez ou envoyez un SMS au 06 14 31 91 09. Méca-Extraction33, 34 rue du Professeur Devaux, 33800 Bordeaux. Lun–sam, 9h–18h.",
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Lun–sam · 9h–18h"
        title="Appelez."
        accent="Je me déplace."
        lead="Dites ce qui bloque et où est la voiture. Injecteur, bougie, écrou antivol, vis cassée ou compresseur de clim."
        crumbs={[{ href: "/", label: "Accueil" }]}
      />

      <section className="sheet">
        <div className="wrap contact-grid">
          <div className="contact-phone">
            <p className="footer-label">Téléphone</p>
            <a className="contact-number" href={TEL}>
              {PHONE}
            </a>
            <p>Appel ou SMS. Le dimanche, c’est fermé.</p>
            <h2>Ce qui m’aide au premier appel</h2>
            <ul className="check-list">
              <li>Le modèle du véhicule</li>
              <li>Ce qui est coincé, et si quelqu’un a déjà forcé</li>
              <li>L’adresse exacte, si la voiture ne peut pas bouger</li>
            </ul>
          </div>
          <div className="contact-facts">
            <div>
              <p className="footer-label">Adresse</p>
              <p>
                34 rue du Professeur Devaux
                <br />
                33800 Bordeaux
              </p>
              <a className="inline-link" href={MAPS} target="_blank" rel="noreferrer">
                Itinéraire
              </a>
            </div>
            <div>
              <p className="footer-label">Horaires</p>
              <p>
                Lundi – samedi
                <br />
                9h – 18h
              </p>
            </div>
            <div>
              <p className="footer-label">Interventions</p>
              <ul className="footer-links">
                {offers.map((offer) => (
                  <li key={offer.slug}>
                    <Link href={`/interventions/${offer.slug}`}>{offer.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="map map-page">
        <iframe
          title="Méca-Extraction33, 34 rue du Professeur Devaux, Bordeaux"
          src={MAP_EMBED}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </main>
  );
}
