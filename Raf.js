/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/raf.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[-13.47, -26.93, 25.38]}>
        <mesh geometry={nodes.c80halterung.geometry} material={nodes.c80halterung.material} position={[9.48, 110.89, -8.5]} />
        <mesh geometry={nodes.c80gaskets.geometry} material={materials['Rubber - Black']} position={[9.49, 31.33, -6.06]} />
        <mesh geometry={nodes.c80halter.geometry} material={materials.anthr} position={[9.48, 32.26, -10.06]} />
        <mesh geometry={nodes.c80lines.geometry} material={materials.anthr} position={[9.44, 75.82, -6.17]} />
        <mesh geometry={nodes.c80aretki.geometry} material={materials['Rubber - Black']} position={[9.54, 71.59, -6.11]} />
        <mesh geometry={nodes.c80lamellen.geometry} material={materials.silver} position={[9.43, 71.85, -6.23]} />
        <mesh geometry={nodes.c80endleiste_cap.geometry} material={materials['Rubber - Black']} position={[9.42, 43.52, -6.17]} />
        <mesh geometry={nodes.c80endlieiste.geometry} material={materials.silver} position={[9.43, 43.52, -6.17]} rotation={[0, 1.57, 0]} />
        <mesh geometry={nodes.c80rf.geometry} material={materials.anthr} position={[9.49, 31.33, -6.28]} />
        <mesh geometry={nodes.c80box.geometry} material={materials.anthr} position={[9.48, 109.01, -6.08]} />
      </group>
      <group position={[-13.47, -26.93, 25.38]}>
        <mesh geometry={nodes.z90box.geometry} material={nodes.z90box.material} position={[9.83, 109.07, -4.43]} />
        <mesh geometry={nodes.z90halterung.geometry} material={nodes.z90halterung.material} position={[9.83, 110.93, -6.86]} />
        <mesh geometry={nodes.z90gasket.geometry} material={materials['Rubber - Black']} position={[9.84, 30.5, -4.42]} />
        <mesh geometry={nodes.lamellenZ.geometry} material={materials.silver} position={[9.76, 73.6, -4.42]} />
        <mesh geometry={nodes.z90aretka.geometry} material={materials['Rubber - Black']} position={[9.9, 72.4, -4.44]} />
        <mesh geometry={nodes.z90endleiste_cap.geometry} material={materials['Rubber - Black']} position={[9.77, 43.56, -4.46]} />
        <mesh geometry={nodes.z90endlieiste.geometry} material={materials.silver} position={[9.78, 43.56, -4.46]} rotation={[0, 1.57, 0]} />
        <mesh geometry={nodes.z90lines.geometry} material={materials.anthr} position={[9.79, 75.86, -4.49]} />
        <mesh geometry={nodes.z90halter.geometry} material={materials.anthr} position={[9.84, 30.87, -9.3]} />
        <mesh geometry={nodes.z90rf.geometry} material={materials.anthr} position={[9.85, 30.5, -4.64]} />
      </group>
      <group position={[24, 60.29, 53.42]} rotation={[-Math.PI, 0, -Math.PI]}>
        <mesh geometry={nodes.c802box.geometry} material={nodes.c802box.material} position={[27.16, 1.07, 47.06]} rotation={[-Math.PI, 0, -Math.PI]} />
        <mesh geometry={nodes.c802lines.geometry} material={materials.anthr} position={[27.2, -32.06, 48.03]} rotation={[-Math.PI, 0, -Math.PI]} />
        <mesh geometry={nodes.c802halterung.geometry} material={nodes.c802halterung.material} position={[27.16, 3.01, 50.36]} rotation={[-Math.PI, 0, -Math.PI]} />
        <mesh geometry={nodes.c802aretki.geometry} material={materials['Rubber - Black']} position={[27.1, -36.29, 47.97]} rotation={[Math.PI, 0, -Math.PI]} />
        <mesh geometry={nodes.c802lamellen.geometry} material={materials.silver} position={[27.2, -36.02, 48.09]} rotation={[-Math.PI, 0, -Math.PI]} />
        <mesh geometry={nodes.c802endleiste_cap.geometry} material={materials['Rubber - Black']} position={[27.22, -64.36, 48.03]} rotation={[0, 1.57, 0]} />
        <mesh geometry={nodes.c802endlieiste.geometry} material={materials.silver} position={[27.21, -64.36, 48.03]} />
        <mesh geometry={nodes.c802gaskets.geometry} material={materials['Rubber - Black']} position={[27.15, -66.57, 47.92]} rotation={[-Math.PI, 0, -Math.PI]} />
        <mesh geometry={nodes.c802halter.geometry} material={materials.anthr} position={[27.15, -65.63, 51.92]} rotation={[-Math.PI, 0, -Math.PI]} />
        <mesh geometry={nodes.c802rf.geometry} material={materials.anthr} position={[27.14, -66.57, 48.14]} rotation={[Math.PI, 0, -Math.PI]} />
      </group>
      <group position={[0.61, 43.48, -47.38]}>
        <group position={[-4.35, -39.99, 54.65]}>
          <mesh geometry={nodes['w1profile-gasket'].geometry} material={nodes['w1profile-gasket'].material} />
          <mesh geometry={nodes['w1profile-anthr'].geometry} material={materials.anthr} />
        </group>
        <mesh geometry={nodes.w1FBA.geometry} material={nodes.w1FBA.material} position={[-4.34, -108.66, 54.91]} rotation={[0, 1.57, 0]} />
        <mesh geometry={nodes.w1glas.geometry} material={nodes.w1glas.material} position={[-7.39, -38.85, 54.08]} />
        <mesh geometry={nodes.w1beschlag.geometry} material={materials.F9} position={[-5.99, -42, 47.39]} />
      </group>
      <group position={[0.2, 87.61, -53.42]} rotation={[0, 0, -Math.PI]}>
        <mesh geometry={nodes.sash_steel.geometry} material={nodes.sash_steel.material} position={[3.64, 24.87, 46.7]} rotation={[0, 0, -Math.PI]} />
        <mesh geometry={nodes.gasket.geometry} material={nodes.gasket.material} position={[3.64, 27.43, 47.54]} rotation={[0, 0, -Math.PI]} />
        <mesh geometry={nodes.verb_1.geometry} material={materials.anthr} position={[3.64, 24.97, 47.9]} rotation={[0, 0, -Math.PI]} />
      </group>
      <group position={[-4.91, 43.05, -53.07]}>
        <group position={[1.45, -48.07, 46.54]}>
          <mesh geometry={nodes['w2profile-anthr'].geometry} material={materials.anthr} />
          <mesh geometry={nodes['w2profile-gasket'].geometry} material={nodes['w2profile-gasket'].material} />
        </group>
        <mesh geometry={nodes.w2FBA.geometry} material={nodes.w2FBA.material} position={[1.45, -108.66, 46.8]} rotation={[Math.PI, 0, -Math.PI]} />
        <mesh geometry={nodes.w2glas.geometry} material={nodes.w2glas.material} position={[-1.6, -46.93, 45.97]} rotation={[-Math.PI, 0, -Math.PI]} />
        <mesh geometry={nodes.w2beschlag.geometry} material={materials.F9} position={[-0.2, -50.08, 39.28]} />
      </group>
      <mesh geometry={nodes.dg1.geometry} material={nodes.dg1.material} position={[-24, -39.98, 21.21]} rotation={[0, -1.48, 0]} />
      <mesh geometry={nodes.insulation1.geometry} material={nodes.insulation1.material} position={[-3.66, 82.31, 13.53]} rotation={[Math.PI, -0.09, Math.PI]} />
      <mesh geometry={nodes.dg2.geometry} material={nodes.dg2.material} position={[-23.93, -39.83, 17.17]} rotation={[0, -1.57, 0]} />
      <mesh geometry={nodes.wall.geometry} material={materials.Concrete} position={[-23.96, -39.8, -5.98]} rotation={[0, -1.57, 0]} />
    </group>
  )
}

useGLTF.preload('/raf.glb')
