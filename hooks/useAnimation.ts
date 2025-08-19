import { useEffect, useState } from 'react';

/
 * @description A custom hook to manage animations for GlamCS cosmetics website.
 * This hook provides smooth, elegant animations tailored for a modern cosmetics brand.
 * 
 * @returns {Object} An object containing animation states and methods.
 * 
 * @typedef {Object} AnimationState
 * @property {boolean} isAnimating - Indicates if an animation is currently active.
 * @property {() => void} startAnimation - Function to trigger an animation.
 * @property {() => void} stopAnimation - Function to stop an ongoing animation.
 * @property {string} animationClass - CSS class name for the animation effect.
 */
export interface AnimationState {
  isAnimating: boolean;
  startAnimation: () => void;
  stopAnimation: () => void;
  animationClass: string;
}

/
 * @description A custom hook to create animations for the GlamCS website.
 * 
 * @returns {AnimationState} The current animation state and methods to control it.
 */
const useAnimation = (): AnimationState => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationClass, setAnimationClass] = useState('');

  /
   * @description Starts the animation by setting the appropriate class and updating the state.
   */
  const startAnimation = () => {
    setAnimationClass('glam-animation');
    setIsAnimating(true);
    
    // Set a timeout to remove the animation class after the animation duration
    setTimeout(() => {
      setAnimationClass('');
      setIsAnimating(false);
    }, 1000); // Adjust duration based on your animation
  };

  /
   * @description Stops the ongoing animation.
   */
  const stopAnimation = () => {
    setAnimationClass('');
    setIsAnimating(false);
  };

  useEffect(() => {
    // Optional: You can add any side effects related to animations here
  }, [isAnimating]);

  return { isAnimating, startAnimation, stopAnimation, animationClass };
};

export default useAnimation;