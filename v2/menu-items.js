// Menu Items Data
const menuItemsData = {
    // Soups
    'Hot and Sour Soup': {
        name: 'Hot and Sour Soup',
        price: '₹150/175',
        description: 'Spicy, soy & ginger flavored thick Chinese broth served with shredded vegetables or chicken',
        image: '/assets/soups/hot-and-sour-soup.png',
        rating: 4.5,
        reviews: 50,
        photos: ['/assets/soups/hot-and-sour-soup.png'],
        category: 'Soups',
        type: 'Veg/Non Veg'
    },
    'Clear Soup': {
        name: 'Clear Soup',
        price: '₹150/175/200',
        description: 'Vegetable/chicken/seafood broth served garnished with spring onions',
        image: '/assets/soups/clear-soup.png',
        rating: 4.3,
        reviews: 45,
        photos: ['/assets/soups/clear-soup.png'],
        category: 'Soups',
        type: 'Veg/Non Veg/Seafood'
    },
    'Manchow Soup': {
        name: 'Manchow Soup',
        price: '₹150/175',
        description: 'Spicy, thick Chinese broth made with dices of vegetables or chicken',
        image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=500',
        rating: 4.6,
        reviews: 60,
        photos: [
            'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=500',
            'https://images.unsplash.com/photo-1547928576-a4a33237cbc3?w=500'
        ],
        category: 'Soups',
        type: 'Veg/Non Veg'
    },
    'Thai Chicken/Coconut Soup': {
        name: 'Thai Chicken/Coconut Soup',
        price: '₹195',
        description: 'A spicy Thai chicken soup made with fresh coconut cream',
        image: 'https://images.unsplash.com/photo-1547928576-a4a33237cbc3?w=500',
        rating: 4.7,
        reviews: 55,
        photos: [
            'https://images.unsplash.com/photo-1547928576-a4a33237cbc3?w=500',
            'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=500'
        ],
        category: 'Soups',
        type: 'Non Veg'
    },
    'Hot and Sour Wanton': {
        name: 'Hot and Sour Wanton',
        price: '₹190',
        description: 'Minced Chicken Wrapped In Wanton Dumplings, Pepper Flavor Chinese Broth With Chinese Cabbage And Spring Onions, Served With Crispy Noodles',
        image: 'https://images.unsplash.com/photo-1547928576-a4a33237cbc3?w=500',
        rating: 4.8,
        reviews: 48,
        photos: [
            'https://images.unsplash.com/photo-1547928576-a4a33237cbc3?w=500',
            'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=500'
        ],
        category: 'Soups',
        type: 'Non Veg'
    },
    'Spicy Fish Ball Soup': {
        name: 'Spicy Fish Ball Soup',
        price: '₹175',
        description: 'Spicy Fish Dumplings In A Clear Soup',
        image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=500',
        rating: 4.5,
        reviews: 42,
        photos: [
            'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=500',
            'https://images.unsplash.com/photo-1547928576-a4a33237cbc3?w=500'
        ],
        category: 'Soups',
        type: 'Non Veg'
    },
    'Brocolli and Almond Soup': {
        name: 'Brocolli and Almond Soup',
        price: '₹160',
        description: 'A healthy and creamy blend of fresh broccoli and toasted almonds',
        image: 'https://images.unsplash.com/photo-1547928576-a4a33237cbc3?w=500',
        rating: 4.4,
        reviews: 38,
        photos: [
            'https://images.unsplash.com/photo-1547928576-a4a33237cbc3?w=500',
            'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=500'
        ],
        category: 'Soups',
        type: 'Veg'
    },
    // Papad & Khakra
    'Masala Papad (Roasted/Fried)': {
        name: 'Masala Papad (Roasted/Fried)',
        price: '₹40/50',
        description: 'Crispy papad topped with onions, tomatoes, and chaat masala',
        image: '/assets/papad/masala-papad.png',
        rating: 4.6,
        reviews: 65,
        photos: ['/assets/papad/masala-papad.png'],
        category: 'Papad & Khakra',
        type: 'Veg'
    },
    'Nagli Papad (Roasted/Fried/Masala)': {
        name: 'Nagli Papad (Roasted/Fried/Masala)',
        price: '₹40/50/80',
        description: 'Healthy and crispy papad made from ragi (finger millet)',
        image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=500',
        rating: 4.5,
        reviews: 45,
        photos: [
            'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=500',
            'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=500'
        ],
        category: 'Papad & Khakra',
        type: 'Veg'
    },
    'Sindhi Papad': {
        name: 'Sindhi Papad',
        price: '₹90',
        description: 'A crispy, spiced lentil cracker, perfect as a snack or side dish',
        image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=500',
        rating: 4.4,
        reviews: 40,
        photos: [
            'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=500',
            'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=500'
        ],
        category: 'Papad & Khakra',
        type: 'Veg'
    },
    'Rumali Khakra (Plain/Cheese/Masala)': {
        name: 'Rumali Khakra (Plain/Cheese/Masala)',
        price: '₹190/240/280',
        description: 'Ultra-thin, large-sized crispy with a delicate crunch',
        image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=500',
        rating: 4.7,
        reviews: 55,
        photos: [
            'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=500',
            'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=500'
        ],
        category: 'Papad & Khakra',
        type: 'Veg'
    },
    'Roasted Papad': {
        name: 'Roasted Papad',
        price: '₹ 60',
        description: 'Traditional roasted papad, crispy and light.',
        image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=500',
        rating: 4.2,
        reviews: 40,
        photos: [
            'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=500',
            'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=500',
            'https://images.unsplash.com/photo-1547928576-a4a33237cbc3?w=500'
        ],
        category: 'Papad & Khakra',
        type: 'Veg'
    },
    'Masala Khakra': {
        name: 'Masala Khakra',
        price: '₹ 90',
        description: 'Crispy Gujarati khakra topped with spicy masala.',
        image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=500',
        rating: 4.4,
        reviews: 35,
        photos: [
            'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=500',
            'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=500',
            'https://images.unsplash.com/photo-1547928576-a4a33237cbc3?w=500'
        ],
        category: 'Papad & Khakra',
        type: 'Veg'
    },
    'Plain Khakra': {
        name: 'Plain Khakra',
        price: '₹ 70',
        description: 'Traditional Gujarati crispy flatbread.',
        image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=500',
        rating: 4.3,
        reviews: 30,
        photos: [
            'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=500',
            'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=500',
            'https://images.unsplash.com/photo-1547928576-a4a33237cbc3?w=500'
        ],
        category: 'Papad & Khakra',
        type: 'Veg'
    },
    'Garden Fresh Salad': {
        name: 'Garden Fresh Salad',
        price: '₹ 180',
        description: 'Fresh mix of seasonal vegetables, lettuce, cherry tomatoes, and house dressing.',
        image: '/assets/salad/garden-fresh-salad.png',
        rating: 4.4,
        reviews: 35,
        photos: ['/assets/salad/garden-fresh-salad.png'],
        category: 'Salads',
        type: 'Veg'
    },
    'Caesar Salad': {
        name: 'Caesar Salad',
        price: '₹240',
        description: 'Crisp romaine lettuce, parmesan cheese, croutons, and Caesar dressing',
        image: '/assets/salad/caesar-salad.png',
        rating: 4.6,
        reviews: 42,
        photos: ['/assets/salad/caesar-salad.png'],
        category: 'Salads',
        type: 'Veg'
    },
    'Chicken Caesar Salad': {
        name: 'Chicken Caesar Salad',
        price: '₹ 220',
        description: 'Caesar salad topped with grilled chicken breast strips.',
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500',
        rating: 4.7,
        reviews: 38,
        photos: [
            'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500',
            'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500',
            'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=500'
        ],
        category: 'Protein Salads',
        type: 'Non-Veg'
    },
    'Paneer Tikka': {
        name: 'Paneer Tikka',
        price: '₹ 220',
        description: 'Cubes of paneer marinated in yogurt and spices, grilled to perfection.',
        image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=500',
        rating: 4.7,
        reviews: 50,
        photos: [
            'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=500',
            'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500',
            'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500'
        ],
        category: 'Indian Appetizers',
        type: 'Veg'
    },
    'Chicken Tikka': {
        name: 'Chicken Tikka',
        price: '₹ 240',
        description: 'Tender chicken pieces marinated in yogurt and spices, grilled to perfection.',
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500',
        rating: 4.8,
        reviews: 55,
        photos: [
            'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500',
            'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500',
            'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=500'
        ],
        category: 'Indian Appetizers',
        type: 'Non-Veg'
    },
    'Mutton Rogan Josh': {
        name: 'Mutton Rogan Josh',
        price: '₹ 320',
        description: 'Tender mutton pieces cooked in a rich, aromatic gravy with Kashmiri spices.',
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500',
        rating: 4.6,
        reviews: 45,
        photos: [
            'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500',
            'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500',
            'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=500'
        ],
        category: 'Mutton',
        type: 'Non-Veg'
    },
    'Mutton Korma': {
        name: 'Mutton Korma',
        price: '₹ 310',
        description: 'Mutton cooked in a creamy, nutty gravy with aromatic spices.',
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500',
        rating: 4.5,
        reviews: 40,
        photos: [
            'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500',
            'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500',
            'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=500'
        ],
        category: 'Mutton',
        type: 'Non-Veg'
    },
    'Mutton Biryani': {
        name: 'Mutton Biryani',
        price: '₹ 340',
        description: 'Fragrant basmati rice cooked with tender mutton pieces and aromatic spices.',
        image: 'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=500',
        rating: 4.8,
        reviews: 62,
        photos: [
            'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=500',
            'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=500',
            'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=500'
        ],
        category: 'Biryani',
        type: 'Non-Veg'
    },
    'Fish Curry': {
        name: 'Fish Curry',
        price: '₹ 280',
        description: 'Fresh fish cooked in a tangy and spicy coconut-based curry.',
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500',
        rating: 4.7,
        reviews: 35,
        photos: [
            'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500',
            'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500',
            'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=500'
        ],
        category: 'Seafood',
        type: 'Non-Veg'
    },
    'Prawn Curry': {
        name: 'Prawn Curry',
        price: '₹ 290',
        description: 'Juicy prawns cooked in rich and spicy curry.',
        image: 'https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=500',
        rating: 4.7,
        reviews: 48,
        photos: [
            'https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=500',
            'https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=500',
            'https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=500'
        ],
        category: 'Prawns',
        type: 'Non-Veg'
    },
    'Veg Hakka Noodles': {
        name: 'Veg Hakka Noodles',
        price: '₹ 180',
        description: 'Stir-fried noodles with fresh vegetables and soy sauce.',
        image: 'https://images.unsplash.com/photo-1552611052-33e04de081de?w=500',
        rating: 4.5,
        reviews: 52,
        photos: [
            'https://images.unsplash.com/photo-1552611052-33e04de081de?w=500',
            'https://images.unsplash.com/photo-1552611052-33e04de081de?w=500',
            'https://images.unsplash.com/photo-1552611052-33e04de081de?w=500'
        ],
        category: 'Vegetarian',
        type: 'Veg'
    },
    'Chicken Noodles': {
        name: 'Chicken Noodles',
        price: '₹ 200',
        description: 'Stir-fried noodles with chicken and vegetables in soy sauce.',
        image: 'https://images.unsplash.com/photo-1552611052-33e04de081de?w=500',
        rating: 4.6,
        reviews: 47,
        photos: [
            'https://images.unsplash.com/photo-1552611052-33e04de081de?w=500',
            'https://images.unsplash.com/photo-1552611052-33e04de081de?w=500',
            'https://images.unsplash.com/photo-1552611052-33e04de081de?w=500'
        ],
        category: 'Non-Vegetarian',
        type: 'Non-Veg'
    },
    'Veg Sizzler': {
        name: 'Veg Sizzler',
        price: '₹ 250',
        description: 'Assorted vegetables, paneer, and rice served on a sizzling hot plate.',
        image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=500',
        rating: 4.4,
        reviews: 38,
        photos: [
            'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=500',
            'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=500',
            'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=500'
        ],
        category: 'Vegetarian',
        type: 'Veg'
    },
    'Chicken Sizzler': {
        name: 'Chicken Sizzler',
        price: '₹ 290',
        description: 'Grilled chicken, vegetables, and rice served on a sizzling hot plate.',
        image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=500',
        rating: 4.7,
        reviews: 42,
        photos: [
            'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=500',
            'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=500',
            'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=500'
        ],
        category: 'Non-Vegetarian',
        type: 'Non-Veg'
    },
    'Margherita': {
        name: 'Margherita',
        price: '₹ 220',
        description: 'Classic pizza with tomato sauce, mozzarella cheese, and fresh basil.',
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500',
        rating: 4.6,
        reviews: 55,
        photos: [
            'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500',
            'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500',
            'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500'
        ],
        category: 'Vegetarian',
        type: 'Veg'
    },
    'Chicken Supreme': {
        name: 'Chicken Supreme',
        price: '₹ 270',
        description: 'Pizza topped with chicken, bell peppers, onions, and mozzarella cheese.',
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500',
        rating: 4.8,
        reviews: 48,
        photos: [
            'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500',
            'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500',
            'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500'
        ],
        category: 'Non-Vegetarian',
        type: 'Non-Veg'
    },
    'Veg Pasta': {
        name: 'Veg Pasta',
        price: '₹ 200',
        description: 'Pasta tossed with fresh vegetables in tomato sauce.',
        image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=500',
        rating: 4.5,
        reviews: 40,
        photos: [
            'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=500',
            'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=500',
            'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=500'
        ],
        category: 'Vegetarian',
        type: 'Veg'
    },
    'Chicken Pasta': {
        name: 'Chicken Pasta',
        price: '₹ 240',
        description: 'Pasta with grilled chicken and vegetables in creamy sauce.',
        image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=500',
        rating: 4.7,
        reviews: 45,
        photos: [
            'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=500',
            'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=500',
            'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=500'
        ],
        category: 'Non-Vegetarian',
        type: 'Non-Veg'
    },
    'Grilled Chicken': {
        name: 'Grilled Chicken',
        price: '₹ 280',
        description: 'Juicy chicken breast marinated and grilled to perfection.',
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=500',
        rating: 4.8,
        reviews: 52,
        photos: [
            'https://images.unsplash.com/photo-1544025162-d76694265947?w=500',
            'https://images.unsplash.com/photo-1544025162-d76694265947?w=500',
            'https://images.unsplash.com/photo-1544025162-d76694265947?w=500'
        ],
        category: 'Main Course',
        type: 'Non-Veg'
    },
    'Fish & Chips': {
        name: 'Fish & Chips',
        price: '₹ 260',
        description: 'Crispy battered fish served with french fries and tartar sauce.',
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=500',
        rating: 4.6,
        reviews: 45,
        photos: [
            'https://images.unsplash.com/photo-1544025162-d76694265947?w=500',
            'https://images.unsplash.com/photo-1544025162-d76694265947?w=500',
            'https://images.unsplash.com/photo-1544025162-d76694265947?w=500'
        ],
        category: 'Main Course',
        type: 'Non-Veg'
    },
    'Veg Biryani': {
        name: 'Veg Biryani',
        price: '₹ 200',
        description: 'Fragrant basmati rice cooked with mixed vegetables and aromatic spices.',
        image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=500',
        rating: 4.5,
        reviews: 48,
        photos: [
            'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=500',
            'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=500',
            'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=500'
        ],
        category: 'Vegetarian',
        type: 'Veg'
    },
    'Chicken Biryani': {
        name: 'Chicken Biryani',
        price: '₹ 240',
        description: 'Fragrant basmati rice cooked with tender chicken pieces and aromatic spices.',
        image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=500',
        rating: 4.8,
        reviews: 62,
        photos: [
            'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=500',
            'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=500',
            'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=500'
        ],
        category: 'Non-Vegetarian',
        type: 'Non-Veg'
    },
    'Hara Bhara Kabab': {
        name: 'Hara Bhara Kabab',
        price: '₹ 190',
        description: 'Green vegetable patties made with spinach, peas, and potatoes.',
        image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=500',
        rating: 4.6,
        reviews: 42,
        photos: [
            'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=500',
            'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=500',
            'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=500'
        ],
        category: 'Vegetarian',
        type: 'Veg'
    },
    'Mutton Seekh Kabab': {
        name: 'Mutton Seekh Kabab',
        price: '₹ 280',
        description: 'Minced mutton mixed with spices and grilled on skewers.',
        image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=500',
        rating: 4.9,
        reviews: 58,
        photos: [
            'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=500',
            'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=500',
            'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=500'
        ],
        category: 'Non-Vegetarian',
        type: 'Non-Veg'
    },
    'Fish Tikka': {
        name: 'Fish Tikka',
        price: '₹450',
        description: 'Boneless fish chunks grilled with aromatic spices',
        image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=500',
        rating: 4.7,
        reviews: 45,
        photos: [
            'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=500'
        ],
        category: 'Seafood',
        type: 'Non-Veg'
    },
    'Butter Garlic Prawns': {
        name: 'Butter Garlic Prawns',
        price: '₹495',
        description: 'Juicy prawns tossed in butter, garlic, and herbs',
        image: 'https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=500',
        rating: 4.8,
        reviews: 50,
        photos: [
            'https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=500'
        ],
        category: 'Seafood',
        type: 'Non-Veg'
    },
    'Fish Finger': {
        name: 'Fish Finger',
        price: '₹349',
        description: 'Crispy crumb-fried fish fingers served with tartar sauce',
        image: 'https://images.unsplash.com/photo-1579887829494-49fa45c57d24?w=500',
        rating: 4.5,
        reviews: 42,
        photos: [
            'https://images.unsplash.com/photo-1579887829494-49fa45c57d24?w=500',
            'https://images.unsplash.com/photo-1600699626575-36420e500093?w=500'
        ],
        category: 'Seafood',
        type: 'Non Veg'
    },
    'Crispy Fried Prawns': {
        name: 'Crispy Fried Prawns',
        price: '₹495',
        description: 'Prawns marinated with spicy ginger garlic base and coated in crispy batter',
        image: 'https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=500',
        rating: 4.7,
        reviews: 48,
        photos: [
            'https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=500'
        ],
        category: 'Seafood',
        type: 'Non-Veg'
    },
    'Chettinad Fish Fry': {
        name: 'Chettinad Fish Fry',
        price: '₹429',
        description: 'Fish marinated in spicy Chettinad masala and pan-fried to perfection',
        image: 'https://images.unsplash.com/photo-1600699626575-36420e500093?w=500',
        rating: 4.6,
        reviews: 38,
        photos: [
            'https://images.unsplash.com/photo-1600699626575-36420e500093?w=500',
            'https://images.unsplash.com/photo-1579887829494-49fa45c57d24?w=500'
        ],
        category: 'Seafood',
        type: 'Non Veg'
    },
    'Spicy Golden Fried Prawn': {
        name: 'Spicy Golden Fried Prawn',
        price: '₹589',
        description: 'Crispy fried prawns in golden batter with special spice blend',
        image: 'https://images.unsplash.com/photo-1625943553852-781c6dd46faa?w=500',
        rating: 4.7,
        reviews: 55,
        photos: [
            'https://images.unsplash.com/photo-1625943553852-781c6dd46faa?w=500',
            'https://images.unsplash.com/photo-1600699626575-36420e500093?w=500'
        ],
        category: 'Seafood',
        type: 'Non Veg'
    },
    'Naan': {
        name: 'Naan',
        price: '₹ 50',
        description: 'Soft and fluffy tandoor-baked flatbread.',
        image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500',
        rating: 4.5,
        reviews: 65,
        photos: [
            'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500',
            'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500',
            'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500'
        ],
        category: 'Tandoori',
        type: 'Veg'
    },
    'Garlic Naan': {
        name: 'Garlic Naan',
        price: '₹ 60',
        description: 'Naan bread topped with garlic and butter.',
        image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500',
        rating: 4.7,
        reviews: 58,
        photos: [
            'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500',
            'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500',
            'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500'
        ],
        category: 'Tandoori',
        type: 'Veg'
    },
    'Dal Tadka': {
        name: 'Dal Tadka',
        price: '₹ 150',
        description: 'Yellow lentils tempered with spices and ghee.',
        image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=500',
        rating: 4.6,
        reviews: 55,
        photos: [
            'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=500',
            'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=500',
            'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=500'
        ],
        category: 'Dals',
        type: 'Veg'
    },
    'Dal Makhani': {
        name: 'Dal Makhani',
        price: '₹ 180',
        description: 'Black lentils cooked with butter and cream.',
        image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=500',
        rating: 4.8,
        reviews: 62,
        photos: [
            'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=500',
            'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=500',
            'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=500'
        ],
        category: 'Dals',
        type: 'Veg'
    },
    'Boondi Raita': {
        name: 'Boondi Raita',
        price: '₹ 80',
        description: 'Yogurt mixed with boondi (fried gram flour balls) and spices.',
        image: 'https://images.unsplash.com/photo-1533640924469-f04e06f8898d?w=500',
        rating: 4.5,
        reviews: 45,
        photos: [
            'https://images.unsplash.com/photo-1533640924469-f04e06f8898d?w=500',
            'https://images.unsplash.com/photo-1533640924469-f04e06f8898d?w=500',
            'https://images.unsplash.com/photo-1533640924469-f04e06f8898d?w=500'
        ],
        category: 'Raita',
        type: 'Veg'
    },
    'Mix Veg Raita': {
        name: 'Mix Veg Raita',
        price: '₹ 90',
        description: 'Yogurt mixed with chopped vegetables and spices.',
        image: 'https://images.unsplash.com/photo-1533640924469-f04e06f8898d?w=500',
        rating: 4.6,
        reviews: 48,
        photos: [
            'https://images.unsplash.com/photo-1533640924469-f04e06f8898d?w=500',
            'https://images.unsplash.com/photo-1533640924469-f04e06f8898d?w=500',
            'https://images.unsplash.com/photo-1533640924469-f04e06f8898d?w=500'
        ],
        category: 'Raita',
        type: 'Veg'
    },
    'Mango Mocktail': {
        name: 'Mango Mocktail',
        price: '₹ 150',
        description: 'Refreshing mango drink with mint and soda.',
        image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=500',
        rating: 4.7,
        reviews: 52,
        photos: [
            'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=500',
            'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=500',
            'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=500'
        ],
        category: 'Fruit Based',
        type: 'Veg'
    },
    'Virgin Mojito': {
        name: 'Virgin Mojito',
        price: '₹ 140',
        description: 'Mint, lime, and soda water mocktail.',
        image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=500',
        rating: 4.6,
        reviews: 45,
        photos: [
            'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=500',
            'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=500',
            'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=500'
        ],
        category: 'Special',
        type: 'Veg'
    },
    'Gulab Jamun': {
        name: 'Gulab Jamun',
        price: '₹ 100',
        description: 'Soft milk-based balls soaked in sugar syrup.',
        image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=500',
        rating: 4.8,
        reviews: 65,
        photos: [
            'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=500',
            'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=500',
            'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=500'
        ],
        category: 'Indian',
        type: 'Veg'
    },
    'Chocolate Brownie': {
        name: 'Chocolate Brownie',
        price: '₹ 150',
        description: 'Rich chocolate brownie served with vanilla ice cream.',
        image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=500',
        rating: 4.7,
        reviews: 58,
        photos: [
            'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=500',
            'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=500',
            'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=500'
        ],
        category: 'International',
        type: 'Veg'
    },
    'Chocolate Milkshake': {
        name: 'Chocolate Milkshake',
        price: '₹ 150',
        description: 'Rich chocolate milkshake topped with whipped cream.',
        image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500',
        rating: 4.6,
        reviews: 48,
        photos: [
            'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500',
            'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500',
            'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500'
        ],
        category: 'Classic',
        type: 'Veg'
    },
    'Oreo Milkshake': {
        name: 'Oreo Milkshake',
        price: '₹ 180',
        description: 'Creamy milkshake with crushed Oreo cookies.',
        image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500',
        rating: 4.8,
        reviews: 52,
        photos: [
            'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500',
            'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500',
            'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500'
        ],
        category: 'Special',
        type: 'Veg'
    },
    'Greek Salad': {
        name: 'Greek Salad',
        price: '₹150/175/200',
        description: 'Fresh cucumber, tomatoes, olives, feta cheese, and oregano dressing',
        image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=500',
        rating: 4.5,
        reviews: 40,
        photos: [
            'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=500',
            'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500'
        ],
        category: 'Salads',
        type: 'Veg'
    },
    'Grilled Chicken Salad': {
        name: 'Grilled Chicken Salad',
        price: '₹ 210',
        description: 'Fresh greens topped with grilled chicken breast, cherry tomatoes, and balsamic vinaigrette.',
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500',
        rating: 4.6,
        reviews: 45,
        photos: [
            'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500',
            'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500',
            'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=500'
        ],
        category: 'Protein Salads',
        type: 'Non-Veg'
    },
    'Prawn Masala': {
        name: 'Prawn Masala',
        price: '₹ 320',
        description: 'Juicy prawns cooked in a rich, spicy masala gravy.',
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500',
        rating: 4.8,
        reviews: 40,
        photos: [
            'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500',
            'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500',
            'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=500'
        ],
        category: 'Seafood',
        type: 'Non-Veg'
    },
    'Steak Salad': {
        name: 'Steak Salad',
        price: '₹150',
        description: 'Crisp julienned veggies tossed in a light, flavorful dressing (A refreshing and healthy choice!)',
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500',
        rating: 4.7,
        reviews: 38,
        photos: [
            'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500',
            'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500'
        ],
        category: 'Salads',
        type: 'Veg'
    },
    'Russian Salad (Veg/Chicken)': {
        name: 'Russian Salad (Veg/Chicken)',
        price: '₹220/270',
        description: 'Diced vegetables, mayonnaise, and boiled potato/chicken with seasonings',
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500',
        rating: 4.5,
        reviews: 45,
        photos: [
            'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500',
            'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500'
        ],
        category: 'Salads',
        type: 'Veg/Non Veg'
    },
    'Cheese Corn Balls': {
        name: 'Cheese Corn Balls',
        price: '₹150/175',
        description: 'Golden-fried cheese and corn-filled bites',
        image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=500',
        rating: 4.6,
        reviews: 52,
        category: 'Veg Indian Appetizers',
        type: 'Veg'
    },
    'Chicken Chilli': {
        name: 'Chicken Chilli',
        price: '₹350',
        description: 'Indo-Chinese style crispy and tangy fried chicken',
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500',
        rating: 4.8,
        reviews: 55,
        category: 'Non-Veg Appetizers',
        type: 'Non-Veg'
    },
    'Moroccan Gosht Skewers': {
        name: 'Moroccan Gosht Skewers',
        price: '₹600',
        description: 'Mutton cubes marinated in Moroccan spices served with mint chutney',
        image: 'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=500',
        rating: 4.8,
        reviews: 45,
        photos: [
            'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=500'
        ],
        category: 'Mutton',
        type: 'Non-Veg'
    },
    'Kerala Mutton Fry': {
        name: 'Kerala Mutton Fry',
        price: '₹450',
        description: 'Deep-fried mutton with coconut and curry leaves',
        image: 'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=500',
        rating: 4.7,
        reviews: 42,
        photos: [
            'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=500'
        ],
        category: 'Mutton',
        type: 'Non-Veg'
    },
    'Mutton Cutlets': {
        name: 'Mutton Cutlets',
        price: '₹410',
        description: 'Minced mutton with spices and curry leaves',
        image: 'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=500',
        rating: 4.6,
        reviews: 38,
        photos: [
            'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=500'
        ],
        category: 'Mutton',
        type: 'Non-Veg'
    },
    'Gosht Sukha': {
        name: 'Gosht Sukha',
        price: '₹500',
        description: 'Tender pieces of mutton in gravy, thick made with onion and coconut',
        image: 'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=500',
        rating: 4.7,
        reviews: 40,
        photos: [
            'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=500'
        ],
        category: 'Mutton',
        type: 'Non-Veg'
    },
    'Hakka Noodles': {
        name: 'Hakka Noodles',
        price: '₹280/330/300',
        description: 'Classic Indo-Chinese noodles with vegetables/chicken/egg',
        image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=500',
        rating: 4.6,
        reviews: 58,
        photos: [
            'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=500',
            'https://images.unsplash.com/photo-1552611052-33e04de081de?w=500'
        ],
        category: 'Noodles',
        type: 'Veg/Non Veg'
    },
    'Chilly Garlic Noodles': {
        name: 'Chilly Garlic Noodles',
        price: '₹300/360',
        description: 'Noodles tossed in spicy garlic sauce (Veg/Chicken)',
        image: 'https://images.unsplash.com/photo-1552611052-33e04de081de?w=500',
        rating: 4.5,
        reviews: 45,
        photos: [
            'https://images.unsplash.com/photo-1552611052-33e04de081de?w=500',
            'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=500'
        ],
        category: 'Noodles',
        type: 'Veg/Non Veg'
    },
    'Schezwan Noodles': {
        name: 'Schezwan Noodles',
        price: '₹290/350',
        description: 'Spicy noodles with house-made schezwan sauce (Veg/Chicken)',
        image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=500',
        rating: 4.7,
        reviews: 52,
        photos: [
            'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=500',
            'https://images.unsplash.com/photo-1552611052-33e04de081de?w=500'
        ],
        category: 'Noodles',
        type: 'Veg/Non Veg'
    },
    'Singapore Noodles': {
        name: 'Singapore Noodles',
        price: '₹310/370',
        description: 'Curry-flavored thin noodles with vegetables/chicken',
        image: 'https://images.unsplash.com/photo-1552611052-33e04de081de?w=500',
        rating: 4.6,
        reviews: 48,
        photos: [
            'https://images.unsplash.com/photo-1552611052-33e04de081de?w=500',
            'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=500'
        ],
        category: 'Noodles',
        type: 'Veg/Non Veg'
    },
    'Prawns Burnt Garlic Noodles': {
        name: 'Prawns Burnt Garlic Noodles',
        price: '₹449',
        description: 'Noodles tossed with prawns and aromatic burnt garlic',
        image: 'https://images.unsplash.com/photo-1552611052-33e04de081de?w=500',
        rating: 4.8,
        reviews: 42,
        photos: [
            'https://images.unsplash.com/photo-1552611052-33e04de081de?w=500',
            'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=500'
        ],
        category: 'Noodles',
        type: 'Non Veg'
    },
    'Hong Kong Noodles': {
        name: 'Hong Kong Noodles',
        price: '₹300/360',
        description: 'Cantonese style soft noodles in light sauce (Veg/Chicken)',
        image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=500',
        rating: 4.5,
        reviews: 40,
        photos: [
            'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=500',
            'https://images.unsplash.com/photo-1552611052-33e04de081de?w=500'
        ],
        category: 'Noodles',
        type: 'Veg/Non Veg'
    },
    'Chilli Basil Chicken Noodles': {
        name: 'Chilli Basil Chicken Noodles',
        price: '₹370',
        description: 'Thai-style noodles with chicken and fresh basil',
        image: 'https://images.unsplash.com/photo-1552611052-33e04de081de?w=500',
        rating: 4.7,
        reviews: 45,
        photos: [
            'https://images.unsplash.com/photo-1552611052-33e04de081de?w=500',
            'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=500'
        ],
        category: 'Noodles',
        type: 'Non Veg'
    },
    'Paneer Shashlik Sizzler': {
        name: 'Paneer Shashlik Sizzler',
        price: '₹600',
        description: 'Grilled paneer skewers served with sautéed vegetables, fries, and spicy sauce',
        image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=500',
        rating: 4.7,
        reviews: 45,
        photos: [
            'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=500'
        ],
        category: 'Veg Sizzlers',
        type: 'Veg'
    },
    'Vegetable Steak Sizzler': {
        name: 'Vegetable Steak Sizzler',
        price: '₹550',
        description: 'Grilled vegetable patty with tangy minute sauce, served with buttered rice',
        image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=500',
        rating: 4.6,
        reviews: 42,
        photos: [
            'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=500'
        ],
        category: 'Veg Sizzlers',
        type: 'Veg'
    },
    'Cheese Burst Corn Sizzler': {
        name: 'Cheese Burst Corn Sizzler',
        price: '₹570',
        description: 'Grilled corn and bell peppers topped with molten cheese, served with french fries',
        image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=500',
        rating: 4.8,
        reviews: 48,
        photos: [
            'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=500'
        ],
        category: 'Veg Sizzlers',
        type: 'Veg'
    },
    'Chicken Steak Sizzler': {
        name: 'Chicken Steak Sizzler',
        price: '₹700',
        description: 'Grilled chicken breast in pepper sauce with sautéed veggies and mashed potatoes',
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=500',
        rating: 4.8,
        reviews: 52,
        photos: [
            'https://images.unsplash.com/photo-1544025162-d76694265947?w=500'
        ],
        category: 'Non-Veg Sizzlers',
        type: 'Non-Veg'
    },
    'Peri Peri Grilled Chicken Sizzler': {
        name: 'Peri Peri Grilled Chicken Sizzler',
        price: '₹750',
        description: 'Spicy peri-peri chicken with garlic butter rice and fries',
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=500',
        rating: 4.9,
        reviews: 55,
        photos: [
            'https://images.unsplash.com/photo-1544025162-d76694265947?w=500'
        ],
        category: 'Non-Veg Sizzlers',
        type: 'Non-Veg'
    },
    'Prawns in Hot Garlic Sauce Sizzler': {
        name: 'Prawns in Hot Garlic Sauce Sizzler',
        price: '₹750',
        description: 'Prawns tossed in garlic sauce served with fried rice',
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=500',
        rating: 4.7,
        reviews: 50,
        photos: [
            'https://images.unsplash.com/photo-1544025162-d76694265947?w=500'
        ],
        category: 'Non-Veg Sizzlers',
        type: 'Non-Veg'
    },
    'Margherita Pizza': {
        name: 'Margherita Pizza',
        price: '₹310',
        description: 'Classic pizza with fresh mozzarella, tomato sauce, and basil',
        image: 'https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=500',
        rating: 4.5,
        reviews: 65,
        photos: [
            'https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=500',
            'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500'
        ],
        category: 'Pizza',
        type: 'Veg'
    },
    'Farmhouse Pizza': {
        name: 'Farmhouse Pizza',
        price: '₹340',
        description: 'Loaded with mushrooms, onions, capsicum, tomatoes and fresh herbs',
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500',
        rating: 4.6,
        reviews: 58,
        photos: [
            'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500',
            'https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=500'
        ],
        category: 'Pizza',
        type: 'Veg'
    },
    'BBQ Pizza': {
        name: 'BBQ Pizza',
        price: '₹360',
        description: 'Topped with BBQ sauce, vegetables, and cheese blend',
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500',
        rating: 4.7,
        reviews: 52,
        photos: [
            'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500',
            'https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=500'
        ],
        category: 'Pizza',
        type: 'Veg'
    },
    'Paneer Pizza': {
        name: 'Paneer Pizza',
        price: '₹350',
        description: 'Topped with marinated paneer cubes, onions, and bell peppers',
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500',
        rating: 4.6,
        reviews: 48,
        photos: [
            'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500',
            'https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=500'
        ],
        category: 'Pizza',
        type: 'Veg'
    },
    'Peri Peri Pizza': {
        name: 'Peri Peri Pizza',
        price: '₹320/360',
        description: 'Spicy peri peri sauce base with choice of veg or chicken toppings',
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500',
        rating: 4.7,
        reviews: 55,
        photos: [
            'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500',
            'https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=500'
        ],
        category: 'Pizza',
        type: 'Veg/Non Veg'
    },
    'Pepperoni Pizza': {
        name: 'Pepperoni Pizza',
        price: '₹380',
        description: 'Classic pizza topped with spicy pepperoni and mozzarella',
        image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=500',
        rating: 4.8,
        reviews: 62,
        photos: [
            'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=500',
            'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500'
        ],
        category: 'Pizza',
        type: 'Non Veg'
    },
    'Paneer Makhni Pizza': {
        name: 'Paneer Makhni Pizza',
        price: '₹360',
        description: 'Butter masala base topped with paneer tikka and onions',
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500',
        rating: 4.6,
        reviews: 45,
        photos: [
            'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500',
            'https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=500'
        ],
        category: 'Pizza',
        type: 'Veg'
    },
    'Paneer Malai Tikka': {
        name: 'Paneer Malai Tikka',
        price: '₹260',
        description: 'Soft paneer cubes marinated in creamy malai and aromatic spices, grilled to perfection',
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500',
        rating: 4.6,
        reviews: 42,
        photos: [
            'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500'
        ],
        category: 'Vegetarian',
        type: 'Veg'
    },
    'Mushroom Galawat Kebab': {
        name: 'Mushroom Galawat Kebab',
        price: '₹240',
        description: 'Minced mushroom patties with royal Lucknowi spices',
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500',
        rating: 4.6,
        reviews: 42,
        photos: [
            'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500'
        ],
        category: 'Vegetarian',
        type: 'Veg'
    },
    'Dahi Ke Kebab': {
        name: 'Dahi Ke Kebab',
        price: '₹220',
        description: 'Creamy hung curd kebabs with mint and mild spices',
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500',
        rating: 4.6,
        reviews: 42,
        photos: [
            'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500'
        ],
        category: 'Vegetarian',
        type: 'Veg'
    },
    'Subz Seekh Kebab': {
        name: 'Subz Seekh Kebab',
        price: '₹230',
        description: 'Minced vegetable skewers with fresh herbs and spices',
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500',
        rating: 4.6,
        reviews: 42,
        photos: [
            'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500'
        ],
        category: 'Vegetarian',
        type: 'Veg'
    },
    'Chicken Malai Kebab': {
        name: 'Chicken Malai Kebab',
        price: '₹280',
        description: 'Tender chicken pieces in creamy marinade with cardamom and cashew paste',
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500',
        rating: 4.6,
        reviews: 42,
        photos: [
            'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500'
        ],
        category: 'Non-Vegetarian',
        type: 'Non-Veg'
    },
    'Mutton Galouti Kebab': {
        name: 'Mutton Galouti Kebab',
        price: '₹320',
        description: 'Melt-in-mouth minced mutton kebabs with royal spices',
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500',
        rating: 4.6,
        reviews: 42,
        photos: [
            'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500'
        ],
        category: 'Non-Vegetarian',
        type: 'Non-Veg'
    },
    'Chicken Seekh Kebab': {
        name: 'Chicken Seekh Kebab',
        price: '₹260',
        description: 'Minced chicken mixed with herbs and spices, grilled on skewers',
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500',
        rating: 4.6,
        reviews: 42,
        photos: [
            'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500'
        ],
        category: 'Non-Vegetarian',
        type: 'Non-Veg'
    },
    'Zafrani Murgh Tikka': {
        name: 'Zafrani Murgh Tikka',
        price: '₹290',
        description: 'Saffron-flavored chicken tikka with aromatic spices',
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500',
        rating: 4.6,
        reviews: 42,
        photos: [
            'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500'
        ],
        category: 'Non-Vegetarian',
        type: 'Non-Veg'
    },
    'Ajwaini Fish Tikka': {
        name: 'Ajwaini Fish Tikka',
        price: '₹320',
        description: 'Fish marinated with carom seeds and yogurt, grilled in tandoor',
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500',
        rating: 4.6,
        reviews: 42,
        photos: [
            'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500'
        ],
        category: 'Seafood',
        type: 'Non-Veg'
    },
    'Amritsari Fish Kebab': {
        name: 'Amritsari Fish Kebab',
        price: '₹300',
        description: 'Spiced fish fillets in gram flour batter, crispy fried',
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500',
        rating: 4.6,
        reviews: 42,
        photos: [
            'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500'
        ],
        category: 'Seafood',
        type: 'Non-Veg'
    },
    'Malai Fish Tikka': {
        name: 'Malai Fish Tikka',
        price: '₹340',
        description: 'Creamy fish tikka with mild spices and herbs',
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500',
        rating: 4.6,
        reviews: 42,
        photos: [
            'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500'
        ],
        category: 'Seafood',
        type: 'Non-Veg'
    },
    'Tandoori Prawns': {
        name: 'Tandoori Prawns',
        price: '₹380',
        description: 'Jumbo prawns marinated in tandoori masala and grilled',
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500',
        rating: 4.6,
        reviews: 42,
        photos: [
            'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500'
        ],
        category: 'Seafood',
        type: 'Non-Veg'
    },
    'Lehsuni Jhinga': {
        name: 'Lehsuni Jhinga',
        price: '₹360',
        description: 'Garlic-flavored prawns grilled to perfection',
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500',
        rating: 4.6,
        reviews: 42,
        photos: [
            'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500'
        ],
        category: 'Seafood',
        type: 'Non-Veg'
    },
    'Kalimiri Prawns': {
        name: 'Kalimiri Prawns',
        price: '₹370',
        description: 'Black pepper crusted prawns with special spice blend',
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500',
        rating: 4.6,
        reviews: 42,
        photos: [
            'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500'
        ],
        category: 'Seafood',
        type: 'Non-Veg'
    },
    'Kebabs': {
        type: 'subcategories',
        data: {
            'Veg Kebabs': [
                { name: 'VEG KATHI WRAP', price: '₹310', description: 'Grilled vegetables and paneer wrapped in roomali roti with mint chutney' },
                { name: 'TANDOORI SARSON KE PHUL', price: '₹450', description: 'Cauliflower florets marinated in mustard and tandoori spices, grilled to perfection' },
                { name: 'PANEER TIKKA', price: '₹380', description: 'Marinated cottage cheese cubes grilled in tandoor with bell peppers and onions' },
                { name: 'MUSHROOM GALAWAT', price: '₹350', description: 'Minced mushroom kebabs with aromatic spices' }
            ],
            'Non-Veg Kebabs': [
                { name: 'CHICKEN MALAI KEBAB', price: '₹420', description: 'Tender chicken pieces marinated in cream and mild spices' },
                { name: 'MUTTON GALOUTI KEBAB', price: '₹480', description: 'Melt-in-mouth minced mutton kebabs with royal spices' },
                { name: 'CHICKEN SEEKH KEBAB', price: '₹400', description: 'Minced chicken seasoned with herbs and spices, grilled on skewers' },
                { name: 'AMRITSARI FISH KEBAB', price: '₹450', description: 'Fish marinated in punjabi spices and deep fried to perfection' },
                { name: 'TANDOORI CHICKEN', price: '₹450/850', description: 'Classic tandoor-roasted chicken marinated in yogurt and spices (Half/Full)' }
            ]
        }
    },
    'Seafood Kebabs': {
        type: 'subcategories',
        data: {
            'Seafood Kebab': [
                { name: 'TANDOORI SURMAI TIKKA', description: 'Fresh surmai marinated in spices and grilled over charcoal', rating: 4.6, reviews: 42 },
                { name: 'PRAWNS KOLIWADA FRY', description: 'Deep-fried prawns coated in a spicy koliwada-style batter', rating: 4.7, reviews: 48 },
                { name: 'TAVA POMFRET', description: 'Pan-fried pomfret cooked in butter and special spices', rating: 4.8, reviews: 52 },
                { name: 'TANDOORI PRAWNS DELIGHT', description: 'Succulent prawns grilled in a tandoor with aromatic spices', rating: 4.9, reviews: 56 },
                { name: 'FISH KOLIWADA CRUNCH', description: 'Batter-fried fish with a crispy, spicy coating', rating: 4.5, reviews: 40 },
                { name: 'SEAFOOD GRILL PLATTER', description: 'A lavish platter of freshly grilled or fried seafood, including crabs, lobsters, pomfret, surmai, and more', rating: 4.9, reviews: 65 }
            ]
        }
    },
    'Pasta': {
        type: 'subcategories',
        data: {
            'Veg Pasta': [
                { name: 'Spaghetti Carbonara Pasta', price: '₹390', description: 'Creamy pasta carbonara with garlic and herbs, egg yolk, cheese sauce' },
                { name: 'Gnocchi in Creme Sauce', price: '₹390', description: 'Soft potato gnocchi in a rich cream sauce' }
            ],
            'Non-Veg Pasta': [
                { name: 'Cajun Chicken Pasta', price: '₹410', description: 'Spicy cajun-spiced chicken with creamy pasta and bell peppers' },
                { name: 'Seafood Marinara', price: '₹490', description: 'Mixed seafood pasta in rich marinara sauce with fresh herbs' }
            ]
        }
    },
    'Rice/Biryani': {
        type: 'subcategories',
        data: {
            'Veg Rice And Biryani': [
                { name: 'VEG FRIED RICE', price: '₹250', description: 'Indo-chinese rice tossed with vegetables and sauces (with schezwan seasoning)' },
                { name: 'VEG SCHEZWAN FRIED RICE', price: '₹270', description: 'Spicy Indo-Chinese rice tossed with vegetables and spicy sauce' },
                { name: 'HONG KONG FRIED RICE', price: '₹310', description: 'Specially prepared rice with sweet vegetables, and a hint of spice' },
                { name: 'PANEER TIKKA BIRYANI', price: '₹350', description: 'A vegetarian take on grilled paneer and basmati rice' }
            ],
            'Non-Veg Rice And Biryani': [
                { name: 'CHICKEN FRIED RICE', price: '₹280', description: 'Grilled Chinese style rice with sautéed veggies and minced chicken' },
                { name: 'CHICKEN DUM BIRYANI', price: '₹360', description: 'One-third portion served with fresh vegetables and aromatic seasoning (A flavorful meal)' },
                { name: 'DUM MURGH/GOSHT HYDERABADI BIRYANI', price: '₹420/520', description: 'Original biryani rice cooked with chicken and aromatic spices' },
                { name: 'DUM JHEENGA LUCKNOWI BIRYANI', price: '₹460', description: 'Basmati rice aromated with prawns, exotic whole garam masala & brown onion cooked in a sealed handi' }
            ]
        }
    },
    'Main Course': {
        type: 'subcategories',
        data: {
            'Chicken Main Course': [
                { name: 'MURG HANDI/LOCAL CURRY (half/full)', price: '₹380/600', description: 'Slow-cooked chicken in a rich, aromatic black gravy' },
                { name: 'MURG KADHAI', price: '₹380', description: 'Spicy stir-fried chicken with green peppers and onions' },
                { name: 'CHICKEN CHETTINAD', price: '₹350', description: 'South Indian spicy coconut-based curry' },
                { name: 'MURG LABARDAR', price: '₹450', description: 'Creamy, tomato-based gravy with a royal touch' },
                { name: 'CHICKEN WANTON MASALA', price: '₹470', description: 'Crispy chicken wontons cooked in a rich spiced masala gravy' },
                { name: 'MURGH MUSALLAM (half/full)', price: '₹650/900', description: 'Whole chicken marinated in aromatic spices, slow-cooked in a luxurious, Mughlai-style gravy served with rice, biryani and egg' },
                { name: 'MURGH MALVANI/GOAN CURRY', price: '₹400', description: 'A coastal cuisine curry made with coconut and spices' },
                { name: 'BEGUM MOTI MURGH NAWABI', price: '₹550', description: 'Tender chicken in a rich cream-based gravy' },
                { name: 'CHICKEN LEG BATERA', price: '₹800', description: 'Juicy chicken leg marinated in flavorful spices and cooked to perfection' },
                { name: 'CHICKEN BAZOOK/A THALI', price: '₹1700/2500', description: 'Half: serves 2-3 people / Full: serves 4-5 people. Includes: Rose Chicken (Full), Chicken Chilli Roll (6 pcs), Chicken Tikka (6 pcs), Chicken Lollipop (6 pcs), Chicken Hara Bhatti (1 portion), Chicken Shorba (4 pcs), Peri Peri Rice' },

                { name: 'MURGH SHAHI MASALA', price: '₹500', description: 'A royal Mughlai chicken dish with rich gravy and cream' },
                { name: 'MURGH MALVANIGDAN CURRY', price: '₹400', description: 'A coastal coconut-based chicken curry with coconut and spices' },
                { name: 'MURGH KORMA', price: '₹380', description: 'Mild, creamy chicken curry' },
                { name: 'CHICKEN LEG RATEERA', price: '₹800', description: 'Juicy chicken leg marinated in special spices and cooked to perfection' },
                { name: 'CHICKEN BAZOOKA THALI', price: '₹1700/2500', description: 'Half/serves 2-3 people (full serves 4-5 people)' }
            ],
            'Fish Main Course': [
                { name: 'BENGALLI MUSTARD FISH CURRY/MASALA (2 PIECES)', price: '₹520', description: 'Fish cooked in a pungent mustard gravy' },
                { name: 'MALABAR PRAWN CURRY/MASALA', price: '₹450', description: 'Creamy prawn curry with malabar spices and coconut' },
                { name: 'CHETTINAD FISH CURRY MASALA (1 PIECE)', price: '₹500', description: 'Spicy South Indian fish curry with roasted spices' },
                { name: 'SURMAI CURRY/MASALA (2 PIECES)', price: '₹480', description: 'Kingfish cooked in a flavorful blend of coastal spices with a rich, aromatic gravy' }
            ],
            'Mutton Main Course': [
                { name: 'MUTTON HANDI (half/full)', price: '₹450/790', description: 'Slow-cooked mutton in a rich, aromatic gravy (DELICACY)' },
                { name: 'MUTTON KADHAI', price: '₹420', description: 'Tender mutton cooked with spices, onions, and green peppers' },
                { name: 'MUTTON CHETTINAD', price: '₹420', description: 'A spicy South Indian mutton curry made with roasted spices and coconut' },
                { name: 'MUTTON ROGAN JOSH', price: '₹450', description: 'Kashmiri-style slow-cooked mutton in rich red gravy' },
                { name: 'MUTTON KORMA', price: '₹450', description: 'Mild, creamy cashew-based Mughlai curry' },
                { name: 'MUTTON BHUNA', price: '₹430', description: 'Thick, dry-spiced mutton curry with onions and tomatoes' }
            ],
            'Veg Main Course': [
                { name: 'SHAHI PANEER', price: '₹350', description: 'Rich Mughlai-style paneer dish with nuts and cream' },
                { name: 'PANEER TIKKA MASALA', price: '₹350', description: 'Grilled paneer cubes in a thick tomato-based sauce' },
                { name: 'METHI LABARDAR', price: '₹300', description: 'A creamy, flavorful curry with fresh fenugreek leaves and rich spices' },
                { name: 'VEG PESHAWARI', price: '₹350', description: 'A rich aromatic curry made with mixed vegetables, creamy gravy, and traditional Peshawari spices' },
                { name: 'VEG LAHORI', price: '₹370', description: 'A flavorful curry with mixed vegetables cooked in a rich spiced tomato-based gravy with aromatic Lahori spices' },
                { name: 'VEG MUGHLAI', price: '₹380', description: 'A royal delicacy of mixed vegetables cooked in a rich, creamy, and mildly spiced Mughlai gravy' },
                { name: 'VEG MELONI', price: '₹370', description: 'A mix of seasonal vegetables in a mildly spiced creamy gravy' },
                { name: 'ACHARI PANEER BHINDI', price: '₹270', description: 'A tangy and flavorful dish with paneer and okra cooked in traditional pickle masala' },
                { name: 'PANEER SHAHANAWABI', price: '₹550', description: 'Soft paneer in a rich, creamy and mildly spiced Mughlai gravy' },
                { name: 'VEG KOLHAPURI', price: '₹250', description: 'A spicy mixed vegetable curry with bold Kolhapuri flavors' },
                { name: 'KHUMB PYAZ HARA PAAN (CHEF\'S SPECIAL)', price: '₹300', description: 'A delicious blend of mushrooms, mint, and fresh green herbs, cooked in aromatic spices' },
                { name: 'KAJU CURRY', price: '₹310', description: 'A rich and creamy curry made with cashew nuts cooked in a flavorful, spiced gravy' }
            ]
        }
    },
    'Breads': {
        type: 'subcategories',
        data: {
            'Indian Breads': [
                { 
                    name: 'CHAPATI', 
                    price: '₹20', 
                    description: 'Traditional whole wheat flatbread, freshly made',
                    rating: 4.5,
                    reviews: 45
                },
                { 
                    name: 'STUFFED ALOO PARATHA', 
                    price: '₹100', 
                    description: 'Whole wheat flatbread stuffed with spiced potato filling',
                    rating: 4.7,
                    reviews: 52
                },
                { 
                    name: 'PLAIN/CHEESE/GARLIC NAAN', 
                    price: '₹50/75/90', 
                    description: 'Tandoor-baked flatbread in plain, cheese, or garlic varieties',
                    rating: 4.8,
                    reviews: 65
                },
                { 
                    name: 'TANDOOR/BUTTER ROTI', 
                    price: '₹30/40', 
                    description: 'Whole wheat bread baked in tandoor, plain or with butter',
                    rating: 4.6,
                    reviews: 48
                },
                { 
                    name: 'LACHHA PARATHA', 
                    price: '₹70', 
                    description: 'Multi-layered flaky whole wheat flatbread',
                    rating: 4.7,
                    reviews: 55
                }
            ]
        }
    },
    'Lentils/Dals': {
        type: 'subcategories',
        data: {
            'Dals': [
                {
                    name: 'DAL TADKA',
                    price: '₹210',
                    description: 'Yellow lentils tempered with cumin, garlic, and spices',
                    rating: 4.6,
                    reviews: 48
                },
                {
                    name: 'DAL FRY',
                    price: '₹200',
                    description: 'Classic yellow lentils cooked with mild spices',
                    rating: 4.5,
                    reviews: 52
                },
                {
                    name: 'DAL PALAK',
                    price: '₹230',
                    description: 'Lentils cooked with fresh spinach and aromatic spices',
                    rating: 4.7,
                    reviews: 45
                },
                {
                    name: 'DAL MAKHNI',
                    price: '₹300',
                    description: 'Creamy black lentils cooked overnight with butter and spices',
                    rating: 4.8,
                    reviews: 65
                }
            ]
        }
    },
    'Accompaniments': {
        type: 'subcategories',
        data: {
            'Raita': [
                {
                    name: 'BOONDI RAITA',
                    price: '₹120',
                    description: 'Yogurt dip with crispy fried gram flour balls and mild spices',
                    rating: 4.6,
                    reviews: 42
                },
                {
                    name: 'PINEAPPLE RAITA',
                    price: '₹150',
                    description: 'Fresh yogurt mixed with sweet pineapple chunks and aromatic spices',
                    rating: 4.7,
                    reviews: 38
                },
                {
                    name: 'MIX-VEG RAITA',
                    price: '₹100',
                    description: 'Yogurt mixed with finely chopped mixed vegetables and mild spices',
                    rating: 4.5,
                    reviews: 45
                }
            ]
        }
    },
    'Mocktails': {
        type: 'subcategories',
        data: {
            'Refreshing Mocktails': [
                {
                    name: 'VIRGIN MOJITO',
                    price: '₹200',
                    description: 'Refreshing mint, lime, and soda-based drink',
                    rating: 4.7,
                    reviews: 58
                },
                {
                    name: 'PINA COLADA',
                    price: '₹250',
                    description: 'Coconut and pineapple-flavored tropical drink',
                    rating: 4.8,
                    reviews: 52
                },
                {
                    name: 'BLUE LAGOON',
                    price: '₹230',
                    description: 'Electric blue mocktail with homemade blue curacao',
                    rating: 4.6,
                    reviews: 45
                },
                {
                    name: 'COCONUT BLISS',
                    price: '₹220',
                    description: 'Chilled coconut milk infused with vanilla',
                    rating: 4.7,
                    reviews: 48
                },
                {
                    name: 'SPICED GUAVA PUNCH',
                    price: '₹230',
                    description: 'Sweet and spicy guava-based cooler',
                    rating: 4.6,
                    reviews: 42
                },
                {
                    name: 'GREEN APPLE COOLER',
                    price: '₹200',
                    description: 'Refreshing green apple-based drink',
                    rating: 4.7,
                    reviews: 50
                },
                {
                    name: 'WATERMELON SPRITZER',
                    price: '₹190',
                    description: 'Chilled watermelon and mint blend',
                    rating: 4.5,
                    reviews: 46
                }
            ]
        }
    },
    'Desserts': {
        type: 'subcategories',
        data: {
            'Sweet Delights': [
                {
                    name: 'ROYAL TREAT SELECTION',
                    price: '₹130',
                    description: 'Gulab Jamun / Rabadi / Shahi Tukda',
                    rating: 4.8,
                    reviews: 65
                },
                {
                    name: 'ICE CREAM FANTASY',
                    price: '₹70/130',
                    description: 'Single / Double Scoop (Vanilla / Mango / Chocolate / Butterscotch / Kesar Pista / Strawberry)',
                    rating: 4.7,
                    reviews: 72
                },
                {
                    name: 'CARAMEL CUSTARD',
                    price: '₹150',
                    description: 'A smooth and creamy baked dessert with a rich caramel topping',
                    rating: 4.6,
                    reviews: 58
                },
                {
                    name: 'SIZZLING BROWNIE',
                    price: '₹260',
                    description: 'Warm chocolate brownie served with vanilla ice cream and hot chocolate sauce',
                    rating: 4.9,
                    reviews: 85
                }
            ]
        }
    },
    'Milkshakes': {
        type: 'subcategories',
        data: {
            'Classic Shakes': [
                {
                    name: 'STRAWBERRY MILKSHAKE',
                    price: '₹140',
                    description: 'Creamy milkshake blended with fresh strawberries (Ice Cream Add-On: ₹30)',
                    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500',
                    rating: 4.6,
                    reviews: 48,
                    photos: [
                        'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500',
                        'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500',
                        'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500'
                    ],
                    category: 'Classic Shakes',
                    type: 'Veg'
                },
                {
                    name: 'SPECIAL PISTA MILKSHAKE',
                    price: '₹160',
                    description: 'Rich pistachio flavored milkshake with crushed nuts (Ice Cream Add-On: ₹30)',
                    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500',
                    rating: 4.7,
                    reviews: 52,
                    photos: [
                        'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500',
                        'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500',
                        'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500'
                    ],
                    category: 'Classic Shakes',
                    type: 'Veg'
                },
                {
                    name: 'BUTTERSCOTCH MILKSHAKE',
                    price: '₹170',
                    description: 'Sweet and creamy butterscotch flavored milkshake (Ice Cream Add-On: ₹30)',
                    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500',
                    rating: 4.8,
                    reviews: 55,
                    photos: [
                        'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500',
                        'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500',
                        'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500'
                    ],
                    category: 'Classic Shakes',
                    type: 'Veg'
                },
                {
                    name: 'LITCHI MILKSHAKE',
                    price: '₹180',
                    description: 'Refreshing milkshake with litchi flavor (Ice Cream Add-On: ₹30)',
                    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500',
                    rating: 4.7,
                    reviews: 45,
                    photos: [
                        'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500',
                        'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500',
                        'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500'
                    ],
                    category: 'Classic Shakes',
                    type: 'Veg'
                },
                {
                    name: 'CHOCOLATE MILKSHAKE',
                    price: '₹170',
                    description: 'Rich chocolate milkshake made with premium cocoa (Ice Cream Add-On: ₹30)',
                    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500',
                    rating: 4.9,
                    reviews: 62,
                    photos: [
                        'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500',
                        'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500',
                        'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500'
                    ],
                    category: 'Classic Shakes',
                    type: 'Veg'
                }
            ]
        }
    },
    'Papad & Khakra': [
        { 
            name: 'Masala Papad', 
            price: '₹50', 
            description: 'Crispy papad topped with onions, tomatoes, and chaat masala',
            rating: 4.5
        },
        { 
            name: 'Papad Roll', 
            price: '₹80', 
            description: 'Crispy rolled papad filled with spiced vegetables and herbs',
            rating: 4.3
        },
        { 
            name: 'Cheese Papad', 
            price: '₹70', 
            description: 'Crispy papad topped with melted cheese and aromatic spices',
            rating: 4.4
        },
        { 
            name: 'Nagli Papad (Roasted/Fried/Masala)', 
            price: '₹40/50/80', 
            description: 'Healthy and crispy papad made from ragi (finger millet)' 
        },
        { 
            name: 'Sindhi Papad', 
            price: '₹90', 
            description: 'A crispy, spiced lentil cracker, perfect as a snack or side dish' 
        },
        { 
            name: 'Rumali Khakra (Plain/Cheese/Masala)', 
            price: '₹190/240/280', 
            description: 'Ultra-thin, large-sized crispy with a delicate crunch' 
        }
    ],
    'Mongolian Chicken Salad': {
        name: 'Mongolian Chicken Salad',
        price: '₹400',
        description: 'Grilled chicken strips tossed with fresh vegetables in a sweet and spicy Mongolian sauce, topped with sesame seeds',
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500',
        rating: 4.6,
        reviews: 42,
        photos: [
            'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500',
            'https://images.unsplash.com/photo-1551248429-40975aa4de74?w=500'
        ],
        category: 'Salads',
        type: 'Non Veg'
    },
    'Chicken Tikka Salad': {
        name: 'Chicken Tikka Salad',
        price: '₹310',
        description: 'Tandoori spiced chicken tikka pieces served on a bed of fresh greens with mint yogurt dressing',
        image: 'https://images.unsplash.com/photo-1551248429-40975aa4de74?w=500',
        rating: 4.5,
        reviews: 38,
        photos: [
            'https://images.unsplash.com/photo-1551248429-40975aa4de74?w=500',
            'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500'
        ],
        category: 'Salads',
        type: 'Non Veg'
    },
    'Tuscan Salad': {
        name: 'Tuscan Salad',
        price: '₹140',
        description: 'Fresh mixed greens with cherry tomatoes, olives, artichokes, and balsamic vinaigrette',
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500',
        rating: 4.3,
        reviews: 35,
        photos: [
            'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500',
            'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500'
        ],
        category: 'Salads',
        type: 'Veg'
    },
    'Veg Pasta Salad': {
        name: 'Veg Pasta Salad',
        price: '₹199',
        description: 'Colorful pasta tossed with fresh vegetables, herbs, and Italian dressing',
        image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=500',
        rating: 4.4,
        reviews: 40,
        photos: [
            'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=500',
            'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500'
        ],
        category: 'Salads',
        type: 'Veg'
    },
    'Paneer Banjara': {
        name: 'Paneer Banjara',
        price: '₹450',
        description: 'Paneer chunks marinated in rustic spices and chargrilled to perfection',
        image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=500',
        rating: 4.7,
        reviews: 45,
        photos: [
            'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=500',
            'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=500'
        ],
        category: 'Veg Indian Appetizers',
        type: 'Veg'
    },
    'Dragon Cheese Cube': {
        name: 'Dragon Cheese Cube',
        price: '₹420',
        description: 'Spicy cheese cubes in fiery dragon sauce with oriental herbs',
        image: 'https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?w=500',
        rating: 4.6,
        reviews: 38,
        photos: [
            'https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?w=500',
            'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=500'
        ],
        category: 'Veg Indian Appetizers',
        type: 'Veg'
    },
    'Paneer Hilltop': {
        name: 'Paneer Hilltop',
        price: '₹520',
        description: 'Premium paneer preparation with mountain herbs and special spice blend',
        image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=500',
        rating: 4.8,
        reviews: 52,
        photos: [
            'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=500',
            'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=500'
        ],
        category: 'Veg Indian Appetizers',
        type: 'Veg'
    },
    'Veg Crispy': {
        name: 'Veg Crispy',
        price: '₹350',
        description: 'Assorted vegetables in a crispy coating tossed in sweet and spicy sauce',
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500',
        rating: 4.5,
        reviews: 40,
        photos: [
            'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500',
            'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=500'
        ],
        category: 'Veg Indian Appetizers',
        type: 'Veg'
    },
    'Veg Spring Roll': {
        name: 'Veg Spring Roll',
        price: '₹299',
        description: 'Crispy rolls stuffed with seasoned vegetables and glass noodles',
        image: 'https://images.unsplash.com/photo-1550617931-e17a7b70dce2?w=500',
        rating: 4.4,
        reviews: 35,
        photos: [
            'https://images.unsplash.com/photo-1550617931-e17a7b70dce2?w=500',
            'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500'
        ],
        category: 'Veg Indian Appetizers',
        type: 'Veg'
    },
    'Paneer Satay': {
        name: 'Paneer Satay',
        price: '₹349',
        description: 'Grilled paneer skewers with peanut sauce and Asian spices',
        image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=500',
        rating: 4.6,
        reviews: 42,
        photos: [
            'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=500',
            'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=500'
        ],
        category: 'Veg Indian Appetizers',
        type: 'Veg'
    },
    'Mushroom Tikka': {
        name: 'Mushroom Tikka',
        price: '₹330',
        description: 'Marinated mushrooms grilled in tandoor with aromatic spices',
        image: 'https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?w=500',
        rating: 4.5,
        reviews: 38,
        photos: [
            'https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?w=500',
            'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=500'
        ],
        category: 'Veg Indian Appetizers',
        type: 'Veg'
    },
    'Naramdil Tikki': {
        name: 'Naramdil Tikki',
        price: '₹349',
        description: 'Soft-centered vegetable cutlets with special herbs and spices',
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500',
        rating: 4.4,
        reviews: 36,
        photos: [
            'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500',
            'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=500'
        ],
        category: 'Veg Indian Appetizers',
        type: 'Veg'
    },
    'Chicken Kung Pao': {
        name: 'Chicken Kung Pao',
        price: '₹400',
        description: 'Diced chicken with peanuts in spicy kung pao sauce',
        image: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?w=500',
        rating: 4.6,
        reviews: 45,
        photos: [
            'https://images.unsplash.com/photo-1525755662778-989d0524087e?w=500',
            'https://images.unsplash.com/photo-1562967914-608f82629710?w=500'
        ],
        category: 'Non-Veg Appetizers',
        type: 'Non Veg'
    },
    'Chicken Oyster Chilli': {
        name: 'Chicken Oyster Chilli',
        price: '₹400',
        description: 'Chicken in oyster sauce with green chilies and bell peppers',
        image: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=500',
        rating: 4.5,
        reviews: 38,
        photos: [
            'https://images.unsplash.com/photo-1562967914-608f82629710?w=500',
            'https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=500'
        ],
        category: 'Non-Veg Appetizers',
        type: 'Non Veg'
    },
    'Drums of Heaven': {
        name: 'Drums of Heaven',
        price: '₹450',
        description: 'Spicy chicken wings tossed in schezwan sauce',
        image: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=500',
        rating: 4.7,
        reviews: 52,
        photos: [
            'https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=500',
            'https://images.unsplash.com/photo-1562967914-608f82629710?w=500'
        ],
        category: 'Non-Veg Appetizers',
        type: 'Non Veg'
    },
    'Chicken Popcorn': {
        name: 'Chicken Popcorn',
        price: '₹349',
        description: 'Bite-sized crispy chicken pieces served with special dip',
        image: 'https://images.unsplash.com/photo-1585325701956-60dd9c8553bc?w=500',
        rating: 4.4,
        reviews: 40,
        photos: [
            'https://images.unsplash.com/photo-1585325701956-60dd9c8553bc?w=500',
            'https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=500'
        ],
        category: 'Non-Veg Appetizers',
        type: 'Non Veg'
    },
    'Chicken Afghani Tikka': {
        name: 'Chicken Afghani Tikka',
        price: '₹399',
        description: 'Creamy marinated chicken tikka with afghani spices',
        image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=500',
        rating: 4.6,
        reviews: 48,
        photos: [
            'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=500',
            'https://images.unsplash.com/photo-1562967914-608f82629710?w=500'
        ],
        category: 'Non-Veg Appetizers',
        type: 'Non Veg'
    },
    'Chicken Bhunna': {
        name: 'Chicken Bhunna',
        price: '₹400',
        description: 'Slow-cooked chicken in thick spicy masala',
        image: 'https://images.unsplash.com/photo-1603496987351-f84a3ba5ec85?w=500',
        rating: 4.5,
        reviews: 42,
        photos: [
            'https://images.unsplash.com/photo-1603496987351-f84a3ba5ec85?w=500',
            'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=500'
        ],
        category: 'Non-Veg Appetizers',
        type: 'Non Veg'
    },
    'Thai Chilli Chicken': {
        name: 'Thai Chilli Chicken',
        price: '₹417',
        description: 'Thai style spicy chicken with basil and bird eye chilies',
        image: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=500',
        rating: 4.7,
        reviews: 46,
        photos: [
            'https://images.unsplash.com/photo-1562967914-608f82629710?w=500',
            'https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=500'
        ],
        category: 'Non-Veg Appetizers',
        type: 'Non Veg'
    },
    'Chicken Butter Pepper': {
        name: 'Chicken Butter Pepper',
        price: '₹380',
        description: 'Tender chicken pieces in creamy butter pepper sauce',
        image: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=500',
        rating: 4.6,
        reviews: 44,
        photos: [
            'https://images.unsplash.com/photo-1562967914-608f82629710?w=500',
            'https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=500'
        ],
        category: 'Non-Veg Appetizers',
        type: 'Non Veg'
    },
    'Chicken Lasooni Lollipop': {
        name: 'Chicken Lasooni Lollipop',
        price: '₹500',
        description: 'Garlic flavored chicken lollipops with special herbs',
        image: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=500',
        rating: 4.8,
        reviews: 55,
        photos: [
            'https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=500',
            'https://images.unsplash.com/photo-1562967914-608f82629710?w=500'
        ],
        category: 'Non-Veg Appetizers',
        type: 'Non Veg'
    },
    'Chicken Nuggets': {
        name: 'Chicken Nuggets',
        price: '₹249',
        description: 'Golden fried chicken nuggets served with dips',
        image: 'https://images.unsplash.com/photo-1585325701956-60dd9c8553bc?w=500',
        rating: 4.3,
        reviews: 35,
        photos: [
            'https://images.unsplash.com/photo-1585325701956-60dd9c8553bc?w=500',
            'https://images.unsplash.com/photo-1562967914-608f82629710?w=500'
        ],
        category: 'Non-Veg Appetizers',
        type: 'Non Veg'
    },
    'Chicken Satay': {
        name: 'Chicken Satay',
        price: '₹439',
        description: 'Grilled chicken skewers with peanut sauce',
        image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=500',
        rating: 4.7,
        reviews: 48,
        photos: [
            'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=500',
            'https://images.unsplash.com/photo-1562967914-608f82629710?w=500'
        ],
        category: 'Non-Veg Appetizers',
        type: 'Non Veg'
    },
    'Chicken Salt N Pepper': {
        name: 'Chicken Salt N Pepper',
        price: '₹384',
        description: 'Crispy chicken tossed with salt and crushed pepper',
        image: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=500',
        rating: 4.5,
        reviews: 42,
        photos: [
            'https://images.unsplash.com/photo-1562967914-608f82629710?w=500',
            'https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=500'
        ],
        category: 'Non-Veg Appetizers',
        type: 'Non Veg'
    },
    'Chicken Spring Rolls': {
        name: 'Chicken Spring Rolls',
        price: '₹399',
        description: 'Crispy rolls stuffed with minced chicken and vegetables',
        image: 'https://images.unsplash.com/photo-1550617931-e17a7b70dce2?w=500',
        rating: 4.4,
        reviews: 38,
        photos: [
            'https://images.unsplash.com/photo-1550617931-e17a7b70dce2?w=500',
            'https://images.unsplash.com/photo-1562967914-608f82629710?w=500'
        ],
        category: 'Non-Veg Appetizers',
        type: 'Non Veg'
    },
    'Chicken with Burnt Garlic': {
        name: 'Chicken with Burnt Garlic',
        price: '₹384',
        description: 'Chicken pieces tossed with burnt garlic and oriental sauce',
        image: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=500',
        rating: 4.6,
        reviews: 44,
        photos: [
            'https://images.unsplash.com/photo-1562967914-608f82629710?w=500',
            'https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=500'
        ],
        category: 'Non-Veg Appetizers',
        type: 'Non Veg'
    },
    'Peri Peri Chilli Chicken': {
        name: 'Peri Peri Chilli Chicken',
        price: '₹439',
        description: 'Spicy chicken in peri peri and chilli sauce blend',
        image: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=500',
        rating: 4.7,
        reviews: 50,
        photos: [
            'https://images.unsplash.com/photo-1562967914-608f82629710?w=500',
            'https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=500'
        ],
        category: 'Non-Veg Appetizers',
        type: 'Non Veg'
    },
    'Schezwan Chicken Lollipop': {
        name: 'Schezwan Chicken Lollipop',
        price: '₹399',
        description: 'Chicken lollipops tossed in spicy schezwan sauce',
        image: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=500',
        rating: 4.6,
        reviews: 46,
        photos: [
            'https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=500',
            'https://images.unsplash.com/photo-1562967914-608f82629710?w=500'
        ],
        category: 'Non-Veg Appetizers',
        type: 'Non Veg'
    },
    'Gosht Nihari': {
        name: 'Gosht Nihari',
        price: '₹420',
        description: 'Slow-cooked tender mutton in rich aromatic gravy with special nihari spices',
        image: 'https://images.unsplash.com/photo-1603496987351-f84a3ba5ec85?w=500',
        rating: 4.7,
        reviews: 48,
        photos: [
            'https://images.unsplash.com/photo-1603496987351-f84a3ba5ec85?w=500',
            'https://images.unsplash.com/photo-1576577445504-6c7298cb6f8b?w=500'
        ],
        category: 'Mutton',
        type: 'Non Veg'
    },
    'Gosht Sukha': {
        name: 'Gosht Sukha',
        price: '₹550',
        description: 'Tender pieces of mutton in thick masala, cooked with onion and coconut',
        image: 'https://images.unsplash.com/photo-1576577445504-6c7298cb6f8b?w=500',
        rating: 4.6,
        reviews: 42,
        photos: [
            'https://images.unsplash.com/photo-1576577445504-6c7298cb6f8b?w=500',
            'https://images.unsplash.com/photo-1603496987351-f84a3ba5ec85?w=500'
        ],
        category: 'Mutton',
        type: 'Non Veg'
    },
    'Parsi Mutton Cutlet': {
        name: 'Parsi Mutton Cutlet',
        price: '₹399',
        description: 'Traditional Parsi-style spiced mutton patties with aromatic herbs',
        image: 'https://images.unsplash.com/photo-1585325701956-60dd9c8553bc?w=500',
        rating: 4.5,
        reviews: 38,
        photos: [
            'https://images.unsplash.com/photo-1585325701956-60dd9c8553bc?w=500',
            'https://images.unsplash.com/photo-1576577445504-6c7298cb6f8b?w=500'
        ],
        category: 'Mutton',
        type: 'Non Veg'
    },
    'Kashmiri Rogan Josh Slider': {
        name: 'Kashmiri Rogan Josh Slider',
        price: '₹499',
        description: 'Mini burgers filled with classic Kashmiri-style mutton rogan josh',
        image: 'https://images.unsplash.com/photo-1576577445504-6c7298cb6f8b?w=500',
        rating: 4.8,
        reviews: 45,
        photos: [
            'https://images.unsplash.com/photo-1576577445504-6c7298cb6f8b?w=500',
            'https://images.unsplash.com/photo-1603496987351-f84a3ba5ec85?w=500'
        ],
        category: 'Mutton',
        type: 'Non Veg'
    },
    'Paneer Stick Sizzler': {
        name: 'Paneer Stick Sizzler',
        price: '₹649',
        description: 'Grilled paneer skewers served with herb rice, sautéed vegetables and special sauce',
        image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=500',
        rating: 4.6,
        reviews: 48,
        photos: [
            'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=500',
            'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=500'
        ],
        category: 'Sizzlers',
        type: 'Veg'
    },
    'Mushroom and Broccoli Sizzler': {
        name: 'Mushroom and Broccoli Sizzler',
        price: '₹599',
        description: 'Fresh mushrooms and broccoli in garlic sauce with herbed rice and vegetables',
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500',
        rating: 4.5,
        reviews: 42,
        photos: [
            'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500',
            'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=500'
        ],
        category: 'Sizzlers',
        type: 'Veg'
    },
    'Mexican Veggie Sizzler': {
        name: 'Mexican Veggie Sizzler',
        price: '₹629',
        description: 'Mixed vegetables in Mexican spices served with rice, beans and nachos',
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500',
        rating: 4.7,
        reviews: 45,
        photos: [
            'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500',
            'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500'
        ],
        category: 'Sizzlers',
        type: 'Veg'
    },
    'Chicken Stick Sizzler': {
        name: 'Chicken Stick Sizzler',
        price: '₹700',
        description: 'Marinated chicken skewers with herb rice and grilled vegetables',
        image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=500',
        rating: 4.8,
        reviews: 52,
        photos: [
            'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=500',
            'https://images.unsplash.com/photo-1562967914-608f82629710?w=500'
        ],
        category: 'Sizzlers',
        type: 'Non Veg'
    },
    'Peri Peri Grilled Chicken Sizzler': {
        name: 'Peri Peri Grilled Chicken Sizzler',
        price: '₹750',
        description: 'Spicy peri peri marinated chicken with garlic rice and roasted vegetables',
        image: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=500',
        rating: 4.7,
        reviews: 50,
        photos: [
            'https://images.unsplash.com/photo-1562967914-608f82629710?w=500',
            'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=500'
        ],
        category: 'Sizzlers',
        type: 'Non Veg'
    },
    'Chicken Mexican Sizzler': {
        name: 'Chicken Mexican Sizzler',
        price: '₹729',
        description: 'Mexican spiced chicken with rice, refried beans and corn salsa',
        image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=500',
        rating: 4.6,
        reviews: 46,
        photos: [
            'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=500',
            'https://images.unsplash.com/photo-1562967914-608f82629710?w=500'
        ],
        category: 'Sizzlers',
        type: 'Non Veg'
    },
    'Prawns in Hot Garlic Sauce Sizzler': {
        name: 'Prawns in Hot Garlic Sauce Sizzler',
        price: '₹899',
        description: 'Jumbo prawns in spicy garlic sauce served with fried rice and Asian vegetables',
        image: 'https://images.unsplash.com/photo-1625943553852-781c6dd46faa?w=500',
        rating: 4.8,
        reviews: 55,
        photos: [
            'https://images.unsplash.com/photo-1625943553852-781c6dd46faa?w=500',
            'https://images.unsplash.com/photo-1562967914-608f82629710?w=500'
        ],
        category: 'Sizzlers',
        type: 'Non Veg'
    },
    'Spaghetti Carbonara Pasta': {
        name: 'Spaghetti Carbonara Pasta',
        price: '₹390',
        description: 'Creamy spaghetti with mushroom carbonara sauce and parmesan',
        image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=500',
        rating: 4.6,
        reviews: 48,
        photos: [
            'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=500',
            'https://images.unsplash.com/photo-1473093226795-af9932fe5856?w=500'
        ],
        category: 'Veg Pasta',
        type: 'Veg'
    },
    'Gnocchi in Creme Sauce': {
        name: 'Gnocchi in Creme Sauce',
        price: '₹390',
        description: 'Soft potato gnocchi tossed in rich cream sauce with herbs',
        image: 'https://images.unsplash.com/photo-1473093226795-af9932fe5856?w=500',
        rating: 4.7,
        reviews: 45,
        photos: [
            'https://images.unsplash.com/photo-1473093226795-af9932fe5856?w=500',
            'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=500'
        ],
        category: 'Veg Pasta',
        type: 'Veg'
    },
    'Cheesy Mac and Cheese': {
        name: 'Cheesy Mac and Cheese',
        price: '₹310',
        description: 'Classic macaroni in creamy cheese sauce with crispy top',
        image: 'https://images.unsplash.com/photo-1543339494-b4cd4f7ba686?w=500',
        rating: 4.5,
        reviews: 52,
        photos: [
            'https://images.unsplash.com/photo-1543339494-b4cd4f7ba686?w=500',
            'https://images.unsplash.com/photo-1473093226795-af9932fe5856?w=500'
        ],
        category: 'Veg Pasta',
        type: 'Veg'
    },
    'Penne Arrabbiata': {
        name: 'Penne Arrabbiata',
        price: '₹290',
        description: 'Penne pasta in spicy tomato sauce with Italian herbs',
        image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=500',
        rating: 4.4,
        reviews: 40,
        photos: [
            'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=500',
            'https://images.unsplash.com/photo-1473093226795-af9932fe5856?w=500'
        ],
        category: 'Veg Pasta',
        type: 'Veg'
    },
    'Dill Monte Alfredo': {
        name: 'Dill Monte Alfredo',
        price: '₹320',
        description: 'Creamy alfredo sauce pasta with fresh dill and vegetables',
        image: 'https://images.unsplash.com/photo-1473093226795-af9932fe5856?w=500',
        rating: 4.6,
        reviews: 44,
        photos: [
            'https://images.unsplash.com/photo-1473093226795-af9932fe5856?w=500',
            'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=500'
        ],
        category: 'Veg Pasta',
        type: 'Veg'
    },
    'Spinach and Corn Pasta': {
        name: 'Spinach and Corn Pasta',
        price: '₹290',
        description: 'Pasta tossed with fresh spinach, sweet corn in white sauce',
        image: 'https://images.unsplash.com/photo-1473093226795-af9932fe5856?w=500',
        rating: 4.5,
        reviews: 38,
        photos: [
            'https://images.unsplash.com/photo-1473093226795-af9932fe5856?w=500',
            'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=500'
        ],
        category: 'Veg Pasta',
        type: 'Veg'
    },
    'Cajun Chicken Pasta': {
        name: 'Cajun Chicken Pasta',
        price: '₹410',
        description: 'Spicy cajun-spiced chicken with creamy pasta and bell peppers',
        image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=500',
        rating: 4.7,
        reviews: 55,
        photos: [
            'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=500',
            'https://images.unsplash.com/photo-1473093226795-af9932fe5856?w=500'
        ],
        category: 'Non-Veg Pasta',
        type: 'Non Veg'
    },
    'Seafood Marinara': {
        name: 'Seafood Marinara',
        price: '₹490',
        description: 'Mixed seafood pasta in rich marinara sauce with fresh herbs',
        image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=500',
        rating: 4.8,
        reviews: 62,
        photos: [
            'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=500',
            'https://images.unsplash.com/photo-1473093226795-af9932fe5856?w=500'
        ],
        category: 'Non-Veg Pasta',
        type: 'Non Veg'
    },
    'Pollo di Spinach Lasagne': {
        name: 'Pollo di Spinach Lasagne',
        price: '₹410',
        description: 'Layered pasta with chicken, spinach, and creamy bechamel sauce',
        image: 'https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?w=500',
        rating: 4.6,
        reviews: 48,
        photos: [
            'https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?w=500',
            'https://images.unsplash.com/photo-1473093226795-af9932fe5856?w=500'
        ],
        category: 'Non-Veg Pasta',
        type: 'Non Veg'
    },
    'Spaghetti Bolognese': {
        name: 'Spaghetti Bolognese',
        price: '₹420',
        description: 'Classic Italian meat sauce with spaghetti and parmesan',
        image: 'https://images.unsplash.com/photo-1598866594230-a7c12756260f?w=500',
        rating: 4.7,
        reviews: 58,
        photos: [
            'https://images.unsplash.com/photo-1598866594230-a7c12756260f?w=500',
            'https://images.unsplash.com/photo-1473093226795-af9932fe5856?w=500'
        ],
        category: 'Non-Veg Pasta',
        type: 'Non Veg'
    },
    'Chicken Alfredo Pasta': {
        name: 'Chicken Alfredo Pasta',
        price: '₹410',
        description: 'Creamy alfredo sauce with grilled chicken and parmesan',
        image: 'https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=500',
        rating: 4.6,
        reviews: 52,
        photos: [
            'https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=500',
            'https://images.unsplash.com/photo-1473093226795-af9932fe5856?w=500'
        ],
        category: 'Non-Veg Pasta',
        type: 'Non Veg'
    },
    'Chicken Arrabbiata Pasta': {
        name: 'Chicken Arrabbiata Pasta',
        price: '₹420',
        description: 'Spicy tomato sauce pasta with grilled chicken and Italian herbs',
        image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=500',
        rating: 4.5,
        reviews: 45,
        photos: [
            'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=500',
            'https://images.unsplash.com/photo-1473093226795-af9932fe5856?w=500'
        ],
        category: 'Non-Veg Pasta',
        type: 'Non Veg'
    },
    'VEG KATHI WRAP': {
        name: 'VEG KATHI WRAP',
        price: '₹310',
        description: 'Grilled vegetables and paneer wrapped in roomali roti with mint chutney',
        image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500',
        rating: 4.6,
        reviews: 40,
        category: 'Kebabs',
        type: 'Veg',
        subcategory: 'Veg Kebab'
    },
    'TANDOORI SARSON KE PHUL': {
        name: 'TANDOORI SARSON KE PHUL',
        price: '₹450',
        description: 'Cauliflower florets marinated in mustard and tandoori spices, grilled to perfection',
        image: 'https://images.unsplash.com/photo-1600336153113-d66c79de8b08?w=500',
        rating: 4.7,
        reviews: 35,
        category: 'Kebabs',
        type: 'Veg',
        subcategory: 'Veg Kebab'
    },
    'Spaghetti Carbonara Pasta': {
        name: 'Spaghetti Carbonara Pasta',
        price: '₹390',
        description: 'Creamy pasta carbonara with garlic and herbs, egg yolk, cheese sauce',
        image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=500',
        rating: 4.6,
        reviews: 48,
        category: 'Pasta',
        type: 'Veg',
        subcategory: 'Veg Pasta'
    },
    'Gnocchi in Creme Sauce': {
        name: 'Gnocchi in Creme Sauce',
        price: '₹390',
        description: 'Soft potato gnocchi in a rich cream sauce',
        image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=500',
        rating: 4.7,
        reviews: 45,
        category: 'Pasta',
        type: 'Veg',
        subcategory: 'Veg Pasta'
    },
    'Cajun Chicken Pasta': {
        name: 'Cajun Chicken Pasta',
        price: '₹410',
        description: 'Spicy cajun-spiced chicken with creamy pasta and bell peppers',
        image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=500',
        rating: 4.7,
        reviews: 55,
        category: 'Pasta',
        type: 'Non Veg',
        subcategory: 'Non-Veg Pasta'
    },
    'Seafood Marinara': {
        name: 'Seafood Marinara',
        price: '₹490',
        description: 'Mixed seafood pasta in rich marinara sauce with fresh herbs',
        image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=500',
        rating: 4.8,
        reviews: 62,
        category: 'Pasta',
        type: 'Non Veg',
        subcategory: 'Non-Veg Pasta'
    },
    'Indian Appetizers': {
        type: 'subcategories',
        data: {
            'Veg Indian Appetizers': [
                { 
                    name: 'Cheese Corn Balls', 
                    price: '₹350', 
                    description: 'Golden-fried cheese and corn-filled bites served with spicy dip'
                },
                { 
                    name: 'Paneer Tikka', 
                    price: '₹320', 
                    description: 'Cubes of paneer marinated in yogurt and spices, grilled to perfection'
                },
                { 
                    name: 'Paneer Malai Tikka', 
                    price: '₹375', 
                    description: 'Tender paneer cubes marinated in creamy sauce with mild spices, grilled in tandoor'
                },
                { 
                    name: 'Creamy Stuffed Mushroom', 
                    price: '₹370', 
                    description: 'Fresh button mushrooms stuffed with creamy filling, cooked in tandoor'
                },
                { 
                    name: 'Chilli Potato', 
                    price: '₹320', 
                    description: 'Crispy potato fingers tossed in spicy Indo-Chinese sauce'
                },
                { 
                    name: 'Peri Peri Fries', 
                    price: '₹160', 
                    description: 'French fries tossed in spicy peri-peri seasoning'
                },
                { 
                    name: 'Masala Coriander Chaat', 
                    price: '₹260', 
                    description: 'Fresh coriander fritters topped with tangy masala and chutneys'
                },
                { 
                    name: 'Paneer Chilli', 
                    price: '₹349', 
                    description: 'Crispy paneer cubes tossed in spicy Indo-Chinese sauce with bell peppers'
                },
                { 
                    name: 'Paneer Banjara', 
                    price: '₹450', 
                    description: 'Paneer chunks marinated in rustic spices and chargrilled to perfection'
                },
                { 
                    name: 'Dragon Cheese Cube', 
                    price: '₹420', 
                    description: 'Spicy cheese cubes in fiery dragon sauce with oriental herbs'
                },
                { 
                    name: 'Paneer Hilltop', 
                    price: '₹520', 
                    description: 'Premium paneer preparation with mountain herbs and special spice blend'
                },
                { 
                    name: 'Veg Crispy', 
                    price: '₹350', 
                    description: 'Assorted vegetables in a crispy coating tossed in sweet and spicy sauce'
                },
                { 
                    name: 'Veg Spring Roll', 
                    price: '₹299', 
                    description: 'Crispy rolls stuffed with seasoned vegetables and glass noodles'
                },
                { 
                    name: 'Paneer Satay', 
                    price: '₹349', 
                    description: 'Grilled paneer skewers with peanut sauce and Asian spices'
                },
                { 
                    name: 'Mushroom Tikka', 
                    price: '₹330', 
                    description: 'Marinated mushrooms grilled in tandoor with aromatic spices'
                },
                { 
                    name: 'Naramdil Tikki', 
                    price: '₹349', 
                    description: 'Soft-centered vegetable cutlets with special herbs and spices'
                }
            ],
            'Non-Veg Appetizers': [
                { 
                    name: 'Chicken Chilli', 
                    price: '₹369', 
                    description: 'Indo-Chinese style crispy chicken tossed in spicy chilli sauce with bell peppers'
                },
                { 
                    name: 'Chicken Lollypop', 
                    price: '₹350', 
                    description: 'Deep-fried chicken wings marinated in special spices, served with schezwan sauce'
                },
                { 
                    name: 'Lemon Pepper Chicken', 
                    price: '₹420', 
                    description: 'Tender chicken pieces marinated with lemon zest and crushed black pepper'
                },
                { 
                    name: 'Chicken Manchurian', 
                    price: '₹320', 
                    description: 'Crispy chicken balls tossed in classic manchurian sauce with garlic and ginger'
                },
                { 
                    name: 'Chicken Crispy', 
                    price: '₹350', 
                    description: 'Crispy fried chicken strips tossed in special house sauce'
                },
                { 
                    name: 'Chicken Peri Peri', 
                    price: '₹380', 
                    description: 'Tender chicken pieces marinated and cooked in spicy peri peri sauce'
                },
                { 
                    name: 'Chicken Big Bean Sauce', 
                    price: '₹450', 
                    description: 'Chicken chunks cooked with large beans in special oriental sauce'
                },
                { 
                    name: 'Chicken Mongolian', 
                    price: '₹470', 
                    description: 'Stir-fried chicken in authentic Mongolian sauce with spring onions'
                },
                { 
                    name: 'Chicken Kung Pao', 
                    price: '₹400', 
                    description: 'Diced chicken with peanuts in spicy kung pao sauce'
                },
                { 
                    name: 'Chicken Oyster Chilli', 
                    price: '₹400', 
                    description: 'Chicken in oyster sauce with green chilies and bell peppers'
                },
                { 
                    name: 'Drums of Heaven', 
                    price: '₹450', 
                    description: 'Spicy chicken wings tossed in schezwan sauce'
                },
                { 
                    name: 'Chicken Popcorn', 
                    price: '₹349', 
                    description: 'Bite-sized crispy chicken pieces served with special dip'
                },
                { 
                    name: 'Peri Peri Chicken Wings', 
                    price: '₹384', 
                    description: 'Chicken wings tossed in spicy peri peri sauce'
                },
                { 
                    name: 'Chicken 65', 
                    price: '₹384', 
                    description: 'South Indian style spicy chicken with curry leaves'
                },
                { 
                    name: 'Chicken Afghani Tikka', 
                    price: '₹399', 
                    description: 'Creamy marinated chicken tikka with afghani spices'
                },
                { 
                    name: 'Chicken Bhunna', 
                    price: '₹400', 
                    description: 'Slow-cooked chicken in thick spicy masala'
                },
                { 
                    name: 'Chicken Butter Pepper', 
                    price: '₹380', 
                    description: 'Tender chicken pieces in creamy butter pepper sauce'
                },
                { 
                    name: 'Chicken Lasooni Lollipop', 
                    price: '₹500', 
                    description: 'Garlic flavored chicken lollipops with special herbs'
                },
                { 
                    name: 'Chicken Nuggets', 
                    price: '₹249', 
                    description: 'Golden fried chicken nuggets served with dips'
                },
                { 
                    name: 'Chicken Satay', 
                    price: '₹439', 
                    description: 'Grilled chicken skewers with peanut sauce'
                },
                { 
                    name: 'Chicken Salt N Pepper', 
                    price: '₹384', 
                    description: 'Crispy chicken tossed with salt and crushed pepper'
                },
                { 
                    name: 'Chicken Spring Rolls', 
                    price: '₹399', 
                    description: 'Crispy rolls stuffed with minced chicken and vegetables'
                },
                { 
                    name: 'Chicken with Burnt Garlic', 
                    price: '₹384', 
                    description: 'Chicken pieces tossed with burnt garlic and oriental sauce'
                },
                { 
                    name: 'Peri Peri Chilli Chicken', 
                    price: '₹439', 
                    description: 'Spicy chicken in peri peri and chilli sauce blend'
                },
                { 
                    name: 'Schezwan Chicken Lollipop', 
                    price: '₹399', 
                    description: 'Chicken lollipops tossed in spicy schezwan sauce'
                },
                { 
                    name: 'Thai Chilli Chicken', 
                    price: '₹417', 
                    description: 'Thai style spicy chicken with basil and bird eye chilies'
                }
            ],
            'Mutton Appetizers': [
                { 
                    name: 'Moroccan Gosht Skewers', 
                    price: '₹600', 
                    description: 'Mutton cubes marinated in Moroccan spices served with mint chutney'
                },
                { 
                    name: 'Gosht Nihari', 
                    price: '₹420', 
                    description: 'Slow-cooked tender mutton in rich aromatic gravy with special nihari spices'
                },
                { 
                    name: 'Gosht Sukha', 
                    price: '₹550', 
                    description: 'Tender pieces of mutton in thick masala, cooked with onion and coconut'
                },
                { 
                    name: 'Parsi Mutton Cutlet', 
                    price: '₹399', 
                    description: 'Traditional Parsi-style spiced mutton patties with aromatic herbs'
                },
                { 
                    name: 'Kerala Mutton Fry', 
                    price: '₹450', 
                    description: 'Deep-fried mutton with coconut and curry leaves'
                },
                { 
                    name: 'Mutton Cutlets', 
                    price: '₹410', 
                    description: 'Minced mutton with spices and curry leaves'
                }
            ],
            'Seafood Appetizers': [
                { 
                    name: 'Fish Tikka', 
                    price: '₹450', 
                    description: 'Boneless fish chunks grilled with aromatic spices'
                },
                { 
                    name: 'Butter Garlic Prawns', 
                    price: '₹495', 
                    description: 'Juicy prawns tossed in butter, garlic, and herbs'
                },
                { 
                    name: 'Fish Finger', 
                    price: '₹349', 
                    description: 'Crispy crumb-fried fish fingers served with tartar sauce'
                },
                { 
                    name: 'Crispy Fried Prawns', 
                    price: '₹495', 
                    description: 'Prawns marinated with spicy ginger garlic base and coated in crispy batter'
                },
                { 
                    name: 'Chettinad Fish Fry', 
                    price: '₹429', 
                    description: 'Fish marinated in spicy Chettinad masala and pan-fried to perfection'
                },
                { 
                    name: 'Spicy Golden Fried Prawn', 
                    price: '₹589', 
                    description: 'Crispy fried prawns in golden batter with special spice blend'
                },
                { 
                    name: 'Fish Baby Surmai Fry', 
                    price: '₹1200', 
                    description: 'Baby kingfish marinated with special coastal spices and deep fried'
                },
                { 
                    name: 'Fish Koliwada Boneless', 
                    price: '₹499', 
                    description: 'Boneless fish chunks in Mumbai-style Koliwada batter and spices'
                },
                { 
                    name: 'Fish Koliwada Crunch', 
                    price: '₹449', 
                    description: 'Extra crispy fish Koliwada with special crunchy coating'
                },
                { 
                    name: 'Fish Surmai Rawa Fry', 
                    price: '₹550', 
                    description: 'Kingfish coated with semolina and traditional coastal spices'
                },
                { 
                    name: 'Fish Surmai Tawa Fry', 
                    price: '₹550', 
                    description: 'Kingfish marinated in spices and pan-fried on traditional tawa'
                },
                { 
                    name: 'TANDOORI SURMAI TIKKA', 
                    price: '₹550', 
                    description: 'Fresh surmai marinated in spices and grilled over charcoal'
                },
                { 
                    name: 'PRAWNS KOLIWADA FRY', 
                    price: '₹499', 
                    description: 'Deep-fried prawns coated in a spicy koliwada-style batter'
                },
                { 
                    name: 'TAVA POMFRET', 
                    price: '₹599', 
                    description: 'Pan-fried pomfret cooked in butter and special spices'
                },
                { 
                    name: 'TANDOORI PRAWNS DELIGHT', 
                    price: '₹599', 
                    description: 'Succulent prawns grilled in a tandoor with aromatic spices'
                }
            ]
        }
    },
    'Rice': {
        type: 'subcategories',
        data: {
            'Rice Varieties': [
                { name: 'STEAM RICE (half/full)', price: '₹80/150', description: 'Plain steamed basmati rice, perfect accompaniment to any curry' },
                { name: 'JEERA RICE', price: '₹200', description: 'Fragrant basmati rice tempered with cumin seeds' },
                { name: 'DAL KHICHADI', price: '₹250', description: 'A comforting blend of rice and lentils cooked with mild spices' },
                { name: 'TAWA PULAO', price: '₹250', description: 'Rice stir-fried with vegetables and spices on a griddle' },
                { name: 'CURD RICE', price: '₹210', description: 'South Indian style rice mixed with yogurt and mild tempering' }
            ]
        }
    }
};

