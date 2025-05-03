import React, { Suspense, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Environment } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import Crystals from './Crystals';

const BackgroundAnimation = () => {
  const cameraConfig = useMemo(() => ({ position: [0, 0, 15], fov: 60 }), []);

  return (
    <div className="absolute inset-0 z-10">
      <Canvas
        camera={cameraConfig}
        gl={{
          antialias: false,              // Disable antialiasing for better performance
          powerPreference: 'high-performance',
          preserveDrawingBuffer: false,
          stencil: false,
          depth: true,
        }}
        frameloop="demand"               // Only render when needed (e.g. on state change)
        dpr={[1, 1.5]}                   // Lower device pixel ratio range
      >
        <Suspense fallback={null}>
          {/* Lights */}
          <ambientLight intensity={0.4} />
          <pointLight position={[10, 10, 10]} intensity={1.5} />
          <pointLight position={[-10, -10, -10]} intensity={1.5} color="#0ff" />

          {/* Environment */}
          <Environment preset="sunset" background={false} />

          {/* Stars */}
          <Stars
            radius={80}
            depth={30}
            count={3000}          // reduced from 5000
            factor={3}
            fade
            speed={0.8}
          />

          {/* Crystals */}
          <Crystals />

          {/* Post-processing */}
          <EffectComposer disableNormalPass multisampling={0}>
            <Bloom
              luminanceThreshold={0.2}
              luminanceSmoothing={0.75}
              intensity={0.9}
            />
          </EffectComposer>

          {/* OrbitControls */}
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.2} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default BackgroundAnimation;
