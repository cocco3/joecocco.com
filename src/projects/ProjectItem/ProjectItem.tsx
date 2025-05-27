import { IconBrandGithub } from '@tabler/icons-react'
import styles from './ProjectItem.module.css'
import { Tag } from '../../components/Tag'

type ProjectItemProps = {
  name: string
  tech: string[]
  description: string
  githubUrl: string
  url: string
  background: string
}

export const ProjectItem = ({
  name,
  tech,
  description,
  githubUrl,
  url,
  background,
}: ProjectItemProps) => {
  return (
    <div className={styles.outer}>
      <div className={styles.img} style={{ background }}></div>
      <div className={styles.body}>
        <div className={styles.header}>
          <h3 className={styles.title}>
            <a className={styles.titleLink} href={url} target="_blank">
              {name}
            </a>
          </h3>
          <a
            className={styles.gitLink}
            href={githubUrl}
            target="_blank"
            aria-label={`GitHub link for ${name}`}
          >
            <IconBrandGithub />
          </a>
        </div>
        <div className={styles.description}>{description}</div>
        <ul className={styles.tags}>
          {tech.map((tag) => (
            <li key={tag}>
              <Tag>{tag}</Tag>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
