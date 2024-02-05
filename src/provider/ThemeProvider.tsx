import { ReactNode, useState } from "react";
import { Theme, ThemeContext } from "../context/ThemeContext";
import { changeCssRootVariables } from "../model/changeCssRootVariables";
import { storage } from "../model/storage";

interface IProvider {
  children: ReactNode
}

export default function ThemeProvider({children, ...props}: IProvider) {
  const [ theme, setTheme ] = useState<Theme>(
    storage.getItem('theme') || Theme.LIGHT
  )

  changeCssRootVariables(theme)

  const changeTheme = (theme: Theme) => {
    storage.setItem('theme', theme)
    setTheme(theme)
    changeCssRootVariables(theme)
  }

  return(
    <ThemeContext.Provider
      value={{
        theme,
        changeTheme
      }}
      {...props}
    >
      {children}
    </ThemeContext.Provider>
  )
}
