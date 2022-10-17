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
  description: string
}

type GQLResponseT = {
  user: {
    pinnedItems: {
      nodes: Array<ProjectT>
    }
  }
}



const getProjects = async () => {
	const graphqlWithAuth = graphql.defaults({
		headers: {
			authorization: "token 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", // Token is only for accessing public repos in my account
		},
	})
	const response = await graphqlWithAuth<GQLResponseT>(
		`
    {
      user(login: "olliglorioso") {
        pinnedItems(first: 6, types: REPOSITORY) {
          nodes {
            ... on Repository {
              name
              description
              url
            }
          }
        }
      }
    }
    `
	)
	return response.user.pinnedItems.nodes
}

export default function ProjectsModal({ open, handleClose }: PropsT) {
	const [data, setData] = React.useState<ProjectT[]>([])
	React.useEffect(() => {
		const fetch = async () => {
			setData(await getProjects())
		}
		fetch()
	}, [])
	
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
								<a className="text" style={{ fontFamily: "Courier New", color: text, borderBottom: `1px solid ${text}` }} href={`https://github.com/olliglorioso/${project.name}`}>{project.name}</a>
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
