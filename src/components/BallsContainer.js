import React, { useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';

// Cube component
const Cube = ({ size, color, position }) => {
  const cubeRef = useRef();

  useEffect(() => {
    const handleMouseMove = (e) => {
      const currMouseX = e.clientX;
      const rotationAmount = (currMouseX - window.innerWidth / 2) * 0.00005; // Adjust this value for slower/faster animation
      cubeRef.current.rotation.x += rotationAmount;
      cubeRef.current.rotation.y += rotationAmount;
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <motion.mesh
      ref={cubeRef}
      onPointerMove={(e) => e.stopPropagation()}
      whileHover={{ scale: 1.1 }}
      castShadow
      position={position}
      scale={[size / 100, size / 100, size / 100]}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={color} />
    </motion.mesh>
  );
};

const BallsContainer = () => {
  return (
    <div style={{ position: 'absolute', width: '900px', height: '900px', top: '100px', right: '20px' }}>
      <Canvas
        style={{ background: '#000114' }}
        camera={{ position: [0, 0, 5] }}
        gl={{ antialias: true }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />

        {/* Render cubes */}
        {[
          { size: 100, color: '#215E6F', position: [1.2, 1.1, 0] },
          { size: 80, color: '#0A799F', position: [1.6, -0.5, 0] },
          { size: 60, color: '#9BF0FA', position: [2.0, 0, 1] },
          { size: 40, color: '#FFFFFF', position: [1, 1, 2.5] },
        ].map((cube, index) => (
          <Cube
            key={index}
            size={cube.size}
            color={cube.color}
            position={cube.position}
          />
        ))}
      </Canvas>
    </div>
  );
};

export default BallsContainer;
