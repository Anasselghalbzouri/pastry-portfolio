import { imgSrc } from "./utils";

export type ImageEntry = {
  src: string;
  alt: string;
  title: string;
  caption: string;
  techniques: string[];
};

export type Project = {
  number: string;
  title: string;
  description: string;
  images: ImageEntry[];
  video?: string;
};

export const projects: Project[] = [
  {
    number: "01",
    title: "STRAWBERRY CHEESECAKE",
    description:
      "Creamy baked cheesecake flavored with fresh strawberries on a buttery biscuit base, finished with a smooth strawberry glaze and fresh fruit accents.",
    images: [
      {
        src: imgSrc("/images/strawberry_cheesecake.jpg"),
        alt: "Strawberry cheesecake slice with red glaze",
        title: "Strawberry Cheesecake",
        caption:
          "Creamy baked cheesecake flavored with fresh strawberries on a buttery biscuit base, finished with a smooth strawberry glaze and fresh fruit accents.",
        techniques: [
          "Biscuit base (crushed & pressed)",
          "Baked cheesecake",
          "Strawberry coulis / insert",
          "Glazing & finishing",
        ],
      },
    ],
  },
  {
    number: "02",
    title: "TARTE TATIN REVISITÉE",
    description:
      "Modern interpretation of the classic French upside-down apple tart, featuring caramelized apples with a glossy caramel glaze and crisp buttery pastry base.",
    images: [
      {
        src: imgSrc("/images/tarte_tatin2.jpg"),
        alt: "Tarte Tatin revisitée individual portions with gold leaf",
        title: "Tarte Tatin Revisitée",
        caption:
          "Modern interpretation of the classic French upside-down apple tart, featuring caramelized apples with a glossy caramel glaze and crisp buttery pastry base.",
        techniques: [
          "Caramelization",
          "Shortcrust base",
          "Upside-down baking method",
          "Caramel glaze finishing",
        ],
      },
    ],
  },
  {
    number: "03",
    title: "FERROCHE CAKE",
    description:
      "Layered chocolate and hazelnut praline cake with a crunchy feuilletine base, rich ganache, and a smooth chocolate coating.",
    images: [
      {
        src: imgSrc("/images/ferroche_cake.jpg"),
        alt: "Ferroche cake with hazelnut praline layers",
        title: "Ferroche Cake",
        caption:
          "Layered chocolate and hazelnut praline cake with a crunchy feuilletine base, rich ganache, and a smooth chocolate coating.",
        techniques: [
          "Hazelnut praline",
          "Feuilletine crunch base",
          "Chocolate ganache",
          "Layered assembly",
          "Chocolate coating",
        ],
      },
    ],
  },
  {
    number: "04",
    title: "DARK CHOCOLATE DOMES",
    description:
      "Dark chocolate domes with a glossy mirror glaze poured at 32°C, set over a praline feuilletine crunch base.",
    images: [
      {
        src: imgSrc("/images/ferroche_cake.jpg"),
        alt: "Dark chocolate domes with glossy mirror glaze",
        title: "Dark Chocolate Domes",
        caption:
          "Dark chocolate domes with a glossy mirror glaze poured at 32°C, set over a praline feuilletine crunch base.",
        techniques: [
          "Mirror glaze",
          "Praline feuilletine",
          "Chocolate mousse",
          "Tempering",
        ],
      },
    ],
  },
  {
    number: "05",
    title: "CHOCOLATE GANACHE BROWNIES",
    description:
      "Dense fudgy brownies enriched with dark chocolate ganache for an intense and rich chocolate experience.",
    images: [
      {
        src: imgSrc("/images/ganache_brownies.jpg"),
        alt: "Chocolate ganache brownies",
        title: "Chocolate Ganache Brownies",
        caption:
          "Dense fudgy brownies enriched with dark chocolate ganache for an intense and rich chocolate experience.",
        techniques: [
          "Fudgy brownie base",
          "Chocolate ganache",
          "Controlled baking",
          "Texture balance (soft & dense)",
        ],
      },
    ],
  },
  {
    number: "06",
    title: "APPLE TART",
    description:
      "Classic French apple tart with thinly sliced apples arranged over a crisp pastry shell and glazed for shine.",
    images: [
      {
        src: imgSrc("/images/apple_tart2.jpg"),
        alt: "Apple tart with glazed sliced apples",
        title: "Apple Tart",
        caption:
          "Classic French apple tart with thinly sliced apples arranged over a crisp pastry shell and glazed for shine.",
        techniques: [
          "Shortcrust pastry (pâte sucrée)",
          "Apple slicing & arrangement",
          "Baking control",
          "Apricot glaze finishing",
          "Plating & finishes",
        ],
      },
      {
        src: imgSrc("/images/apple_tart.jpg"),
        alt: "Apple tart close-up with precision plating",
        title: "Apple Tart — Plating Detail",
        caption:
          "Precision plating detail of the classic apple tart, highlighting the fan arrangement and lacquered finish.",
        techniques: [
          "Shortcrust pastry (pâte sucrée)",
          "Apple slicing & arrangement",
          "Apricot glaze finishing",
          "Plating & finishes",
        ],
      },
    ],
  },
  {
    number: "07",
    title: "PARIS–BREST",
    description:
      "Classic French choux pastry ring filled with a light hazelnut praline mousseline cream, dusted with powdered sugar and toasted almonds.",
    images: [
      {
        src: imgSrc("/images/petit_fours.jpg"),
        alt: "Paris–Brest choux ring with praline mousseline cream",
        title: "Paris–Brest",
        caption:
          "Classic French choux pastry ring filled with a light hazelnut praline mousseline cream, dusted with powdered sugar and toasted almonds.",
        techniques: [
          "Choux pastry (pâte à choux)",
          "Praline mousseline cream",
          "Piping & shaping",
          "Toasted almond finish",
          "Powdered sugar dusting",
        ],
      },
    ],
  },
  {
    number: "08",
    title: "ENTREMET FRAMBOISE",
    description:
      "Elegant raspberry entremet composed of soft mousse layers with a fruity raspberry insert, set on a delicate biscuit base and finished with a smooth glaze.",
    images: [
      {
        src: imgSrc("/images/entremet_framboise.jpg"),
        alt: "Entremet framboise with mirror glaze",
        title: "Entremet Framboise",
        caption:
          "Elegant raspberry entremet composed of soft mousse layers with a fruity raspberry insert, set on a delicate biscuit base and finished with a smooth mirror glaze.",
        techniques: [
          "Raspberry mousse",
          "Fruit insert (coulis/gel)",
          "Biscuit base",
          "Mirror glaze",
          "Layered entremet assembly",
        ],
      },
    ],
  },
  {
    number: "09",
    title: "TARTE TATIN",
    description:
      "The classic French upside-down caramelized apple tart, baked until the apples are deeply golden and served inverted onto a crisp, buttery pastry base.",
    images: [
      {
        src: imgSrc("/images/tarte_tatin.jpg"),
        alt: "Classic tarte tatin with caramelized apples",
        title: "Tarte Tatin",
        caption:
          "The classic French upside-down caramelized apple tart, baked until the apples are deeply golden and served inverted onto a crisp, buttery pastry base.",
        techniques: [
          "Dry caramelization",
          "Shortcrust pastry",
          "Upside-down baking",
          "Apple compaction",
          "Caramel control",
        ],
      },
    ],
  },
  {
    number: "10",
    title: "PANNA COTTA",
    description:
      "Silky Italian panna cotta set to the perfect wobble, unmoulded clean and finished with a glossy fruit coulis — a study in texture, restraint, and precision.",
    video: imgSrc("/images/panna.mp4"),
    images: [
      {
        src: imgSrc("/images/plating_finish.jpg"),
        alt: "Panna cotta with fruit coulis finish",
        title: "Panna Cotta",
        caption:
          "Silky Italian panna cotta set to the perfect wobble, unmoulded clean and finished with a glossy fruit coulis.",
        techniques: [
          "Gelatin setting & ratio control",
          "Unmoulding technique",
          "Coulis finishing",
          "Texture precision",
          "Plating & finishes",
        ],
      },
    ],
  },
];
