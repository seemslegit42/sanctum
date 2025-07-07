"use client";

import * as React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { Color } from 'three';

function Obelisk() {
  return (
    <mesh position={[0, 0, 0]}>
      <cylinderGeometry args={[0.1, 0.5, 4, 4, 1]} />
      <meshStandardMaterial 
        color="#222" 
        metalness={0.8} 
        roughness={0.2} 
        emissive="hsl(var(--primary))" 
        emissiveIntensity={0.5}
      />
    </mesh>
  );
}

export function InteractiveObelisk() {
  return (
    <div 
      className="relative w-64 h-[40rem] flex items-center justify-center"
    >
      <Canvas 
        camera={{ position: [0, 1, 5], fov: 50 }} 
        gl={{ antialias: true, alpha: true }}
        onCreated={({ gl }) => {
          gl.setClearColor(0x000000, 0)
        }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="hsl(var(--primary))" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="hsl(var(--accent))" />
        <React.Suspense fallback={null}>
            <Obelisk />
            <Environment preset="city" />
        </React.Suspense>
        <OrbitControls 
          autoRotate 
          autoRotateSpeed={0.5} 
          enableZoom={false} 
          enablePan={false} 
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI * (2/3)}
        />
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent rounded-t-lg pointer-events-none" />
    </div>
  );
}
