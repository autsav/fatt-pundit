import momo from "../assets/images/momo.jpg";
import chickenMomo from "../assets/images/chicken_momo_new.jpg";

import vegMomo from "../assets/images/veg momo.jpg";
import sticky from "../assets/images/sticky.jpg";
import malabarPrawnsCovent from "../assets/images/malabar_prawns_covent.jpg";
import mockChick from "../assets/images/mock chick.jpg";
import malabar from "../assets/images/malabar curry.jpg";
import prawns from "../assets/images/prawns.jpg";
import crab from "../assets/images/crab65.jpg";
import lambchop from "../assets/images/lambchop.jpg";
import vegHakka from "../assets/images/veg hakka.jpg";
import brownie from "../assets/images/brownie.jpg";
import rabbit from "../assets/images/rabbit.jpg";
// Mockup imports
import mixVegMomo from "../assets/images/mix_veg_momo_mockup_1765787182091.png";
import cracklingSpinach from "../assets/images/crackling_spinach_mockup_1765787204079.png.png";
import popcornCauliflower from "../assets/images/popcorn_cauliflower_mockup_1765787222926.png";
import okraSaltPepper from "../assets/images/okra_salt_pepper_updated.jpg";

import monkfish from "../assets/images/malabar curry.jpg";
import duck from "../assets/images/szechuan_honey_duck_new.jpg";
import lollypop from "../assets/images/lollypop_chicken_new.jpg";
import venison from "../assets/images/shredded_venison_new.jpg";
import ribeye from "../assets/images/ribeye_dry_red_chilly_new.jpg";
import bingBread from "../assets/images/bing_bread_mockup_1765787370253.png";
import sweetPotato from "../assets/images/sweet_potato_fries_new.jpg";
import ladyKenny from "../assets/images/lady_kenny_new.png";
import kolkataChillyChickenNew from "../assets/images/kolkata_chilli_chicken_new.jpg";
import manchurian from "../assets/images/manchurian_chicken_mockup_1765787415945.png";
import rabbitWontons from "../assets/images/rabbit_wontons_new.jpg";
import broccoli from "../assets/images/stir_fry_broccoli_new.jpg";
import crunchyPepperCrab from "../assets/images/crunchy_pepper_crab.jpg";
import goatMomo from "../assets/images/goat_momo.png";
import sizzlingBrownie from "../assets/images/sizzling_brownie.jpg";
import hakkaChillyPaneer from "../assets/images/hakka_chilly_paneer.jpg";

export type MenuItem = {
  name: string;
  description: string;
  price?: string;
  image?: string;
};

export type MenuCategory = {
  category: string;
  description?: string | null;
  items: MenuItem[];
};

export type Menus = {
  [key: string]: MenuCategory[];
};

export const MENU_TYPES = [
  "A LA CARTE",
  "VEGETARIAN MENU",
  "VEGAN MENU",
  "DAIRY FREE MENU",
  "PESCATARIAN MENU",
  "SET MENU",
  "GLUTEN FREE",
  "SIDES + DESSERTS",
  "WINE LIST",
  "DRINKS MENU",
  "HALAL MENU",
  "PRE - THEATRE MENU",
  "VEGETARIAN PRE - THEATRE MENU",
];

// Reusable Drink Sections
const WINE_LIST = [
  {
    category: "SPARKLING WINE",
    items: [
      { name: "La Cavea, Prosecco N.V", description: "", price: "10.20/50.00" },
    ],
  },
  {
    category: "WHITE WINE",
    items: [
      {
        name: "Azavedo Vinho Verde",
        description: "Loureiro Alvarinho, Portugal",
        price: "7.50/37.50",
      },
      {
        name: "Planalto Douro Branco",
        description: "Casa, Portugal",
        price: "8.00/45.00",
      },
      {
        name: "Estripe Organic Chardonnay",
        description: "Argentina",
        price: "9.50/51.75",
      },
      {
        name: "Akluj Chardonnay & Sauvignon Blanc",
        description: "M/S, India",
        price: "9.50/51.75",
      },
      {
        name: "Tinpot Hut Malborough Sauvignon Blanc",
        description: "Zealand",
        price: "10.20/56.25",
      },
      {
        name: "Bernkastel Mosel Riesling Kabinett",
        description: "Axel Pauly, Germany",
        price: "10.70/62.00",
      },
    ],
  },
  {
    category: "ROSE WINE",
    items: [
      {
        name: "Famille Perrin, Luberon Rose",
        description: "",
        price: "7.50/37.50",
      },
    ],
  },
  {
    category: "RED WINE",
    items: [
      {
        name: "Ponte Pietra",
        description: "Merlot & Corvina, Italy",
        price: "7.50/37.50",
      },
      {
        name: "Kaiken Clasico Malbec",
        description: "Argentina",
        price: "8.00/45.00",
      },
      {
        name: "Aconcagua Costa Pinot Noir",
        description: "Chile",
        price: "9.00/47.25",
      },
      {
        name: "Alpha Zeta, Valpolicella",
        description: "Italy",
        price: "10.20/56.25",
      },
      {
        name: "Rioja Reserva",
        description: "Bodegas Lan, Spain",
        price: "11.25/67.50",
      },
      {
        name: "Beaujolais-Villages, Dominique Morel",
        description: "France",
        price: "62.00",
      },
    ],
  },
];

