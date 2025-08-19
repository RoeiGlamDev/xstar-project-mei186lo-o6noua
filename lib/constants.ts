export const BRAND_NAME = "GlamCS";

/
 * Color constants used in the GlamCS application.
 * These colors reflect the luxury and elegance of our cosmetics brand.
 */
export const COLORS = {
    primary: "#FF7F50", // Orange
    secondary: "#FFFFFF", // White
};

/
 * Configuration settings for the GlamCS application.
 * These settings include brand-related information and application-specific configurations.
 */
export const CONFIG = {
    siteTitle: ${BRAND_NAME} - Elegance in Every Shade,
    tagline: "Unleash Your Inner Glamour",
    description: "GlamCS offers a luxurious range of cosmetics designed for the modern individual who values quality and style.",
    contactEmail: "support@glamcs.com",
    facebookPage: "https://facebook.com/glamcs",
    instagramHandle: "@glamcs_official",
};

/
 * Interface representing a cosmetic product in the GlamCS catalog.
 */
export interface CosmeticProduct {
    id: string;
    name: string;
    description: string;
    price: number;
    color: string;
    imageUrl: string;
    category: string; // e.g., Lipstick, Foundation, Eyeshadow
}

/
 * Interface representing a user review for GlamCS products.
 */
export interface UserReview {
    productId: string;
    userId: string;
    rating: number; // 1 to 5 scale
    comment: string;
    timestamp: Date;
}

/
 * Example of a cosmetics product list for GlamCS.
 * In a real application, this data would be fetched from a database.
 */
export const exampleProducts: CosmeticProduct[] = [
    {
        id: "1",
        name: "Luxe Lipstick",
        description: "A rich, creamy lipstick that provides full coverage and a luxurious finish.",
        price: 25.00,
        color: COLORS.primary,
        imageUrl: "https://example.com/images/luxe-lipstick.jpg",
        category: "Lipstick",
    },
    {
        id: "2",
        name: "Silk Foundation",
        description: "An ultra-smooth foundation that blends seamlessly for a flawless look.",
        price: 40.00,
        color: COLORS.secondary,
        imageUrl: "https://example.com/images/silk-foundation.jpg",
        category: "Foundation",
    },
];