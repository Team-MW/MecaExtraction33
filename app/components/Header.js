"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Icon from "./Icons";

const LINKS = [
  { href: "/", label: "Accueil" },
  { href: "/interventions", label: "Interventions" },
  { href: "/metier", label: "Le métier" },
  { href: "/contact", label: "Contact" },
];

function isCurrent(path, href) {
  if (href === "/") return path === "/";
  return path === href || path.startsWith(`${href}/`);
}

export default function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(max-width: 1080px)");
    const apply = () => setCompact(query.matches);
    apply();
    query.addEventListener("change", apply);
    return () => query.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [path]);

  useEffect(() => {
    if (!compact) setOpen(false);
  }, [compact]);

  useEffect(() => {
    document.body.classList.toggle("nav-lock", open);
    return () => document.body.classList.remove("nav-lock");
  }, [open]);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={open ? "site-header is-open" : "site-header"}>
      <div className="wrap header-bar">
        <Link className="logo" href="/" onClick={() => setOpen(false)}>
          <span className="logo-mark">
            <Icon name="wrench" />
          </span>
          <span className="logo-text">
            <strong>Méca-Extraction33</strong>
            <small>Bordeaux</small>
          </span>
        </Link>

        <nav
          id="nav-panel"
          className={open ? "nav open" : "nav"}
          aria-label="Navigation"
          inert={compact && !open ? true : undefined}
        >
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={isCurrent(path, link.href) ? "active" : undefined}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a className="nav-call" href="tel:+33614319109" onClick={() => setOpen(false)}>
            06 14 31 91 09
          </a>
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
            className={open ? "burger is-open" : "burger"}
            type="button"
            aria-expanded={open}
            aria-controls="nav-panel"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Fermer le menu" : "Ouvrir le menu"}</span>
            <span className="burger-icon" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