const DRINKS_MENU = [
  {
    category: "FRUIT COOLERS",
    description:
      "Inspired by the fruit vendors of India, where they serve fresh cut fruit with variety of spices and salts. Super Charge your cooler by spiking it with a paired spirit.",
    items: [
      {
        name: "Guava Chilli Sour",
        description: "Himalayan salt, red chilli, guava (+ Tequila)",
        price: "",
      },
      {
        name: "Mango Szechuan Rush",
        description: "Alphonso mango, Szechuan syrup (+ Vodka)",
        price: "",
      },
      { name: "Mocktail", description: "", price: "8.50" },
      { name: "Spike It", description: "", price: "13.50" },
    ],
  },
  {
    category: "COCKTAILS",
    items: [
      {
        name: "Hakka Garden",
        description: "Venezuelan White Rum, Black Raspberry, Passion Fruit",
        price: "14.00",
      },
      {
        name: "White Tiger",
        description: "London Dry Gin, Elderflower, Lychee Juice, Prosecco",
        price: "13.50",
      },
      {
        name: "Chin Chin Choo",
        description: "Himalayan Juniper Gin, Tamarind, Plum",
        price: "11.00",
      },
      {
        name: "Desi Dragon",
        description: "Rum, dragon fruit, Szechuan peppercorn, ginger reduction",
        price: "13.50",
      },
      {
        name: "Fatt Pundit Negroni",
        description: "Spiced Gin, Campari, Cocchi Torino",
        price: "13.50",
      },
    ],
  },
  {
    category: "BEERS",
    items: [
      {
        name: "Unity Lager",
        description: "New Zealand, England 4.5%",
        price: "7.50",
      },
      {
        name: "Zen Pale Ale",
        description: "Blend of British Ale & Japanese Tea 4.5%",
        price: "7.50",
      },
    ],
  },
  {
    category: "SOFT DRINKS",
    items: [
      {
        name: "Mango Lassi",
        description: "Greek yogurt, jaggery",
        price: "6.25",
      },
      { name: "Masala Thums Up", description: "", price: "8.50" },
      { name: "Thums Up", description: "", price: "6.00" },
    ],
  },
  {
    category: "SPARKLING & CHAMPAGNE",
    items: [
      { name: "La Cavea, Prosecco N.V", description: "", price: "10.20/50" },
      {
        name: "Grande Reserve Devaux, Champagne N.V",
        description: "",
        price: "66.00",
      },
    ],
  },
  {
    category: "ROSÉ",
    items: [
      {
        name: "Famille Perrin, Luberon Rose",
        description: "",
        price: "7.50/37.50",
      },
    ],
  },
  {
    category: "WHITE WINES",
    items: [
      {
        name: "Azavedo Vinho Verde",
        description: "Loureiro Alvarinho, Portugal",
        price: "7.50/37.50",
      },
      {
        name: "Planalto Douro Branco",
        description: "Casa, Portugal",
        price: "8.00/45.00",
      },
      {
        name: "Estripe Organic Chardonnay",
        description: "Argentina",
        price: "9.50/51.75",
      },
      {
        name: "Akluj Chardonnay & Sauvignon Blanc",
        description: "M/S, India",
        price: "9.50/51.75",
      },
      {
        name: "Tinpot Hut Malborough Sauvignon Blanc",
        description: "Zealand",
        price: "10.20/56.25",
      },
      {
        name: "Bernkastel Mosel Riesling Kabinett",
        description: "Axel Pauly, Germany",
        price: "10.70/62.00",
      },
    ],
  },
  {
    category: "RED WINES",
    items: [
      {
        name: "Ponte Pietra",
        description: "Merlot & Corvina, Italy",
        price: "7.50/37.50",
      },
      {
        name: "Kaiken Clasico Malbec",
        description: "Argentina",
        price: "8.00/45.00",
      },
      {
        name: "Aconcagua Costa Pinot Noir",
        description: "Chile",
        price: "9.00/47.25",
      },
      {
        name: "Alpha Zeta, Valpolicella",
        description: "Italy",
        price: "10.20/56.25",
      },
      {
        name: "Rioja Reserva",
        description: "Bodegas Lan, Spain",
        price: "11.25/67.50",
      },
      {
        name: "Beaujolais-Villages, Dominique Morel",
        description: "France",
        price: "62.00",
      },
    ],
  },
];

