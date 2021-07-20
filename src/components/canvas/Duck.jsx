import useStore from '@/helpers/store'
import { A11y } from '@react-three/a11y'
import { useFrame, useThree } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { useRef, useState, useEffect } from 'react'

const Duck = ({ route }, props) => {
  const router = useStore((s) => s.router)
  // This reference will give us direct access to the THREE.Mesh object
  const group = useRef()
  const { nodes, materials } = useGLTF(
    'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/duck/model.gltf'
  )
  // const { gl } = useThree()
  // useEffect(() => void gl.setPixelRatio(window.devicePixelRatio || 2), [])
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) =>
    group.current
      ? (group.current.rotation.y = group.current.rotation.y += 0.01)
      : null
  )
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <A11y
      role='link'
      href={route}
      actionCall={() => {
        router.push(route)
      }}
    >
      <group ref={group} {...props} dispose={null}>
        <mesh
          geometry={nodes.character_duck.geometry}
          material={nodes.character_duck.material}
          rotation={[Math.PI / 2, 0, 0]}
          material-color='green'
        >
          <mesh
            geometry={nodes.character_duckArmLeft.geometry}
            material={nodes.character_duckArmLeft.material}
            position={[0.2, 0, -0.63]}
          />
          <mesh
            geometry={nodes.character_duckArmRight.geometry}
            material={nodes.character_duckArmRight.material}
            position={[-0.2, 0, -0.63]}
            material-color='green'
          />
          <group position={[0, 0, -0.7]}>
            <mesh
              geometry={nodes.Cube1338.geometry}
              material={nodes.Cube1338.material}
            />
            <mesh
              geometry={nodes.Cube1338_1.geometry}
              material={materials['Yellow.043']}
            />
            <mesh
              geometry={nodes.Cube1338_2.geometry}
              material={materials['Black.027']}
              material-color='green'
            />
          </group>
        </mesh>
      </group>
    </A11y>
  )
}
export default Duck

useGLTF.preload(
  'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/duck/model.gltf'
)
