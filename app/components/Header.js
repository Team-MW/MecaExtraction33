"use client";

import { useEffect, useState } from "react";
import Icon from "./Icons";

const LINKS = [
  { href: "#top", id: "top", label: "Accueil" },
  { href: "#interventions", id: "interventions", label: "Interventions" },
  { href: "#metier", id: "metier", label: "Le métier" },
  { href: "#contact", id: "contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("top");

  useEffect(() => {
    const nodes = LINKS.map((link) => document.getElementById(link.id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.classList.toggle("nav-lock", open);
    return () => document.body.classList.remove("nav-lock");
  }, [open]);

  return (
    <header className="site-header">
      <div className="wrap header-bar">
        <a className="logo" href="#top" onClick={() => setOpen(false)}>
          <span className="logo-mark">
            <Icon name="wrench" />
          </span>
          <span className="logo-text">
            <strong>Méca-Extraction33</strong>
            <small>Bordeaux</small>
          </span>
        </a>

        <nav id="nav-panel" className={open ? "nav open" : "nav"} aria-label="Navigation">
          {LINKS.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={active === link.id ? "active" : undefined}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="header-tools">
          <a className="head-phone" href="tel:+33614319109" aria-label="Appeler le 06 14 31 91 09">
            <span className="head-phone-text">
              <small>Appelez</small>
              <strong>06 14 31 91 09</strong>
            </span>
            <span className="head-phone-icon">
              <Icon name="phone" />
            </span>
          </a>
          <button
            className="burger"
            type="button"
            aria-expanded={open}
            aria-controls="nav-panel"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Fermer le menu" : "Ouvrir le menu"}</span>
            <i />
            <i />
            <i />
          </button>
        </div>
      </div>
    </header>
  );
}
