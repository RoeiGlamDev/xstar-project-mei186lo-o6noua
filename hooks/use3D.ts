import { useEffect, useRef } from 'react';
import * as THREE from 'three';

/
 * Custom hook for handling 3D interactions for GlamCS interactive elements.
 * This hook utilizes Three.js to create an immersive experience for users
 * browsing GlamCS cosmetics products.
 * 
 * @returns {Object} contains a ref to attach to the 3D container and a function to update the scene
 */
export const use3D = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const sceneRef = useRef<THREE.Scene | null>(null);
    const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
    const rendererRef = useRef<THREE.WebGLRenderer | null>(null);

    useEffect(() => {
        if (containerRef.current) {
            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            const renderer = new THREE.WebGLRenderer({ alpha: true });
            renderer.setSize(window.innerWidth, window.innerHeight);
            containerRef.current.appendChild(renderer.domElement);

            // Set background color to white for a clean, modern look
            scene.background = new THREE.Color(0xffffff);

            // Adding a 3D model of a cosmetic product (for example, lipstick)
            const geometry = new THREE.CylinderGeometry(0.5, 0.5, 3, 32);
            const material = new THREE.MeshStandardMaterial({ color: 0xff8c00 }); // GlamCS orange
            const lipstick = new THREE.Mesh(geometry, material);
            scene.add(lipstick);

            // Lighting to create a luxurious effect
            const light = new THREE.DirectionalLight(0xffffff, 1);
            light.position.set(5, 5, 5).normalize();
            scene.add(light);

            camera.position.z = 5;

            const animate = () => {
                requestAnimationFrame(animate);
                lipstick.rotation.y += 0.01; // Rotate the lipstick to showcase it
                renderer.render(scene, camera);
            };

            animate();

            // Store refs
            sceneRef.current = scene;
            cameraRef.current = camera;
            rendererRef.current = renderer;

            // Cleanup on unmount
            return () => {
                if (rendererRef.current) {
                    rendererRef.current.dispose();
                }
                if (containerRef.current) {
                    containerRef.current.removeChild(renderer.domElement);
                }
            };
        }
    }, []);

    return { containerRef };
};