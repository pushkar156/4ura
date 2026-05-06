// Organize menu items from menuItemsData by categories
function organizeMenuData() {
    const organized = {
        all: [],
        soups: [],
        appetizers: [],
        salads: [],
        maincourse: [],
        seafood: [],
        biryani: [],
        noodles: [],
        pizza: [],
        pasta: [],
        desserts: [],
        beverages: [],
        papad: [],
        raita: []
    };

    // Convert menuItemsData object to array and organize by categories
    Object.values(menuItemsData).forEach(item => {
        // Add to 'all' category
        organized.all.push(item);
        
        // Categorize based on item.category
        const category = item.category.toLowerCase();
        
        if (category.includes('soup')) {
            organized.soups.push(item);
        } else if (category.includes('appetizer') || category.includes('tikka') || category.includes('kebab')) {
            organized.appetizers.push(item);
        } else if (category.includes('salad')) {
            organized.salads.push(item);
        } else if (category.includes('seafood') || category.includes('fish') || category.includes('prawn')) {
            organized.seafood.push(item);
        } else if (category.includes('biryani')) {
            organized.biryani.push(item);
        } else if (category.includes('noodles')) {
            organized.noodles.push(item);
        } else if (category.includes('pizza')) {
            organized.pizza.push(item);
        } else if (category.includes('pasta')) {
            organized.pasta.push(item);
        } else if (category.includes('dessert') || category.includes('ice cream') || category.includes('brownie')) {
            organized.desserts.push(item);
        } else if (category.includes('beverage') || category.includes('drink') || category.includes('coffee') || category.includes('tea') || category.includes('milkshake')) {
            organized.beverages.push(item);
        } else if (category.includes('papad') || category.includes('khakra')) {
            organized.papad.push(item);
        } else if (category.includes('raita')) {
            organized.raita.push(item);
        } else {
            organized.maincourse.push(item);
        }
    });

    return organized;
}

// Get organized menu data
const menuData = organizeMenuData();

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

