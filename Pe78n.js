/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/pe78n.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0, -33.73, 0]}>
        <mesh geometry={nodes['pe78n-Styrofoam2'].geometry} material={nodes['pe78n-Styrofoam2'].material} />
        <mesh geometry={nodes['pe78n-Glas'].geometry} material={nodes['pe78n-Glas'].material} />
        <mesh geometry={nodes['pe78n-hardware'].geometry} material={nodes['pe78n-hardware'].material} />
        <mesh geometry={nodes['pe78n-WarmeKante'].geometry} material={nodes['pe78n-WarmeKante'].material} />
        <mesh geometry={nodes['pe78n-GlasKante'].geometry} material={nodes['pe78n-GlasKante'].material} />
        <mesh geometry={nodes['pe78n-Top_Gasket'].geometry} material={nodes['pe78n-Top_Gasket'].material} />
        <mesh geometry={nodes['pe78n-alu_dark'].geometry} material={nodes['pe78n-alu_dark'].material} />
        <mesh
          geometry={nodes['pe78n-Bottom_Gastet_rough'].geometry}
          material={nodes['pe78n-Bottom_Gastet_rough'].material}
        />
        <mesh geometry={nodes['pe78n-Rubber_-_Black'].geometry} material={materials['Rubber - Black']} />
        <mesh geometry={nodes['pe78n-Aluminium'].geometry} material={materials.Aluminium} />
      </group>
    </group>
  )
}

useGLTF.preload('/pe78n.gltf')