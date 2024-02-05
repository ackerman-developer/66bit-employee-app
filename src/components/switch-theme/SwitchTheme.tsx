import { Theme } from '../../context/ThemeContext'
import { useTheme } from '../../hooks/useTheme'
import styles from './SwitchTheme.module.scss'

export default function SwitchTheme() {
  const theme = useTheme()

  const changeTheme = () => {
    theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT)
  }
  return(
    <div className={styles.component}>
      <input className={styles.switch} type="checkbox" onChange={changeTheme}/>
    </div>
  )
}
