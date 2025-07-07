"use client";
import * as React from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

type SigilWrapperProps = {
  children: React.ReactNode;
  className?: string;
};

const SigilWrapper = ({ children, className }: SigilWrapperProps) => {
    const meshRef = React.useRef<any>();
    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.y += delta * 0.3;
            meshRef.current.rotation.x += delta * 0.2;
        }
    });

    return (
        <div className={className}>
            <Canvas camera={{ position: [0, 0, 3.5], fov: 50 }}>
                <ambientLight intensity={1.5} />
                <pointLight position={[5, 5, 5]} intensity={2} color="hsl(var(--primary))" />
                <pointLight position={[-5, -5, -5]} intensity={1} color="hsl(var(--accent))" />
                <group ref={meshRef}>
                    {children}
                </group>
            </Canvas>
        </div>
    );
}

const SigilMaterial = () => (
    <meshStandardMaterial 
        color="hsl(var(--accent))" 
        emissive="hsl(var(--primary))" 
        emissiveIntensity={0.6}
        metalness={0.9} 
        roughness={0.1} 
    />
);

export function BeepSigil(props: { className?: string }) {
    return (
        <SigilWrapper {...props}>
            <mesh>
                <icosahedronGeometry args={[1, 0]} />
                <SigilMaterial />
            </mesh>
        </SigilWrapper>
    );
}

export function MicroAppsSigil(props: { className?: string }) {
    return (
        <SigilWrapper {...props}>
            <mesh>
                <cylinderGeometry args={[0.8, 0.8, 0.5, 6]} />
                <SigilMaterial />
            </mesh>
        </SigilWrapper>
    );
}

export function LoomSigil(props: { className?: string }) {
    return (
        <SigilWrapper {...props}>
            <mesh>
                <boxGeometry args={[1.5, 1.5, 0.2]} />
                <SigilMaterial />
            </mesh>
             <mesh>
                <boxGeometry args={[1.5, 1.5, 0.2]} />
                <meshBasicMaterial wireframe color="hsl(var(--primary))" />
            </mesh>
        </SigilWrapper>
    );
}

export function AegisSigil(props: { className?: string }) {
    return (
        <SigilWrapper {...props}>
            <mesh>
                <octahedronGeometry args={[1, 0]} />
                <SigilMaterial />
            </mesh>
        </SigilWrapper>
    );
}

export function KlepsydraSigil(props: { className?: string }) {
    return (
        <SigilWrapper {...props}>
            <mesh position={[0, 0.5, 0]}>
                <coneGeometry args={[0.8, 1, 4]} />
                <SigilMaterial />
            </mesh>
            <mesh position={[0, -0.5, 0]} rotation={[Math.PI, 0, 0]}>
                <coneGeometry args={[0.8, 1, 4]} />
                <SigilMaterial />
            </mesh>
        </SigilWrapper>
    );
}

export function PantheonSigil(props: { className?: string }) {
    return (
        <SigilWrapper {...props}>
            <mesh>
                <dodecahedronGeometry args={[1, 0]} />
                <SigilMaterial />
            </mesh>
        </SigilWrapper>
    );
}

export function ArmorySigil(props: { className?: string }) {
    return (
        <SigilWrapper {...props}>
            <mesh>
                <torusKnotGeometry args={[0.7, 0.2, 128, 16, 2, 3]} />
                <SigilMaterial />
            </mesh>
        </SigilWrapper>
    );
}

export function ObeliskMarketplaceSigil(props: { className?: string }) {
    return (
        <SigilWrapper {...props}>
            <mesh>
                <torusGeometry args={[0.8, 0.3, 16, 100]} />
                <SigilMaterial />
            </mesh>
        </SigilWrapper>
    );
}
