import React, { Dispatch, SetStateAction } from "react"
import Button from "@mui/material/Button"
import ClickAwayListener from "@mui/material/ClickAwayListener"
import Grow from "@mui/material/Grow"
import Paper from "@mui/material/Paper"
import Popper from "@mui/material/Popper"
import MenuItem from "@mui/material/MenuItem"
import MenuList from "@mui/material/MenuList"
import Stack from "@mui/material/Stack"
import MenuIcon from "@mui/icons-material/Menu"

interface Props {
  setView: Dispatch<SetStateAction<string>>,
  view: string
}

export default function MenuListComposition({ setView, view }: Props) {
    const [open, setOpen] = React.useState<boolean>(false)
    const anchorRef = React.useRef<HTMLButtonElement>(null)

    const handleToggle = () => setOpen((prevOpen) => !prevOpen)

    const handleClose = (event: Event | React.SyntheticEvent, st: string) => {
        if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) return
        setOpen(false)
        if (st !== "Nothing") setView(st)
    }

    function handleListKeyDown(event: React.KeyboardEvent) {
        if (event.key === "Tab") {
            event.preventDefault()
            setOpen(false)
        } else if (event.key === "Escape") {
            setOpen(false)
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open)
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current?.focus()
        }

        prevOpen.current = open
    }, [open])

    return (
        <Stack direction="row" spacing={2}>
            <div>
                <Button
                    ref={anchorRef}
                    id="composition-button"
                    aria-controls={open ? "composition-menu" : undefined}
                    aria-expanded={open ? "true" : undefined}
                    aria-haspopup="true"
                    onClick={handleToggle}
                >
                    <MenuIcon sx={{ color: "black" }} />
                </Button>
                <Popper
                    open={open}
                    anchorEl={anchorRef.current}
                    role={undefined}
                    placement="bottom-start"
                    transition
                    disablePortal
                >
                    {({ TransitionProps, placement }) => (
                        <Grow
                            {...TransitionProps}
                            style={{
                                transformOrigin:
                  placement === "bottom-start" ? "left top" : "left bottom",
                            }}
                        >
                            <Paper>
                                <ClickAwayListener onClickAway={e => handleClose(e, "Nothing")}>
                                    <MenuList
                                        autoFocusItem={open}
                                        id="composition-menu"
                                        aria-labelledby="composition-button"
                                        onKeyDown={handleListKeyDown}
                                        sx={{ backgroundColor: "#CDC2AE" }}
                                    >
                                        <MenuItem sx={{ color: "black" }} >
                                            <a href={`${process.env.PUBLIC_URL}/pdf-open-parameters.pdf`} download="olliglorioso_resume" style={{ color: "black", textDecoration: "none" }} >Resume</a>
                                        </MenuItem>
                                        <MenuItem sx={{ color: view === "Blog" ? "white" : "black"}} onClick={e => handleClose(e, "Blog")}>Blog</MenuItem>
                                        <MenuItem sx={{ color: view === "About" ? "white" : "black" }} onClick={e => handleClose(e, "About")}>About</MenuItem>
                                        <MenuItem sx={{ color: view === "Projects" ? "white" : "black" }} onClick={e => handleClose(e, "Projects")}>Projects</MenuItem>
                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                    )}
                </Popper>
            </div>
        </Stack>
    )
}