// Utility Functions
function getItemDetails(itemName) {
    return menuItemsData[itemName] || null;
}

function getSimilarItems(item) {
    // Get items from the same category
    const similarItems = Object.values(menuItemsData).filter(menuItem => 
        menuItem.category === item.category && menuItem.name !== item.name
    );
    
    // Sort by rating and limit to 4 items
    return similarItems
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 4);
}

function getMenuItems(category) {
    const menuStructure = {
        'Starters': {
            type: 'subcategories',
            data: {
                'Soups': [
                    { 
                        name: 'Hot and Sour Soup',
                        price: '₹150/175',
                        description: 'Spicy, soy & ginger flavored thick Chinese broth served with shredded vegetables or chicken'
                    },
                    // ... existing code ...
                ],
                'Papad & Khakra': [
                    {
                        name: 'Masala Papad',
                        price: '₹50',
                        description: 'Crispy papad topped with onions, tomatoes, and chaat masala'
                    },
                    // ... existing code ...
                ]
            }
        },
        'Salads': {
            type: 'subcategories',
            data: {
                'Salads': [
                    {
                        name: 'Caesar Salad',
                        price: '₹240',
                        description: 'Crisp romaine lettuce, parmesan cheese, croutons, and Caesar dressing'
                    },
                    // ... existing code ...
                ]
            }
        },
        // ... existing code ...
    };
    
    return category ? menuStructure[category] : menuStructure;
}

function searchMenuItems(query) {
    query = query.toLowerCase();
    return Object.values(menuItemsData).filter(item => 
        item.name.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query)
    );
}

function updateMenuDisplay(items) {
    // ... existing code ...
} 