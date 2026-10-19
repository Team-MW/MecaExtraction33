import Image from "next/image";
import Link from "next/link";
import { PHONE, TEL } from "../data/site";
import Icon from "./Icons";

export default function PageHero({
  image,
  alt = "",
  position = "center",
  eyebrow,
  title,
  accent,
  lead,
  crumbs = [],
}) {
  return (
    <section className={image ? "page-hero" : "page-hero page-hero-plain"}>
      {image ? (
        <Image
          src={image}
          alt={alt}
          fill
          priority
          sizes="100vw"
          className="hero-img"
          style={{ objectPosition: position }}
        />
      ) : null}
      <div className="hero-shade" />
      <div className="wrap page-hero-content">
        {crumbs.length > 0 ? (
          <p className="crumb">
            {crumbs.map((crumb, index) => (
              <span key={crumb.href}>
                {index > 0 ? <span aria-hidden="true"> / </span> : null}
                <Link href={crumb.href}>{crumb.label}</Link>
              </span>
            ))}
          </p>
        ) : null}
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h1>
          {title}
          {accent ? <span>{accent}</span> : null}
        </h1>
        {lead ? <p className="hero-lead">{lead}</p> : null}
        <a className="btn" href={TEL}>
          {PHONE}
          <Icon name="arrow" />
        </a>
      </div>
    </section>
  );
}
