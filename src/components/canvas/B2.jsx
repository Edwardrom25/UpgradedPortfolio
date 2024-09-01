import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const B2 = () => {
  const b2 = useGLTF("./B2/scene.gltf");

  return (
    <primitive object={b2.scene} scale={0.05} position-y={0} rotation-y={0} />
  );
};

const B2Canvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [10, 7.5, 0],
      }}
    >
      <ambientLight intensity={5} /> {/* Increased intensity */}
      
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <B2 />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default B2Canvas;
