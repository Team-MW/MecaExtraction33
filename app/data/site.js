export const PHONE = "06 14 31 91 09";
export const TEL = "tel:+33614319109";
export const MAPS =
  "https://www.google.com/maps/dir/?api=1&destination=34%20Rue%20du%20Professeur%20Devaux%2033800%20Bordeaux";
export const MAP_EMBED =
  "https://maps.google.com/maps?q=34%20Rue%20du%20Professeur%20Devaux%2C%2033800%20Bordeaux&z=16&hl=fr&output=embed";

export const offers = [
  {
    slug: "injecteurs-grippes",
    title: "Injecteurs grippés",
    short: "Coincés dans la culasse. Je les sors sans ouvrir tout le moteur.",
    lead: "Sur un diesel, un injecteur grippé ne se dévisse plus. Le garage parle souvent de déculasser. Je viens l’extraire.",
    image: "/images/injecteurs.jpg",
    alt: "Mécanicien éclairant un compartiment moteur",
    icon: "extractor",
    position: "center 40%",
    eyebrow: "Diesel",
    titleLine: "L’injecteur",
    titleAccent: "qui ne sort plus.",
    situation: [
      "Ça arrive au remplacement, ou après une tentative déjà ratée. L’injecteur a pris l’humidité, le calcaire, ou il est collé dans son puits depuis des années.",
      "Le moteur tourne encore, ou il est déjà ouvert sur le parking d’un atelier qui ne veut pas aller plus loin. Dans les deux cas, le véhicule reste bloqué tant que la pièce n’est pas sortie.",
    ],
    approach: [
      "Je sors l’injecteur sans ouvrir toute la culasse pour le principe. Le but est d’extraire la pièce, pas de transformer une panne d’injecteur en dépose moteur.",
      "Si le puits est marqué, je le dis avant de continuer. On ne remonte pas à l’aveugle sur un logement abîmé.",
    ],
    before: [
      "Diesel, et le modèle du véhicule si vous l’avez",
      "Si quelqu’un a déjà forcé dessus",
      "Où se trouve la voiture",
    ],
    related: ["bougies-prechauffage", "vis-goujons-casses", "urgence-sur-place"],
  },
  {
    slug: "bougies-prechauffage",
    title: "Bougies de préchauffage",
    short: "Cassées au démontage. Le reste de la bougie sort du puits.",
    lead: "La bougie casse au dévissage. Le corps sort, l’embout reste dans la culasse. Beaucoup d’ateliers s’arrêtent là.",
    image: "/images/bougies.jpg",
    alt: "Clé sur le haut d’un moteur",
    icon: "plug",
    position: "18% 45%",
    eyebrow: "Diesel",
    titleLine: "La bougie a cassé",
    titleAccent: "dans le puits.",
    situation: [
      "Les bougies de préchauffage vivent dans la culasse, au chaud, parfois depuis très longtemps. Le jour où on les change, le corps ou le filetage lâche.",
      "Démarrage difficile à froid, voyant de préchauffage, ou simplement un entretien qui tourne mal : c’est souvent comme ça que l’appel arrive. Le garage a la bougie en deux morceaux, et le deuxième morceau est encore dedans.",
    ],
    approach: [
      "Je sors ce qui reste dans le puits, sans déculasser parce qu’une bougie a cassé. Une fois le logement libre, la bougie neuve peut se reposer.",
      "Si le filetage est abîmé, je le dis. Mieux vaut le savoir avant de forcer une neuve dans un pas de vis mort.",
    ],
    before: [
      "Combien de bougies ont cassé",
      "Si une extraction a déjà été tentée",
      "Où est le véhicule",
    ],
    related: ["injecteurs-grippes", "vis-goujons-casses", "urgence-sur-place"],
  },
  {
    slug: "ecrous-antivol",
    title: "Écrous antivol",
    short: "Clé perdue ou douille foirée. La roue est libérée sur place.",
    lead: "La clé d’antivol a disparu, ou la douille a arrondi l’écrou. Le pneu est à plat, les freins attendent, et la roue ne descend pas.",
    image: "/images/ecrous.jpg",
    alt: "Jante et écrous de roue",
    icon: "nut",
    position: "center 55%",
    eyebrow: "Roues",
    titleLine: "La roue",
    titleAccent: "ne descend plus.",
    situation: [
      "L’écrou antivol protège les jantes. Le jour où la douille spéciale n’est plus dans le coffre, ou que quelqu’un a déjà forcé avec un outil trop juste, plus personne ne démonte la roue.",
      "Les centres auto renvoient souvent la voiture. Entre-temps, un pneu crevé ou un frein à faire restent en plan.",
    ],
    approach: [
      "Je libère la roue sur place, chez vous ou là où le véhicule est arrêté. Pas besoin d’un pont de concession.",
      "Une roue, ou les quatre si tous les antivols sont coincés. Une fois la roue descendue, le pneu ou le frein peut enfin se faire.",
    ],
    before: [
      "Une roue ou les quatre",
      "Si la clé est perdue ou si l’écrou est déjà abîmé",
      "Si la voiture est chez vous ou immobilisée dehors",
    ],
    related: ["vis-goujons-casses", "urgence-sur-place", "injecteurs-grippes"],
  },
  {
    slug: "vis-goujons-casses",
    title: "Vis et goujons cassés",
    short: "Vis noyée, goujon arraché. J’extrais, puis je reprends le filetage si besoin.",
    lead: "La vis casse au démontage. La tête est foirée, ou le goujon reste dans le taraudage. Le reste du chantier attend.",
    image: "/images/vis.jpg",
    alt: "Clés et pinces sur un établi",
    icon: "screw",
    position: "center 40%",
    eyebrow: "Extraction",
    titleLine: "La vis a cassé.",
    titleAccent: "Le reste est dedans.",
    situation: [
      "Échappement, étrier, cache, support : une vis rouillée ou trop serrée casse net. Parfois elle a déjà été foirée par un démontage précédent.",
      "L’atelier peut finir son travail seulement si la vis sort. Sinon le véhicule reste ouvert, ou on vous propose de changer la pièce entière pour une vis.",
    ],
    approach: [
      "J’extrais la vis ou le goujon. C’est le même geste que pour un injecteur ou une bougie : sortir ce qui ne veut plus sortir, sans tout casser autour.",
      "Si le taraudage est mort, je le reprends pour que la pièce se remonte. On ne remplace pas un organe pour une vis.",
    ],
    before: [
      "Où la vis a cassé",
      "Si elle affleure encore ou si elle est noyée",
      "Où se trouve le véhicule",
    ],
    related: ["injecteurs-grippes", "bougies-prechauffage", "ecrous-antivol"],
  },
  {
    slug: "compresseurs-clim",
    title: "Compresseurs de clim",
    short: "Je refais le compresseur pour retrouver le froid.",
    lead: "La clim ne fait plus de froid, le compresseur grogne ou il a serré. Je le refais, plutôt que de le jeter d’office.",
    image: "/images/clim.jpg",
    alt: "Courroie et compresseur sur un moteur",
    icon: "snow",
    position: "center 45%",
    eyebrow: "Climatisation",
    titleLine: "Le compresseur,",
    titleAccent: "refait.",
    situation: [
      "L’air sort tiède, l’habitacle ne rafraîchit plus, ou le compresseur fait un bruit qu’il ne faisait pas. Sur beaucoup de véhicules, c’est lui le problème, pas toute la clim.",
      "Un garage généraliste change souvent l’ensemble. Le compresseur, lui, se reconditionne dans pas mal de cas. C’est le travail à côté de l’extraction.",
    ],
    approach: [
      "On en parle d’abord au téléphone, avec le modèle du véhicule, pour savoir si le compresseur se tente avant de tout démonter.",
      "Je le refais pour retrouver le froid. Si l’état de la pièce ne le permet pas, je le dis, je ne la remonte pas pour la forme.",
    ],
    before: [
      "Le modèle du véhicule",
      "Si la clim souffle encore un peu, ou plus du tout",
      "Si le compresseur fait du bruit",
    ],
    related: ["urgence-sur-place", "injecteurs-grippes", "vis-goujons-casses"],
  },
  {
    slug: "urgence-sur-place",
    title: "Urgence sur place",
    short: "J’interviens sur le véhicule, chez vous ou là où il est arrêté.",
    lead: "Pas besoin de remorquer jusqu’à un garage qui dira non. Du lundi au samedi, 9h–18h, je me déplace.",
    image: "/images/deplacement.jpg",
    alt: "Intervention sous un véhicule",
    icon: "pin",
    position: "center 60%",
    eyebrow: "Déplacement",
    titleLine: "J’interviens",
    titleAccent: "là où elle est.",
    situation: [
      "La voiture est chez vous, sur le parking de l’atelier qui a abandonné, ou arrêtée là où la panne l’a laissée. La faire transporter pour s’entendre dire que la pièce ne sort pas, ça ne sert à rien.",
      "Injecteur, bougie, écrou antivol, vis cassée : l’extraction se fait souvent sur le véhicule, sans pont.",
    ],
    approach: [
      "Vous appelez ou vous envoyez un SMS. Vous dites ce qui bloque et où est la voiture. Je pars de Bordeaux, au 34 rue du Professeur Devaux, avec l’outillage d’extraction.",
      "Les horaires sont ceux de l’atelier : lundi au samedi, 9h–18h. Pas la nuit, pas le dimanche.",
    ],
    before: [
      "Ce qui est bloqué",
      "L’adresse exacte du véhicule",
      "Un créneau dans la journée, lun–sam",
    ],
    related: ["injecteurs-grippes", "bougies-prechauffage", "ecrous-antivol"],
  },
];

export function getOffer(slug) {
  return offers.find((offer) => offer.slug === slug);
}

export function relatedOffers(offer) {
  return offer.related.map((slug) => getOffer(slug)).filter(Boolean);
}
