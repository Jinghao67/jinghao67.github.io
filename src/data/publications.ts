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
    title: "Do ResNets Route? Sparse Interaction Experts in Residual Networks",
    authors:
      "Liang Yan, Siying Chen, Kaijie Chen, Bo Li, Jinghao Zhang, Mu Miao",
    venue: "arXiv preprint",
    year: 2026,
    summary:
      "Using an exact decomposition into residual-branch interactions, we show that pretrained ResNets exhibit input-dependent soft routing: different inputs emphasize different interactions, even though all residual blocks are executed.",
    image: "/uploads/resnets-route.png",
    selected: true,
    links: [
      { label: "arXiv", href: "https://arxiv.org/abs/2610.02907" },
      { label: "PDF", href: "https://arxiv.org/pdf/2610.02907" },
      {
        label: "Code",
        href: "https://github.com/yanliang3612/resnets-route-without-routers",
      },
    ],
  },
  {
    title:
      "SaToMe: Salience-Driven Token Merging for Omni-Capable Diffusion MLLMs",
    authors: "Anonymous ACL submission",
    venue: "EMNLP 2026",
    year: 2026,
    summary:
      "A training-free token-merging method that uses local representational uniqueness from hidden states and update directions to accelerate both text-to-image generation and image-to-text understanding, achieving substantial wall-clock speedups on LLaDA-o and LaViDa while preserving task quality.",
    image: "/uploads/publication-placeholder.svg",
    selected: true,
    links: [{ label: "PDF", href: "/uploads/satome-emnlp.pdf" }],
  },
];
