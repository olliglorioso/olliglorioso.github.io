/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useEffect, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { useCylinder } from '@react-three/cannon'
import punch from "../assets/punchsound.mp3"
import kick from "../assets/kicksound.mp3"
import gasp from "../assets/gaspsound.mp3"
import scream from "../assets/screamsound.mp3"

export default function Model({ ...props }) {
  let punch_s = new Audio(punch)
  let kick_s = new Audio(kick)
  let gasp_s = new Audio(gasp)
  let scream_s = new Audio(scream)
  const group = useRef()
  const { nodes, materials } = useGLTF('/fromblender.glb')
  const [ref, api] = useCylinder(() => ({ mass: 1}))

  return (
    <group 
      onClick={() => {
        api.velocity.set((Math.random() - 0.5) * 8, (Math.random()) * 8 , 0)
        api.angularVelocity.set((Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10)
        const randomNum = Math.floor(Math.random() * 4)
        const randomSound = [punch_s, kick_s, gasp_s, scream_s][randomNum]
        if (Math.random() > 0.3) randomSound.play()
      }}
      ref={group} 
      {...props} 
      dispose={null} 
      position={[0, 2, 0]}
    >
      <mesh ref={ref} geometry={nodes.FBHead.geometry} material={materials.FBHead_preview_mat} />
    </group>
  )
}

useGLTF.preload('/fromblender.glb')
