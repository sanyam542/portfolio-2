import React, { Suspense, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const MeshAvatar = () => {
  const { nodes, materials } = useGLTF("./sanyam/untitled.gltf");

  const avatar = useGLTF("./sanyam/untitled.gltf");
  const group = useRef();

  useEffect(() => {
    Object.values(materials).forEach((material) => {
      material.wireframe = true;
    });
  }, []);
  return (
    <mesh ref={group}>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <directionalLight position={[5, 5, -5]} intensity={2} />
      <directionalLight position={[-5, 5, 0]} intensity={1} />
      <directionalLight position={[-5, 5, -5]} intensity={1} />
      <pointLight intensity={1} />
      <primitive
        object={avatar.scene}
        scale={2.2}
        position-y={-2}
        rotation-y={0}
      />
    </mesh>
  );
};

const MeshAvatarCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="always"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, -3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          autoRotateSpeed={20}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <MeshAvatar />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default MeshAvatarCanvas;
