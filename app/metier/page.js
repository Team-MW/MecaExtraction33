import Link from "next/link";
import PageHero from "../components/PageHero";
import { offers } from "../data/site";
import Icon from "../components/Icons";

export const metadata = {
  title: "Le métier · Méca-Extraction33",
  description:
    "Méca-Extraction33 extrait les pièces que les garages classiques refusent : injecteurs, bougies, écrous antivol, vis cassées. Déplacement à Bordeaux.",
};

export default function MetierPage() {
  return (
    <main>
      <PageHero
        image="/images/about.jpg"
        alt="Mécanicien au travail sous un capot"
        position="center 30%"
        eyebrow="Bordeaux"
        title="Le gars qu’on appelle"
        accent="quand ça coince."
        lead="Pas une équipe, pas un accueil avec café. Un poste d’extraction, et un déplacement quand le véhicule ne bouge plus."
        crumbs={[{ href: "/", label: "Accueil" }]}
      />

      <section className="sheet">
        <div className="wrap sheet-grid">
          <article>
            <h2>Ce que les garages renvoient</h2>
            <p>
              Un atelier classique vit de l’entretien : vidange, freins, pneus,
              distribution. Le jour où l’injecteur ne sort pas, où la bougie casse
              dans la culasse, où l’écrou antivol est rond, le planning s’arrête.
              Déculasser ou changer le bloc prend la place de trois voitures. Alors
              on vous rend les clés.
            </p>
            <p>
              C’est là que j’interviens. L’extraction, c’est sortir la pièce sans
              ouvrir la moitié du moteur pour le principe. Les clients résument
              souvent ça en un mot, magicien. Concrètement : de l’outillage, du
              temps, et le refus de remplacer un organe pour une vis.
            </p>
            <h2>Ce que je ne fais pas</h2>
            <p>
              Je ne suis pas le garage de la révision du samedi. Pas de forfait
              vidange, pas de contrôle technique, pas d’équipe de dix personnes.
              Les horaires sont simples : lundi au samedi, 9h–18h. Le dimanche, c’est
              fermé. La nuit aussi.
            </p>
            <p>
              La base est au 34 rue du Professeur Devaux, 33800 Bordeaux. La plupart
              des interventions se font sur le véhicule, chez vous ou là où il est
              arrêté. Y compris sur le parking du garage qui a dit non.
            </p>
            <h2>La clim, à côté</h2>
            <p>
              À côté de l’extraction, je refais des compresseurs de climatisation.
              Quand la clim ne fait plus de froid et que le compresseur est en
              cause, on en parle avant de tout remplacer.
            </p>
            <p>
              <Link href="/contact" className="inline-link">
                Dire où est la voiture
                <Icon name="arrow" />
              </Link>
            </p>
          </article>
          <aside className="sheet-aside">
            <p className="kicker">Les offres</p>
            <ul className="offer-index">
              {offers.map((offer) => (
                <li key={offer.slug}>
                  <Link href={`/interventions/${offer.slug}`}>
                    <Icon name={offer.icon} />
                    <span>{offer.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
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
            <p>« Un magicien. Il intervient là où les garages classiques refusent. »</p>
            <footer>Comme en parlent ses clients</footer>
          </blockquote>
        </div>
      </section>
    </main>
  );
}
