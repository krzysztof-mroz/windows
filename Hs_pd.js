/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/hs_pd.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[-2.73, -3.61, 10]}>
        <mesh geometry={nodes['pvc-PVC'].geometry} material={nodes['pvc-PVC'].material} />
        <mesh geometry={nodes['pvc-inside_color'].geometry} material={nodes['pvc-inside_color'].material} />
        <mesh geometry={nodes['pvc-outside_color'].geometry} material={nodes['pvc-outside_color'].material} />
      </group>
      <mesh geometry={nodes.alu.geometry} material={nodes.alu.material} position={[-2.71, -7.97, 10]} />
      <mesh geometry={nodes.glas.geometry} material={nodes.glas.material} position={[-2.38, -6.48, 10]} />
      <mesh geometry={nodes.gasket.geometry} material={nodes.gasket.material} position={[-3.16, -5.48, 10]} />
      <mesh geometry={nodes.plastic.geometry} material={nodes.plastic.material} position={[-2.34, -6.49, 10]} />
      <mesh geometry={nodes.kante_t.geometry} material={nodes.kante_t.material} position={[-2.39, -6.48, 10]} />
      <mesh geometry={nodes.kante_b.geometry} material={nodes.kante_b.material} position={[-2.38, -6.48, 10]} />
      <mesh geometry={nodes.steel.geometry} material={nodes.steel.material} position={[-2.77, -2.34, 10]} />
      <mesh geometry={nodes.connector.geometry} material={nodes.connector.material} position={[3.16, 7.97, 10]} />
      <mesh geometry={nodes.brush.geometry} material={nodes.brush.material} position={[-1.73, 5.46, -10]} />
    </group>
  )
}

useGLTF.preload('/hs_pd.glb')
