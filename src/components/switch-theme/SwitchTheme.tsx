import styles from './SwitchTheme.module.scss'

export default function SwitchTheme() {
  return(
    <div className={styles.component}>
      <input className={styles.switch} type="checkbox" />
    </div>
  )
}
