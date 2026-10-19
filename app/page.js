import Image from "next/image";
import Link from "next/link";
import Icon from "./components/Icons";
import ServiceCard from "./components/ServiceCard";
import { PHONE, TEL, offers } from "./data/site";

const points = [
  { icon: "extractor", label: "Outillage d’extraction" },
  { icon: "pin", label: "Intervention chez vous" },
  { icon: "clock", label: "Lun–sam, 9h–18h" },
  { icon: "snow", label: "Compresseurs refaits" },
];

export default function Home() {
  return (
    <main>
        <section className="hero" id="top">
          <Image
            src="/images/hero.jpg"
            alt="Mains d’un mécanicien au travail sur un moteur"
            fill
            priority
            sizes="100vw"
            className="hero-img"
          />
          <div className="hero-shade" />
          <div className="wrap hero-content">
            <p className="eyebrow">Extraction mécanique · Bordeaux</p>
            <h1>
              Là où les garages
              <span>refusent.</span>
            </h1>
            <p className="hero-lead">
              Injecteurs grippés, bougies cassées, écrous antivol, vis foirées.
              <br />
              Déplacement en urgence, du lundi au samedi.
            </p>
            <a className="btn" href={TEL}>
              {PHONE}
              <Icon name="arrow" />
            </a>
            <p className="hero-address">34 rue du Professeur Devaux, 33800 Bordeaux</p>
          </div>
        </section>

        <section className="strip" aria-label="En bref">
          <div className="wrap strip-grid">
            <div className="strip-item">
              <Icon name="pin" />
              <span>
                <strong>Sur place</strong>
                <em>En urgence</em>
              </span>
            </div>
            <div className="strip-item">
              <Icon name="extractor" />
              <span>
                <strong>Extraction</strong>
                <em>Pièces coincées</em>
              </span>
            </div>
            <div className="strip-item">
              <Icon name="snow" />
              <span>
                <strong>Clim</strong>
                <em>Compresseurs</em>
              </span>
            </div>
            <div className="strip-item">
              <Icon name="star" />
              <span>
                <strong>4,8/5</strong>
                <em>45 avis Google</em>
              </span>
            </div>
          </div>
        </section>

        <section className="services" id="interventions">
          <div className="wrap">
            <div className="section-head">
              <div>
                <p className="kicker">Interventions</p>
                <h2>
                  Ce que je sors
                  <br />
                  quand ça bloque.
                </h2>
              </div>
              <div className="section-side">
                <p>
                  Quatre pannes reviennent sans arrêt. Les garages les renvoient,
                  ou proposent de changer le bloc. C’est exactement le travail.
                </p>
                <Link href="/interventions">
                  Toutes les interventions
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

        <section className="about" id="metier">
          <div className="about-photo">
            <Image
              src="/images/about.jpg"
              alt="Mécanicien au travail sous un capot"
              fill
              sizes="(max-width: 900px) 100vw, 46vw"
            />
          </div>
          <div className="about-copy">
            <p className="kicker">Le métier</p>
            <h2>
              Le gars qu’on appelle
              <br />
              quand ça coince.
            </h2>
            <p>
              Pas un garage qui fait de tout. L’extraction : la pièce qui ne veut
              plus sortir, celle qu’un atelier classique préfère laisser — ou
              remplacer avec la moitié du moteur.
            </p>
            <p>
              Basé au 34 rue du Professeur Devaux, à Bordeaux. Je me déplace en
              urgence sur le véhicule, chez vous ou là où il est arrêté.
            </p>
            <ul className="points">
              {points.map((point) => (
                <li key={point.label}>
                  <Icon name={point.icon} />
                  <span>{point.label}</span>
                </li>
              ))}
            </ul>
            <div className="about-actions">
              <a className="btn" href={TEL}>
                Appeler
                <Icon name="arrow" />
              </a>
              <Link className="link-quiet" href="/metier">
                Le métier
              </Link>
            </div>
          </div>
        </section>

        <section className="proof" aria-label="Avis Google">
          <div className="wrap proof-grid">
            <div className="score-block">
              <p className="score">
                4,8<span>/5</span>
              </p>
              <p className="stars" aria-hidden="true">
                <span>★★★★★</span>
                <span className="stars-on">★★★★★</span>
              </p>
              <p className="score-label">45 avis Google</p>
            </div>
            <blockquote>
              <p>
                « Un magicien. Il intervient là où les garages classiques refusent. »
              </p>
              <footer>Comme en parlent ses clients</footer>
            </blockquote>
          </div>
        </section>

        <section className="banner" aria-label="Appel">
          <Image
            src="/images/banner.jpg"
            alt="Voiture de nuit, phares allumés"
            fill
            sizes="100vw"
            className="banner-img"
          />
          <div className="hero-shade banner-shade" />
          <div className="wrap banner-content">
            <p className="eyebrow">Lundi au samedi · 9h–18h</p>
            <h2>
              Une pièce bloquée ?
              <br />
              Je me déplace.
            </h2>
            <a className="btn" href={TEL}>
              {PHONE}
              <Icon name="arrow" />
            </a>
          </div>
        </section>
    </main>
  );
}
