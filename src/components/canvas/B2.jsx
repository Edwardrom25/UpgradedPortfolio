import React, { useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

const B2Model = () => {
  const { scene } = useGLTF("/src/components/canvas/B2.glb"); // Adjust the path to your GLB file

  return <primitive object={scene} position={[0, 0, 0]} scale={0.09} />;  // Keep the model centered and scaled
};

const B2 = () => {
  useEffect(() => {
    const canvas = document.querySelector("canvas");
    const handleContextLost = (event) => {
      event.preventDefault();
      console.warn("WebGL context lost. Attempting to restore...");
    };
    const handleContextRestored = () => {
      console.log("WebGL context restored.");
    };

    canvas.addEventListener("webglcontextlost", handleContextLost, false);
    canvas.addEventListener("webglcontextrestored", handleContextRestored, false);

    return () => {
      canvas.removeEventListener("webglcontextlost", handleContextLost);
      canvas.removeEventListener("webglcontextrestored", handleContextRestored);
    };
  }, []);

  return (
    <div className="b2-container"> {/* Apply the CSS class here */}
      <Canvas
        camera={{ position: [15, 15, 0], fov: 50 }}  // Isometric camera position
        gl={{
          antialias: false,
          pixelRatio: 0.0005,  // Reduced pixel ratio
        }}
      >
        <ambientLight intensity={1} />
        <directionalLight position={[-10, 10, 0]} intensity={2.5} />

        <B2Model />

        <OrbitControls 
          enableZoom={false} 
          enableRotate={true}
        />
      </Canvas>
    </div>
  );
};

export default B2;


