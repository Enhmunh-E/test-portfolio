import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Model } from "./Model";
export const Banner = () => {
  return (
    <Canvas camera={{ fov: 45, position: [0, 0, 15] }}>
      <Suspense fallback={null}>
        <ambientLight />
        <Model position={[0, -1, 0]} />
        <OrbitControls autoRotate autoRotateSpeed={10} />
      </Suspense>
    </Canvas>
  );
};
export default Banner;
