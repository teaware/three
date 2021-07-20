/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Axt (https://sketchfab.com/shooter24994)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/moon-4db2273f6dd943b8ad7fa5e3b1b2431a
title: Moon
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Moon(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/scenes/moon/scene.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={[100, 100, 100]}>
            <mesh
              geometry={nodes.Sphere_Material002_0.geometry}
              material={materials['Material.002']}
            />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/scenes/moon/scene.gltf')
