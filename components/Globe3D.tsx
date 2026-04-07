'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
function GlobeScene() {
  return (
    <>
      <pointLight position={[10, 10, 10]} intensity={1.5} />
      <pointLight position={[-10, -10, 10]} intensity={1} color="#00d9ff" />
      <ambientLight intensity={0.5} />

      <Sphere args={[2, 64, 64]} position={[0, 0, 0]}>
        <meshStandardMaterial
          color="#0f4c81"
          metalness={0.7}
          roughness={0.2}
          emissive="#003d66"
          emissiveIntensity={0.3}
        />
      </Sphere>

      {/* Glowing ring */}
      <mesh rotation={[Math.PI / 2.5, 0, 0]}>
        <torusGeometry args={[2.5, 0.05, 16, 100]} />
        <meshStandardMaterial
          color="#00d9ff"
          emissive="#00d9ff"
          emissiveIntensity={1}
          metalness={0.2}
          roughness={0.3}
        />
      </mesh>

      <OrbitControls
        autoRotate
        autoRotateSpeed={2}
        enableZoom={false}
        enablePan={false}
        dampingFactor={0.05}
      />
    </>
  );
}

export default function Globe3D() {
  return (
    <div className="w-full h-96 relative">
      <Canvas
        camera={{ position: [0, 0, 5.5], fov: 45 }}
        dpr={typeof window !== 'undefined' ? window.devicePixelRatio : 1}
      >
        <GlobeScene />
      </Canvas>
    </div>
  );
}
