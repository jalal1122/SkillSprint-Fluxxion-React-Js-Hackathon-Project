import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshDistortMaterial } from '@react-three/drei';

const Crystals = () => {
  const crystalsRef = useRef([]);

  // Animate crystals (rotation + up-down motion)
  useFrame((state) => {
    crystalsRef.current.forEach((mesh, index) => {
      if (mesh) {
        mesh.rotation.y += 0.005;
        mesh.rotation.x += 0.003;
        mesh.position.y = Math.sin(state.clock.elapsedTime + index) * 0.5;
      }
    });
  });

  const positions = [
    [2, 1, 0],
    [-2, -1, -1],
    [1.5, -2, 1],
    [-1.5, 2, -1],
    [0, 0, -2],
    [3, -1.5, 2],
    [-3, 1.5, -2],
  ];

  return (
    <>
      {positions.map((pos, i) => (
        <mesh
          key={i}
          ref={(el) => (crystalsRef.current[i] = el)}
          position={pos}
          scale={[0.7, 1.1, 0.7]}
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
