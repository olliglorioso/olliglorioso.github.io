import React, { useState } from "react"
import "./App.css"
import { SocialIcon } from "react-social-icons"
import { AnimateKeyframes } from "react-simple-animate"
import { socials } from "./constants"
const style = { height: 150, width: 150 }
const mR = { marginRight: 9 }
const props = { play: true, duration: 2, iterationCount: "infinite" }
const mL = { marginLeft: 9 }

function App() {
	const beige = "#F5F5DC"
	const brown = "#52341A"
	const isDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
	if (isDark) document.body.setAttribute("style", `background: ${brown};`)
	const [play1, setPlay1] = useState(false)
	const [play2, setPlay2] = useState(false)
	const [play3, setPlay3] = useState(false)
	const [play4, setPlay4] = useState(false)
	const stuffColor = { color: isDark ? beige : brown }
	const change = window.innerHeight >= window.innerWidth ? "-10vw" : "-10vh"

	return (
		<div>
			<div className="name_title" style={stuffColor}>Olli Glorioso</div>
			<div className="text" style={stuffColor}>Software engineering & data science.</div>
			<div><a className="text" style={{  ...stuffColor, borderBottom: `1px solid ${stuffColor.color}` }} href={`${process.env.PUBLIC_URL}/pdf-open-parameters.pdf`} download="olliglorioso_resume" >Download resume</a></div>
			<div><a className="text" style={{  ...stuffColor, borderBottom: `1px solid ${stuffColor.color}` }} href={`${process.env.PUBLIC_URL}/omakuva_isores.jpg`} >Picture of me</a></div>
			<div className='container'>
				<div className='container_row'>
					<div style={mR}>
						<AnimateKeyframes
							{...props}
							pause={!play1}
							keyframes={[
								"transform: translateX(0px)",
								`transform: translateX(${change})`,
								`transform: translate(${change}, ${change})`,   // first is x
								`transform: translate(0, ${change})`,
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
								bgColor={"black"}
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
								bgColor={isDark ? "#b3b3b3" : "#666666"}
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
		</div>
	)
}

export default App
