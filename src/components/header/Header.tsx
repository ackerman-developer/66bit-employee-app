import styles from './Header.module.scss'
import Logo from '../../assets/images/66bit.svg?react'
import SwitchTheme from '../switch-theme/SwitchTheme'

export default function Header() {
  return(
    <div className={styles.header}>
      <Logo />
      <div className={styles.content}>
        <p>+7 343 290 84 76</p>
        <p>info@66bit.ru</p>
        <SwitchTheme />
      </div>
    </div>
  )
}
