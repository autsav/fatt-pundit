import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { IoChevronForward, IoEye, IoClose, IoLeaf } from 'react-icons/io5';

// Import images
import momo from '../../assets/images/momo.jpg';

import menuBgTiger from '../../assets/images/menu_bg_tiger.png';
import vegMomo from '../../assets/images/veg momo.jpg';
import sticky from '../../assets/images/sticky.jpg';
import mockChick from '../../assets/images/mock chick.jpg';
import malabar from '../../assets/images/malabar curry.jpg';
import prawns from '../../assets/images/prawns.jpg';
import crab from '../../assets/images/crab65.jpg';
import lambchop from '../../assets/images/lambchop.jpg';
import vegHakka from '../../assets/images/veg hakka.jpg';
import brownie from '../../assets/images/brownie.jpg';
import rabbit from '../../assets/images/rabbit.jpg';
import mixVegMomo from '../../assets/images/mix_veg_momo_mockup_1765787182091.png';
import cracklingSpinach from '../../assets/images/crackling_spinach_mockup_1765787204079.png';
import popcornCauliflower from '../../assets/images/popcorn_cauliflower_mockup_1765787222926.png';
import okraSaltPepper from '../../assets/images/okra_salt_pepper_mockup_1765787251345.png';
import paneerCups from '../../assets/images/paneer_lettuce_cups_mockup_1765787266229.png';
import monkfish from '../../assets/images/monkfish_curry_mockup_1765787280292.png';
import duck from '../../assets/images/kolkata_chilli_duck_mockup_1765787301351.png';
import lollypop from '../../assets/images/lollypop_chicken_mockup_1765787317482.png';
import venison from '../../assets/images/shredded_venison_mockup_1765787331743.png';
import ribeye from '../../assets/images/ribeye_chilli_mockup_1765787346574.png';
import bingBread from '../../assets/images/bing_bread_mockup_1765787370253.png';
import sweetPotato from '../../assets/images/sweet_potato_fries_mockup_1765787387812.png';
import ladyKenny from '../../assets/images/lady_kenny_mockup_1765787403122.png';
import manchurian from '../../assets/images/manchurian_chicken_mockup_1765787415945.png';
import rabbitWontons from '../../assets/images/rabbit_wontons_mockup_1765787437835.png';
import broccoli from '../../assets/images/stir_fry_broccoli_mockup_1765787458856.png';

// Define the Menu Data Structure
type MenuItem = {
    name: string;
    description: string;
    price?: string;
    image?: string;
};

type MenuCategory = {
    category: string;
    description?: string | null;
    items: MenuItem[];
};

type Menus = {
    [key: string]: MenuCategory[];
};

