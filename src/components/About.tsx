import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Physics, usePlane } from '@react-three/cannon'
import Model from './Fromblender'

const Plane = () => {
   const [ref] = usePlane(() => ({
      rotation: [ -Math.PI / 2, 0, 0],
      position: [0, -4.8, 0]
   }))

   // Create planes to represent the ground and the ceiling
   const ground = usePlane(() => ({
      position: [0, -10, 0],
      rotation: [ -Math.PI / 2, 0, 0],
      mass: 0,
      args: [20, 20, 20],
      material: 'ground',
      receiveShadow: true
   }))
   const ceiling = usePlane(() => ({
      position: [0, 5, 0],
      rotation: [ Math.PI / 2, 0, 0],
      mass: 0,
      args: [20, 20, 20],
      material: 'ceiling',
      receiveShadow: true
   }))
   const leftSide = usePlane(() => ({
      position: [-4, 0, 0],
      rotation: [0, Math.PI / 2, 0],
      mass: 0,
      args: [20, 20, 20],
      material: 'leftSide',
      receiveShadow: true
   }))
   const rightSide = usePlane(() => ({
      position: [4, 0, 0],
      rotation: [0, -Math.PI / 2, 0],
      mass: 0,
      args: [20, 20, 20],
      material: 'rightSide',
      receiveShadow: true
   }))


   return (
      <mesh rotation={[ -Math.PI / 2, 0, 0]} position={[0, -3, 0]} >
         {/* <planeBufferGeometry attach="geometry" args={[ 100, 100 ]} /> */}
         <meshStandardMaterial attach="material" color="#5C4033" />
      </mesh>
   )
}

interface Props {
   darkMode: boolean;
}

export default function About() {
  
  return (
    <div style={{ height: "100vh", width: "100vw", marginTop: 10, marginLeft: "auto", marginRight: 10}}>
      <Canvas shadows>
         <directionalLight 
            position={[10, 10, 5]} 
            intensity={2} 
         />
         <directionalLight 
            position={[-10, -10, -5]} 
            intensity={1}
            castShadow 
         />
         <Physics>
            <Plane />
            <Model />
         </Physics>
         
      </Canvas>
    </div>
  )
}