import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Environment } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import Crystals from './Crystals';

const BackgroundAnimation = () => {
  return (
    <div className="absolute inset-0 z-10">
      <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
        {/* Lights */}
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={2} />
        <pointLight position={[-10, -10, -10]} intensity={2} color="#0ff" />

        {/* Environment Light Reflections */}
        <Environment preset="sunset" />

        {/* Stars */}
        <Stars radius={100} depth={50} count={5000} factor={4} fade speed={1} />

        {/* Glowing Crystals */}
        <Crystals />

        {/* Bloom Effect for Magical Glow */}
        <EffectComposer>
          <Bloom
            luminanceThreshold={0.1}
            luminanceSmoothing={0.9}
            intensity={1.2}
          />
        </EffectComposer>

        {/* Subtle Auto Orbit Movement */}
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.75} />
      </Canvas>
    </div>
  );
};

export default BackgroundAnimation;
