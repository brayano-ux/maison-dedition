export interface Book {
  id: number;
  title: string;
  ageRange: string;
  pages: number;
  illustrations: number;
  category: string;
  badge: 'Best-seller' | 'Nouveau';
  description: string;
  tags: string[];
  image: string;
  pricePDF: number;
  pricePrint: number;
}

export const books: Book[] = [
  {
    id: 1,
    title: "Amina et le Secret du Baobab",
    ageRange: "4-10 ans",
    pages: 21,
    illustrations: 19,
    category: "Aventure",
    badge: "Best-seller",
    description: "Amina, une petite fille curieuse, decouvre que le vrai secret du grand baobab est la soif d'apprendre. Une histoire sur la curiosite, le courage et la sagesse africaine.",
    tags: ["Aventure", "Sagesse", "Curiosite"],
    image: "/book-amina.jpg",
    pricePDF: 1500,
    pricePrint: 2500,
  },
  {
    id: 2,
    title: "Les Aventures de la Tortue",
    ageRange: "4-8 ans",
    pages: 18,
    illustrations: 16,
    category: "Aventure",
    badge: "Nouveau",
    description: "La tortue est petite mais tres maligne ! Suivez ses aventures pleines de ruses a travers la foret africaine. Une fable sur la perseverance et l'intelligence.",
    tags: ["Aventure", "Animaux", "Fable"],
    image: "/book-tortue.jpg",
    pricePDF: 1500,
    pricePrint: 2500,
  },
  {
    id: 3,
    title: "Le Petit Pecheur",
    ageRange: "5-10 ans",
    pages: 20,
    illustrations: 17,
    category: "Vie du village",
    badge: "Nouveau",
    description: "Kofi reve de devenir le meilleur pecheur du lac. Il apprend chaque matin aupres de son grand-pere. Une histoire sur le travail, la patience et la transmission familiale.",
    tags: ["Village", "Famille", "Lac"],
    image: "/book-pecheur.jpg",
    pricePDF: 1500,
    pricePrint: 2500,
  },
  {
    id: 4,
    title: "L'Ane Paresseux",
    ageRange: "4-7 ans",
    pages: 16,
    illustrations: 14,
    category: "Fables",
    badge: "Nouveau",
    description: "Cet ane ne veut jamais travailler ! Mais un jour il comprend que la paresse ne mene nulle part. Une fable drole et educative sur la valeur du travail.",
    tags: ["Fable", "Animaux", "Travail"],
    image: "/book-ane.jpg",
    pricePDF: 1500,
    pricePrint: 2500,
  },
  {
    id: 5,
    title: "Le Vieux du Village",
    ageRange: "6-10 ans",
    pages: 22,
    illustrations: 18,
    category: "Vie du village",
    badge: "Nouveau",
    description: "Le vieux Ngando connait toutes les histoires du village. Un livre sur la transmission, les racines et la memoire africaine.",
    tags: ["Village", "Traditions", "Memoire"],
    image: "/book-vieux.jpg",
    pricePDF: 1500,
    pricePrint: 2500,
  },
];

export const categories = ["Tous", "Aventure", "Fables", "Vie du village"];

export const WHATSAPP_NUMBER = "237683260520";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;
