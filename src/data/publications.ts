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
    title:
      "SaToMe: Salience-Driven Token Merging for Omni-Capable Diffusion MLLMs",
    authors: "Anonymous ACL submission",
    venue: "EMNLP 2026 submission",
    year: 2026,
    summary:
      "A training-free token-merging method that uses local representational uniqueness from hidden states and update directions to accelerate both text-to-image generation and image-to-text understanding, achieving substantial wall-clock speedups on LLaDA-o and LaViDa while preserving task quality.",
    image: "/uploads/publication-placeholder.svg",
    selected: true,
    links: [{ label: "PDF", href: "/uploads/satome-emnlp.pdf" }],
  },
];
