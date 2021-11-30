/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/sash1.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.sash1.geometry} material={materials['default']} position={[-44.03, 98.84, -104.16]} />
    </group>
  )
}

useGLTF.preload('/sash1.glb')
