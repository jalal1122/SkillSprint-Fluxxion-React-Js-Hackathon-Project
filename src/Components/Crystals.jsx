import React, { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { MeshDistortMaterial } from '@react-three/drei';

const Crystals = () => {
  const crystalsRef = useRef([]);
  const { viewport } = useThree();

  // Animate crystals
  useFrame((state) => {
    crystalsRef.current.forEach((mesh, index) => {
      if (mesh) {
        mesh.rotation.y += 0.005;
        mesh.rotation.x += 0.003;
        mesh.position.y = Math.sin(state.clock.elapsedTime + index) * 0.5 + 0.5;
      }
    });
  });

  // Adjust positions based on viewport width (for responsiveness)
  const basePositions = [
    [2, 1.5, 0],
    [-2, -0.5, -1],
    [1.5, -1.5, 1],
    [-1.5, 2.5, -1],
    [0, 0.5, -2],
    [3, -1, 2],
    [-3, 2, -2],
  ];

  const positions = basePositions.map(([x, y, z]) => [
    (x / 4) * viewport.width, // scale based on viewport width
    (y / 4) * viewport.height, // scale based on viewport height
    z,
  ]);

  return (
    <>
      {positions.map((pos, i) => (
        <mesh
          key={i}
          ref={(el) => (crystalsRef.current[i] = el)}
          position={pos}
          scale={
            viewport.width < 6 ? [0.5, 0.8, 0.5] : [0.7, 1.1, 0.7] // Smaller on mobile
          }
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
