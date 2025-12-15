export interface MenuItem {
    id: string;
    name: string;
    description: string;
    price: number;
    category: string;
    dietary: string[]; // 'VEGAN', 'GF', 'VEGETARIAN'
}

export const CATEGORIES = [
    "MOMO'S",
    "VEG",
    "SEAFOOD",
    "MEAT, GAME + POULTRY",
    "BREAD, RICE & NOODLES",
    "SIDES",
    "DESSERT"
];

export const MENU_ITEMS: MenuItem[] = [
    // MOMO'S
    {
        id: 'm1',
        name: 'MIX VEGETABLE MOMO',
        description: 'Spinach, mushroom, courgettes, tofu.',
        price: 7.00,
        category: "MOMO'S",
        dietary: ['VEGAN']
    },
    {
        id: 'm2',
        name: 'CHICKEN MOMO',
        description: 'Soy, garlic, spring onions.',
        price: 7.50,
        category: "MOMO'S",
        dietary: []
    },
    {
        id: 'm3',
        name: 'KID GOAT MOMO',
        description: 'Garam masala, cardamom, ginger & garlic.',
        price: 8.50,
        category: "MOMO'S",
        dietary: []
    },
    {
        id: 'm4',
        name: 'BEEF MOMO',
        description: 'Leeks, red chilli, coriander.',
        price: 8.00,
        category: "MOMO'S",
        dietary: []
    },
    {
        id: 'm5',
        name: 'POPCORN CAULIFLOWER',
        description: 'Purple & white, smoked, soya garlic dip.',
        price: 10.20,
        category: "MOMO'S",
        dietary: ['VEGAN', 'GF']
    },

    // VEG
    {
        id: 'v1',
        name: 'BOMBAY CHILLI MOCK CHICKEN',
        description: 'Celery, szechuan chilli, mixed peppers.',
        price: 13.25,
        category: 'VEG',
        dietary: ['VEGAN']
    },
    {
        id: 'v2',
        name: 'STICKY SESAME VEGETABLES',
        description: 'Crispy veg fritters, sticky ginger glaze.',
        price: 11.20,
        category: 'VEG',
        dietary: ['VEGAN']
    },
    {
        id: 'v3',
        name: 'CRACKLING SPINACH',
        description: 'Sweet yogurt, date & plum sauce, pomegranate.',
        price: 10.20,
        category: 'VEG',
        dietary: ['GF', 'VEGETARIAN']
    },
    {
        id: 'v4',
        name: 'HAKKA CHILLI PANEER LETTUCE CUPS',
        description: 'Cottage cheese, shallots, soy sauce, white + black pepper.',
        price: 13.25,
        category: 'VEG',
        dietary: ['GF', 'VEGETARIAN']
    },
    {
        id: 'v5',
        name: 'CRISPY OKRA SALT ‘N’ PEPPER',
        description: 'Pink salt, chillies, burnt garlic.',
        price: 10.20,
        category: 'VEG',
        dietary: ['GF', 'VEGAN']
    },

    // SEAFOOD
    {
        id: 's1',
        name: 'BOMBAY CHILLI PRAWNS',
        description: 'Celery, szechuan chilli, mixed peppers.',
        price: 14.50,
        category: 'SEAFOOD',
        dietary: ['GF']
    },
    {
        id: 's2',
        name: 'MALABAR MONKFISH CURRY',
        description: 'Grilled, saffron butter, fresh coconut.',
        price: 15.75,
        category: 'SEAFOOD',
        dietary: ['GF']
    },

    // MEAT
    {
        id: 'mg1',
        name: 'RIBEYE DRY RED CHILLI',
        description: 'Beef strips, kashmiri red chillies, roasted cashews.',
        price: 19.00,
        category: 'MEAT, GAME + POULTRY',
        dietary: ['GF']
    },
    {
        id: 'mg2',
        name: 'RABBIT WONTONS',
        description: 'Burnt garlic, black bean, chilli oil.',
        price: 14.20,
        category: 'MEAT, GAME + POULTRY',
        dietary: []
    },
    {
        id: 'mg3',
        name: 'LAMB CHOPS – BLACK BEAN DUST',
        description: 'Stone flower masala rub, charred to perfection.',
        price: 21.00,
        category: 'MEAT, GAME + POULTRY',
        dietary: ['GF']
    },
    {
        id: 'mg4',
        name: 'SHREDDED CHILLI VENISON',
        description: 'Sweet chilli reduction, mantou bread.',
        price: 15.50,
        category: 'MEAT, GAME + POULTRY',
        dietary: []
    },
    {
        id: 'mg5',
        name: 'MANCHURIAN CHICKEN',
        description: 'Shallots, coriander, soy glaze.',
        price: 13.50,
        category: 'MEAT, GAME + POULTRY',
        dietary: []
    },
    {
        id: 'mg6',
        name: 'LOLLIPOP CHICKEN',
        description: 'Spicy + crispy chicken wings, szechuan chutney.',
        price: 10.50,
        category: 'MEAT, GAME + POULTRY',
        dietary: []
    },
    {
        id: 'mg7',
        name: 'KOLKATA CHILLI DUCK',
        description: 'Lean strips, caramelised onions, slit green chilli.',
        price: 14.95,
        category: 'MEAT, GAME + POULTRY',
        dietary: ['GF']
    },

    // BREAD etc
    {
        id: 'br1',
        name: 'STIR FRY SZECHUAN NOODLES',
        description: 'Available with Chicken or Beef.',
        price: 12.20,
        category: 'BREAD, RICE & NOODLES',
        dietary: []
    },
    {
        id: 'br2',
        name: 'VEGETABLE HAKKA NOODLES',
        description: 'Bean sprouts, cabbage, green onions.',
        price: 10.00,
        category: 'BREAD, RICE & NOODLES',
        dietary: ['VEGETARIAN']
    },
    {
        id: 'br3',
        name: 'EGG SZECHUAN FRIED RICE',
        description: 'Spicy fried rice with egg.',
        price: 6.65,
        category: 'BREAD, RICE & NOODLES',
        dietary: ['VEGETARIAN']
    },
    {
        id: 'br4',
        name: 'BURNT GINGER RICE',
        description: 'Aromatic ginger rice.',
        price: 5.65,
        category: 'BREAD, RICE & NOODLES',
        dietary: ['GF', 'VEGAN']
    },
    {
        id: 'br5',
        name: 'BING BREAD',
        description: 'Buttery crisp and crunchy.',
        price: 5.20,
        category: 'BREAD, RICE & NOODLES',
        dietary: ['VEGETARIAN']
    },

    // SIDES
    {
        id: 'sd1',
        name: 'STIR FRIED BROCCOLI',
        description: 'With roasted almonds.',
        price: 6.20,
        category: 'SIDES',
        dietary: ['GF', 'VEGAN']
    },
    {
        id: 'sd2',
        name: 'SWEET POTATO FRIES',
        description: 'Smoked paprika, black pepper, szechuan mayo dip.',
        price: 5.65,
        category: 'SIDES',
        dietary: ['GF', 'VEGAN']
    },

    // DESSERT
    {
        id: 'd1',
        name: 'VEGAN BROWNIE',
        description: 'With vanilla ice cream.',
        price: 11.50,
        category: 'DESSERT',
        dietary: ['VEGAN']
    },
    {
        id: 'd2',
        name: 'LADY KENNY',
        description: 'Traditional dessert.',
        price: 7.50,
        category: 'DESSERT',
        dietary: []
    },
    {
        id: 'd3',
        name: 'SNOWFLAKE GELATO BROWNIE',
        description: 'Rich chocolate brownie with gelato.',
        price: 11.50,
        category: 'DESSERT',
        dietary: []
    }
];
