/* eslint-disable @typescript-eslint/no-empty-function */
import React from "react"

export const ColorModeContext = React.createContext({ toggleColorMode: () => {} })
export const GlobalSettingsContext = React.createContext({ hideExtras: false, toggleHideExtras: () => {} })
