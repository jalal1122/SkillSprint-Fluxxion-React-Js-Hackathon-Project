import React, { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { MeshDistortMaterial } from '@react-three/drei';

const Crystals = () => {
  const crystalsRef = useRef([]);
  const { viewport } = useThree();

  // Animation loop for floating/rotating effect
  useFrame((state) => {
    crystalsRef.current.forEach((mesh, index) => {
      if (mesh) {
        mesh.rotation.y += 0.005;
        mesh.rotation.x += 0.003;
        mesh.position.y = Math.sin(state.clock.elapsedTime + index) * 0.5 + 0.5;
      }
    });
  });

  // Memoize positions to prevent recalculation on every render
  const positions = useMemo(() => {
    const base = [
      [2, 1.5, 0],
      [-2, -0.5, -1],
      [1.5, -1.5, 1],
      [-1.5, 2.5, -1],
      [0, 0.5, -2],
      [3, -1, 2],
      [-3, 2, -2],
    ];
    return base.map(([x, y, z]) => [
      (x / 4) * viewport.width,
      (y / 4) * viewport.height,
      z,
    ]);
  }, [viewport.width, viewport.height]);

  const scale = viewport.width < 6 ? [0.5, 0.8, 0.5] : [0.7, 1.1, 0.7];

  return (
    <>
      {positions.map((pos, i) => (
        <mesh
          key={i}
          ref={(el) => (crystalsRef.current[i] = el)}
          position={pos}
          scale={scale}
        >
          <dodecahedronGeometry args={[1, 0]} />
          <MeshDistortMaterial
            color={i % 2 === 0 ? '#8b5cf6' : '#06b6d4'}
            emissive={i % 2 === 0 ? '#a78bfa' : '#67e8f9'}
            distort={0.5}
            speed={1.5}
            roughness={0.2}
          />
        </mesh>
      ))}
    </>
  );
};

export default Crystals;
