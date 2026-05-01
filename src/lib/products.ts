import throw1 from "@/assets/action-throw-1.jpg";
import catch1 from "@/assets/action-catch-1.jpg";
import throw2 from "@/assets/action-throw-2.jpg";
import catch2 from "@/assets/action-catch-2.jpg";
import throw3 from "@/assets/action-throw-3.jpg";
import catch3 from "@/assets/action-catch-3.jpg";
import look1 from "@/assets/look-1.jpg";
import look2 from "@/assets/look-2.jpg";
import look3 from "@/assets/look-3.jpg";
import look4 from "@/assets/look-4.jpg";

export type Product = {
  slug: string;
  name: string;
  piece: string;
  price: number;
  priceLabel: string;
  image: string;
  alt: string;
  category: string;
  sizes: string[];
  description: string;
  details: string[];
  composition: string;
};

const baseSizes = ["XS", "S", "M", "L", "XL"];

export const products: Product[] = [
  {
    slug: "atlas-cream-linen-shirt",
    name: "ATLAS",
    piece: "Cream Linen Throwing Shirt",
    price: 240,
    priceLabel: "€240",
    image: throw1,
    alt: "Model mid-throw in cream linen shirt and wide trousers",
    category: "Shirting",
    sizes: baseSizes,
    description:
      "A featherweight linen shirt cut with a generous shoulder and dropped sleeve — engineered to move with the body. Worn open or buttoned, it folds and falls without restraint.",
    details: [
      "Oversized fit, dropped shoulder",
      "Mother-of-pearl buttons",
      "Garment-washed for softness",
      "Made in Portugal",
    ],
    composition: "100% European linen",
  },
  {
    slug: "venera-ivory-wool-suit",
    name: "VENERA",
    piece: "Ivory Wool Reaching Suit",
    price: 780,
    priceLabel: "€780",
    image: catch1,
    alt: "Model catching a basketball in ivory wool tailored suit",
    category: "Tailoring",
    sizes: baseSizes,
    description:
      "An unstructured two-piece in featherweight virgin wool. Soft shoulders, a single button closure and trousers that pool around the ankle — tailoring built for reach.",
    details: [
      "Unstructured shoulder",
      "Single-button jacket",
      "Side-adjuster trousers",
      "Half-canvas construction",
    ],
    composition: "92% Virgin wool, 8% silk",
  },
  {
    slug: "birch-camel-knit-set",
    name: "BIRCH",
    piece: "Camel Knit & Cargo Set",
    price: 420,
    priceLabel: "€420",
    image: throw2,
    alt: "Model kicking a ball in camel knit sweater and cargo trousers",
    category: "Knitwear",
    sizes: baseSizes,
    description:
      "A boxy lambswool crewneck paired with relaxed cargo trousers in matched camel. The set is sold together — but designed to live separately in your wardrobe.",
    details: [
      "Boxy crewneck, ribbed hem",
      "Wide cargo with bellowed pocket",
      "Matched camel dye lot",
      "Hand-finished seams",
    ],
    composition: "100% Lambswool / 100% Cotton twill",
  },
  {
    slug: "pleat-linen-shirt-skirt",
    name: "PLEAT",
    piece: "Linen Shirt & Pleated Skirt",
    price: 365,
    priceLabel: "€365",
    image: catch2,
    alt: "Model receiving a ball with foot in pleated cream skirt",
    category: "Sets",
    sizes: baseSizes,
    description:
      "A crisp poplin shirt over a long, deeply pleated skirt that catches the wind. Quietly architectural, fully wearable.",
    details: [
      "Pressed knife pleats",
      "Hidden side zip",
      "Boxy poplin overshirt",
      "Falls just above ankle",
    ],
    composition: "70% Linen, 30% Cotton",
  },
  {
    slug: "drape-camel-cocoon-coat",
    name: "DRAPE",
    piece: "Wool Camel Cocoon Coat",
    price: 890,
    priceLabel: "€890",
    image: throw3,
    alt: "Model tossing ball upward in draped camel wool coat",
    category: "Outerwear",
    sizes: baseSizes,
    description:
      "Our signature cocoon silhouette in a heavy camel-hair blend. A coat that wraps rather than buttons — softness with weight.",
    details: [
      "Cocoon silhouette",
      "Concealed snap closure",
      "Welt pockets",
      "Cupro lining",
    ],
    composition: "70% Wool, 30% Camel hair",
  },
  {
    slug: "oxide-tan-leather-jacket",
    name: "OXIDE",
    piece: "Tan Leather Catch Jacket",
    price: 1150,
    priceLabel: "€1,150",
    image: catch3,
    alt: "Model leaning back catching ball in tan leather jacket",
    category: "Outerwear",
    sizes: baseSizes,
    description:
      "Vegetable-tanned lambskin in a worn cognac. Cropped, soft and built to crease — a jacket designed to record the years it spends with you.",
    details: [
      "Vegetable-tanned lambskin",
      "Asymmetric zip",
      "Cropped at the hip",
      "Made in Italy",
    ],
    composition: "100% Lambskin leather",
  },
  {
    slug: "knit-no-04",
    name: "KNIT N°04",
    piece: "Ribbed Cashmere Sweater",
    price: 295,
    priceLabel: "€295",
    image: look1,
    alt: "Editorial still life of folded ribbed cashmere knit",
    category: "Knitwear",
    sizes: baseSizes,
    description:
      "A heavy gauge ribbed cashmere with a high funnel collar. Dense, weighty, slow to wear out.",
    details: ["7-gauge rib", "High funnel collar", "Ribbed cuffs and hem", "Hand-finished"],
    composition: "100% Mongolian cashmere",
  },
  {
    slug: "folded-cashmere",
    name: "FOLDED CASHMERE",
    piece: "Cashmere Stack Cardigan",
    price: 340,
    priceLabel: "€340",
    image: look2,
    alt: "Folded stack of cashmere garments in cream tones",
    category: "Knitwear",
    sizes: baseSizes,
    description:
      "An open-front cardigan in lofty cashmere. No buttons, no closures — meant to be wrapped, layered, lived in.",
    details: ["Open front", "Drop shoulder", "Patch pockets", "Garment dyed"],
    composition: "100% Cashmere",
  },
  {
    slug: "camel-trench",
    name: "CAMEL TRENCH",
    piece: "Cotton Gabardine Trench",
    price: 720,
    priceLabel: "€720",
    image: look3,
    alt: "Model in long camel cotton gabardine trench coat",
    category: "Outerwear",
    sizes: baseSizes,
    description:
      "The house trench, re-cut for SS26. A wider lapel, a longer hem, the same uncompromising gabardine.",
    details: [
      "Double-breasted",
      "Storm flap and gun yoke",
      "Belted cuffs and waist",
      "Mid-calf length",
    ],
    composition: "100% Cotton gabardine",
  },
  {
    slug: "chalk-pleated-trouser",
    name: "CHALK",
    piece: "High-Waist Pleated Trouser",
    price: 320,
    priceLabel: "€320",
    image: look4,
    alt: "Editorial portrait in high-waist pleated chalk trousers",
    category: "Tailoring",
    sizes: baseSizes,
    description:
      "A high-rise pleated trouser in dry chalk wool. Sits at the natural waist and breaks once at the shoe.",
    details: [
      "Double forward pleats",
      "Hook-and-bar closure",
      "Side adjusters",
      "Unfinished hem",
    ],
    composition: "100% Virgin wool",
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