export const MENU_DATA_SOHO: Menus = {
  "A LA CARTE": [
    {
      category: "MOMO'S",
      description:
        "All meals in Tangra start with these hearty, flavoursome steamed dumplings coming straight from the Steel Steamers, served with a spicy chutney.",
      items: [
        {
          name: "Mix Vegetable Momo",
          description: "Spinach, mushroom, courgette + tofu",
          price: "7.00",
          image: mixVegMomo,
        },
        {
          name: "Chicken Momo",
          description: "Soy, garlic, spring onions",
          price: "7.50",
          image: chickenMomo,
        },
        {
          name: "Beef Momo",
          description: "Leeks, red chilli, coriander",
          price: "8.00",
          image: goatMomo,
        },
        {
          name: "Kid Goat Momo",
          description: "Garam masala, cardamom, ginger & garlic",
          price: "8.50",
          image: goatMomo,
        },
      ],
    },
    {
      category: "VEG",
      items: [
        {
          name: "Crackling Spinach",
          description: "Sweet yoghurt, date & plum sauce, pomegranate",
          price: "10.20",
          image: cracklingSpinach,
        },
        {
          name: "Popcorn Cauliflower",
          description: "Purple & white, smoked, soya garlic dip",
          price: "10.20",
          image: popcornCauliflower,
        },
        {
          name: "Crispy Okra Salt 'n' Pepper",
          description: "Pink salt, chillies, burnt garlic",
          price: "10.20",
          image: okraSaltPepper,
        },
        {
          name: "Hakka Chilly Paneer Lettuce Cups",
          description:
            "Cottage cheese, shallots, soy sauce, white + black pepper",
          price: "13.25",
          image: hakkaChillyPaneer,
        },
        {
          name: "Sticky Sesame Vegetables",
          description: "Crispy veg fritters, sticky ginger glaze",
          price: "11.20",
          image: sticky,
        },
        {
          name: "Bombay Chilli Mock Chicken (Vegan)",
          description: "Celery, Szechuan chilly, mixed peppers",
          price: "13.25",
          image: mockChick,
        },
      ],
    },
    {
      category: "SEAFOOD",
      items: [
        {
          name: "Malabar Monkfish Curry",
          description: "Grilled, saffron butter, fresh coconut",
          price: "15.75",
          image: monkfish,
        },
        {
          name: "Bombay Chilly Prawns",
          description: "Celery, Szechuan chilly, mixed peppers",
          price: "14.50",
          image: prawns,
        },
        {
          name: "Crunchy Pepper Crab",
          description: "Soft shell crab, wok blistered sweet corn",
          price: "14.50",
          image: crunchyPepperCrab,
        },
      ],
    },
    {
      category: "MEAT, GAME + POULTRY",
      items: [
        {
          name: "Kolkata Chilli Duck",
          description: "Lean strips, caramelised onion, slit green chilli",
          price: "14.95",
          image: duck,
        },
        {
          name: "Lollypop Chicken",
          description:
            "Spicy + crispy chicken wings served with Szechuan chutney",
          price: "10.50",
          image: lollypop,
        },
        {
          name: "Manchurian Chicken",
          description: "Shallots, coriander, soy glaze",
          price: "13.50",
          image: manchurian,
        },
        {
          name: "Shredded Chilly Venison",
          description: "Sweet chilli reduction, mantou bread",
          price: "15.50",
          image: venison,
        },
        {
          name: "Lamb Chops - Black Bean Dust",
          description: "Stone flower masala rub, charred to perfection",
          price: "21.00",
          image: lambchop,
        },
        {
          name: "Rabbit Wontons",
          description: "Burnt garlic, black bean, chilli oil",
          price: "14.20",
          image: rabbitWontons,
        },
        {
          name: "Ribeye Dry Red Chilly",
          description: "Beef strips, Kashmiri red chillies, roasted cashews",
          price: "19.00",
          image: ribeye,
        },
      ],
    },
    {
      category: "BREAD, RICE & NOODLES",
      items: [
        {
          name: "Bing Bread",
          description: "Buttery, crisp and crunchy",
          price: "5.20",
          image: bingBread,
        },
        { name: "Burnt Ginger Rice", description: "", price: "5.65" },
        { name: "Egg Szechuan Fried Rice", description: "", price: "6.65" },
        {
          name: "Vegetable Hakka Noodles",
          description: "Bean sprouts, cabbage, green onion",
          price: "10.00",
          image: vegHakka,
        },
        {
          name: "Stir Fry Szechuan Noodles",
          description: "Chicken or beef",
          price: "12.20",
        },
      ],
    },
    {
      category: "SIDES",
      items: [
        {
          name: "Sweet Potato Fries",
          description: "Smoked paprika, black pepper, Szechuan mayo dip",
          price: "5.65",
          image: sweetPotato,
        },
        {
          name: "Stir Fry Broccoli",
          description: "With roasted almonds",
          price: "6.20",
          image: broccoli,
        },
      ],
    },
    {
      category: "DESSERT",
      items: [
        {
          name: "Snowflake Gelato Sizzling Brownie",
          description: "Vanilla with chocolate-covered honeycomb",
          price: "11.50",
          image: sizzlingBrownie,
        },
        {
          name: "Vegan Sizzling Brownie",
          description: "With Madagascan vanilla ice cream (v)",
          price: "12.50",
          image: sizzlingBrownie,
        },
        {
          name: "Lady Kenny",
          description:
            "Inspired by Ledikeni Bengali sweet named after Lady Charlotte Canning",
          price: "7.50",
          image: ladyKenny,
        },
      ],
    },
  ],
  "VEGETARIAN MENU": [
    {
      category: "MOMO'S",
      description:
        "All meals in Tangra start with these hearty, flavoursome steamed dumplings coming straight from the Steel Steamers, served with a spicy chutney.",
      items: [
        {
          name: "Mix Vegetable Momo",
          description: "Spinach, mushroom, courgette + tofu",
          price: "7.00",
          image: mixVegMomo,
        },
      ],
    },
    {
      category: "VEG",
      items: [
        {
          name: "Crackling Spinach",
          description: "Sweet yoghurt, date & plum sauce, pomegranate",
          price: "10.20",
          image: cracklingSpinach,
        },
        {
          name: "Popcorn Cauliflower",
          description: "Purple & white, smoked, soya garlic dip",
          price: "10.20",
          image: popcornCauliflower,
        },
        {
          name: "Crispy Okra Salt 'n' Pepper",
          description: "Pink salt, chillies, burnt garlic",
          price: "10.20",
          image: okraSaltPepper,
        },
        {
          name: "Hakka Chilly Paneer Lettuce Cups",
          description:
            "Cottage cheese, shallots, soy sauce, white + black pepper",
          price: "13.25",
          image: hakkaChillyPaneer,
        },
        {
          name: "Sticky Sesame Vegetables",
          description: "Crispy veg fritters, sticky ginger glaze",
          price: "11.20",
          image: sticky,
        },
      ],
    },
    {
      category: "BREAD, RICE & NOODLES",
      items: [
        {
          name: "Bing Bread",
          description: "Buttery, crisp and crunchy",
          price: "5.20",
          image: bingBread,
        },
        { name: "Burnt Ginger Rice", description: "", price: "5.65" },
        { name: "Egg Szechuan Fried Rice", description: "", price: "6.65" },
        {
          name: "Vegetable Hakka Noodles",
          description: "Bean sprouts, cabbage, green onion",
          price: "10.00",
          image: vegHakka,
        },
      ],
    },
    {
      category: "SIDES",
      items: [
        {
          name: "Sweet Potato Fries",
          description: "Smoked paprika, black pepper, Szechuan mayo dip",
          price: "5.65",
          image: sweetPotato,
        },
        {
          name: "Stir Fry Broccoli",
          description: "With roasted almonds",
          price: "6.20",
          image: broccoli,
        },
      ],
    },
    {
      category: "DESSERT",
      items: [
        {
          name: "Snowflake Gelato Sizzling Brownie",
          description: "Vanilla with chocolate-covered honeycomb",
          price: "11.50",
          image: sizzlingBrownie,
        },
        {
          name: "Lady Kenny",
          description:
            "Inspired by Ledikeni Bengali sweet named after Lady Charlotte Canning",
          price: "7.50",
          image: ladyKenny,
        },
      ],
    },
  ],
  "DAIRY FREE MENU": [
    {
      category: "MOMO'S",
      description:
        "All meals in Tangra start with these hearty, flavoursome steamed dumplings coming straight from the Steel Steamers, served with a spicy chutney, with influences from Bhutan ,Nepal, Tibet and other parts of India.",
      items: [
        {
          name: "Kid Goat Momo",
          description: "Garam masala, cardamom, ginger & garlic",
          price: "8.50",
          image: goatMomo,
        },
        {
          name: "Mix Vegetable Momo",
          description: "Spinach, mushroom, courgette + tofu",
          price: "7.00",
          image: vegMomo,
        },
        {
          name: "Chicken Momo",
          description: "Soy, garlic, spring onions",
          price: "7.50",
          image: goatMomo,
        },
        {
          name: "Beef Momo",
          description: "Leeks, red chilli, coriander",
          price: "8.00",
          image: goatMomo,
        },
      ],
    },
    {
      category: "VEG",
      items: [
        {
          name: "Popcorn Cauliflower",
          description: "Purple & white, smoked, soya garlic dip",
          price: "10.20",
        },
        {
          name: "Crispy Okra Salt 'n' Pepper",
          description: "Pink salt, chillies, burnt garlic",
          price: "10.20",
        },
        {
          name: "Sticky Sesame Vegetables",
          description: "Crispy veg fritters, sticky ginger glaze",
          price: "11.20",
          image: sticky,
        },
        {
          name: "Bombay Chilli Mock Chicken (Vegan)",
          description: "Celery, Szechuan chilly, mixed peppers",
          price: "13.25",
          image: mockChick,
        },
      ],
    },
    {
      category: "SEAFOOD",
      items: [
        {
          name: "Bombay Chilly Prawns",
          description: "Celery, Szechuan chilly, mixed peppers",
          price: "14.50",
          image: prawns,
        },
        {
          name: "Crunchy Pepper Crab",
          description:
            "Soft shell crab, wok blistered sweet corn, charred scallion + Szechuan peppercorn",
          price: "14.50",
          image: crunchyPepperCrab,
        },
      ],
    },
    {
      category: "MEAT, GAME + POULTRY",
      items: [
        {
          name: "Kolkata Chilli Duck",
          description: "Lean strips, caramelised onion, slit green chilli",
          price: "17.25",
        },
        {
          name: "Lollypop Chicken",
          description:
            "Spicy + crispy chicken wings served with Szechuan chutney",
          price: "10.50",
        },
        {
          name: "Manchurian Chicken",
          description: "Shallots, coriander, soy glaze",
          price: "13.50",
        },
        {
          name: "Shredded Chilly Venison",
          description:
            "“Made famous at the Leopold café of Mumbai ” smoked dark soya",
          price: "15.50",
        },
        {
          name: "Lamb Chops - Black Bean Dust",
          description: "Stone flower masala rub, charred to perfection",
          price: "21.00",
          image: lambchop,
        },
        {
          name: "Rabbit Wontons",
          description: "Burnt garlic, black bean, chilli oil",
          price: "14.20",
          image: rabbit,
        },
        {
          name: "Ribeye Dry Red Chilly",
          description: "Beef strips, Kashmiri red chillies, roasted cashews",
          price: "19.00",
        },
      ],
    },
    {
      category: "BREAD, RICE & NOODLES",
      items: [
        { name: "Bing Bread", description: "Crisp and crunchy", price: "5.20" },
        { name: "Burnt Ginger Rice", description: "", price: "5.65" },
        { name: "Egg Szechuan Fried Rice", description: "", price: "6.65" },
        {
          name: "Vegetable Hakka Noodles",
          description: "Bean sprouts, cabbage, green onion",
          price: "10.00",
          image: vegHakka,
        },
        {
          name: "Stir Fry Szechuan Noodles",
          description: "Chicken or beef",
          price: "12.20",
        },
      ],
    },
    {
      category: "SIDES",
      items: [
        {
          name: "Sweet Potato Fries",
          description: "Smoked paprika, black pepper",
          price: "5.00",
        },
        {
          name: "Stir Fry Broccoli",
          description: "With roasted almonds",
          price: "5.50",
        },
      ],
    },
    {
      category: "DESSERT",
      items: [
        {
          name: "Vegan Sizzling Brownie",
          description: "With Madagascan vanilla ice cream (v)",
          price: "12.50",
          image: sizzlingBrownie,
        },
      ],
    },
  ],
  "VEGAN MENU": [
    {
      category: "MOMO'S",
      description:
        "All meals in Tangra start with these hearty, flavoursome steamed dumplings coming straight from the Steel Steamers, served with a spicy chutney with influences from Bhutan, Nepal, Tibet and other parts of India.",
      items: [
        {
          name: "Mix Vegetable Momo",
          description: "Spinach, mushroom, courgette + tofu",
          price: "7.00",
          image: vegMomo,
        },
      ],
    },
    {
      category: "VEG",
      items: [
        {
          name: "Popcorn Cauliflower",
          description: "Purple & white, smoked, soya garlic dip",
          price: "10.20",
        },
        {
          name: "Crispy Okra Salt 'n' Pepper",
          description: "Pink salt, chillies, burnt garlic",
          price: "10.20",
        },
        {
          name: "Sticky Sesame Vegetables",
          description: "Crispy veg fritters, sticky ginger glaze",
          price: "11.20",
          image: sticky,
        },
        {
          name: "Bombay Chilli Mock Chicken (Vegan)",
          description: "Celery, Szechuan chilly, mixed peppers",
          price: "13.25",
          image: mockChick,
        },
        {
          name: "Veg Manchurian",
          description:
            "Mix veg croquette with shallots, coriander and soya sauce",
          price: "12.20",
        },
      ],
    },
    {
      category: "BREAD, RICE & NOODLES",
      items: [
        { name: "Bing Bread", description: "Crisp and crunchy", price: "5.20" },
        { name: "Burnt Ginger Rice", description: "", price: "5.65" },
        { name: "Veg Szechuan Fried Rice", description: "", price: "6.65" },
        {
          name: "Vegetable Hakka Noodles",
          description: "Bean sprouts, cabbage, green onion",
          price: "10.00",
          image: vegHakka,
        },
        {
          name: "Veg Stir Fry Szechuan Noodles",
          description: "",
          price: "12.20",
        },
      ],
    },
    {
      category: "SIDES",
      items: [
        {
          name: "Sweet Potato Fries",
          description: "Smoked paprika, black pepper",
          price: "5.65",
        },
        {
          name: "Stir Fry Broccoli",
          description: "With roasted almonds",
          price: "6.20",
        },
      ],
    },
    {
      category: "DESSERT",
      items: [
        {
          name: "Vegan Sizzling Brownie",
          description: "With Madagascan vanilla ice cream (v)",
          price: "12.50",
          image: sizzlingBrownie,
        },
      ],
    },
  ],
  "PESCATARIAN MENU": [
    {
      category: "MOMO'S",
      description:
        "All meals in Tangra start with these hearty, flavoursome steamed dumplings coming straight from the Steel Steamers, served with a spicy chutney with influences from Bhutan, Nepal, Tibet and other parts of India.",
      items: [
        {
          name: "Mix Vegetable Momo",
          description: "Spinach, mushroom, courgette + tofu",
          price: "",
          image: vegMomo,
        },
      ],
    },
    {
      category: "VEG",
      items: [
        {
          name: "Crackling Spinach",
          description: "Sweet yogurt, date & plum sauce, pomegranate",
          price: "",
        },
        {
          name: "Sticky Sesame Vegetables",
          description: "Crispy veg fritters, sticky ginger glaze",
          price: "",
          image: sticky,
        },
        {
          name: "Popcorn Cauliflower",
          description: "Purple & white, smoked, soya garlic dip",
          price: "",
        },
      ],
    },
    {
      category: "SEAFOOD",
      items: [
        {
          name: "Malabar Monkfish Curry",
          description: "Grilled, saffron butter, fresh coconut",
          price: "",
          image: malabar,
        },
        {
          name: "Bombay Chilly Prawns",
          description: "Celery, Szechuan chilly, mixed peppers",
          price: "",
          image: prawns,
        },
        {
          name: "Crunchy Pepper Crab",
          description:
            "Soft shell crab, wok blistered sweet corn, charred scallion + Szechuan peppercorn",
          price: "",
          image: crunchyPepperCrab,
        },
      ],
    },
    {
      category: "SIDES",
      items: [
        { name: "Burnt Ginger Rice", description: "", price: "" },
        {
          name: "Vegetable Hakka Noodles",
          description: "Bean sprout, cabbage, green onion",
          price: "",
          image: vegHakka,
        },
      ],
    },
    {
      category: "DESSERT",
      items: [
        {
          name: "Sizzling Brownie",
          description: "With vanilla ice cream",
          price: "",
          image: sizzlingBrownie,
        },
      ],
    },
  ],
  "SET MENU": [
    {
      category: "MOMO'S",
      description:
        "All meals in Tangra start with these hearty, flavoursome steamed dumplings coming straight from the Steel Steamers, served with a spicy chutney with influences from Bhutan, Nepal, Tibet and other parts of India.",
      items: [
        {
          name: "Mix Vegetable Momo",
          description: "Spinach, mushroom, courgette + tofu",
          price: "",
          image: vegMomo,
        },
        {
          name: "Chicken Momo",
          description: "Soy, garlic, spring onions",
          price: "",
          image: goatMomo,
        },
      ],
    },
    {
      category: "VEG",
      items: [
        {
          name: "Crackling Spinach",
          description: "Sweet yogurt, date & plum sauce, pomegranate",
          price: "",
        },
        {
          name: "Sticky Sesame Vegetables",
          description: "Crispy veg fritters, sticky ginger glaze",
          price: "",
          image: sticky,
        },
      ],
    },
    {
      category: "SEAFOOD",
      items: [
        {
          name: "Malabar Monkfish Curry",
          description: "Grilled, saffron butter, fresh coconut",
          price: "",
          image: malabar,
        },
        {
          name: "Bombay Chilly Prawns",
          description: "Celery, Szechuan chilly, mixed peppers",
          price: "",
          image: prawns,
        },
      ],
    },
    {
      category: "MEAT, GAME + POULTRY",
      items: [
        {
          name: "Lollypop Chicken",
          description:
            "Spicy + crispy chicken wings served with Szechuan chutney",
          price: "",
        },
        {
          name: "Shredded Chilly Venison",
          description:
            "“Made famous at the Leopold café of Mumbai” sweet chilli reduction, mantou bread",
          price: "",
        },
      ],
    },
    {
      category: "SIDES",
      items: [
        { name: "Burnt Ginger Rice", description: "", price: "" },
        {
          name: "Vegetable Hakka Noodles",
          description: "Bean sprouts, cabbage, green onion",
          price: "",
          image: vegHakka,
        },
      ],
    },
    {
      category: "DESSERT",
      items: [
        {
          name: "Sizzling Brownie",
          description: "With vanilla ice cream",
          price: "",
          image: sizzlingBrownie,
        },
      ],
    },
  ],
  "GLUTEN FREE": [
    {
      category: "VEG",
      items: [
        {
          name: "Popcorn Cauliflower",
          description: "Purple & white, smoked, soya garlic dip",
          price: "10.20",
        },
        {
          name: "Crispy Okra Salt 'n' Pepper",
          description: "Pink salt, chillies, burnt garlic",
          price: "10.20",
        },
        {
          name: "Hakka Chilly Paneer Lettuce Cups",
          description:
            "Cottage cheese, shallots, soy sauce, white + black pepper",
          price: "13.25",
        },
        {
          name: "Crackling Spinach",
          description: "Sweet yogurt, date & plum sauce, pomegranate",
          price: "10.20",
        },
        {
          name: "Bombay Chilli Mock Chicken (Vegan)",
          description: "Celery, Szechuan chilly, mixed peppers",
          price: "10.20",
          image: mockChick,
        },
      ],
    },
    {
      category: "SEAFOOD",
      items: [
        {
          name: "Malabar Monkfish Curry",
          description: "Grilled, saffron butter, fresh coconut",
          price: "15.75",
          image: malabar,
        },
        {
          name: "Bombay Chilly Prawns",
          description: "Celery, Szechuan chilly, mixed peppers",
          price: "14.50",
          image: prawns,
        },
      ],
    },
    {
      category: "MEAT, GAME + POULTRY",
      items: [
        {
          name: "Kolkata Chilli Duck",
          description: "Lean strips, caramelised onion, slit green chilli",
          price: "14.95",
        },
        {
          name: "Shredded Chilly Venison",
          description:
            "“Made famous at the Leopold café of Mumbai ” smoked dark soya",
          price: "15.50",
        },
        {
          name: "Lamb Chops - Black Bean Dust",
          description: "Stone flower masala rub, charred to perfection",
          price: "21.00",
          image: lambchop,
        },
        {
          name: "Ribeye Dry Red Chilly",
          description: "Beef strips, Kashmiri red chillies, roasted cashews",
          price: "19.00",
        },
      ],
    },
    {
      category: "BREAD, RICE & NOODLES",
      items: [
        { name: "Burnt Ginger Rice", description: "", price: "5.00" },
        { name: "Egg Szechuan Fried Rice", description: "", price: "6.00" },
      ],
    },
    {
      category: "SIDES",
      items: [
        {
          name: "Sweet Potato Fries",
          description: "Smoked paprika, black pepper, Szechuan mayo dip",
          price: "5.65",
        },
        {
          name: "Stir Fry Broccoli",
          description: "With roasted almonds",
          price: "6.20",
        },
      ],
    },
  ],
  "SIDES + DESSERTS": [
    {
      category: "BREAD, RICE & NOODLES",
      items: [
        {
          name: "Bing Bread",
          description: "Buttery, crisp and crunchy",
          price: "4.50",
        },
        { name: "Burnt Ginger Rice", description: "", price: "5.00" },
        { name: "Egg Szechuan Fried Rice", description: "", price: "6.00" },
        {
          name: "Vegetable Hakka Noodles",
          description: "Bean sprouts, cabbage, green onion",
          price: "9.00",
          image: vegHakka,
        },
        {
          name: "Stir Fry Szechuan Noodles",
          description: "Chicken or beef",
          price: "11.00",
        },
      ],
    },
    {
      category: "SIDES",
      items: [
        {
          name: "Sweet Potato Fries",
          description: "Smoked paprika, black pepper, Szechuan mayo dip",
          price: "5.00",
        },
        {
          name: "Stir Fry Broccoli",
          description: "With roasted almonds",
          price: "5.50",
        },
      ],
    },
    {
      category: "DESSERTS",
      items: [
        { name: "Lady Kenny", description: "", price: "7.00" },
        {
          name: "Sizzling Brownie",
          description: "With vanilla ice cream",
          price: "12.50",
          image: sizzlingBrownie,
        },
      ],
    },
  ],
  "WINE LIST": WINE_LIST,
  "DRINKS MENU": DRINKS_MENU,
  "HALAL MENU": [
    {
      category: "MOMO'S",
      description:
        "All meals in Tangra start with these hearty, flavoursome steamed dumplings coming straight from the Steel Steamers, served with a spicy chutney, with influences from Bhutan ,Nepal, Tibet and other parts of India.",
      items: [
        {
          name: "Chicken Momo",
          description: "Soy, garlic, spring onions",
          price: "7.50",
          image: goatMomo,
        },
        {
          name: "Kid Goat Momo",
          description: "Garam Masala, cardamom, ginger + garlic",
          price: "8.50",
          image: goatMomo,
        },
        {
          name: "Beef Momo",
          description: "Leeks, red chilli, coriander",
          price: "8.00",
          image: goatMomo,
        },
        {
          name: "Mix Vegetable Momo",
          description: "Spinach, mushroom, courgette + tofu",
          price: "7.00",
          image: vegMomo,
        },
      ],
    },
    {
      category: "VEG",
      items: [
        {
          name: "Popcorn Cauliflower",
          description: "Smoked, soya garlic dip",
          price: "10.20",
        },
        {
          name: "Crispy Okra Salt 'n' Pepper",
          description: "Pink salt, chillies, burnt garlic",
          price: "10.20",
        },
        {
          name: "Hakka Chilly Paneer Lettuce Cups",
          description:
            "Cottage cheese, shallots, soy sauce, white + black pepper",
          price: "13.25",
        },
        {
          name: "Bombay Chilli Mock Chicken",
          description: "Celery, Szechuan chilly, mixed peppers",
          price: "13.25",
          image: mockChick,
        },
        {
          name: "Crackling Spinach",
          description: "Sweet yogurt, date & plum sauce, pomegranate",
          price: "10.20",
        },
        {
          name: "Sticky Sesame Vegetables",
          description: "Crispy veg fritters, sticky ginger glaze",
          price: "11.20",
          image: sticky,
        },
      ],
    },
    {
      category: "SEAFOOD",
      items: [
        {
          name: "Malabar Monkfish Curry",
          description: "Grilled, saffron butter, fresh coconut",
          price: "15.75",
          image: malabar,
        },
        {
          name: "Bombay Chilly Prawns",
          description: "Celery, Szechuan chilly, mixed peppers",
          price: "14.50",
          image: prawns,
        },
        {
          name: "Crunchy Pepper Crab",
          description:
            "Soft shell crab, wok blistered sweet corn, charred scallion + Szechuan peppercorn",
          price: "14.50",
          image: crunchyPepperCrab,
        },
      ],
    },
    {
      category: "BREAD, RICE & NOODLES",
      items: [
        {
          name: "Bing Bread",
          description: "Buttery, crisp and crunchy",
          price: "5.20",
        },
        { name: "Burnt Ginger Rice", description: "", price: "5.65" },
        { name: "Egg Szechuan Fried Rice", description: "", price: "6.65" },
        {
          name: "Vegetable Hakka Noodles",
          description: "Bean sprout, cabbage, green onion",
          price: "10.00",
          image: vegHakka,
        },
        {
          name: "Stir Fry Szechuan Noodles",
          description: "Chicken or beef",
          price: "12.20",
        },
      ],
    },
    {
      category: "MEAT & POULTRY",
      items: [
        {
          name: "Lollypop Chicken",
          description:
            "Spicy + crispy chicken wings served with Szechuan chutney",
          price: "10.50",
        },
        {
          name: "Manchurian Chicken",
          description: "Shallots, coriander, soy glaze",
          price: "13.50",
        },
        {
          name: "Lamb Chops - Black Bean Dust",
          description: "Stone flower masala rub, charred to perfection",
          price: "21.00",
          image: lambchop,
        },
        {
          name: "Ribeye - Dry Red Chilli",
          description: "Beef strips, kashmiri red chillies, roasted cashews",
          price: "19.00",
        },
      ],
    },
    {
      category: "SIDES",
      items: [
        {
          name: "Sweet Potato Fries",
          description: "Smoked, black pepper, Szechuan mayo dip",
          price: "5.65",
        },
        {
          name: "Stir Fry Broccoli",
          description: "With roasted almonds",
          price: "6.20",
        },
      ],
    },
    {
      category: "DESSERT",
      items: [
        {
          name: "Snowflake Gelato Sizzling Brownie",
          description: "Vanilla with chocolate covered honeycomb",
          price: "12.50",
          image: sizzlingBrownie,
        },
        {
          name: "Vegan Sizzling Brownie",
          description: "With Madagascan vanilla ice cream (v)",
          price: "12.50",
          image: sizzlingBrownie,
        },
        {
          name: "Lady Kenny",
          description:
            "Inspired by Ledikeni Bengali sweet named after Lady Charlotte Canning",
          price: "7.50",
        },
      ],
    },
  ],
  "PRE - THEATRE MENU": [
    {
      category: "PRICE",
      description: "£33.50 per person (2 courses) | £37 per person (3 courses)",
      items: [],
    },
    {
      category: "TO START (CHOOSE ONE)",
      items: [
        {
          name: "Chicken Momo",
          description: "Soy, garlic, spring onion",
          price: "",
          image: goatMomo,
        },
        {
          name: "Kid Goat Momo",
          description: "Gram Masala, cardamom, ginger & garlic",
          price: "",
          image: goatMomo,
        },
      ],
    },
    {
      category: "( CHOOSE ONE / PER PERSON )",
      items: [
        {
          name: "Crackling Spinach",
          description: "Sweet yogurt, date & plum sauce & pomegranate",
          price: "",
        },
        {
          name: "Sticky Sesame Vegetables",
          description: "Crispy vegetable fritters with sticky ginger",
          price: "",
          image: sticky,
        },
        {
          name: "Bombay Chilly Prawns",
          description: "Celery, Szechuan chilly & mixed peppers",
          price: "",
          image: prawns,
        },
        {
          name: "Lollipop Chicken",
          description:
            "Spicy & crispy chicken wings served with Szechuan chutney",
          price: "",
        },
      ],
    },
    {
      category: "MAINS (CHOOSE ONE)",
      items: [
        {
          name: "Malabar Monkfish Curry",
          description: "Grilled in saffron butter with fresh coconut + side",
          price: "",
          image: malabar,
        },
        {
          name: "Szechuan Honey Duck",
          description: "Crispy duck strips, five spice + pancakes",
          price: "",
        },
        {
          name: "Kolkata Chilly Chicken",
          description:
            "Caramelized onion, slit green chillies, smoked dark soya + side",
          price: "",
        },
        {
          name: "Ribeye Dry Red Chilly",
          description:
            "Beef strips, Kashmiri red chillies, roasted cashews + side",
          price: "",
        },
      ],
    },
    {
      category: "SIDES ( CHOOSE ONE / PER PERSON )",
      items: [
        {
          name: "Tamarind Glazed Potatoes",
          description: "Baby potatoes, black salt",
          price: "",
        },
        { name: "Burnt Ginger Rice", description: "", price: "" },
        { name: "Egg Szechuan Fried Rice", description: "", price: "" },
      ],
    },
    {
      category: "DESSERT",
      items: [
        {
          name: "Lady Kenny",
          description:
            "Inspired by Ledikeni Bengali sweet named after Lady Charlotte Canning",
          price: "",
        },
        {
          name: "Snowflake Gelato Sizzling Brownie (to share)",
          description: "Vanilla with chocolate-covered honeycomb",
          price: "",
          image: sizzlingBrownie,
        },
      ],
    },
  ],
  "VEGETARIAN PRE - THEATRE MENU": [
    {
      category: "PRICE",
      description: "£33.50 per person (2 courses) | £37 per person (3 courses)",
      items: [],
    },
    {
      category: "TO START ( CHOOSE ONE )",
      items: [
        {
          name: "Mix Vegetable Momo",
          description: "Spinach, mushroom, courgette & tofu",
          price: "",
          image: vegMomo,
        },
      ],
    },
    {
      category: "( CHOOSE ONE / PER PERSON )",
      items: [
        {
          name: "Crackling Spinach",
          description: "Sweet yogurt, date & plum sauce & pomegranate",
          price: "",
        },
        {
          name: "Sticky Sesame Vegetables",
          description: "Crispy vegetable fritters with sticky ginger",
          price: "",
          image: sticky,
        },
        {
          name: "Popcorn Cauliflower",
          description: "Smoked, soya garlic dip",
          price: "",
        },
        {
          name: "Crispy Okra Salt 'n' Pepper",
          description: "Pink salt, chillies, burnt garlic",
          price: "",
        },
      ],
    },
    {
      category: "( CHOOSE ONE / PER PERSON )",
      items: [
        {
          name: "Hakka Chilly Paneer",
          description:
            "Cottage cheese, shallots, soy, white & black pepper & side",
          price: "",
        },
        {
          name: "Bombay Chilli Mock Chicken (Vegan)",
          description: "Celery, Szechuan chilly, mixed peppers & side",
          price: "",
          image: mockChick,
        },
        {
          name: "Vegetable Hakka Noodles",
          description: "Bean sprout, cabbage, green onion",
          price: "",
          image: vegHakka,
        },
      ],
    },
    {
      category: "SIDES ( CHOOSE ONE / PER PERSON )",
      items: [
        {
          name: "Tamarind Glazed Potatoes",
          description: "Baby potatoes, black salt",
          price: "",
        },
        { name: "Burnt Ginger Rice", description: "", price: "" },
        { name: "Egg Szechuan Fried Rice", description: "", price: "" },
      ],
    },
    {
      category: "DESSERT",
      items: [
        {
          name: "Vegan Sizzling Brownie (to share)",
          description: "With Madagascan vanilla ice cream",
          price: "",
          image: sizzlingBrownie,
        },
      ],
    },
  ],
};

