import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
// import { Environment } from '@react-three/drei'

import Model from './Fromblender'

export default function App() {
  return (
    <div style={{ height: "100vh", width: "100vw", marginTop: 10, marginLeft: "auto", marginRight: 10}}>
      <Canvas camera={{ fov: 33, zoom: 1.1, near: 1, far: 1000 }}>
         <color attach="background" args={["#f0ede1"]} />
         <directionalLight position={[10, 10, 5]} intensity={2} />
         <directionalLight position={[-10, -10, -5]} intensity={1} />
        <Suspense fallback={null}>
          <Model/>
          {/* <Environment background /> */}
        </Suspense>
      </Canvas>
    </div>
  )
}