import React, { useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';

const GlamCSScene: React.FC = () => {
    const sceneRef = useRef<THREE.Scene | null>(null);

    useEffect(() => {
        if (sceneRef.current) {
            // Add your 3D model loading and scene setup here
        }
    }, [sceneRef]);

    return (
        <div className="flex items-center justify-center h-screen bg-white">
            <motion.h1
                className="text-5xl font-bold text-orange-500 mb-6"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Welcome to GlamCS
            </motion.h1>
            <Canvas
                ref={sceneRef}
                className="w-full h-full"
                camera={{ position: [0, 0, 5], fov: 75 }}
            >
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <OrbitControls enableZoom={true} />
                {/ Place your 3D models here /}
            </Canvas>
            <motion.p
                className="text-lg text-gray-700 mt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
                Discover our luxurious range of cosmetics crafted for the modern individual. Experience beauty like never before with GlamCS.
            </motion.p>
        </div>
    );
};

export default GlamCSScene;