export const MENU_DATA_COVENT: Menus = {
  ...MENU_DATA_SOHO,
  "A LA CARTE": [
    {
      category: "MOMO'S",
      description:
        "All meals in Tangra start with these hearty, flavoursome steamed dumplings coming straight from the Steel Steamers, served with a spicy chutney, with influences from Bhutan, Nepal, Tibet & other parts of India.",
      items: [
        {
          name: "Mix Vegetable Momo",
          description: "Spinach, mushroom, courgette + tofu",
          price: "7.00",
          image: mixVegMomo,
        },
        {
          name: "Chicken Momo",
          description: "Soy, garlic, spring onions",
          price: "7.50",
          image: chickenMomo,
        },
        {
          name: "Beef Momo",
          description: "Leeks, red chilli, coriander",
          price: "8.00",
          image: momo,
        },
        {
          name: "Kid Goat Momo",
          description: "Garam masala, cardamom, ginger & garlic",
          price: "8.50",
          image: momo,
        },
      ],
    },
    {
      category: "VEG",
      items: [
        {
          name: "Crackling Spinach",
          description: "Sweet yogurt, date & plum sauce, pomegranate",
          price: "10.20",
          image: cracklingSpinach,
        },
        {
          name: "Crispy Okra Salt 'n' Pepper",
          description: "Pink salt, chillies, burnt garlic",
          price: "10.20",
          image: okraSaltPepper,
        },
        {
          name: "Hakka Chilly Paneer",
          description:
            "Cottage cheese, shallots, soy sauce, white & black pepper",
          price: "13.25",
          image: hakkaChillyPaneer,
        },
        {
          name: "Sticky Sesame Vegetables",
          description: "Crispy vegetable fritters with sticky ginger",
          price: "11.20",
          image: sticky,
        },
        {
          name: "Bombay Chilli Mock Chicken (Vegan)",
          description: "Celery, Szechuan chilly, mixed peppers",
          price: "13.25",
          image: mockChick,
        },
        {
          name: "Popcorn Cauliflower",
          description: "smoked, soya garlic dip",
          price: "10.20",
          image: popcornCauliflower,
        },
      ],
    },
    {
      category: "SEAFOOD",
      items: [
        {
          name: "Malabar Curry (Tiger Prawns)",
          description: "Grilled in saffron butter with fresh coconut",
          price: "18.00",
          image: malabarPrawnsCovent,
        },
        {
          name: "Malabar Curry (Monkfish)",
          description: "Grilled in saffron butter with fresh coconut",
          price: "15.75",
          image: monkfish,
        },
        {
          name: "Bombay Chilly Prawns",
          description: "Celery, Szechuan chilly & mixed peppers",
          price: "14.50",
          image: prawns,
        },
        {
          name: "Crab 65",
          description:
            "Crunchy soft shell crab, spiced mustard paste & curry leaves",
          price: "14.50",
          image: crab,
        },
      ],
    },
    {
      category: "MEAT, GAME + POULTRY",
      items: [
        {
          name: "Szechuan Honey Duck",
          description: "Crispy duck strips, five spice, pancakes",
          price: "17.25",
          image: duck,
        },
        {
          name: "Lollipop Chicken",
          description:
            "Spicy & crispy chicken wings served with Szechuan chutney",
          price: "10.50",
          image: lollypop,
        },
        {
          name: "Kolkata Chilly Chicken",
          description:
            "Caramelized onion, slit green chillies, smoked dark soya",
          price: "13.50",
          image: kolkataChillyChickenNew,
        },
        {
          name: "Shredded Chilly Venison",
          description:
            "“Made famous at the Leopold Cafe of Mumbai” smoked sweet chilly, soya caramel mantou bread",
          price: "15.50",
          image: venison,
        },
        {
          name: "Lamb Chops - Black Bean Dust",
          description: "Stone flower masala rub, charred to perfection",
          price: "21.00",
          image: lambchop,
        },
        {
          name: "Rabbit Wontons",
          description: "Burnt Garlic, Black Bean",
          price: "14.20",
          image: rabbitWontons,
        },
        {
          name: "Ribeye Dry Red Chilly",
          description: "Beef strips, Kashmiri red chillies, roasted cashews",
          price: "19.00",
          image: ribeye,
        },
      ],
    },
    {
      category: "SIDES",
      items: [
        {
          name: "Tamarind Glazed Potatoes",
          description: "Baby potatoes, black salt",
          price: "6.75",
          image: sweetPotato,
        },
        {
          name: "Stir Fry Broccoli",
          description: "With roasted almonds",
          price: "6.20",
          image: broccoli,
        },
      ],
    },
    {
      category: "BREAD, RICE & NOODLES",
      items: [
        {
          name: "Bing Bread",
          description: "Buttery, crisp & crunchy",
          price: "5.20",
          image: bingBread,
        },
        { name: "Burnt Ginger Rice", description: "", price: "5.65" },
        { name: "Egg Szechuan Fried Rice", description: "", price: "6.65" },
        {
          name: "Vegetable Hakka Noodles",
          description: "Bean sprout, cabbage, green onion",
          price: "10.00",
          image: vegHakka,
        },
        {
          name: "Stir Fry Szechuan Noodles",
          description: "Vegetable, Chicken or Beef",
          price: "12.20",
        },
      ],
    },
    {
      category: "DESSERT",
      items: [
        {
          name: "Snowflake Gelato Sizzling Brownie",
          description:
            "Snowflake Gelato’s vanilla with chocolate covered honeycomb",
          price: "11.50",
          image: brownie,
        },
        {
          name: "Vegan Sizzling Brownie",
          description: "With Madagascan vanilla ice cream",
          price: "11.50",
          image: brownie,
        },
        {
          name: "Lady Kenny",
          description:
            "Inspired by Ledikeni Bengali sweet named after Lady Charlotte Canning",
          price: "7.50",
          image: ladyKenny,
        },
      ],
    },
  ],
};
