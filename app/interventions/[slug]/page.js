import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "../../components/PageHero";
import ServiceCard from "../../components/ServiceCard";
import { PHONE, TEL, getOffer, offers, relatedOffers } from "../../data/site";
import Icon from "../../components/Icons";

export function generateStaticParams() {
  return offers.map((offer) => ({ slug: offer.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const offer = getOffer(slug);
  if (!offer) return {};
  return {
    title: `${offer.title} · Méca-Extraction33`,
    description: offer.lead,
  };
}

export default async function OfferPage({ params }) {
  const { slug } = await params;
  const offer = getOffer(slug);
  if (!offer) notFound();
  const others = relatedOffers(offer);

  return (
    <main>
      <PageHero
        image={offer.image}
        alt={offer.alt}
        position={offer.position}
        eyebrow={offer.eyebrow}
        title={offer.titleLine}
        accent={offer.titleAccent}
        lead={offer.lead}
        crumbs={[
          { href: "/", label: "Accueil" },
          { href: "/interventions", label: "Interventions" },
        ]}
      />

      <section className="sheet">
        <div className="wrap sheet-grid">
          <article>
            <h2>Quand ça arrive</h2>
            {offer.situation.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <h2>Ce que je fais</h2>
            {offer.approach.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <p className="sheet-note">
              Basé au 34 rue du Professeur Devaux, à Bordeaux. Lun–sam, 9h–18h.
              Je me déplace sur le véhicule.
            </p>
          </article>
          <aside className="sheet-aside">
            <p className="kicker">Avant d’appeler</p>
            <p className="aside-lead">{offer.title}</p>
            <ul>
              {offer.before.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <a className="btn" href={TEL}>
              {PHONE}
              <Icon name="arrow" />
            </a>
            <p className="aside-note">Appel ou SMS. Dimanche fermé.</p>
          </aside>
        </div>
      </section>

      <section className="services">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="kicker">À côté</p>
              <h2>Les autres interventions.</h2>
            </div>
            <div className="section-side">
              <Link href="/interventions">
                Toutes les offres
                <Icon name="arrow" />
              </Link>
            </div>
          </div>
          <div className="cards">
            {others.map((item) => (
              <ServiceCard key={item.slug} offer={item} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
