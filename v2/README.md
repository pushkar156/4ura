# AURA Restaurant Menu App

A modern, responsive restaurant menu application designed for mobile QR code access. This comprehensive frontend implementation provides customers with an intuitive way to browse the restaurant's extensive menu.

## Features

- **Multi-screen Experience**: Splash screen → Onboarding → Home → Menu
- **Comprehensive Menu System**: 80+ menu items across multiple categories
- **Smart Search**: Real-time search across names, descriptions, categories, and prices
- **Category Filtering**: Organized by Soups, Appetizers, Main Course, Seafood, etc.
- **Rich Item Details**: Ratings, reviews, images, dietary information (Veg/Non-Veg)
- **Theme Support**: Light/dark mode with system preference detection
- **Mobile-First Design**: Optimized for mobile devices with touch-friendly interactions
- **Smooth Animations**: CSS transitions and JavaScript-powered interactions

## Technologies Used

- **HTML5** - Semantic markup and structure
- **CSS3** - Modern styling with CSS Grid, Flexbox, and custom properties
- **JavaScript (ES6+)** - Dynamic functionality and data management
- **Google Fonts** - Typography (League Spartan, Philosopher, Inter)
- **Font Awesome** - Icons and visual elements

## Project Structure

```
AURA/
├── index.html              # Landing/Onboarding page
├── home.html               # Main dashboard with category overview
├── menu.html               # Detailed menu display with filtering
├── menu-items.js           # Comprehensive menu database (80+ items)
├── menu.js                 # Menu functionality and UI management
├── styles.css              # Global styles and responsive design
├── assets/                 # Images and media files
├── test-menu.html          # Testing page for menu functionality
├── menu-data-backup.js     # Backup of old data structure
└── README.md               # This documentation
```

## Getting Started

1. **Clone or download** this repository
2. **Open `index.html`** in your web browser
3. **Experience the flow**: Splash → Onboarding → Home → Menu
4. **Test functionality**: Use `test-menu.html` to verify menu data loading

No additional setup required - this is a complete frontend implementation!

## Menu Data

The application now uses a single, comprehensive data source:

- **`menu-items.js`**: 80+ items with rich metadata
  - Categories: Soups, Appetizers, Salads, Main Course, Seafood, Biryani, Noodles, Pizza, Pasta, Desserts, Beverages, etc.
  - Each item includes: name, price, description, category, type (Veg/Non-Veg), rating, reviews, images
  - Organized structure for easy maintenance and updates

## Recent Updates

### JavaScript Optimization
- **Reduced from 3 to 2 JS files**: Eliminated redundant `menu-data.js`
- **Enhanced `menu.js`**: Now dynamically organizes data from `menu-items.js`
- **Improved search**: Multi-field search with better performance
- **Smart categorization**: Automatic category organization based on item metadata

### Enhanced Features
- **Visual improvements**: Better item cards with ratings, badges, and images
- **Error handling**: Graceful fallbacks for missing images and data
- **Responsive design**: Enhanced mobile experience with touch interactions
- **Performance**: Optimized data loading and rendering

## User Interface

### Navigation Flow
1. **Splash Screen**: Branded entry with smooth animations
2. **Onboarding**: Welcome message with call-to-action
3. **Home Dashboard**: Category overview with item counts
4. **Menu Display**: Detailed items with search and filtering

### Key Components
- **Search Bar**: Real-time filtering across all menu data
- **Category Buttons**: Quick filtering by food type
- **Item Cards**: Rich display with images, ratings, and details
- **Theme Toggle**: Light/dark mode support
- **Responsive Grid**: Adapts to different screen sizes

## Testing

Use the included `test-menu.html` file to:
- Verify menu data loading
- Check item counts and categories
- Validate data structure integrity
- View comprehensive statistics

## Mobile Optimization

- **Touch-friendly**: Large tap targets and smooth interactions
- **Performance**: Optimized images and efficient rendering
- **Accessibility**: Proper contrast ratios and readable fonts
- **Responsive**: Adapts to various mobile screen sizes

## Future Enhancements

Potential improvements for production use:
- Backend integration for dynamic menu updates
- Order placement functionality
- User preferences and favorites
- Multi-language support
- Analytics and usage tracking

## License

This project is open source and available under the MIT License.

---

**Note**: This is a frontend-only implementation optimized for mobile devices. For production use, consider integrating with a backend system for dynamic content management.