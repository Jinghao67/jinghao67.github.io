export type PublicationLink = {
  label: string;
  href: string;
};

export type Publication = {
  title: string;
  authors: string;
  venue: string;
  year: number;
  summary?: string;
  image?: string;
  selected?: boolean;
  links?: PublicationLink[];
};

export const publications: Publication[] = [
  {
    title: "Your Research Project Title",
    authors: "Jinghao, Collaborator A, Collaborator B",
    venue: "arXiv preprint",
    year: 2026,
    summary:
      "One concise sentence about the central idea, contribution, or result.",
    image: "/uploads/publication-placeholder.svg",
    selected: true,
    links: [
      { label: "PDF", href: "#" },
      { label: "Code", href: "#" },
    ],
  },
  {
    title: "Another Paper or Technical Report",
    authors: "Jinghao and Collaborators",
    venue: "Conference / Journal",
    year: 2025,
    summary:
      "Replace this placeholder with a short, reader-friendly description.",
    image: "/uploads/publication-placeholder.svg",
    selected: true,
    links: [{ label: "PDF", href: "#" }],
  },
];
