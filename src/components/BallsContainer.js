import React, { useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";
// Cube component
const Cube = ({ size, color, position }) => {
  const cubeRef = useRef();

  useEffect(() => {
    const handleMouseMove = (e) => {
      const currMouseX = e.clientX;
      const rotationAmount = (currMouseX - window.innerWidth / 2) * 0.00008; // Adjust this value for slower/faster animation
      cubeRef.current.rotation.x += rotationAmount;
      cubeRef.current.rotation.y += rotationAmount;
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
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
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "90vh",
        top: "15vh",
        right: "1.2rem",
      }}
      id="home"
    >
      <Canvas
        style={{ background: "#000114" }}
        camera={{ position: [0, 0, 5] }}
        gl={{ antialias: true }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />

        {/* Render cubes */}
        {[
          { size: 90, color: "#215E6F", position: [4.5, 0.8, 0.4] },
          { size: 75, color: "#0A799F", position: [5.2, -0.2, 0.7] },
          { size: 55, color: "#9BF0FA", position: [4.6, 0, 1.8] },
          { size: 45, color: "#FFFFFF", position: [3.8, 0.5, 2.2] },
          { size: 55, color: "#FFFFBB", position: [4.2, 1.2, 1.3] },
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