// Create menu sections based on available categories
function createMenuSections() {
    const menuContainer = document.querySelector('.menu-grid');
    if (!menuContainer) return;

    const categoryConfig = [
        { name: 'All Items', key: 'all', image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=300' },
        { name: 'Soups', key: 'soups', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=300' },
        { name: 'Appetizers', key: 'appetizers', image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=300' },
        { name: 'Salads', key: 'salads', image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=300' },
        { name: 'Main Course', key: 'maincourse', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300' },
        { name: 'Seafood', key: 'seafood', image: 'https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=300' },
        { name: 'Biryani', key: 'biryani', image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=300' },
        { name: 'Noodles', key: 'noodles', image: 'https://images.unsplash.com/photo-1552611052-33e04de081de?w=300' },
        { name: 'Pizza', key: 'pizza', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=300' },
        { name: 'Pasta', key: 'pasta', image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=300' },
        { name: 'Desserts', key: 'desserts', image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=300' },
        { name: 'Beverages', key: 'beverages', image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=300' },
        { name: 'Papad & Khakra', key: 'papad', image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=300' },
        { name: 'Raita', key: 'raita', image: 'https://images.unsplash.com/photo-1533640924469-f04e06f8898d?w=300' }
    ];

    // Only show categories that have items
    categoryConfig.forEach(config => {
        if (menuData[config.key] && menuData[config.key].length > 0) {
            menuContainer.innerHTML += createMenuCard(
                `${config.name} (${menuData[config.key].length})`,
                config.image,
                config.key
            );
        }
    });
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
        const items = category === 'all' ? menuData.all : (menuData[category] || []);
        
        if (items.length === 0) {
            menuItemsContainer.innerHTML = '<div class="no-items">No items found in this category</div>';
            return;
        }
        
        items.forEach(item => {
            const menuItem = document.createElement('div');
            menuItem.className = 'menu-item';
            
            // Use item's image if available, otherwise fallback to Unsplash
            const imageUrl = item.image || `https://source.unsplash.com/100x100/?${item.name.toLowerCase().replace(/\s+/g, '-')}`;
            
            // Display rating if available
            const ratingHtml = item.rating ? `
                <div class="rating">
                    <span class="stars">${'★'.repeat(Math.floor(item.rating))}${'☆'.repeat(5 - Math.floor(item.rating))}</span>
                    <span class="rating-text">${item.rating} (${item.reviews || item.ratingCount || 0})</span>
                </div>
            ` : '';
            
            // Display category badge
            const categoryBadge = item.category ? `<span class="category-badge">${item.category}</span>` : '';
            
            // Display type badge (Veg/Non-Veg)
            const typeBadge = item.type ? `<span class="type-badge ${item.type.toLowerCase().replace(/[^a-z]/g, '')}">${item.type}</span>` : '';
            
            menuItem.innerHTML = `
                <img src="${imageUrl}" alt="${item.name}" class="menu-item-image" onerror="this.src='https://via.placeholder.com/100x100?text=No+Image'">
                <div class="menu-item-content">
                    <div class="item-header">
                        <h3>${item.name}</h3>
                        <div class="badges">
                            ${categoryBadge}
                            ${typeBadge}
                        </div>
                    </div>
                    <p class="description">${item.description}</p>
                    ${ratingHtml}
                    <div class="price">${item.price}</div>
                </div>
            `;
            menuItemsContainer.appendChild(menuItem);
        });
    }

    // Initial display of all items
    displayMenuItems('all');
    
    // Add some basic styling for new elements
    const style = document.createElement('style');
    style.textContent = `
        .menu-item {
            display: flex;
            gap: 12px;
            padding: 12px;
            background: var(--card-bg);
            border-radius: 12px;
            margin-bottom: 12px;
            box-shadow: 0 2px 8px var(--shadow-color);
            transition: transform 0.2s ease;
        }
        
        .menu-item:hover {
            transform: translateY(-2px);
        }
        
        .menu-item-image {
            width: 80px;
            height: 80px;
            border-radius: 8px;
            object-fit: cover;
            flex-shrink: 0;
        }
        
        .menu-item-content {
            flex: 1;
        }
        
        .item-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 8px;
        }
        
        .badges {
            display: flex;
            gap: 4px;
            flex-wrap: wrap;
        }
        
        .category-badge, .type-badge {
            font-size: 10px;
            padding: 2px 6px;
            border-radius: 4px;
            font-weight: 500;
        }
        
        .category-badge {
            background: var(--primary-color);
            color: white;
        }
        
        .type-badge {
            background: #e8f5e8;
            color: #2d5016;
        }
        
        .type-badge.nonveg {
            background: #ffe8e8;
            color: #8b0000;
        }
        
        .description {
            font-size: 14px;
            color: var(--gray-color);
            margin-bottom: 8px;
            line-height: 1.4;
        }
        
        .rating {
            display: flex;
            align-items: center;
            gap: 8px;
            margin-bottom: 8px;
        }
        
        .stars {
            color: #ffd700;
            font-size: 14px;
        }
        
        .rating-text {
            font-size: 12px;
            color: var(--gray-color);
        }
        
        .price {
            font-weight: 600;
            color: var(--primary-color);
            font-size: 16px;
        }
        
        .no-results-icon {
            font-size: 48px;
            margin-bottom: 16px;
        }
        
        .no-results h3 {
            margin-bottom: 8px;
            color: var(--text-color);
        }
        
        .no-items {
            text-align: center;
            padding: 40px 20px;
            color: var(--gray-color);
            background: var(--card-bg);
            border-radius: 12px;
            margin: 20px 0;
        }
    `;
    document.head.appendChild(style);

    // Category button click handlers
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            const category = button.dataset.category;
            displayMenuItems(category);
            
            // Clear search when switching categories
            if (searchInput) {
                searchInput.value = '';
            }
        });
    });

    // Search functionality
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase().trim();
        
        if (searchTerm === '') {
            // If search is empty, show all items from current category
            const activeCategory = document.querySelector('.category-btn.active')?.dataset.category || 'all';
            displayMenuItems(activeCategory);
            return;
        }
        
        // Filter items based on search term
        const filteredItems = menuData.all.filter(item => {
            return item.name.toLowerCase().includes(searchTerm) ||
                   item.description.toLowerCase().includes(searchTerm) ||
                   item.category.toLowerCase().includes(searchTerm) ||
                   item.type?.toLowerCase().includes(searchTerm) ||
                   item.price.toLowerCase().includes(searchTerm);
        });
        
        // Display filtered results
        menuItemsContainer.innerHTML = '';
        
        if (filteredItems.length === 0) {
            const noResultsMsg = createNoResultsMessage();
            menuItemsContainer.appendChild(noResultsMsg);
            return;
        }
        
        filteredItems.forEach(item => {
            const menuItem = document.createElement('div');
            menuItem.className = 'menu-item';
            
            const imageUrl = item.image || `https://source.unsplash.com/100x100/?${item.name.toLowerCase().replace(/\s+/g, '-')}`;
            
            const ratingHtml = item.rating ? `
                <div class="rating">
                    <span class="stars">${'★'.repeat(Math.floor(item.rating))}${'☆'.repeat(5 - Math.floor(item.rating))}</span>
                    <span class="rating-text">${item.rating} (${item.reviews || item.ratingCount || 0})</span>
                </div>
            ` : '';
            
            const categoryBadge = item.category ? `<span class="category-badge">${item.category}</span>` : '';
            const typeBadge = item.type ? `<span class="type-badge ${item.type.toLowerCase().replace(/[^a-z]/g, '')}">${item.type}</span>` : '';
            
            menuItem.innerHTML = `
                <img src="${imageUrl}" alt="${item.name}" class="menu-item-image" onerror="this.src='https://via.placeholder.com/100x100?text=No+Image'">
                <div class="menu-item-content">
                    <div class="item-header">
                        <h3>${item.name}</h3>
                        <div class="badges">
                            ${categoryBadge}
                            ${typeBadge}
                        </div>
                    </div>
                    <p class="description">${item.description}</p>
                    ${ratingHtml}
                    <div class="price">${item.price}</div>
                </div>
            `;
            menuItemsContainer.appendChild(menuItem);
        });
    });

    // Create "No results found" message element
    function createNoResultsMessage() {
        const message = document.createElement('div');
        message.className = 'no-results';
        message.innerHTML = `
            <div class="no-results-icon">🔍</div>
            <h3>No items found</h3>
            <p>Try searching with different keywords or browse our categories</p>
        `;
        message.style.cssText = `
            width: 100%;
            text-align: center;
            padding: 40px 20px;
            color: var(--gray-color);
            background-color: var(--card-bg);
            border-radius: 12px;
            margin: 20px 0;
            box-shadow: 0 2px 8px var(--shadow-color);
        `;
        return message;
    }
});

// Add CSS for enhanced menu item styling
if (!document.querySelector('#menu-styles')) {
    const menuStyles = document.createElement('style');
    menuStyles.id = 'menu-styles';
    menuStyles.textContent = `
        .menu-items-container {
            padding: 16px;
        }
        
        .search-bar {
            padding: 16px;
            background: var(--background-color);
            border-bottom: 1px solid var(--border-color);
        }
        
        .search-bar input {
            width: 100%;
            padding: 12px 16px;
            border: 1px solid var(--border-color);
            border-radius: 8px;
            font-size: 16px;
            background: var(--card-bg);
            color: var(--text-color);
        }
        
        .category-buttons {
            display: flex;
            gap: 8px;
            padding: 16px;
            overflow-x: auto;
            background: var(--background-color);
            border-bottom: 1px solid var(--border-color);
        }
        
        .category-btn {
            padding: 8px 16px;
            border: 1px solid var(--border-color);
            border-radius: 20px;
            background: var(--card-bg);
            color: var(--text-color);
            font-size: 14px;
            white-space: nowrap;
            cursor: pointer;
            transition: all 0.2s ease;
        }
        
        .category-btn.active {
            background: var(--primary-color);
            color: white;
            border-color: var(--primary-color);
        }
        
        .category-btn:hover {
            background: var(--primary-color);
            color: white;
        }
    `;
    document.head.appendChild(menuStyles);
}