// Mock Gallery Data (Replace with real Facebook photos later)
// Identifying tags: 'food', 'interior', 'drink'

const GALLERY_IMAGES = [
  // Food
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1563379126191-86f23342e96c?q=80&w=800&auto=format&fit=crop",
    category: "food",
    alt: "Steamed Momos",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1625937286266-8803328233f9?q=80&w=800&auto=format&fit=crop",
    category: "food",
    alt: "Dumplings Platter",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=800&auto=format&fit=crop",
    category: "food",
    alt: "Spicy Noodles",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop",
    category: "food",
    alt: "Dark Food Photography",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800&auto=format&fit=crop",
    category: "food",
    alt: "Samosa Chaat",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1626804475297-411dbe63c4eb?q=80&w=800&auto=format&fit=crop",
    category: "food",
    alt: "Dim Sum Basket",
  },

  // Drinks/Vibe
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800&auto=format&fit=crop",
    category: "drink",
    alt: "Signature Cocktail",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=800&auto=format&fit=crop",
    category: "interior",
    alt: "Neon Sign Vibe",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=800&auto=format&fit=crop",
    category: "interior",
    alt: "Bar Atmosphere",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1563245372-f21727e5a34c?q=80&w=800&auto=format&fit=crop",
    category: "food",
    alt: "Chilli Chicken",
  },

  // More Food/Mix
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=800&auto=format&fit=crop",
    category: "food",
    alt: "Biryani",
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop",
    category: "interior",
    alt: "Restaurant Seating",
  },
  {
    id: 13,
    src: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800&auto=format&fit=crop",
    category: "food",
    alt: "BBQ Skewers",
  },
  {
    id: 14,
    src: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?q=80&w=800&auto=format&fit=crop",
    category: "food",
    alt: "Dumpling Close up",
  },
  {
    id: 15,
    src: "https://images.unsplash.com/photo-1560508188-66f6002f23b7?q=80&w=800&auto=format&fit=crop",
    category: "food",
    alt: "Spicy Sauce",
  },
  {
    id: 16,
    src: "https://images.unsplash.com/photo-1574484284004-1b2025f532a4?q=80&w=800&auto=format&fit=crop",
    category: "drink",
    alt: "Cocktail Art",
  },
  {
    id: 17,
    src: "https://images.unsplash.com/photo-1615937651199-6975242a6619?q=80&w=800&auto=format&fit=crop",
    category: "interior",
    alt: "Cozy Corner",
  },
  {
    id: 18,
    src: "https://images.unsplash.com/photo-1603569283847-aa295f0d016a?q=80&w=800&auto=format&fit=crop",
    category: "food",
    alt: "Healthy Green Momo",
  },
  {
    id: 19,
    src: "https://images.unsplash.com/photo-1548596634-11855a8057de?q=80&w=800&auto=format&fit=crop",
    category: "food",
    alt: "Crispy Okra",
  },
  {
    id: 20,
    src: "https://images.unsplash.com/photo-1582169296194-e90e90038860?q=80&w=800&auto=format&fit=crop",
    category: "food",
    alt: "Indian Curry",
  },
  {
    id: 21,
    src: "https://images.unsplash.com/photo-1606471191009-63994c53433b?q=80&w=800&auto=format&fit=crop",
    category: "food",
    alt: "Seafood Special",
  },
  {
    id: 22,
    src: "https://images.unsplash.com/photo-1595295333158-4742f28fbd85?q=80&w=800&auto=format&fit=crop",
    category: "food",
    alt: "Pasta Fusion",
  },
  {
    id: 23,
    src: "https://images.unsplash.com/photo-1623961990059-28356e226a77?q=80&w=800&auto=format&fit=crop",
    category: "food",
    alt: "Rice Bowl",
  },
  {
    id: 24,
    src: "https://images.unsplash.com/photo-1541544741938-0af808871cc8?q=80&w=800&auto=format&fit=crop",
    category: "food",
    alt: "Skewers",
  },
  {
    id: 25,
    src: "https://images.unsplash.com/photo-1512485800893-cad8cbb856e3?q=80&w=800&auto=format&fit=crop",
    category: "food",
    alt: "Dark Delight",
  },
  {
    id: 26,
    src: "https://images.unsplash.com/photo-1510629910030-8c2a468e0149?q=80&w=800&auto=format&fit=crop",
    category: "drink",
    alt: "Wine Pour",
  },
  {
    id: 27,
    src: "https://images.unsplash.com/photo-1579027989536-b7b1f875659b?q=80&w=800&auto=format&fit=crop",
    category: "interior",
    alt: "Lamps",
  },
  {
    id: 28,
    src: "https://images.unsplash.com/photo-1616070829624-8f1c96a111d1?q=80&w=800&auto=format&fit=crop",
    category: "food",
    alt: "Soup Dumplings",
  },
  {
    id: 29,
    src: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=800&auto=format&fit=crop",
    category: "food",
    alt: "Curry Bowl",
  },
  {
    id: 30,
    src: "https://images.unsplash.com/photo-1567332243282-56fa7f019b88?q=80&w=800&auto=format&fit=crop",
    category: "food",
    alt: "Lobster",
  },
];

export default GALLERY_IMAGES;
