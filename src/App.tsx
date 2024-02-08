import React, { useState } from "react"
import "./App.css"
import { SocialIcon } from "react-social-icons"
import { AnimateKeyframes } from "react-simple-animate"
import { socials, lightColor, darkColor, isDark } from "./constants"
import ProjectsModal from "./ProjectsModal"
const style = { height: 150, width: 150 }
const mR = { marginRight: 9 }
const props = { play: true, duration: 2, iterationCount: "infinite" }
const mL = { marginLeft: 9 }

function App() {
	const [projectsModalOpen, setProjectsModalOpen] = useState(false)
	if (isDark) document.body.setAttribute("style", `background: ${darkColor};`)
	const [play1, setPlay1] = useState(false)
	const [play2, setPlay2] = useState(false)
	const [play3, setPlay3] = useState(false)
	const [play4, setPlay4] = useState(false)
	const stuffColor = { color: isDark ? lightColor : darkColor, fontFamily: "Arial", fontWeight: "bold" }
	const change = window.innerHeight >= window.innerWidth ? "-10vw" : "-10vh"
	// Mobile not implemented yet.
	let isMobile = false
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		isMobile = true
	}
	return (
		<div>
			<ProjectsModal showProjects={!isMobile} open={projectsModalOpen} handleClose={() => setProjectsModalOpen(false)} />
			<div className="name_title" style={stuffColor}>Olli Glorioso</div>
			<div className="text" style={stuffColor}>Software engineering, cloud computing, data science, business, languages, people.</div>
			<div><a className="text" style={{  ...stuffColor, borderBottom: `1px solid ${stuffColor.color}` }} href={`${process.env.PUBLIC_URL}/CV_Olli_Glorioso.pdf`} download="olliglorioso_resume" >Résumé</a></div>
			<div><a className="text" style={{  ...stuffColor, borderBottom: `1px solid ${stuffColor.color}`, cursor: "pointer" }} onClick={() => setProjectsModalOpen(true)}>Projects</a></div>
			<div className='container'>
				<div className='container_row'>
					<div style={mR}>
						<AnimateKeyframes
							{...props}
							pause={!play1 || isMobile}
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
							pause={!play2 || isMobile}
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
							pause={!play3 || isMobile}
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
							pause={!play4 || isMobile}
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