const MENU_DATA: Menus = {
    "A LA CARTE": [
        {
            category: "MOMO'S",
            description: "All meals in Tangra start with these hearty, flavoursome steamed dumplings coming straight from the Steel Steamers, served with a spicy chutney.",
            items: [
                { name: "Mix Vegetable Momo", description: "Spinach, mushroom, courgette + tofu", price: "7.00", image: mixVegMomo },
                { name: "Chicken Momo", description: "Soy, garlic, spring onions", price: "7.50", image: momo },
                { name: "Beef Momo", description: "Leeks, red chilli, coriander", price: "8.00", image: momo },
                { name: "Kid Goat Momo", description: "Garam masala, cardamom, ginger & garlic", price: "8.50", image: momo }
            ]
        },
        {
            category: "VEG",
            items: [
                { name: "Crackling Spinach", description: "Sweet yoghurt, date & plum sauce, pomegranate", price: "10.20", image: cracklingSpinach },
                { name: "Popcorn Cauliflower", description: "Purple & white, smoked, soya garlic dip", price: "10.20", image: popcornCauliflower },
                { name: "Crispy Okra Salt 'n' Pepper", description: "Pink salt, chillies, burnt garlic", price: "10.20", image: okraSaltPepper },
                { name: "Hakka Chilly Paneer Lettuce Cups", description: "Cottage cheese, shallots, soy sauce, white + black pepper", price: "13.25", image: paneerCups },
                { name: "Sticky Sesame Vegetables", description: "Crispy veg fritters, sticky ginger glaze", price: "11.20", image: sticky },
                { name: "Bombay Chilli Mock Chicken (Vegan)", description: "Celery, Szechuan chilly, mixed peppers", price: "13.25", image: mockChick }
            ]
        },
        {
            category: "SEAFOOD",
            items: [
                { name: "Malabar Monkfish Curry", description: "Grilled, saffron butter, fresh coconut", price: "15.75", image: monkfish },
                { name: "Bombay Chilly Prawns", description: "Celery, Szechuan chilly, mixed peppers", price: "14.50", image: prawns },
                { name: "Crunchy Pepper Crab", description: "Soft shell crab, wok blistered sweet corn", price: "14.50", image: crab }
            ]
        },
        {
            category: "MEAT, GAME + POULTRY",
            items: [
                { name: "Kolkata Chilli Duck", description: "Lean strips, caramelised onion, slit green chilli", price: "14.95", image: duck },
                { name: "Lollypop Chicken", description: "Spicy + crispy chicken wings served with Szechuan chutney", price: "10.50", image: lollypop },
                { name: "Manchurian Chicken", description: "Shallots, coriander, soy glaze", price: "13.50", image: manchurian },
                { name: "Shredded Chilly Venison", description: "Sweet chilli reduction, mantou bread", price: "15.50", image: venison },
                { name: "Lamb Chops - Black Bean Dust", description: "Stone flower masala rub, charred to perfection", price: "21.00", image: lambchop },
                { name: "Rabbit Wontons", description: "Burnt garlic, black bean, chilli oil", price: "14.20", image: rabbitWontons },
                { name: "Ribeye Dry Red Chilly", description: "Beef strips, Kashmiri red chillies, roasted cashews", price: "19.00", image: ribeye }
            ]
        },
        {
            category: "BREAD, RICE & NOODLES",
            items: [
                { name: "Bing Bread", description: "Buttery, crisp and crunchy", price: "5.20", image: bingBread },
                { name: "Burnt Ginger Rice", description: "", price: "5.65" },
                { name: "Egg Szechuan Fried Rice", description: "", price: "6.65" },
                { name: "Vegetable Hakka Noodles", description: "Bean sprouts, cabbage, green onion", price: "10.00", image: vegHakka },
                { name: "Stir Fry Szechuan Noodles", description: "Chicken or beef", price: "12.20" }
            ]
        },
        {
            category: "SIDES",
            items: [
                { name: "Sweet Potato Fries", description: "Smoked paprika, black pepper, Szechuan mayo dip", price: "5.65", image: sweetPotato },
                { name: "Stir Fry Broccoli", description: "With roasted almonds", price: "6.20", image: broccoli }
            ]
        },
        {
            category: "DESSERT",
            items: [
                { name: "Snowflake Gelato Sizzling Brownie", description: "Vanilla with chocolate-covered honeycomb", price: "11.50", image: brownie },
                { name: "Vegan Sizzling Brownie", description: "With Madagascan vanilla ice cream (v)", price: "12.50", image: brownie },
                { name: "Lady Kenny", description: "Inspired by Ledikeni Bengali sweet named after Lady Charlotte Canning", price: "7.50", image: ladyKenny }
            ]
        }
    ],
    "VEGETARIAN MENU": [
        {
            category: "MOMO'S",
            description: "All meals in Tangra start with these hearty, flavoursome steamed dumplings coming straight from the Steel Steamers, served with a spicy chutney.",
            items: [
                { name: "Mix Vegetable Momo", description: "Spinach, mushroom, courgette + tofu", price: "7.00", image: mixVegMomo }
            ]
        },
        {
            category: "VEG",
            items: [
                { name: "Crackling Spinach", description: "Sweet yoghurt, date & plum sauce, pomegranate", price: "10.20", image: cracklingSpinach },
                { name: "Popcorn Cauliflower", description: "Purple & white, smoked, soya garlic dip", price: "10.20", image: popcornCauliflower },
                { name: "Crispy Okra Salt 'n' Pepper", description: "Pink salt, chillies, burnt garlic", price: "10.20", image: okraSaltPepper },
                { name: "Hakka Chilly Paneer Lettuce Cups", description: "Cottage cheese, shallots, soy sauce, white + black pepper", price: "13.25", image: paneerCups },
                { name: "Sticky Sesame Vegetables", description: "Crispy veg fritters, sticky ginger glaze", price: "11.20", image: sticky }
            ]
        },
        {
            category: "BREAD, RICE & NOODLES",
            items: [
                { name: "Bing Bread", description: "Buttery, crisp and crunchy", price: "5.20", image: bingBread },
                { name: "Burnt Ginger Rice", description: "", price: "5.65" },
                { name: "Egg Szechuan Fried Rice", description: "", price: "6.65" },
                { name: "Vegetable Hakka Noodles", description: "Bean sprouts, cabbage, green onion", price: "10.00", image: vegHakka }
            ]
        },
        {
            category: "SIDES",
            items: [
                { name: "Sweet Potato Fries", description: "Smoked paprika, black pepper, Szechuan mayo dip", price: "5.65", image: sweetPotato },
                { name: "Stir Fry Broccoli", description: "With roasted almonds", price: "6.20", image: broccoli }
            ]
        },
        {
            category: "DESSERT",
            items: [
                { name: "Snowflake Gelato Sizzling Brownie", description: "Vanilla with chocolate-covered honeycomb", price: "11.50", image: brownie },
                { name: "Lady Kenny", description: "Inspired by Ledikeni Bengali sweet named after Lady Charlotte Canning", price: "7.50", image: ladyKenny }
            ]
        }
    ],
    "DAIRY FREE MENU": [
        {
            category: "MOMO'S",
            description: "All meals in Tangra start with these hearty, flavoursome steamed dumplings coming straight from the Steel Steamers, served with a spicy chutney, with influences from Bhutan ,Nepal, Tibet and other parts of India.",
            items: [
                { name: "Kid Goat Momo", description: "Garam masala, cardamom, ginger & garlic", price: "8.50", image: momo },
                { name: "Mix Vegetable Momo", description: "Spinach, mushroom, courgette + tofu", price: "7.00", image: vegMomo },
                { name: "Chicken Momo", description: "Soy, garlic, spring onions", price: "7.50", image: momo },
                { name: "Beef Momo", description: "Leeks, red chilli, coriander", price: "8.00", image: momo }
            ]
        },
        {
            category: "VEG",
            items: [
                { name: "Popcorn Cauliflower", description: "Purple & white, smoked, soya garlic dip", price: "10.20" },
                { name: "Crispy Okra Salt 'n' Pepper", description: "Pink salt, chillies, burnt garlic", price: "10.20" },
                { name: "Sticky Sesame Vegetables", description: "Crispy veg fritters, sticky ginger glaze", price: "11.20", image: sticky },
                { name: "Bombay Chilli Mock Chicken (Vegan)", description: "Celery, Szechuan chilly, mixed peppers", price: "13.25", image: mockChick }
            ]
        },
        {
            category: "SEAFOOD",
            items: [
                { name: "Bombay Chilly Prawns", description: "Celery, Szechuan chilly, mixed peppers", price: "14.50", image: prawns },
                { name: "Crunchy Pepper Crab", description: "Soft shell crab, wok blistered sweet corn, charred scallion + Szechuan peppercorn", price: "14.50", image: crab }
            ]
        },
        {
            category: "MEAT, GAME + POULTRY",
            items: [
                { name: "Kolkata Chilli Duck", description: "Lean strips, caramelised onion, slit green chilli", price: "17.25" },
                { name: "Lollypop Chicken", description: "Spicy + crispy chicken wings served with Szechuan chutney", price: "10.50" },
                { name: "Manchurian Chicken", description: "Shallots, coriander, soy glaze", price: "13.50" },
                { name: "Shredded Chilly Venison", description: "“Made famous at the Leopold café of Mumbai ” smoked dark soya", price: "15.50" },
                { name: "Lamb Chops - Black Bean Dust", description: "Stone flower masala rub, charred to perfection", price: "21.00", image: lambchop },
                { name: "Rabbit Wontons", description: "Burnt garlic, black bean, chilli oil", price: "14.20", image: rabbit },
                { name: "Ribeye Dry Red Chilly", description: "Beef strips, Kashmiri red chillies, roasted cashews", price: "19.00" }
            ]
        },
        {
            category: "BREAD, RICE & NOODLES",
            items: [
                { name: "Bing Bread", description: "Crisp and crunchy", price: "5.20" },
                { name: "Burnt Ginger Rice", description: "", price: "5.65" },
                { name: "Egg Szechuan Fried Rice", description: "", price: "6.65" },
                { name: "Vegetable Hakka Noodles", description: "Bean sprouts, cabbage, green onion", price: "10.00", image: vegHakka },
                { name: "Stir Fry Szechuan Noodles", description: "Chicken or beef", price: "12.20" }
            ]
        },
        {
            category: "SIDES",
            items: [
                { name: "Sweet Potato Fries", description: "Smoked paprika, black pepper", price: "5.00" },
                { name: "Stir Fry Broccoli", description: "With roasted almonds", price: "5.50" }
            ]
        },
        {
            category: "DESSERT",
            items: [
                { name: "Vegan Sizzling Brownie", description: "With Madagascan vanilla ice cream (v)", price: "12.50", image: brownie }
            ]
        }
    ],
    "VEGAN MENU": [
        {
            category: "MOMO'S",
            description: "All meals in Tangra start with these hearty, flavoursome steamed dumplings coming straight from the Steel Steamers, served with a spicy chutney with influences from Bhutan, Nepal, Tibet and other parts of India.",
            items: [
                { name: "Mix Vegetable Momo", description: "Spinach, mushroom, courgette + tofu", price: "7.00", image: vegMomo }
            ]
        },
        {
            category: "VEG",
            items: [
                { name: "Popcorn Cauliflower", description: "Purple & white, smoked, soya garlic dip", price: "10.20" },
                { name: "Crispy Okra Salt 'n' Pepper", description: "Pink salt, chillies, burnt garlic", price: "10.20" },
                { name: "Sticky Sesame Vegetables", description: "Crispy veg fritters, sticky ginger glaze", price: "11.20", image: sticky },
                { name: "Bombay Chilli Mock Chicken (Vegan)", description: "Celery, Szechuan chilly, mixed peppers", price: "13.25", image: mockChick },
                { name: "Veg Manchurian", description: "Mix veg croquette with shallots, coriander and soya sauce", price: "12.20" }
            ]
        },
        {
            category: "BREAD, RICE & NOODLES",
            items: [
                { name: "Bing Bread", description: "Crisp and crunchy", price: "5.20" },
                { name: "Burnt Ginger Rice", description: "", price: "5.65" },
                { name: "Veg Szechuan Fried Rice", description: "", price: "6.65" },
                { name: "Vegetable Hakka Noodles", description: "Bean sprouts, cabbage, green onion", price: "10.00", image: vegHakka },
                { name: "Veg Stir Fry Szechuan Noodles", description: "", price: "12.20" }
            ]
        },
        {
            category: "SIDES",
            items: [
                { name: "Sweet Potato Fries", description: "Smoked paprika, black pepper", price: "5.65" },
                { name: "Stir Fry Broccoli", description: "With roasted almonds", price: "6.20" }
            ]
        },
        {
            category: "DESSERT",
            items: [
                { name: "Vegan Sizzling Brownie", description: "With Madagascan vanilla ice cream (v)", price: "12.50", image: brownie }
            ]
        }
    ],
    "PESCATARIAN MENU": [
        {
            category: "MOMO'S",
            description: "All meals in Tangra start with these hearty, flavoursome steamed dumplings coming straight from the Steel Steamers, served with a spicy chutney with influences from Bhutan, Nepal, Tibet and other parts of India.",
            items: [
                { name: "Mix Vegetable Momo", description: "Spinach, mushroom, courgette + tofu", price: "", image: vegMomo }
            ]
        },
        {
            category: "VEG",
            items: [
                { name: "Crackling Spinach", description: "Sweet yogurt, date & plum sauce, pomegranate", price: "" },
                { name: "Sticky Sesame Vegetables", description: "Crispy veg fritters, sticky ginger glaze", price: "", image: sticky },
                { name: "Popcorn Cauliflower", description: "Purple & white, smoked, soya garlic dip", price: "" }
            ]
        },
        {
            category: "SEAFOOD",
            items: [
                { name: "Malabar Monkfish Curry", description: "Grilled, saffron butter, fresh coconut", price: "", image: malabar },
                { name: "Bombay Chilly Prawns", description: "Celery, Szechuan chilly, mixed peppers", price: "", image: prawns },
                { name: "Crunchy Pepper Crab", description: "Soft shell crab, wok blistered sweet corn, charred scallion + Szechuan peppercorn", price: "", image: crab }
            ]
        },
        {
            category: "SIDES",
            items: [
                { name: "Burnt Ginger Rice", description: "", price: "" },
                { name: "Vegetable Hakka Noodles", description: "Bean sprout, cabbage, green onion", price: "", image: vegHakka }
            ]
        },
        {
            category: "DESSERT",
            items: [
                { name: "Sizzling Brownie", description: "With vanilla ice cream", price: "", image: brownie }
            ]
        }
    ],
    "SET MENU": [
        {
            category: "MOMO'S",
            description: "All meals in Tangra start with these hearty, flavoursome steamed dumplings coming straight from the Steel Steamers, served with a spicy chutney with influences from Bhutan, Nepal, Tibet and other parts of India.",
            items: [
                { name: "Mix Vegetable Momo", description: "Spinach, mushroom, courgette + tofu", price: "", image: vegMomo },
                { name: "Chicken Momo", description: "Soy, garlic, spring onions", price: "", image: momo }
            ]
        },
        {
            category: "VEG",
            items: [
                { name: "Crackling Spinach", description: "Sweet yogurt, date & plum sauce, pomegranate", price: "" },
                { name: "Sticky Sesame Vegetables", description: "Crispy veg fritters, sticky ginger glaze", price: "", image: sticky }
            ]
        },
        {
            category: "SEAFOOD",
            items: [
                { name: "Malabar Monkfish Curry", description: "Grilled, saffron butter, fresh coconut", price: "", image: malabar },
                { name: "Bombay Chilly Prawns", description: "Celery, Szechuan chilly, mixed peppers", price: "", image: prawns }
            ]
        },
        {
            category: "MEAT, GAME + POULTRY",
            items: [
                { name: "Lollypop Chicken", description: "Spicy + crispy chicken wings served with Szechuan chutney", price: "" },
                { name: "Shredded Chilly Venison", description: "“Made famous at the Leopold café of Mumbai” sweet chilli reduction, mantou bread", price: "" }
            ]
        },
        {
            category: "SIDES",
            items: [
                { name: "Burnt Ginger Rice", description: "", price: "" },
                { name: "Vegetable Hakka Noodles", description: "Bean sprouts, cabbage, green onion", price: "", image: vegHakka }
            ]
        },
        {
            category: "DESSERT",
            items: [
                { name: "Sizzling Brownie", description: "With vanilla ice cream", price: "", image: brownie }
            ]
        }
    ],
    "GLUTEN FREE": [
        {
            category: "VEG",
            items: [
                { name: "Popcorn Cauliflower", description: "Purple & white, smoked, soya garlic dip", price: "10.20" },
                { name: "Crispy Okra Salt 'n' Pepper", description: "Pink salt, chillies, burnt garlic", price: "10.20" },
                { name: "Hakka Chilly Paneer Lettuce Cups", description: "Cottage cheese, shallots, soy sauce, white + black pepper", price: "13.25" },
                { name: "Crackling Spinach", description: "Sweet yogurt, date & plum sauce, pomegranate", price: "10.20" },
                { name: "Bombay Chilli Mock Chicken (Vegan)", description: "Celery, Szechuan chilly, mixed peppers", price: "10.20", image: mockChick }
            ]
        },
        {
            category: "SEAFOOD",
            items: [
                { name: "Malabar Monkfish Curry", description: "Grilled, saffron butter, fresh coconut", price: "15.75", image: malabar },
                { name: "Bombay Chilly Prawns", description: "Celery, Szechuan chilly, mixed peppers", price: "14.50", image: prawns }
            ]
        },
        {
            category: "MEAT, GAME + POULTRY",
            items: [
                { name: "Kolkata Chilli Duck", description: "Lean strips, caramelised onion, slit green chilli", price: "14.95" },
                { name: "Shredded Chilly Venison", description: "“Made famous at the Leopold café of Mumbai ” smoked dark soya", price: "15.50" },
                { name: "Lamb Chops - Black Bean Dust", description: "Stone flower masala rub, charred to perfection", price: "21.00", image: lambchop },
                { name: "Ribeye Dry Red Chilly", description: "Beef strips, Kashmiri red chillies, roasted cashews", price: "19.00" }
            ]
        },
        {
            category: "BREAD, RICE & NOODLES",
            items: [
                { name: "Burnt Ginger Rice", description: "", price: "5.00" },
                { name: "Egg Szechuan Fried Rice", description: "", price: "6.00" }
            ]
        },
        {
            category: "SIDES",
            items: [
                { name: "Sweet Potato Fries", description: "Smoked paprika, black pepper, Szechuan mayo dip", price: "5.65" },
                { name: "Stir Fry Broccoli", description: "With roasted almonds", price: "6.20" }
            ]
        }
    ],
    "SIDES + DESSERTS": [
        {
            category: "BREAD, RICE & NOODLES",
            items: [
                { name: "Bing Bread", description: "Buttery, crisp and crunchy", price: "4.50" },
                { name: "Burnt Ginger Rice", description: "", price: "5.00" },
                { name: "Egg Szechuan Fried Rice", description: "", price: "6.00" },
                { name: "Vegetable Hakka Noodles", description: "Bean sprouts, cabbage, green onion", price: "9.00", image: vegHakka },
                { name: "Stir Fry Szechuan Noodles", description: "Chicken or beef", price: "11.00" }
            ]
        },
        {
            category: "SIDES",
            items: [
                { name: "Sweet Potato Fries", description: "Smoked paprika, black pepper, Szechuan mayo dip", price: "5.00" },
                { name: "Stir Fry Broccoli", description: "With roasted almonds", price: "5.50" }
            ]
        },
        {
            category: "DESSERTS",
            items: [
                { name: "Lady Kenny", description: "", price: "7.00" },
                { name: "Sizzling Brownie", description: "With vanilla ice cream", price: "12.50", image: brownie }
            ]
        }
    ],
    "WINE LIST": [
        {
            category: "SPARKLING WINE",
            items: [
                { name: "La Cavea, Prosecco N.V", description: "", price: "10.20/50.00" }
            ]
        },
        {
            category: "WHITE WINE",
            items: [
                { name: "Azavedo Vinho Verde", description: "Loureiro Alvarinho, Portugal", price: "7.50/37.50" },
                { name: "Planalto Douro Branco", description: "Casa, Portugal", price: "8.00/45.00" },
                { name: "Estripe Organic Chardonnay", description: "Argentina", price: "9.50/51.75" },
                { name: "Akluj Chardonnay & Sauvignon Blanc", description: "M/S, India", price: "9.50/51.75" },
                { name: "Tinpot Hut Malborough Sauvignon Blanc", description: "Zealand", price: "10.20/56.25" },
                { name: "Bernkastel Mosel Riesling Kabinett", description: "Axel Pauly, Germany", price: "10.70/62.00" }
            ]
        },
        {
            category: "ROSE WINE",
            items: [
                { name: "Famille Perrin, Luberon Rose", description: "", price: "7.50/37.50" }
            ]
        },
        {
            category: "RED WINE",
            items: [
                { name: "Ponte Pietra", description: "Merlot & Corvina, Italy", price: "7.50/37.50" },
                { name: "Kaiken Clasico Malbec", description: "Argentina", price: "8.00/45.00" },
                { name: "Aconcagua Costa Pinot Noir", description: "Chile", price: "9.00/47.25" },
                { name: "Alpha Zeta, Valpolicella", description: "Italy", price: "10.20/56.25" },
                { name: "Rioja Reserva", description: "Bodegas Lan, Spain", price: "11.25/67.50" },
                { name: "Beaujolais-Villages, Dominique Morel", description: "France", price: "62.00" }
            ]
        }
    ],
    "DRINKS MENU": [
        {
            category: "FRUIT COOLERS",
            description: "Inspired by the fruit vendors of India, where they serve fresh cut fruit with variety of spices and salts. Super Charge your cooler by spiking it with a paired spirit.",
            items: [
                { name: "Guava Chilli Sour", description: "Himalayan salt, red chilli, guava (+ Tequila)", price: "" },
                { name: "Mango Szechuan Rush", description: "Alphonso mango, Szechuan syrup (+ Vodka)", price: "" },
                { name: "Mocktail", description: "", price: "8.50" },
                { name: "Spike It", description: "", price: "13.50" }
            ]
        },
        {
            category: "COCKTAILS",
            items: [
                { name: "Hakka Garden", description: "Venezuelan White Rum, Black Raspberry, Passion Fruit", price: "14.00" },
                { name: "White Tiger", description: "London Dry Gin, Elderflower, Lychee Juice, Prosecco", price: "13.50" },
                { name: "Chin Chin Choo", description: "Himalayan Juniper Gin, Tamarind, Plum", price: "11.00" },
                { name: "Desi Dragon", description: "Rum, dragon fruit, Szechuan peppercorn, ginger reduction", price: "13.50" },
                { name: "Fatt Pundit Negroni", description: "Spiced Gin, Campari, Cocchi Torino", price: "13.50" }
            ]
        },
        {
            category: "BEERS",
            items: [
                { name: "Unity Lager", description: "New Zealand, England 4.5%", price: "7.50" },
                { name: "Zen Pale Ale", description: "Blend of British Ale & Japanese Tea 4.5%", price: "7.50" }
            ]
        },
        {
            category: "SOFT DRINKS",
            items: [
                { name: "Mango Lassi", description: "Greek yogurt, jaggery", price: "6.25" },
                { name: "Masala Thums Up", description: "", price: "8.50" },
                { name: "Thums Up", description: "", price: "6.00" }
            ]
        },
        {
            category: "SPARKLING & CHAMPAGNE",
            items: [
                { name: "La Cavea, Prosecco N.V", description: "", price: "10.20/50" },
                { name: "Grande Reserve Devaux, Champagne N.V", description: "", price: "66.00" }
            ]
        },
        {
            category: "ROSÉ",
            items: [
                { name: "Famille Perrin, Luberon Rose", description: "", price: "7.50/37.50" }
            ]
        },
        {
            category: "WHITE WINES",
            items: [
                { name: "Azavedo Vinho Verde", description: "Loureiro Alvarinho, Portugal", price: "7.50/37.50" },
                { name: "Planalto Douro Branco", description: "Casa, Portugal", price: "8.00/45.00" },
                { name: "Estripe Organic Chardonnay", description: "Argentina", price: "9.50/51.75" },
                { name: "Akluj Chardonnay & Sauvignon Blanc", description: "M/S, India", price: "9.50/51.75" },
                { name: "Tinpot Hut Malborough Sauvignon Blanc", description: "Zealand", price: "10.20/56.25" },
                { name: "Bernkastel Mosel Riesling Kabinett", description: "Axel Pauly, Germany", price: "10.70/62.00" }
            ]
        },
        {
            category: "RED WINES",
            items: [
                { name: "Ponte Pietra", description: "Merlot & Corvina, Italy", price: "7.50/37.50" },
                { name: "Kaiken Clasico Malbec", description: "Argentina", price: "8.00/45.00" },
                { name: "Aconcagua Costa Pinot Noir", description: "Chile", price: "9.00/47.25" },
                { name: "Alpha Zeta, Valpolicella", description: "Italy", price: "10.20/56.25" },
                { name: "Rioja Reserva", description: "Bodegas Lan, Spain", price: "11.25/67.50" },
                { name: "Beaujolais-Villages, Dominique Morel", description: "France", price: "62.00" }
            ]
        }
    ],
    "HALAL MENU": [
        {
            category: "MOMO'S",
            description: "All meals in Tangra start with these hearty, flavoursome steamed dumplings coming straight from the Steel Steamers, served with a spicy chutney, with influences from Bhutan ,Nepal, Tibet and other parts of India.",
            items: [
                { name: "Chicken Momo", description: "Soy, garlic, spring onions", price: "7.50", image: momo },
                { name: "Kid Goat Momo", description: "Garam Masala, cardamom, ginger + garlic", price: "8.50", image: momo },
                { name: "Beef Momo", description: "Leeks, red chilli, coriander", price: "8.00", image: momo },
                { name: "Mix Vegetable Momo", description: "Spinach, mushroom, courgette + tofu", price: "7.00", image: vegMomo }
            ]
        },
        {
            category: "VEG",
            items: [
                { name: "Popcorn Cauliflower", description: "Smoked, soya garlic dip", price: "10.20" },
                { name: "Crispy Okra Salt 'n' Pepper", description: "Pink salt, chillies, burnt garlic", price: "10.20" },
                { name: "Hakka Chilly Paneer Lettuce Cups", description: "Cottage cheese, shallots, soy sauce, white + black pepper", price: "13.25" },
                { name: "Bombay Chilli Mock Chicken", description: "Celery, Szechuan chilly, mixed peppers", price: "13.25", image: mockChick },
                { name: "Crackling Spinach", description: "Sweet yogurt, date & plum sauce, pomegranate", price: "10.20" },
                { name: "Sticky Sesame Vegetables", description: "Crispy veg fritters, sticky ginger glaze", price: "11.20", image: sticky }
            ]
        },
        {
            category: "SEAFOOD",
            items: [
                { name: "Malabar Monkfish Curry", description: "Grilled, saffron butter, fresh coconut", price: "15.75", image: malabar },
                { name: "Bombay Chilly Prawns", description: "Celery, Szechuan chilly, mixed peppers", price: "14.50", image: prawns },
                { name: "Crunchy Pepper Crab", description: "Soft shell crab, wok blistered sweet corn, charred scallion + Szechuan peppercorn", price: "14.50", image: crab }
            ]
        },
        {
            category: "BREAD, RICE & NOODLES",
            items: [
                { name: "Bing Bread", description: "Buttery, crisp and crunchy", price: "5.20" },
                { name: "Burnt Ginger Rice", description: "", price: "5.65" },
                { name: "Egg Szechuan Fried Rice", description: "", price: "6.65" },
                { name: "Vegetable Hakka Noodles", description: "Bean sprout, cabbage, green onion", price: "10.00", image: vegHakka },
                { name: "Stir Fry Szechuan Noodles", description: "Chicken or beef", price: "12.20" }
            ]
        },
        {
            category: "MEAT & POULTRY",
            items: [
                { name: "Lollypop Chicken", description: "Spicy + crispy chicken wings served with Szechuan chutney", price: "10.50" },
                { name: "Manchurian Chicken", description: "Shallots, coriander, soy glaze", price: "13.50" },
                { name: "Lamb Chops - Black Bean Dust", description: "Stone flower masala rub, charred to perfection", price: "21.00", image: lambchop },
                { name: "Ribeye - Dry Red Chilli", description: "Beef strips, kashmiri red chillies, roasted cashews", price: "19.00" }
            ]
        },
        {
            category: "SIDES",
            items: [
                { name: "Sweet Potato Fries", description: "Smoked, black pepper, Szechuan mayo dip", price: "5.65" },
                { name: "Stir Fry Broccoli", description: "With roasted almonds", price: "6.20" }
            ]
        },
        {
            category: "DESSERT",
            items: [
                { name: "Snowflake Gelato Sizzling Brownie", description: "Vanilla with chocolate covered honeycomb", price: "12.50", image: brownie },
                { name: "Vegan Sizzling Brownie", description: "With Madagascan vanilla ice cream (v)", price: "12.50", image: brownie },
                { name: "Lady Kenny", description: "Inspired by Ledikeni Bengali sweet named after Lady Charlotte Canning", price: "7.50" }
            ]
        }
    ],
    "PRE - THEATRE MENU": [
        {
            category: "PRICE",
            description: "£33.50 per person (2 courses) | £37 per person (3 courses)",
            items: []
        },
        {
            category: "TO START (CHOOSE ONE)",
            items: [
                { name: "Chicken Momo", description: "Soy, garlic, spring onion", price: "", image: momo },
                { name: "Kid Goat Momo", description: "Gram Masala, cardamom, ginger & garlic", price: "", image: momo }
            ]
        },
        {
            category: "( CHOOSE ONE / PER PERSON )",
            items: [
                { name: "Crackling Spinach", description: "Sweet yogurt, date & plum sauce & pomegranate", price: "" },
                { name: "Sticky Sesame Vegetables", description: "Crispy vegetable fritters with sticky ginger", price: "", image: sticky },
                { name: "Bombay Chilly Prawns", description: "Celery, Szechuan chilly & mixed peppers", price: "", image: prawns },
                { name: "Lollipop Chicken", description: "Spicy & crispy chicken wings served with Szechuan chutney", price: "" }
            ]
        },
        {
            category: "MAINS (CHOOSE ONE)",
            items: [
                { name: "Malabar Monkfish Curry", description: "Grilled in saffron butter with fresh coconut + side", price: "", image: malabar },
                { name: "Szechuan Honey Duck", description: "Crispy duck strips, five spice + pancakes", price: "" },
                { name: "Kolkata Chilly Chicken", description: "Caramelized onion, slit green chillies, smoked dark soya + side", price: "" },
                { name: "Ribeye Dry Red Chilly", description: "Beef strips, Kashmiri red chillies, roasted cashews + side", price: "" }
            ]
        },
        {
            category: "SIDES ( CHOOSE ONE / PER PERSON )",
            items: [
                { name: "Tamarind Glazed Potatoes", description: "Baby potatoes, black salt", price: "" },
                { name: "Burnt Ginger Rice", description: "", price: "" },
                { name: "Egg Szechuan Fried Rice", description: "", price: "" }
            ]
        },
        {
            category: "DESSERT",
            items: [
                { name: "Lady Kenny", description: "Inspired by Ledikeni Bengali sweet named after Lady Charlotte Canning", price: "" },
                { name: "Snowflake Gelato Sizzling Brownie (to share)", description: "Vanilla with chocolate-covered honeycomb", price: "", image: brownie }
            ]
        }
    ],
    "VEGETARIAN PRE - THEATRE MENU": [
        {
            category: "PRICE",
            description: "£33.50 per person (2 courses) | £37 per person (3 courses)",
            items: []
        },
        {
            category: "TO START ( CHOOSE ONE )",
            items: [
                { name: "Mix Vegetable Momo", description: "Spinach, mushroom, courgette & tofu", price: "", image: vegMomo }
            ]
        },
        {
            category: "( CHOOSE ONE / PER PERSON )",
            items: [
                { name: "Crackling Spinach", description: "Sweet yogurt, date & plum sauce & pomegranate", price: "" },
                { name: "Sticky Sesame Vegetables", description: "Crispy vegetable fritters with sticky ginger", price: "", image: sticky },
                { name: "Popcorn Cauliflower", description: "Smoked, soya garlic dip", price: "" },
                { name: "Crispy Okra Salt 'n' Pepper", description: "Pink salt, chillies, burnt garlic", price: "" }
            ]
        },
        {
            category: "( CHOOSE ONE / PER PERSON )",
            items: [
                { name: "Hakka Chilly Paneer", description: "Cottage cheese, shallots, soy, white & black pepper & side", price: "" },
                { name: "Bombay Chilli Mock Chicken (Vegan)", description: "Celery, Szechuan chilly, mixed peppers & side", price: "", image: mockChick },
                { name: "Vegetable Hakka Noodles", description: "Bean sprout, cabbage, green onion", price: "", image: vegHakka }
            ]
        },
        {
            category: "SIDES ( CHOOSE ONE / PER PERSON )",
            items: [
                { name: "Tamarind Glazed Potatoes", description: "Baby potatoes, black salt", price: "" },
                { name: "Burnt Ginger Rice", description: "", price: "" },
                { name: "Egg Szechuan Fried Rice", description: "", price: "" }
            ]
        },
        {
            category: "DESSERT",
            items: [
                { name: "Vegan Sizzling Brownie (to share)", description: "With Madagascan vanilla ice cream", price: "", image: brownie }
            ]
        }
    ]
};

