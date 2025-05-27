import styles from './AboutSection.module.css'
import {
  IconBriefcase,
  IconMail,
  IconBrandGithub,
  IconBrandLinkedin,
  IconMapPin,
} from '@tabler/icons-react'

import { Label } from '../Label'
import { SocialLink } from '../SocialLink'
import { info } from '../../content/info'

export const AboutSection = () => {
  const { name, title, about, email, location, github, linkedIn } = info

  return (
    <div id="about" className={`${styles.outer} wrapper`}>
      <div className={styles.about_row}>
        <div className={styles.photo}>
          <img className={styles.photo_img} src="/joe-cocco.jpeg" alt="" />
          <div className={styles.social}>
            <SocialLink
              ariaLabel="GitHub"
              href={github}
              icon={<IconBrandGithub />}
            />
            <SocialLink
              ariaLabel="LinkedIn"
              href={linkedIn}
              icon={<IconBrandLinkedin />}
            />
            <SocialLink
              ariaLabel="Email"
              href={`mailto:${email}`}
              icon={<IconMail />}
            />
          </div>
        </div>
        <div className={styles.about_list}>
          <h1 className={styles.name}>{name}</h1>
          <Label icon={<IconBriefcase />} value={title} />
          <Label icon={<IconMapPin />} value={location} />
          <div className={styles.description}>{about}</div>
        </div>
      </div>
    </div>
  )
}
