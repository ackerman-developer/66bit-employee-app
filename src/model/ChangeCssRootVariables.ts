import { Theme } from "../context/ThemeContext"

export const changeCssRootVariables = (theme: Theme) =>{
  const root = document.querySelector(':root') as HTMLElement

  const components = [
    'body-background',
    'components-background',
    'header-box-shadow',
    'text-color'
  ]

  components.forEach(component =>{
    root.style.setProperty(
      `--${component}-default`,
      `var(--${component}-${theme})`
    )
  })
}
