import * as React from "react"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Modal from "@mui/material/Modal"
import { darkColor, lightColor, isDark } from "./constants"
import { graphql } from "@octokit/graphql"

const background = isDark ? darkColor : lightColor
const text = isDark ? lightColor : darkColor

const style = {
	position: "absolute" as const,
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	bgcolor: background,
	border: `2px solid ${text}`,
	boxShadow: 24,
	p: 4,
}

type PropsT = {
  open: boolean,
  handleClose: () => void
}

type ProjectT = {
  name: string,
  description: string,
  url: string
}

// type GQLResponseT = {
//   user: {
//     pinnedItems: {
//       nodes: Array<ProjectT>
//     }
//   }
// }



// const getProjects = async () => {
// 	const graphqlWithAuth = graphql.defaults({
// 		headers: {
// 			authorization: "", // Token is only for accessing public repos in my account
// 		},
// 	})
// 	const response = await graphqlWithAuth<GQLResponseT>(
// 		`
//     {
//       user(login: "olliglorioso") {
//         pinnedItems(first: 6, types: REPOSITORY) {
//           nodes {
//             ... on Repository {
//               name
//               description
//               url
//             }
//           }
//         }
//       }
//     }
//     `
// 	)
// 	return response.user.pinnedItems.nodes
// }

export default function ProjectsModal({ open, handleClose }: PropsT) {
	// const [data, setData] = React.useState<ProjectT[]>([])
	// React.useEffect(() => {
	// 	const fetch = async () => {
	// 		setData(await getProjects())
	// 	}
	// 	fetch()
	// }, [])
	const data = [
		{
			"name": "InvShare",
			"description": "InvShare is a social platform, where you can copy your real-life portfolio or just play with imaginary money and try to make as much profit as possible. ",
			"url": "https://github.com/olliglorioso/InvShare"
		},
		{
			"name": "linear-regression-ts",
			"description": "Predict future values with a simple but powerful linear regression algorithm, with JavaScript and TypeScript!",
			"url": "https://github.com/olliglorioso/linear-regression-ts"
		},
		{
			"name": "decision-tree-ts",
			"description": "Predict unknown values with the decision tree (CART) algorithm, with JavaScript and TypeScript!",
			"url": "https://github.com/olliglorioso/decision-tree-ts"
		},
		{
			"name": "sort-algorithms-ts",
			"description": "Use some basic sort functions and optimize them, with JavaScript and TypeScript!",
			"url": "https://github.com/olliglorioso/sort-algorithms-ts"
		},
		{
			"name": "browser-command-palette",
			"description": "Powerful command palette for Google Chrome.",
			"url": "https://github.com/olliglorioso/browser-command-palette"
		},
		{
			"name": "fivaldi-api",
			"description": "With this marvellous library you can connect easily to Visma Fivaldi API.",
			"url": "https://github.com/olliglorioso/fivaldi-api"
		}
	]
	
	return (
		<>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<Typography id="modal-modal-title" variant="h6" component="h2" color={text}>
          Projects
					</Typography>
					{data.map((project: ProjectT) => 
					{
						return (
							<div key={project.name}>
								<a className="text" style={{ fontFamily: "Courier New", color: text, borderBottom: `1px solid ${text}` }} href={project.url}>{project.name}</a>
								<Typography sx={{ fontFamily: "Courier New", mb: 2 }} color={text}>
									{project.description}
								</Typography>
							</div>
						)
					}
					)}
					<Typography id="modal-modal-description" color={text} sx={{ fontFamily: "Courier New" }}>
            ...and many more <a className="text" style={{ fontFamily: "Courier New", color: text, borderBottom: `1px solid ${text}` }} href={"https://github.com/olliglorioso"}>here</a>.
					</Typography>
				</Box>
			</Modal></>
	)
}
