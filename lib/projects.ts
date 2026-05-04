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
};

export const projects: Project[] = [
  {
    number: "01",
    title: "LEMON MERINGUE TARTS",
    description:
      "Balance between acidity and sweetness. Pâte sucrée base, lemon curd filling and torched Italian meringue for a clean, precise finish.",
    images: [
      {
        src: "/images/lemon_tart.jpg",
        alt: "Lemon tart full view",
        title: "Lemon Meringue Tart",
        caption:
          "Pâte sucrée shell blind-baked to a deep golden colour, filled with silky lemon curd and topped with torched Italian meringue.",
        techniques: ["Pâte sucrée", "Lemon curd", "Italian meringue", "Blind baking", "Torching"],
      },
      {
        src: "/images/caramel_squares.jpg",
        alt: "Caramel squares",
        title: "Salted Caramel Squares",
        caption:
          "Soft caramel set over a buttery shortbread base, seasoned with fleur de sel and cut into precise uniform squares.",
        techniques: ["Shortbread", "Caramel cuisson", "Fleur de sel", "Precision cutting"],
      },
      {
        src: "/images/raspberry_mousse.jpg",
        alt: "Raspberry mousse",
        title: "Raspberry Mousse",
        caption:
          "Light raspberry mousse with a fresh coulis insert, unmoulded and glazed to order with a neutral mirror glaze.",
        techniques: ["Bavarois mousse", "Fruit insert", "Mirror glaze", "Unmoulding"],
      },
    ],
  },
  {
    number: "02",
    title: "CHOCOLATE ENTREMETS",
    description:
      "Layering, texture control and intense chocolate flavors. Dark glaze, praline crunch, ganache inserts and gold leaf finishes.",
    images: [
      {
        src: "/images/chocolate_domes.jpg",
        alt: "Chocolate domes",
        title: "Dark Chocolate Domes",
        caption:
          "Dark chocolate domes with a glossy mirror glaze poured at 32°C, set over a praline feuilletine crunch base.",
        techniques: ["Mirror glaze", "Praline feuilletine", "Chocolate mousse", "Tempering"],
      },
      {
        src: "/images/chocolate_hazelnut.jpg",
        alt: "Chocolate hazelnut",
        title: "Chocolate Hazelnut Ganache",
        caption:
          "Chocolate and roasted hazelnut ganache, tempered and enrobed by hand with a thin crisp shell.",
        techniques: ["Ganache", "Tempering", "Hand enrobing", "Roasting"],
      },
      {
        src: "/images/brownies.jpg",
        alt: "Brownies",
        title: "Dark Chocolate Brownies",
        caption:
          "Dense fudge brownie with 70% dark chocolate, baked low and slow for a moist, intense centre.",
        techniques: ["Chocolate baking", "Temperature control", "Fudge texture"],
      },
    ],
  },
  {
    number: "03",
    title: "CLASSIC FRENCH PASTRY",
    description:
      "Rooted in French tradition — Paris-Brest with praline mousseline, choux pastry, seasonal berry entremets and mirror glazing.",
    images: [
      {
        src: "/images/paris_brest.jpg",
        alt: "Paris-Brest",
        title: "Paris-Brest",
        caption:
          "Classic Paris-Brest piped as a choux ring, baked dry, filled with praline mousseline and finished with flaked almonds.",
        techniques: ["Choux pastry", "Praline mousseline", "Piping", "Lamination"],
      },
      {
        src: "/images/WhatsApp Image 2026-05-04 at 16.13.09.jpeg",
        alt: "Pastry detail",
        title: "Choux Detail",
        caption:
          "Close detail of the choux texture — crisp golden shell, airy hollow interior, generous mousseline filling.",
        techniques: ["Choux baking", "Shell structure", "Cream filling"],
      },
      {
        src: "/images/WhatsApp Image 2026-05-04 at 16.14.09.jpeg",
        alt: "Pastry close-up",
        title: "Plating & Finish",
        caption:
          "Final plating — clean lines, precise portions, dusted with icing sugar and served at the right temperature.",
        techniques: ["Plating", "Portion control", "Finishing"],
      },
    ],
  },
];