const MENU_TYPES = [
    "A LA CARTE", "VEGETARIAN MENU", "VEGAN MENU", "DAIRY FREE MENU", "PESCATARIAN MENU", "SET MENU",
    "GLUTEN FREE", "SIDES + DESSERTS", "WINE LIST", "DRINKS MENU", "HALAL MENU",
    "PRE - THEATRE MENU", "VEGETARIAN PRE - THEATRE MENU"
];

const MenuSection = () => {
    const [activeMenu, setActiveMenu] = useState("A LA CARTE");
    const [isVegFilter, setIsVegFilter] = useState(false);
    const [hoveredImage, setHoveredImage] = useState<string | null>(null);
    // Removed mouse follower logic in favor of Lightbox
    // const mouseX = useMotionValue(0); ...

    return (
        <section id="menu" style={{
            backgroundColor: 'var(--color-bg-primary)',
            color: 'var(--color-text-primary)',
            // High opacity overlay to make the image "lightly visible" in background
            backgroundImage: `linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.9)), url(${menuBgTiger})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
        }}>

            {/* Inject Style for Responsive Grid */}
            <style>{`
                .menu-container {
                    display: grid;
                    grid-template-columns: 300px 1fr;
                    gap: 4rem;
                    max-width: 1400px;
                    margin: 0 auto;
                    padding: 4rem 2rem;
                    min-height: 100vh;
                }
                .menu-sidebar {
                    position: sticky;
                    top: 120px;
                    height: fit-content;
                    padding-right: 2rem;
                    border-right: 1px solid rgba(255,255,255,0.1);
                }
                .menu-content {
                    min-height: 80vh;
                }
                @media (max-width: 1024px) {
                    .menu-container {
                        grid-template-columns: 1fr;
                        gap: 2rem;
                        padding: 2rem 1rem;
                    }
                    .menu-sidebar {
                        position: relative;
                        top: 0;
                        border-right: none;
                        border-bottom: 1px solid rgba(255,255,255,0.1);
                        padding-right: 0;
                        padding-bottom: 2rem;
                    }
                    /* Horizontal scroll for menu items on mobile */
                    .menu-nav-items {
                        flex-direction: row !important;
                        overflow-x: auto;
                        gap: 1.5rem !important;
                        padding-bottom: 0.5rem;
                        -webkit-overflow-scrolling: touch;
                    }
                    .menu-nav-items button {
                        white-space: nowrap;
                        background: rgba(255,255,255,0.05) !important;
                        padding: 0.5rem 1rem !important;
                        border-radius: 20px;
                        border: 1px solid rgba(255,255,255,0.1) !important;
                    }
                    .menu-nav-items::-webkit-scrollbar {
                        height: 4px;
                    }
                    .menu-nav-items::-webkit-scrollbar-thumb {
                        background: var(--color-accent);
                        border-radius: 4px;
                    }
                    /* Hide scrollbar on mobile */
                    .menu-sidebar::-webkit-scrollbar {
                        display: none;
                    }
                }
                .menu-item-card {
                    padding: 1rem;
                    border-radius: 8px;
                    transition: background-color 0.3s ease;
                    cursor: pointer;
                }
                .menu-item-card:hover {
                    background-color: rgba(255,255,255,0.05);
                }
            `}</style>


            {/* Lightbox Overlay */}
            <AnimatePresence>
                {hoveredImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setHoveredImage(null)} // Close on background click
                        style={{
                            position: 'fixed',
                            inset: 0,
                            zIndex: 9999,
                            backgroundColor: 'rgba(0,0,0,0.85)',
                            backdropFilter: 'blur(5px)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer'
                        }}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()} // Prevent close when clicking image
                            style={{ position: 'relative', maxWidth: '90vw', maxHeight: '90vh' }}
                        >
                            <img
                                src={hoveredImage}
                                alt="Dish Preview"
                                style={{
                                    maxWidth: '100%',
                                    maxHeight: '80vh',
                                    borderRadius: '12px',
                                    boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
                                    border: '2px solid var(--color-accent)'
                                }}
                            />
                            <button
                                onClick={() => setHoveredImage(null)}
                                style={{
                                    position: 'absolute',
                                    top: -20,
                                    right: -20,
                                    background: '#fff',
                                    borderRadius: '50%',
                                    border: 'none',
                                    width: 40,
                                    height: 40,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer',
                                    color: '#000'
                                }}
                            >
                                <IoClose size={24} />
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="menu-container">
                {/* LEFT SIDEBAR: Navigation & Filter */}
                <div className="menu-sidebar">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 style={{
                            fontFamily: 'var(--font-heading)',
                            fontSize: '2rem',
                            marginBottom: '2rem',
                            color: 'var(--color-accent)'
                        }}>
                            MENU
                        </h2>

                        {/* Quick Vegetarian Filter - Prominent */}
                        <div className="menu-filter" style={{ marginBottom: '2rem' }}>
                            <p style={{ fontSize: '0.85rem', color: '#888', marginBottom: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Quick Filter</p>
                            <button
                                onClick={() => setIsVegFilter(!isVegFilter)}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.8rem',
                                    background: isVegFilter ? 'linear-gradient(135deg, #4ade80 0%, #22c55e 100%)' : 'rgba(255,255,255,0.05)',
                                    color: isVegFilter ? '#000' : '#fff',
                                    border: isVegFilter ? '2px solid #22c55e' : '2px solid rgba(74, 222, 128, 0.3)',
                                    padding: '1rem 1.5rem',
                                    borderRadius: '12px',
                                    cursor: 'pointer',
                                    fontFamily: 'var(--font-heading)',
                                    fontSize: '1rem',
                                    fontWeight: 700,
                                    width: '100%',
                                    justifyContent: 'center',
                                    transition: 'all 0.3s ease',
                                    boxShadow: isVegFilter ? '0 4px 15px rgba(74, 222, 128, 0.4)' : 'none',
                                    transform: isVegFilter ? 'scale(1.02)' : 'scale(1)'
                                }}
                            >
                                <IoLeaf size={20} style={{ color: isVegFilter ? '#000' : '#4ade80' }} />
                                <span>{isVegFilter ? '🌱 VEGETARIAN ONLY' : 'SHOW VEGETARIAN'}</span>
                            </button>
                        </div>

                        {/* Navigation Items */}
                        <div className="menu-nav-items" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {MENU_TYPES.map((menu) => (
                                <button
                                    key={menu}
                                    onClick={() => setActiveMenu(menu)}
                                    style={{
                                        background: 'none',
                                        border: 'none',
                                        cursor: 'pointer',
                                        fontFamily: 'var(--font-heading)',
                                        fontSize: '1.2rem',
                                        color: activeMenu === menu ? 'var(--color-accent)' : '#666',
                                        textAlign: 'left',
                                        padding: '0.5rem 0',
                                        transition: 'all 0.3s ease',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        opacity: activeMenu === menu ? 1 : 0.6
                                    }}
                                >
                                    {menu}
                                    {activeMenu === menu && (
                                        <motion.div
                                            layoutId="active-arrow"
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                        >
                                            <IoChevronForward size={18} />
                                        </motion.div>
                                    )}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* RIGHT PANEL: Content */}
                <div className="menu-content">
                    <AnimatePresence mode='wait'>
                        <motion.div
                            key={activeMenu}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}
                        >
                            <h3 style={{
                                fontFamily: 'var(--font-heading)',
                                fontSize: '3rem',
                                marginBottom: '2rem',
                                color: '#fff',
                                textTransform: 'uppercase',
                                letterSpacing: '2px'
                            }}>
                                {activeMenu}
                            </h3>

                            {MENU_DATA[activeMenu] ? MENU_DATA[activeMenu].map((section, index) => {
                                // Filter items if Veg Filter is active
                                const filteredItems = isVegFilter
                                    ? section.items.filter(item => {
                                        const nonVegKeywords = ["Chicken", "Beef", "Goat", "Lamb", "Duck", "Venison", "Rabbit", "Ribeye", "Prawn", "Crab", "Monkfish", "Fish", "Squid"];
                                        // "Mock Chicken" exception handled by looking for "Mock Chicken" specifically
                                        if (item.name.includes("Mock Chicken")) return true;

                                        const containsKeyword = (text: string, keywords: string[]) => {
                                            return keywords.some(keyword => text.toLowerCase().includes(keyword.toLowerCase()));
                                        };

                                        if (containsKeyword(item.name, nonVegKeywords)) return false;
                                        if (item.description && containsKeyword(item.description, nonVegKeywords)) return false;
                                        return true;
                                    })
                                    : section.items;

                                if (filteredItems.length === 0) return null;

                                return (
                                    <div key={index} style={{ marginBottom: '3rem' }}>
                                        <div style={{
                                            display: 'flex',
                                            alignItems: 'baseline',
                                            gap: '1rem',
                                            marginBottom: '1.5rem',
                                            borderBottom: '1px solid rgba(255,255,255,0.1)',
                                            paddingBottom: '0.5rem'
                                        }}>
                                            <h4 style={{
                                                fontFamily: 'var(--font-heading)',
                                                fontSize: '1.5rem',
                                                color: 'var(--color-accent)'
                                            }}>
                                                {section.category}
                                            </h4>
                                            {section.description && (
                                                <span style={{ fontSize: '0.9rem', color: '#888', fontStyle: 'italic' }}>
                                                    {section.description}
                                                </span>
                                            )}
                                        </div>

                                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
                                            {filteredItems.map((item, idx) => (
                                                <div
                                                    key={idx}
                                                    className="menu-item-card"
                                                // Removed onMouseEnter for row
                                                >
                                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.5rem' }}>
                                                        <h5 style={{
                                                            fontFamily: 'var(--font-heading)',
                                                            fontSize: '1.2rem',
                                                            color: '#fff',
                                                            letterSpacing: '0.5px',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            gap: '0.5rem'
                                                        }}>
                                                            {item.name}
                                                            {item.image && (
                                                                <button
                                                                    onClick={(e) => {
                                                                        e.stopPropagation();
                                                                        setHoveredImage(item.image || null);
                                                                    }}
                                                                    style={{
                                                                        background: 'none',
                                                                        border: 'none',
                                                                        cursor: 'pointer',
                                                                        padding: 0,
                                                                        display: 'flex',
                                                                        alignItems: 'center'
                                                                    }}
                                                                    title="View Dish"
                                                                >
                                                                    <IoEye size={18} color="var(--color-accent)" />
                                                                </button>
                                                            )}
                                                        </h5>
                                                        {item.price && (
                                                            <span style={{
                                                                color: 'var(--color-accent)',
                                                                fontWeight: 'bold',
                                                                fontFamily: 'var(--font-mono)'
                                                            }}>
                                                                £{item.price}
                                                            </span>
                                                        )}
                                                    </div>
                                                    <p style={{
                                                        color: '#aaa',
                                                        fontSize: '0.95rem',
                                                        lineHeight: '1.5',
                                                        fontFamily: 'var(--font-body)'
                                                    }}>
                                                        {item.description}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                );
                            }) : (
                                <p>Menu items coming soon...</p>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default MenuSection;
