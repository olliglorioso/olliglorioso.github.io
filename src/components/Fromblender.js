/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useCylinder } from '@react-three/cannon'
import punch from "../assets/punchsound.mp3"
import kick from "../assets/kicksound.mp3"
import gasp from "../assets/gaspsound.mp3"
import scream from "../assets/screamsound.mp3"
import nonono from "../assets/nononosound.mp3"
import dreadful from "../assets/dreadfulsound.mp3"


export default function Model({ ...props }) {
  let punch_s = new Audio(punch)
  let kick_s = new Audio(kick)
  let gasp_s = new Audio(gasp)
  let scream_s = new Audio(scream)
  let nonono_s = new Audio(nonono)
  let dreadful_s = new Audio(dreadful)

  const group = useRef()
  const { nodes, materials } = useGLTF('/fromblender.glb')
  const [ref, api] = useCylinder(() => ({ mass: 1}))
  const theme = props.theme

  return (
    <group 
      ref={group} 
      {...props} 
      dispose={null} 
      position={[0, 2, 0]}
      
      onClick={() => {
        api.velocity.set((Math.random() - 0.5) * 8, (Math.random()) * 8 , 0)
        api.angularVelocity.set((Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10)
        if (theme.palette.background.default === "#000000") {
          const randomNum = Math.floor(Math.random() * 4)
          if (randomNum === 0) {
            nonono_s.play()
          } else if (randomNum === 1) {
            dreadful_s.play()
          }
        } else {
          const randomNum = Math.floor(Math.random() * 4)
          const randomSound = [punch_s, kick_s, gasp_s, scream_s][randomNum]
          if (Math.random() > 0.3) randomSound.play()
        }
        
      }}
    >
      <mesh ref={ref} geometry={nodes.FBHead.geometry} material={materials.FBHead_preview_mat} />
    </group>
  )
}

useGLTF.preload('/fromblender.glb')
