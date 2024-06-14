import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  ContactShadows,
  OrbitControls,
  Preload,
  Text,
  useAnimations,
  useFBX,
  useGLTF,
  useProgress,
} from "@react-three/drei";
import { LoopRepeat } from "three";

import CanvasLoader from "../Loader";

const Avatar = ({ isMobile }) => {
  const avatar = useGLTF("./character/sanyam.glb");
  const group = useRef();
  const { animations: wavingAnimation } = useFBX("animations/Waving.fbx");
  wavingAnimation[0].name = "Waving";
  const { actions } = useAnimations(wavingAnimation, group);

  useEffect(() => {
    actions["Waving"].reset().play();
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
      <directionalLight position={[5, 5, 5]} intensity={3} />
      <directionalLight position={[5, 5, -5]} intensity={2} />
      <directionalLight position={[-5, 5, 0]} intensity={1} />
      <directionalLight position={[-5, 5, -5]} intensity={3} />
      <pointLight intensity={1} />
      <primitive
        object={avatar.scene}
        scale={isMobile ? 2.5 : 3.5}
        position={isMobile ? [0, -3.6, 0] : [3, -4, -2]}
        rotation={[0, 0.88, 0]}
      />
    </mesh>
  );
};

const AvatarCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  const renderer = useRef(null);

  useEffect(() => {
    return () => {
      if (renderer.current) {
        renderer.current.dispose(); // Dispose of context on unmount
      }
    };
  }, []);
  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 680px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <>
      <Canvas
        frameloop="always"
        ref={renderer}
        shadows
        dpr={[1, 2]}
        camera={{ position: [20, 10, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Avatar isMobile={isMobile} />
        </Suspense>
        <Preload all />
      </Canvas>
    </>
  );
};

export default AvatarCanvas;
