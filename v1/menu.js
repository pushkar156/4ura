// Menu data
const menuData = {
    all: [
        // Sizzler Festival
        { name: "Continental Veg Sizzler", description: "MUST TRY - Butter Garlic Rice + Stuffed Tomato N Capsicum + French Fries + Sauteed Veg + Bread", price: "₹549", category: "sizzlers" },
        { name: "Chicken Thai Sizzler", description: "POPULAR - Thai Fried Rice + 2PIC Chicken Breast Fry + Sauteed Veg + Pad Thai Sauce + Egg Hakka", price: "₹599", category: "sizzlers" },
        
        // Healthy Menu
        { name: "Kale Chane Ka Shorba", description: "Healthy soup", price: "₹199", category: "healthy" },
        { name: "Protein Rich Sprouts & Paneer Salad", description: "Healthy salad", price: "₹249", category: "healthy" },
        
        // Special Ice Cream
        { name: "BANARASI MEETHA ICE CREAM", description: "2 SCOOP", price: "₹169", category: "specials" },
        
        // Bar Snacks
        { name: "Sindhi Papad", description: "Crispy sindh papad made with moong dal, urad dal and spices", price: "₹99", category: "snacks" },
        
        // Finger Licking Favourites
        { name: "Veg Nuggets", description: "Bite-sized nuggets made from a mixture of vegetables", price: "₹219", category: "starters" },
        
        // Rice Items
        { name: "STEAM RICE (half/full)", description: "Plain steamed basmati rice, perfect accompaniment to any curry", price: "₹80/150", category: "rice" },
        { name: "JEERA RICE", description: "Fragrant basmati rice tempered with cumin seeds", price: "₹200", category: "rice" },
        { name: "DAL KHICHADI", description: "A comforting blend of rice and lentils cooked with mild spices", price: "₹250", category: "rice" },
        { name: "TAWA PULAO", description: "Rice stir-fried with vegetables and spices on a griddle", price: "₹250", category: "rice" },
        { name: "CURD RICE", description: "South Indian style rice mixed with yogurt and mild tempering", price: "₹210", category: "rice" },
        
        // And more categories...
    ],
    sizzlers: [
        // Veg Sizzler
        { name: "Continental Veg Sizzler", description: "MUST TRY - Butter Garlic Rice + Stuffed Tomato N Capsicum + French Fries + Sauteed Veg + Bread", price: "₹549" },
        { name: "Veg Asian Sizzler", description: "CHEF'S SPECIAL - Butter Garlic Rice + 2PIC Spring Roll + Sauteed Veg + French Fries + Hot Garlic Sauce", price: "₹549" },
        { name: "Veg Momo Sizzler", description: "NEW! - Rice + Noodles + 6PIC Momo + French Fries + Spicy Black Bean Sauce", price: "₹549" },
        { name: "Paneer Tikka Sizzler", description: "SPECIAL - 6PIC Paneer Tikka + Gravy + Lemon Rice + French Fries + Sauteed Veg + 1 Butter Kulcha", price: "₹549" },
        { name: "Veg Window Sizzler", description: "RECOMMENDED - Veg Cheese Chilli Kabab + Paneer Satay + French Fries + 4PIC Cheese Ball + Coriander Rice", price: "₹549" },
        
        // Non Veg Sizzler
        { name: "Chicken Thai Sizzler", description: "POPULAR - Thai Fried Rice + 2PIC Chicken Breast Fry + Sauteed Veg + Pad Thai Sauce + Egg Hakka", price: "₹599" },
        { name: "Chicken Super Sizzler", description: "NEW! - Butter Garlic Rice + Sauteed Veg + Yellow Bell Pepper Sauce + Mashed Potato + French Fries", price: "₹599" },
        { name: "Chicken Drumstick Sizzler", description: "MUST TRY - 2PIC Drumstick + Rice + Gravy + French Fries", price: "₹599" },
        { name: "Chicken Tiranga Sizzler", description: "RECOMMENDED - Masala Rice + 6PIC Chicken Tiranga + 1PIC Egg Stuffed + French Fries", price: "₹599" },
        { name: "Butter Chicken Sizzler", description: "NEW! - Butter Chicken + Jeera Rice + Sauteed Veg + Baby Naan + French Fries", price: "₹599" }
    ],
    healthy: [
        // Soups
        { name: "Kale Chane Ka Shorba", description: "Healthy soup", price: "₹199" },
        { name: "Boiled Mutton Shorba", description: "Healthy soup", price: "₹249" },
        { name: "Ginger Kalimiri Shorba", description: "Healthy soup", price: "₹179" },
        
        // Salads/Starters
        { name: "Protein Rich Sprouts & Paneer Salad", description: "Healthy salad", price: "₹249" },
        { name: "Lettuce & Olive Chicken Tikka Salad", description: "Healthy salad", price: "₹399" },
        { name: "Lettuce & Olive Paneer Tikka Salad", description: "Healthy salad", price: "₹349" },
        { name: "Stir Fry Chicken with Exotic Veggies", description: "Healthy starter", price: "₹379" },
        { name: "Sprout Kaju Cutlet", description: "Healthy starter", price: "₹299" },
        { name: "Boiled Chicken tossed in Hot garlic sauce", description: "Healthy starter", price: "₹399" },
        
        // Meals
        { name: "Sesame Paneer Meal", description: "Healthy meal", price: "₹449" },
        { name: "Sesame Chicken Meal", description: "Healthy meal", price: "₹499" }
    ],
    specials: [
        // Ice Cream
        { name: "BANARASI MEETHA ICE CREAM 2 SCOOP", description: "Special ice cream", price: "₹169", oldPrice: "₹199" },
        { name: "BANARASI MEETHA ICE CREAM 1 SCOOP", description: "Special ice cream", price: "₹99", oldPrice: "₹149" },
        { name: "SALTED CARAMEL ICE CREAM 2 SCOOP", description: "Special ice cream", price: "₹169", oldPrice: "₹199" },
        { name: "SALTED CARAMEL ICE CREAM 1 SCOOP", description: "Special ice cream", price: "₹99", oldPrice: "₹149" }
    ],
    snacks: [
        // Bar Snacks - Papad Section
        { 
            name: "Masala Papad", 
            description: "Crispy papad topped with chopped veggies and masala", 
            price: "₹50",
            category: "papad",
            image: "https://source.unsplash.com/featured/?papad",
            rating: 4.5,
            ratingCount: "120"
        },
        { 
            name: "Papad Roll", 
            description: "Crispy rolled papad filled with spiced vegetables and herbs", 
            price: "₹80",
            category: "papad",
            image: "https://source.unsplash.com/featured/?indiansnacks",
            rating: 4.3,
            ratingCount: "95"
        },
        { 
            name: "Cheese Papad", 
            description: "Crispy papad topped with melted cheese and spices", 
            price: "₹70",
            category: "papad",
            image: "https://source.unsplash.com/featured/?indianfood",
            rating: 4.4,
            ratingCount: "150"
        },
        // ... rest of the snacks
    ],
    starters: [
        // Finger Licking Favourites
        { name: "Veg Nuggets", description: "Bite-sized nuggets made from a mixture of vegetables", price: "₹219" },
        { name: "French Fries", description: "Golden, crispy and delicately seasoned", price: "₹199" },
        { name: "Peri Peri Fries", description: "Perfectly crispy, golden fries tossed in peri-peri spice powder", price: "₹229" },
        { name: "Crispy Potato Wedges", description: "Chunky hand-cut potato wedges, tossed in house spice blend", price: "₹229" }
        // ... more starters
    ],
    maincourse: [
        // Indian Main Course - Veg
        { name: "Aloo Mutter", description: "Classic potato and peas curry", price: "₹299" },
        { name: "Jeera Aloo", description: "A flavorful dish made using potatoes, spices and cumin seeds", price: "₹299" },
        { name: "Bhendi Masala", description: "Traditional masala curry made with Indian spices, herbs and okra", price: "₹263" }
        // ... more main course items
    ],
    rice: [
        { name: "STEAM RICE (half/full)", description: "Plain steamed basmati rice, perfect accompaniment to any curry", price: "₹80/150" },
        { name: "JEERA RICE", description: "Fragrant basmati rice tempered with cumin seeds", price: "₹200" },
        { name: "DAL KHICHADI", description: "A comforting blend of rice and lentils cooked with mild spices", price: "₹250" },
        { name: "TAWA PULAO", description: "Rice stir-fried with vegetables and spices on a griddle", price: "₹250" },
        { name: "CURD RICE", description: "South Indian style rice mixed with yogurt and mild tempering", price: "₹210" }
    ]
};

