import React, { useState } from "react"
import "./App.css"
import { SocialIcon } from "react-social-icons"
import { socials } from "./constants"
import { AnimateKeyframes } from "react-simple-animate"

const style = { height: 150, width: 150 }
const mR = { marginRight: 9 }
const mL = { marginLeft: 9 }

function App() {
	const [play1, setPlay1] = useState(false)
	const [play2, setPlay2] = useState(false)
	const [play3, setPlay3] = useState(false)
	const [play4, setPlay4] = useState(false)
	const props = { play: true, duration: 2, iterationCount: "infinite" }

	return (
		<div className='container'>
			<div className='container_row'>
				<div style={mR}>
					<AnimateKeyframes
						{...props}
						pause={!play1}
						keyframes={[
							"transform: translateX(0px)",
							"transform: translateX(-200px)",
							"transform: translate(-200px, -200px)",
							"transform: translate(0, -200px)",
							"transform: translate(0)"
						]}
					>
						<SocialIcon url={socials[0]} 
							style={style} 
							onMouseOver={() => setPlay1(true)} 
							onMouseOut={() => setPlay1(false)} 
						/>
					</AnimateKeyframes>
				</div>
				<div style={mL}>
					<AnimateKeyframes
						{...props}
						pause={!play2}
						keyframes={[
							"opacity: 1",
							"opacity: 0",
							"opacity: 1"
						]}
					>
						<SocialIcon 
							url={socials[1]} 
							style={style} 
							onMouseOver={() => setPlay2(true)} 
							onMouseOut={() => setPlay2(false)} 
						/>
					</AnimateKeyframes>
				</div>
			</div>
			<br />
			<div className='container_row'>
				<div style={mR}>
					<AnimateKeyframes
						{...props}
						pause={!play3}
						keyframes={[
							"transform: rotate(0deg)",
							"transform: rotate(360deg)",
						]}
					>
						<SocialIcon 
							url={socials[2]} 
							style={style} 
							onMouseOver={() => setPlay3(true)} 
							onMouseOut={() => setPlay3(false)} 
						/>
					</AnimateKeyframes>
				</div>
				<div style={mL}>
					<AnimateKeyframes
						{...props}
						pause={!play4}
						keyframes={[
							"transform: scaleY(1) scaleX(1)",
							"transform: scaleY(1.25) scaleX(1.25)",
							"transform: scaleX(1) scaleY(1)",
						]}
					>
						<SocialIcon 
							url={socials[3]} 
							style={style}
							onMouseOver={() => setPlay4(true)} 
							onMouseOut={() => setPlay4(false)} 
						/>
					</AnimateKeyframes>
				</div>
			</div>
		</div>
	)
}

export default App
