'use client'

import { Canvas } from '@react-three/fiber'
import { Preload } from '@react-three/drei'
import { r3f } from '@/helpers/global'
import { state } from './Items'

export default function Scene({ children, ...props }) {
  // Everything defined in here will persist between route changes, only children are swapped
  return (
    <Canvas gl={{ antialias: false }} dpr={[1, 1.5]} {...props}>
      <r3f.Out />
      <Preload all />
      {children}
    </Canvas>
  )
}
