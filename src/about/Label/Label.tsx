import styles from './Label.module.css'

type LabelProps = {
  icon: React.ReactNode
  value: string
}

export const Label = ({ icon, value }: LabelProps) => {
  return (
    <div className={styles.label}>
      {icon}
      {value}
    </div>
  )
}
