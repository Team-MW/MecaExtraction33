import Image from "next/image";
import Header from "./components/Header";
import Icon from "./components/Icons";

const PHONE = "06 14 31 91 09";
const TEL = "tel:+33614319109";
const MAPS =
  "https://www.google.com/maps/dir/?api=1&destination=34%20Rue%20du%20Professeur%20Devaux%2033800%20Bordeaux";

const services = [
  {
    title: "Injecteurs grippés",
    text: "Coincés dans la culasse. Je les sors sans ouvrir tout le moteur.",
    image: "/images/injecteurs.jpg",
    alt: "Mécanicien éclairant un compartiment moteur",
    icon: "extractor",
    position: "center 40%",
  },
  {
    title: "Bougies de préchauffage",
    text: "Cassées au démontage. Le reste de la bougie sort du puits.",
    image: "/images/bougies.jpg",
    alt: "Clé sur le haut d’un moteur",
    icon: "plug",
    position: "18% 45%",
  },
  {
    title: "Écrous antivol",
    text: "Clé perdue ou douille foirée. La roue est libérée sur place.",
    image: "/images/ecrous.jpg",
    alt: "Jante et écrous de roue",
    icon: "nut",
    position: "center 55%",
  },
  {
    title: "Vis et goujons cassés",
    text: "Vis noyée, goujon arraché. J’extrais, puis je reprends le filetage si besoin.",
    image: "/images/vis.jpg",
    alt: "Clés et pinces sur un établi",
    icon: "screw",
    position: "center 40%",
  },
  {
    title: "Compresseurs de clim",
    text: "Je refais le compresseur pour retrouver le froid.",
    image: "/images/clim.jpg",
    alt: "Courroie et compresseur sur un moteur",
    icon: "snow",
    position: "center 45%",
  },
  {
    title: "Urgence sur place",
    text: "J’interviens sur le véhicule, chez vous ou là où il est arrêté.",
    image: "/images/deplacement.jpg",
    alt: "Intervention sous un véhicule",
    icon: "pin",
    position: "center 60%",
  },
];

const points = [
  { icon: "extractor", label: "Outillage d’extraction" },
  { icon: "pin", label: "Intervention chez vous" },
  { icon: "clock", label: "Lun–sam, 9h–18h" },
  { icon: "snow", label: "Compresseurs refaits" },
];

export default function Home() {
  return (
    <>
      <Header />
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
                <a href="#contact">
                  Infos pratiques
                  <Icon name="arrow" />
                </a>
              </div>
            </div>

            <div className="cards">
              {services.map((service) => (
                <article className="card" key={service.title}>
                  <div className="card-photo">
                    <Image
                      src={service.image}
                      alt={service.alt}
                      fill
                      sizes="(max-width: 720px) 100vw, 33vw"
                      style={{ objectPosition: service.position }}
                    />
                    <span className="card-badge">
                      <Icon name={service.icon} />
                    </span>
                  </div>
                  <div className="card-body">
                    <h3>{service.title}</h3>
                    <p>{service.text}</p>
                    <a className="card-go" href={TEL} aria-label={`Appeler pour ${service.title}`}>
                      <Icon name="arrow" />
                    </a>
                  </div>
                </article>
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
            <a className="btn" href={TEL}>
              Appeler
              <Icon name="arrow" />
            </a>
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

      <footer className="site-footer" id="contact">
        <div className="wrap footer-grid">
          <div>
            <p className="footer-brand">Méca-Extraction33</p>
            <p className="footer-lead">
              Extraction mécanique. Injecteurs, bougies, écrous antivol, vis
              cassées, compresseurs de clim.
            </p>
          </div>
          <div>
            <p className="footer-label">Téléphone</p>
            <a className="footer-phone" href={TEL}>
              {PHONE}
            </a>
            <p className="footer-note">Appel ou SMS.</p>
          </div>
          <div>
            <p className="footer-label">Adresse</p>
            <p>
              34 rue du Professeur Devaux
              <br />
              33800 Bordeaux
            </p>
            <a className="footer-link" href={MAPS} target="_blank" rel="noreferrer">
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
            <p className="footer-note">Dimanche fermé.</p>
          </div>
        </div>
        <div className="map">
          <iframe
            title="Méca-Extraction33, 34 rue du Professeur Devaux, Bordeaux"
            src="https://maps.google.com/maps?q=34%20Rue%20du%20Professeur%20Devaux%2C%2033800%20Bordeaux&z=16&hl=fr&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="wrap footer-bottom">
          <p>© {new Date().getFullYear()} Méca-Extraction33 · Bordeaux</p>
          <p>Photos d’illustration.</p>
        </div>
      </footer>
    </>
  );
}
