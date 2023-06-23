"use client"

import React, { useRef } from 'react';
import { Canvas, extend, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { MeshPhongMaterial, ExtrudeGeometry, Color } from 'three';
import { Html } from '@react-three/drei';
import Link from 'next/link';

extend({ ExtrudeGeometry, MeshPhongMaterial });

const Particles = () => {
  // const ref = useRef();
  const mesh = useRef();

  const heartShape = new THREE.Shape();
  heartShape.moveTo(25, 25);
  heartShape.bezierCurveTo(25, 25, 20, 0, 0, 0);
  heartShape.bezierCurveTo(-30, 0, -30, 35, -30, 35);
  heartShape.bezierCurveTo(-30, 55, -10, 77, 25, 95);
  heartShape.bezierCurveTo(60, 77, 80, 55, 80, 35);
  heartShape.bezierCurveTo(80, 35, 80, 0, 50, 0);
  heartShape.bezierCurveTo(35, 0, 25, 25, 25, 25);

  const extrudeSettings = {
      depth: 1,
      bevelEnabled: false,
      bevelSegments: 1,
      steps: 0,
      bevelSize: 1,
      bevelThickness: 1,
  };

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    mesh.current.rotation.y = elapsedTime * 0.4;
  });

  return (
    <group>
      <points ref={mesh} scale={[0.02, -0.02, 0.5]} position={[0.1, 1, 0]}>
        <extrudeGeometry attach="geometry" args={[heartShape, extrudeSettings]} />
        <pointsMaterial attach="material" color={new Color('#FF9CCE')} size={0.02} />
      </points>
      <Html>
        <div className='absolute left-1/2 top-1/2 w-80 -translate-x-1/2 -translate-y-1/2 text-white sm:w-screen'>
          <div>
            <h1 className='mb-8 text-4xl'>Transforming ideas into the web.</h1>
            <p className='text-lg'>I build websites for companies and start-ups.</p>
            <p className='mb-16 text-lg'>8 years of experience as a Front-end Developer.</p>
            <div>
              <Link href="/work">
                View my work
              </Link>
            </div>
          </div>
        </div>
      </Html>
    </group>
  );
};

export default function App() {
  return (
    <Canvas camera={{ position: [0, 0, 3], fov: 75 }}>
      <Particles />
    </Canvas>
  );
}


