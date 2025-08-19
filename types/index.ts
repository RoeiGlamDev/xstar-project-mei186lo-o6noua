import { Product } from './product';
import { User } from './user';

/
 * Represents the GlamCS cosmetics brand.
 * @interface GlamCSBrand
 */
export interface GlamCSBrand {
  name: string; // The name of the brand
  tagline: string; // A catchy tagline for the brand
  colors: string[]; // The brand colors
  logoUrl: string; // The URL for the brand logo
}

/
 * Represents a product in the GlamCS cosmetics line.
 * @interface GlamCSProduct
 */
export interface GlamCSProduct extends Product {
  id: number; // Unique identifier for the product
  name: string; // The name of the product
  description: string; // A detailed description of the product
  price: number; // The price of the product
  category: string; // The category of cosmetics (e.g., lipstick, foundation)
  isAvailable: boolean; // Availability status of the product
  imageUrl: string; // URL of the product image
  ratings: number; // Average rating of the product
}

/
 * Represents a user in the GlamCS cosmetics application.
 * @interface GlamCSUser
 */
export interface GlamCSUser extends User {
  id: number; // Unique identifier for the user
  username: string; // The username of the user
  email: string; // The email address of the user
  password: string; // The password for the user account
  favorites: number[]; // Array of product IDs that the user has favorited
}

/
 * Represents the current state of the GlamCS application.
 * @interface GlamCSAppState
 */
export interface GlamCSAppState {
  products: GlamCSProduct[]; // List of products available in the store
  users: GlamCSUser[]; // List of registered users
  currentUser: GlamCSUser | null; // The currently logged-in user
}

/
 * Brand information for GlamCS cosmetics.
 * @constant glamCSBrand
 */
export const glamCSBrand: GlamCSBrand = {
  name: 'GlamCS',
  tagline: 'Elevate Your Beauty',
  colors: ['#FFA500', '#FFFFFF'], // Orange and white colors
  logoUrl: 'https://example.com/logo.png', // Path to the brand logo
};