function createMenuCard(title, image, category) {
    return `
        <div class="menu-card" data-category="${category}">
            <img src="${image}" alt="${title}" class="menu-image">
            <div class="menu-overlay">
                <h3 class="menu-title">${title}</h3>
            </div>
        </div>
    `;
}

// Create menu sections
function createMenuSections() {
    const menuContainer = document.querySelector('.menu-grid');
    if (!menuContainer) return;

    // Snacks Section
    menuContainer.innerHTML += createMenuCard(
        'Snacks',
        'assets/snacks.jpg',
        'snacks'
    );

    // Main Course Section
    menuContainer.innerHTML += createMenuCard(
        'Main Course',
        'assets/main-course.jpg',
        'main-course'
    );

    // Rice Bowls Section
    menuContainer.innerHTML += createMenuCard(
        'Rice Bowls',
        'assets/rice-bowls.jpg',
        'rice-bowls'
    );

    // Hot Beverages Section
    menuContainer.innerHTML += createMenuCard(
        'Hot Beverages',
        'assets/hot-beverages.jpg',
        'hot-beverages'
    );

    // Cold Beverages Section
    menuContainer.innerHTML += createMenuCard(
        'Cold Beverages',
        'assets/cold-beverages.jpg',
        'cold-beverages'
    );
}

