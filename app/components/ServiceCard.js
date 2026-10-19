import Image from "next/image";
import Link from "next/link";
import Icon from "./Icons";

export default function ServiceCard({ offer }) {
  return (
    <Link href={`/interventions/${offer.slug}`} className="card">
      <div className="card-photo">
        <Image
          src={offer.image}
          alt={offer.alt}
          fill
          sizes="(max-width: 720px) 100vw, 33vw"
          style={{ objectPosition: offer.position }}
        />
        <span className="card-badge">
          <Icon name={offer.icon} />
        </span>
      </div>
      <div className="card-body">
        <h3>{offer.title}</h3>
        <p>{offer.short}</p>
        <div className="card-foot">
          <span className="card-more">Voir l’intervention</span>
          <span className="card-go" aria-hidden="true">
            <Icon name="arrow" />
          </span>
        </div>
      </div>
    </Link>
  );
}
