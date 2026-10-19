import Link from "next/link";
import { MAPS, PHONE, TEL, offers } from "../data/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div>
          <p className="footer-brand">Méca-Extraction33</p>
          <p className="footer-lead">
            Extraction mécanique. Injecteurs, bougies, écrous antivol, vis
            cassées, compresseurs de clim.
          </p>
          <ul className="footer-links">
            {offers.map((offer) => (
              <li key={offer.slug}>
                <Link href={`/interventions/${offer.slug}`}>{offer.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="footer-label">Téléphone</p>
          <a className="footer-phone" href={TEL}>
            {PHONE}
          </a>
          <p className="footer-note">Appel ou SMS. Lun–sam, 9h–18h.</p>
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
          <p className="footer-label">Pages</p>
          <ul className="footer-links">
            <li>
              <Link href="/interventions">Interventions</Link>
            </li>
            <li>
              <Link href="/metier">Le métier</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
          <p className="footer-note">Dimanche fermé.</p>
        </div>
      </div>
      <div className="wrap footer-bottom">
        <p>© {new Date().getFullYear()} Méca-Extraction33 · Bordeaux</p>
        <p>Photos d’illustration.</p>
      </div>
    </footer>
  );
}
