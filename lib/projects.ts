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
        src: "/images/choux_detail.jpg",
        alt: "Pastry detail",
        title: "Choux Detail",
        caption:
          "Close detail of the choux texture — crisp golden shell, airy hollow interior, generous mousseline filling.",
        techniques: ["Choux baking", "Shell structure", "Cream filling"],
      },
      {
        src: "/images/plating_finish.jpg",
        alt: "Pastry close-up",
        title: "Plating & Finish",
        caption:
          "Final plating — clean lines, precise portions, dusted with icing sugar and served at the right temperature.",
        techniques: ["Plating", "Portion control", "Finishing"],
      },
    ],
  },
  {
    number: "04",
    title: "STRAWBERRY CHEESECAKE",
    description:
      "Creamy baked cheesecake flavored with fresh strawberries on a buttery biscuit base, finished with a smooth strawberry glaze and fresh fruit accents.",
    images: [
      {
        src: "/images/strawberry_cheesecake.jpg",
        alt: "Strawberry cheesecake",
        title: "Strawberry Cheesecake",
        caption:
          "Creamy baked cheesecake flavored with fresh strawberries on a buttery biscuit base, finished with a smooth strawberry glaze and fresh fruit accents.",
        techniques: ["Biscuit base (crushed & pressed)", "Baked cheesecake", "Strawberry coulis / insert", "Glazing & finishing"],
      },
    ],
  },
  {
    number: "05",
    title: "TARTE TATIN REVISITÉE",
    description:
      "Modern interpretation of the classic French upside-down apple tart, featuring caramelized apples with a glossy caramel glaze and crisp buttery pastry base.",
    images: [
      {
        src: "/images/tarte_tatin.jpg",
        alt: "Tarte Tatin revisitée",
        title: "Tarte Tatin Revisitée",
        caption:
          "Modern interpretation of the classic French upside-down apple tart, featuring caramelized apples with a glossy caramel glaze and crisp buttery pastry base.",
        techniques: ["Caramelization", "Shortcrust base", "Upside-down baking method", "Caramel glaze finishing"],
      },
    ],
  },
  {
    number: "06",
    title: "SWISS ROLL",
    description:
      "Light and airy sponge cake rolled with a smooth cream filling, finished with a clean spiral presentation.",
    images: [
      {
        src: "/images/swiss_roll.jpg",
        alt: "Swiss roll",
        title: "Swiss Roll",
        caption:
          "Light and airy sponge cake rolled with a smooth cream filling, finished with a clean spiral presentation.",
        techniques: ["Sponge cake (génoise)", "Rolling technique", "Whipped cream filling", "Precision rolling & shaping"],
      },
    ],
  },
  {
    number: "07",
    title: "FERROCHE CAKE",
    description:
      "Chocolate-based cake inspired by hazelnut praline flavors with a crunchy texture and rich cocoa profile.",
    images: [
      {
        src: "/images/ferroche_cake.jpg",
        alt: "Ferroche cake",
        title: "Ferroche Cake",
        caption:
          "Chocolate-based cake inspired by hazelnut praline flavors with a crunchy texture and rich cocoa profile.",
        techniques: ["Chocolate sponge", "Hazelnut praline", "Crunch layers", "Ganache integration"],
      },
    ],
  },
  {
    number: "08",
    title: "CHOCOLATE GANACHE BROWNIES",
    description:
      "Dense fudgy brownies enriched with dark chocolate ganache for an intense and rich chocolate experience.",
    images: [
      {
        src: "/images/ganache_brownies.jpg",
        alt: "Chocolate ganache brownies",
        title: "Chocolate Ganache Brownies",
        caption:
          "Dense fudgy brownies enriched with dark chocolate ganache for an intense and rich chocolate experience.",
        techniques: ["Fudgy brownie base", "Chocolate ganache", "Controlled baking", "Texture balance (soft & dense)"],
      },
    ],
  },
  {
    number: "09",
    title: "APPLE TART",
    description:
      "Classic French apple tart with thinly sliced apples arranged over a crisp pastry shell and glazed for shine.",
    images: [
      {
        src: "/images/apple_tart.jpg",
        alt: "Apple tart",
        title: "Apple Tart",
        caption:
          "Classic French apple tart with thinly sliced apples arranged over a crisp pastry shell and glazed for shine.",
        techniques: ["Shortcrust pastry (pâte sucrée)", "Apple slicing & arrangement", "Baking control", "Apricot glaze finishing"],
      },
    ],
  },
  {
    number: "10",
    title: "PETIT FOURS COLLECTION",
    description:
      "An assorted collection of refined bite-sized pastries showcasing different textures and techniques, from airy choux to rich chocolate and buttery sablé bases.",
    images: [
      {
        src: "/images/petit_fours.jpg",
        alt: "Petit fours collection",
        title: "Petit Fours Collection",
        caption:
          "An assorted collection of refined bite-sized pastries — choux pastry, brownies, chocolate mousse and sablé Breton — showcasing different textures and techniques.",
        techniques: ["Choux pastry", "Chocolate mousse", "Sablé Breton", "Brownie production", "Small-format finishing & glazing"],
      },
    ],
  },
  {
    number: "11",
    title: "ENTREMET FRAMBOISE",
    description:
      "Elegant raspberry entremet composed of soft mousse layers with a fruity raspberry insert, set on a delicate biscuit base and finished with a smooth glaze.",
    images: [
      {
        src: "/images/entremet_framboise.jpg",
        alt: "Entremet framboise",
        title: "Entremet Framboise",
        caption:
          "Elegant raspberry entremet composed of soft mousse layers with a fruity raspberry insert, set on a delicate biscuit base and finished with a smooth mirror glaze.",
        techniques: ["Raspberry mousse", "Fruit insert (coulis/gel)", "Biscuit base", "Mirror glaze", "Layered entremet assembly"],
      },
    ],
  },
];
