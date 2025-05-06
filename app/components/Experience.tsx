import React from 'react';
import { Environment, OrbitControls, useTexture } from '@react-three/drei';

import { Avatar } from './Avatar';
import { useThree } from '@react-three/fiber';

const Experience = () => {
  const texture = useTexture('assets/hospital-background.png');
  const viewport = useThree((state) => state.viewport);

  return (
    <>
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        enableRotate={false}
      />
      <Environment preset='sunset' />
      <Avatar position={[0, -3, 5]} scale={2} />
      <mesh>
        <planeGeometry args={[viewport.width, viewport.height]} />
        <meshBasicMaterial map={texture} />
      </mesh>
    </>
  );
};

export default Experience;
