import { createContext } from "react";

interface IContext {
  theme: Theme
  changeTheme: (theme: Theme) => void
}

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark'
}

export const ThemeContext = createContext<IContext>({
  theme: Theme.LIGHT,
  changeTheme: () => {}
})
