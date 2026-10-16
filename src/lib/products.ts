export type CategoryId = "protein" | "gainers";

export type Category = {
  id: CategoryId;
  name: string;
  tagline: string;
  image: string;
};

export type Product = {
  slug: string;
  name: string;
  line: string;
  category: CategoryId;
  size: string;
  image: string;
  badge?: string;
  /** Per-serving values, as printed on the pack */
  stats: { value: string; label: string }[];
  /** Short pack claims shown as chips */
  highlights: string[];
  description: string;
  benefits: string[];
  usage: string;
};

export const categories: Category[] = [
  { id: "protein", name: "Protein", tagline: "Build lean muscle", image: "/img/products/muscle-protein.webp" },
  { id: "gainers", name: "Gainers", tagline: "Mass & strength", image: "/img/products/muscle-gainer.webp" },
];

export const products: Product[] = [
  {
    slug: "muscle-protein",
    name: "Muscle Protein",
    line: "100% Whey",
    category: "protein",
    size: "1 kg (2.2 lb)",
    image: "/img/products/muscle-protein.webp",
    stats: [
      { value: "25g", label: "Protein" },
      { value: "25g", label: "Amino acids" },
      { value: "6.6g", label: "BCAAs" },
    ],
    highlights: ["Gluten free", "Sugar free", "Soy free"],
    description:
      "Muscle Protein is a 100% whey protein formula with 25 g of protein, 25 g of amino acids and 6.6 g of BCAAs in every serving — built to support lean muscle growth and faster recovery.",
    benefits: [
      "25 g of whey protein per serving",
      "25 g of amino acids, including 6.6 g of BCAAs",
      "Supports muscle growth and recovery",
      "Gluten free, sugar free and soy free",
    ],
    usage: "Mix one serving with water or milk and drink after training or between meals. See the label for full directions.",
  },
  {
    slug: "muscle-gainer",
    name: "Muscle Gainer",
    line: "Max Mass Formula",
    category: "gainers",
    size: "1 kg (2.2 lb)",
    image: "/img/products/muscle-gainer.webp",
    stats: [
      { value: "25g", label: "Protein" },
      { value: "1000", label: "Calories" },
      { value: "200g", label: "Carbs" },
      { value: "5g", label: "BCAAs" },
    ],
    highlights: ["High-calorie weight gainer", "Protein + carbs", "Added BCAAs"],
    description:
      "Muscle Gainer is a high-calorie weight gainer for hard gainers: 1000 calories, 200 g of carbohydrates, 25 g of protein and 5 g of BCAAs per serving to help you add size and strength.",
    benefits: [
      "1000 calories per serving",
      "200 g of carbohydrates for training energy",
      "25 g of protein for muscle growth",
      "5 g of BCAAs for recovery",
    ],
    usage: "Mix one serving with milk or water. Take between meals or after training. See the label for full directions.",
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getCategory(id: CategoryId) {
  return categories.find((c) => c.id === id)!;
}

/** "25g Protein, 1000 Calories, …" */
export function statsLine(p: Product) {
  return p.stats.map((s) => `${s.value} ${s.label}`).join(", ");
}

/** ~150-character search snippet built from the pack facts. */
export function seoDescription(p: Product) {
  return `XGENS LABS ${p.name} ${p.line}, ${p.size}: ${statsLine(p)} per serving. ${p.highlights.join(", ")}.`;
}