// Initialize menu
document.addEventListener('DOMContentLoaded', () => {
    createMenuSections();
    const menuItemsContainer = document.querySelector('.menu-items-container');
    const categoryButtons = document.querySelectorAll('.category-btn');
    const searchInput = document.querySelector('.search-bar input');

    // Function to display menu items
    function displayMenuItems(category) {
        menuItemsContainer.innerHTML = '';
        const items = category === 'all' ? menuData.all : menuData[category];
        
        items.forEach(item => {
            const menuItem = document.createElement('div');
            menuItem.className = 'menu-item';
            menuItem.innerHTML = `
                <img src="https://source.unsplash.com/100x100/?${item.name.toLowerCase().replace(' ', '-')}" alt="${item.name}" class="menu-item-image">
                <div class="menu-item-content">
                    <h3>${item.name}</h3>
                    <p>${item.description}</p>
                    <div class="price">${item.price}</div>
                </div>
            `;
            menuItemsContainer.appendChild(menuItem);
        });
    }

    // Initial display of all items
    displayMenuItems('all');

    // Category button click handlers
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            const category = button.dataset.category;
            displayMenuItems(category);
        });
    });

    // Search functionality
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase().trim();
        const menuItems = document.querySelectorAll('.menu-item');
        let hasResults = false;
        
        menuItems.forEach(item => {
            const itemName = item.querySelector('h3').textContent.toLowerCase();
            const itemDescription = item.querySelector('p')?.textContent.toLowerCase() || '';
            const itemPrice = item.querySelector('.price').textContent.toLowerCase();
            
            const matches = itemName.includes(searchTerm) || 
                          itemDescription.includes(searchTerm) || 
                          itemPrice.includes(searchTerm);
            
            if (matches) {
                item.style.display = 'flex';
                item.style.opacity = '1';
                item.style.transform = 'scale(1)';
                hasResults = true;
            } else {
                item.style.opacity = '0';
                item.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    item.style.display = 'none';
                }, 300);
            }
        });

        // Handle no results message
        let noResultsMsg = document.querySelector('.no-results');
        if (!hasResults && searchTerm !== '') {
            if (!noResultsMsg) {
                noResultsMsg = createNoResultsMessage();
                menuItemsContainer.appendChild(noResultsMsg);
            }
            noResultsMsg.style.display = 'block';
            setTimeout(() => {
                noResultsMsg.style.opacity = '1';
            }, 10);
        } else if (noResultsMsg) {
            noResultsMsg.style.opacity = '0';
            setTimeout(() => {
                noResultsMsg.style.display = 'none';
            }, 300);
        }
    });

    // Create "No results found" message element
    function createNoResultsMessage() {
        const message = document.createElement('div');
        message.className = 'no-results';
        message.textContent = 'No matching items found';
        message.style.cssText = `
            width: 100%;
            text-align: center;
            padding: 20px;
            color: var(--secondary-color);
            font-size: 16px;
            opacity: 0;
            transition: opacity 0.3s ease;
            background-color: rgba(255, 255, 255, 0.8);
            border-radius: 12px;
            margin: 20px 0;
        `;
        return message;
    }
}); 