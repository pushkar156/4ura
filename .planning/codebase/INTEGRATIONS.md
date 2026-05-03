# Integrations

**Analysis Date:** 2026-05-04

## External Services

The application is largely self-contained but relies on several external services via CDNs and APIs.

### 1. Font Awesome (CDN)
- **Purpose:** Vector icons for the UI (Search, Filter, Socials, Navigation).
- **Implementation:** `<link>` tag in HTML headers.

### 2. Google Fonts (CDN)
- **Purpose:** Typography.
- **Families:** League Spartan, Philosopher, M PLUS Rounded 1c.
- **Implementation:** `<link>` tag in HTML headers.

### 3. Unsplash (Dynamic URL)
- **Purpose:** High-quality imagery for menu items.
- **Implementation:** Dynamically generated URLs based on search terms or explicit IDs in `menu-items.js`.

## Future Planned Integrations

As noted in `README.md` and user objectives:
- **Backend API:** Moving from static JS data to a database-driven REST/GraphQL API.
- **Ordering System:** Integration with a payment gateway or order processing system.
- **Electron / Native Wrapper:** Wrapping the web app into a desktop or mobile application.

---

*Integrations analysis: 2026-05-04*
*Update when new external services are added*
