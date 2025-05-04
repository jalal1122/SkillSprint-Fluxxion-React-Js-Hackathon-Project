import React, { Suspense, useMemo, lazy } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';

// 🌌 Lazy Load non-critical, heavy components
const Crystals = lazy(() => import('./Crystals'));
const Environment = lazy(() =>
  import('@react-three/drei').then((mod) => ({ default: mod.Environment }))
);
const EffectComposer = lazy(() =>
  import('@react-three/postprocessing').then((mod) => ({
    default: mod.EffectComposer,
  }))
);
const Bloom = lazy(() =>
  import('@react-three/postprocessing').then((mod) => ({
    default: mod.Bloom,
  }))
);

const BackgroundAnimation = () => {
  const cameraConfig = useMemo(() => ({ position: [0, 0, 15], fov: 60 }), []);

  return (
    <div className="absolute inset-0 z-10">
      <Canvas
        camera={cameraConfig}
        gl={{
          antialias: false,
          powerPreference: 'high-performance',
          preserveDrawingBuffer: false,
          stencil: false,
          depth: true,
        }}
        frameloop="demand"
        dpr={[1, 1.5]}
      >
        <Suspense fallback={null}>
          {/* Lights */}
          <ambientLight intensity={0.4} />
          <pointLight position={[10, 10, 10]} intensity={1.5} />
          <pointLight position={[-10, -10, -10]} intensity={1.5} color="#0ff" />

          {/* Stars */}
          <Stars
            radius={80}
            depth={30}
            count={3000}
            factor={3}
            fade
            speed={0.8}
          />

          {/* Environment (lazy) */}
          <Environment preset="sunset" background={false} />

          {/* Crystals (lazy) */}
          <Crystals />

          {/* Post-processing (lazy) */}
          <EffectComposer disableNormalPass multisampling={0}>
            <Bloom
              luminanceThreshold={0.2}
              luminanceSmoothing={0.75}
              intensity={0.9}
            />
          </EffectComposer>

          {/* Controls */}
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.2} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default BackgroundAnimation;
