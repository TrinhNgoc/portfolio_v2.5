"use client"

import * as THREE from 'three'
import { useRef, useState, useEffect } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { Image, ScrollControls, Scroll, useScroll, Text } from '@react-three/drei'
import { proxy, useSnapshot } from 'valtio'
import { useRouter } from 'next/navigation'

const damp = THREE.MathUtils.damp
const material = new THREE.LineBasicMaterial({ color: 'white' })
const geometry = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0, -0.5, 0), new THREE.Vector3(0, 0.5, 0)])

export const state = proxy({
  clicked: null,
  urls: [
    { url: '/img/zzf-1.PNG', text: 'Built with Next.js and Tailwind CSS', header: 'Zane Zone Fitness', link: 'https://zane-zone-fitness.vercel.app/' },
    { url: '/img/waimeavalley.PNG', text: 'Built with Squarespace, CSS, and Javascript', header: 'Waimea Valley', link: 'https://www.waimeavalley.net/' },
    { url: '/img/Netflix-1.PNG', text: 'Built with Typescript, Next.js, NextAuth, Tailwind CSS, MongoDB, Prisma, React SWR data fetching', header: 'Netflix Clone', link: 'https://net-site-clone.vercel.app/' },
    { url: '/img/imitours.png', text: 'Built with ExpressionEngine, Javascript, jQuery, CSS', header: 'Imi Tours', link: 'https://imitours.com/' },
    { url: '/img/rx7.PNG', text: 'Rx7 model rendered with Three.js, React Three Fiber, and Drei', header: 'Rx7', link: 'https://rx7.vercel.app/' },
  ]
})

function Minimap() {
  const ref = useRef()
  const scroll = useScroll()
  const { urls } = useSnapshot(state)
  const { height } = useThree((state) => state.viewport)
  useFrame((state, delta) => {
    ref.current.children.forEach((child, index) => {
      // Give me a value between 0 and 1
      //   starting at the position of my item
      //   ranging across 4 / total length
      //   make it a sine, so the value goes from 0 to 1 to 0.
      const y = scroll.curve(index / urls.length - 1.5 / urls.length, 4 / urls.length)
      child.scale.y = damp(child.scale.y, 0.1 + y / 6, 8, 8, delta)
    })
  })
  return (
    <group ref={ref}>
      {urls.map((_, i) => (
        <line key={i} geometry={geometry} material={material} position={[i * 0.06 - urls.length * 0.03, -height / 2 + 0.6, 0]} />
      ))}
    </group>
  )
}

function Item({index, position, scale, c = new THREE.Color(), url, text, header, link, mobile, isMobile, ...props }) {
  const ref = useRef()
  const textRef = useRef()
  const headerRef = useRef()
  const router = useRouter();
  const scroll = useScroll()
  const { clicked, urls } = useSnapshot(state)
  const [hovered, hover] = useState(false)
  const over = () => hover(true)
  const out = () => hover(false)
  const mobileAdjustment = isMobile ? 1 : 0;  // adjust this value as needed
  const adjustedPosition = [position[0] + mobileAdjustment, position[1], position[2]];

  useFrame((state, delta) => {
    const y = scroll.curve(index / urls.length - 1.5 / urls.length, 4 / urls.length)
    const isInView = y > 0.85 && y < 1.5;

    // Apply your adjustments to your elements
    if(isInView) {
      ref.current.material.scale[1] = ref.current.scale.y = damp(ref.current.scale.y, 2.7, 8, delta)
      ref.current.material.scale[0] = ref.current.scale.x = damp(ref.current.scale.x, 4.2, 2, delta)
    } else {
      ref.current.material.scale[1] = ref.current.scale.y = damp(ref.current.scale.y, 2.5, 10, delta)
      ref.current.material.scale[0] = ref.current.scale.x = damp(ref.current.scale.x, scale[0] * 4, 2, delta)
    }
    // ref.current.scale.x = ref.current.material.scale[0] = 4;
    // ref.current.scale.y = ref.current.material.scale[1] = 2.5;
    // if (clicked !== null && index < clicked) ref.current.position.x = damp(ref.current.position.x, position[0] - 2, 6, delta)
    // if (clicked !== null && index > clicked) ref.current.position.x = damp(ref.current.position.x, position[0] + 2, 6, delta)
    // if (clicked === null || clicked === index) ref.current.position.x = damp(ref.current.position.x, position[0], 6, delta)
    ref.current.material.grayscale = damp(ref.current.material.grayscale, hovered || clicked === index ? 0 : Math.max(0, 1 - y), 6, delta)
    ref.current.material.color.lerp(c.set(hovered || clicked === index ? '#f2f2f2' : '#aaa'), hovered ? 0.2 : 0.1)
    if (textRef.current && headerRef.current) {
      // Update the opacity of the text and header based on their visibility
      textRef.current.material.opacity = damp(textRef.current.material.opacity, isInView ? 1 : 0, 8, delta);
      headerRef.current.material.opacity = damp(headerRef.current.material.opacity, isInView ? 1 : 0, 8, delta);
      // Fade text up and down based on visibility
      // textRef.current.position.y = damp(textRef.current.position.y, isInView ? position[1] - scale[1]*1 : 1 - scale[1]*1, 6 , delta)
      // headerRef.current.position.y = damp(headerRef.current.position.y, isInView ? position[1] - scale[1]*0.9 : 0.8 - scale[1]*0.9, 6, delta)
    }
  })
  return (
    <group>
      <Image ref={ref} alt={header} {...props} onClick={() => router.push(link)} url={url} position={adjustedPosition} scale={scale} onPointerOver={over} onPointerOut={out} />
      <Text ref={textRef} position={[adjustedPosition[0] - 2.1, adjustedPosition[1] - (mobile ? scale[1]*0.9 : scale[1]*1.3), adjustedPosition[2]]} fontSize={0.1} color="white" anchorX="left" material-transparent>
        {text}
      </Text>
      <Text ref={headerRef} position={[adjustedPosition[0] - 2.1, adjustedPosition[1] - (mobile ? scale[1]*0.8 : scale[1]*1.1), adjustedPosition[2]]} fontSize={0.2} color="white" anchorX="left" material-transparent>
        {header}
      </Text>
    </group>
  )
}

export default function Items({ w = 1, gap = 4 }) {
  const { urls } = useSnapshot(state)
  const { width } = useThree((state) => state.viewport)

  const MOBILE_WIDTH = 768;
  const isMobile = width <= MOBILE_WIDTH;

  const xW = w + gap
  return (
    <ScrollControls horizontal damping={0.1} pages={(width - xW + urls.length * xW) / width}>
      <Minimap />
      <Scroll>
        {urls.map(({ url, text, header, link }, i) => <Item key={i} index={i} position={[i * xW, isMobile ? 0.3 : 0.5, 0]} scale={[w, 2, 1]} url={url} text={text} header={header} link={link} mobile={isMobile} isMobile={isMobile}/>)}
      </Scroll>
    </ScrollControls>
  )
}