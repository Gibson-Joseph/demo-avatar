'use client';
import { Canvas } from '@react-three/fiber';
import Experience from './components/Experience';

export default function Home() {
  return (
    <Canvas shadows camera={{ position: [0, 0, 8], fov: 42 }}>
      <color attach='background' args={['#ececec']} />
      <Experience />
    </Canvas>
  );
}
