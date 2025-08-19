import { formatCurrency } from './formatters';

/
 * Utility functions for the GlamCS cosmetics application.
 * @module utils
 */

/
 * Class representing a cosmetic product.
 * @interface Product
 * @property {number} id - Unique identifier for the product.
 * @property {string} name - Name of the product.
 * @property {string} description - Description of the product.
 * @property {number} price - Price of the product.
 * @property {string} category - Category of the cosmetic product (e.g., lipstick, foundation).
 * @property {string} imageUrl - URL of the product image.
 */
export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    category: string;
    imageUrl: string;
}

/
 * Class representing a user review.
 * @interface Review
 * @property {number} productId - ID of the product being reviewed.
 * @property {number} rating - Rating given by the user (1-5).
 * @property {string} comment - Review comment from the user.
 */
export interface Review {
    productId: number;
    rating: number;
    comment: string;
}

/
 * Utility function to combine class names conditionally.
 * @param {string} base - The base class name.
 * @param {string[]} conditions - Array of conditions that will add additional class names.
 * @returns {string} The combined class name string.
 * @example
 * cn('product-card', ['featured', 'highlighted']) // returns 'product-card featured highlighted'
 */
export function cn(base: string, conditions: string[]): string {
    return [base, ...conditions].filter(Boolean).join(' ');
}

/
 * Formats the price of a product to a currency string.
 * @param {number} price - The price to format.
 * @returns {string} The formatted price string.
 * @example
 * formatPrice(29.99) // returns '$29.99'
 */
export function formatPrice(price: number): string {
    return formatCurrency(price);
}

/
 * Formats a product description for display.
 * @param {string} description - The raw product description.
 * @returns {string} The formatted description.
 * @example
 * formatDescription("A luxurious lipstick that glides on smoothly.") 
 * // returns 'A luxurious lipstick that glides on smoothly.'
 */
export function formatDescription(description: string): string {
    return description.trim();
}