import { Fragment } from 'react'
import styles from './ExperienceSection.module.css'
import { ExperienceItem } from '../ExperienceItem'
import { experience } from '../../content/experience'
import { Section } from '../../components/Section'

export const ExperienceSection = () => {
  return (
    <Section id="experience" heading="Work Experience">
      <div className={styles.list}>
        {experience.map((item, index) => (
          <Fragment key={`${item.company}-${index}`}>
            <ExperienceItem {...item} />
          </Fragment>
        ))}
      </div>
    </Section>
  )
}
