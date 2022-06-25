import React from "react"
import { usePlane } from "@react-three/cannon"

export default function Planes() {
    usePlane(() => ({
        rotation: [ -Math.PI / 2, 0, 0],
        position: [0, -4.8, 0]
    }))

    // Create planes to represent the ground and the ceiling
    usePlane(() => ({
        position: [0, -5, 0],
        rotation: [ -Math.PI / 2, 0, 0],
        mass: 0,
        args: [20, 20, 20],
        material: "ground",
        receiveShadow: true
    }))
    usePlane(() => ({
        position: [0, 5, 0],
        rotation: [ Math.PI / 2, 0, 0],
        mass: 0,
        args: [20, 20, 20],
        material: "ceiling",
        receiveShadow: true
    }))
    usePlane(() => ({
        position: [-4, 0, 0],
        rotation: [0, Math.PI / 2, 0],
        mass: 0,
        args: [20, 20, 20],
        material: "leftSide",
        receiveShadow: true
    }))
    usePlane(() => ({
        position: [4, 0, 0],
        rotation: [0, -Math.PI / 2, 0],
        mass: 0,
        args: [20, 20, 20],
        material: "rightSide",
        receiveShadow: true
    }))

    return (
        <mesh rotation={[ -Math.PI / 2, 0, 0]} position={[0, -3, 0]} >
            {/* <planeBufferGeometry attach="geometry" args={[ 100, 100 ]} /> */}
            <meshStandardMaterial attach="material" color="#5C4033" />
        </mesh>
    )
}