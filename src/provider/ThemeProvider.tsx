import { ReactNode, useState } from "react";
import { Theme, ThemeContext } from "../context/ThemeContext";
import { changeCssRootVariables } from "../model/ChangeCssRootVariables";

interface IProvider {
  children: ReactNode
}

export default function ThemeProvider({children, ...props}: IProvider) {
  const [ theme, setTheme ] = useState<Theme>(Theme.LIGHT)

  const changeTheme = (theme: Theme) => {
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
