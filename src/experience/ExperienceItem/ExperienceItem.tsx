import styles from './ExperienceItem.module.css'

type ExperienceItemProps = {
  company: {
    name: string
    dates: string
  }
  positions: {
    title: string
    location: string
    dates?: string
    points: string[]
    tech?: string[]
  }[]
}

export const ExperienceItem = ({ company, positions }: ExperienceItemProps) => {
  const SHOW_POINTS = false
  const SHOW_TECH = false

  return (
    <div>
      <div className={styles.row}>
        <h3 className={styles.company}>{company.name}</h3>
        <b>{company.dates}</b>
      </div>

      {positions.map((position) => (
        <div key={position.title} className={styles.position}>
          <div className={styles.row}>
            <em>
              {position.title}
              {!!position.dates && (
                <div className={styles.positionDate}>{position.dates}</div>
              )}
            </em>
            <div>{position.location}</div>
          </div>

          {SHOW_TECH && <div>{position.tech?.join(' • ')}</div>}

          {SHOW_POINTS && (
            <ul>
              {position.points.map((point, i) => {
                return <li key={i}>{point}</li>
              })}
            </ul>
          )}
        </div>
      ))}
    </div>
  )
}
