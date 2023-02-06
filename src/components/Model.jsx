// import React, { useRef } from "react";
// import { useGLTF } from "@react-three/drei";

// export function Model(props) {
//   const { nodes, materials } = useGLTF("/dog.glb");
//   return (
//     <group {...props} dispose={null}>
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Plane.geometry}
//         material={materials["Material.001"]}
//         position={[-3.4, 0, -2.95]}
//         scale={[7.05, 1, 7.05]}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.main.geometry}
//         material={materials.palette}
//         position={[3.69, 0, 0]}
//         rotation={[Math.PI / 2, 0, 0]}
//       />
//     </group>
//   );
// }

// useGLTF.preload("/dog.glb");

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export const Model = (props) => {
  const group = useRef();
  const { nodes, materials } = useGLTF("/NestBird.gltf");
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]}>
          <primitive object={nodes.mixamorigHips} />
          <group name="Cube001">
            <skinnedMesh
              name="Cube005"
              geometry={nodes.Cube005.geometry}
              material={materials["Material.008"]}
              skeleton={nodes.Cube005.skeleton}
            />
            <skinnedMesh
              name="Cube005_1"
              geometry={nodes.Cube005_1.geometry}
              material={materials["Material.009"]}
              skeleton={nodes.Cube005_1.skeleton}
            />
            <skinnedMesh
              name="Cube005_2"
              geometry={nodes.Cube005_2.geometry}
              material={materials["Material.010"]}
              skeleton={nodes.Cube005_2.skeleton}
            />
            <skinnedMesh
              name="Cube005_3"
              geometry={nodes.Cube005_3.geometry}
              material={materials["Material.011"]}
              skeleton={nodes.Cube005_3.skeleton}
            />
            <skinnedMesh
              name="Cube005_4"
              geometry={nodes.Cube005_4.geometry}
              material={materials["Material.012"]}
              skeleton={nodes.Cube005_4.skeleton}
            />
            <skinnedMesh
              name="Cube005_5"
              geometry={nodes.Cube005_5.geometry}
              material={materials["Material.013"]}
              skeleton={nodes.Cube005_5.skeleton}
            />
          </group>
        </group>
        <group name="Cube" scale={[0.98, 3.83, 0.98]}>
          <mesh
            name="Cube001_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube001_1.geometry}
            material={materials["Material.001"]}
          />
          <mesh
            name="Cube001_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube001_2.geometry}
            material={materials["Material.002"]}
          />
          <mesh
            name="Cube001_3"
            castShadow
            receiveShadow
            geometry={nodes.Cube001_3.geometry}
            material={materials["Material.003"]}
          />
          <mesh
            name="Cube001_4"
            castShadow
            receiveShadow
            geometry={nodes.Cube001_4.geometry}
            material={materials["Material.004"]}
          />
          <mesh
            name="Cube001_5"
            castShadow
            receiveShadow
            geometry={nodes.Cube001_5.geometry}
            material={materials["Material.005"]}
          />
          <mesh
            name="Cube001_6"
            castShadow
            receiveShadow
            geometry={nodes.Cube001_6.geometry}
            material={materials["Material.006"]}
          />
        </group>
      </group>
    </group>
  );
};

useGLTF.preload("/NestBird.gltf");

export default Model;
