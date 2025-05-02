import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { motion, AnimatePresence } from 'framer-motion';

const skills = [
  { name: 'React', color: '#61DBFB', description: 'A JavaScript library for building user interfaces.' },
  { name: 'JavaScript', color: '#F7DF1E', description: 'The language of the web. Adds interactivity.' },
  { name: 'CSS', color: '#264de4', description: 'Used to style web pages beautifully.' },
  { name: 'Tailwind', color: '#38BDF8', description: 'A utility-first CSS framework.' },
  { name: 'Three.js', color: '#ffffff', description: 'A 3D JavaScript library using WebGL.' },
];

const Orb = ({ skill, angleOffset, onClick }) => {
  const meshRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const radius = 3;
    const angle = t + angleOffset;
    meshRef.current.position.x = Math.cos(angle) * radius;
    meshRef.current.position.z = Math.sin(angle) * radius;
    meshRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={meshRef} onClick={() => onClick(skill)}>
      <sphereGeometry args={[0.4, 32, 32]} />
      <meshStandardMaterial
        color={skill.color}
        emissive={skill.color}
        emissiveIntensity={0.7}
        metalness={0.6}
        roughness={0.3}
      />
      <Html distanceFactor={10}>
        <div className="text-sm font-semibold text-white dark:text-gray-200">{skill.name}</div>
      </Html>
    </mesh>
  );
};

const SkillModal = ({ skill, onClose }) => {
  return (
    <AnimatePresence>
      {skill && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center z-50 bg-black/40 backdrop-blur"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white dark:bg-slate-800 text-black dark:text-white rounded-2xl shadow-xl p-6 w-[90%] max-w-sm relative"
            initial={{ scale: 0.7 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.6 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          >
            <button
              className="absolute top-2 right-3 text-xl font-bold text-gray-500 hover:text-red-500"
              onClick={onClose}
            >
              &times;
            </button>
            <h2 className="text-2xl font-semibold mb-2">{skill.name}</h2>
            <p className="text-base text-gray-600 dark:text-gray-300">{skill.description}</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const SkillOrbs = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  return (
    <>
      <Canvas
        style={{ height: '100vh', width: '100vw', position: 'absolute', top: 0, zIndex: -1 }}
        camera={{ position: [0, 0, 8], fov: 50 }}
      >
        <ambientLight intensity={0.6} />
        <pointLight position={[5, 5, 5]} intensity={1.5} />
        {skills.map((skill, index) => (
          <Orb
            key={index}
            skill={skill}
            angleOffset={index * (Math.PI / skills.length)}
            onClick={setSelectedSkill}
          />
        ))}
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
      </Canvas>
      <SkillModal skill={selectedSkill} onClose={() => setSelectedSkill(null)} />
    </>
  );
};

export default SkillOrbs;
