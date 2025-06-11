import { videos } from '../../content/videos'
import { ItemGrid } from '../../components/ItemGrid'
import { Section } from '../../components/Section'
import styles from './VideoSection.module.css'

export const VideoSection = () => {
  return (
    <Section id="videos" heading="Videos">
      <ItemGrid gap="24px" minItemWidth="320px">
        {videos.map((item) => (
          <iframe
            key={item.url}
            className={styles.video}
            width="560"
            height="315"
            src={item.url}
            title={item.name}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        ))}
      </ItemGrid>
    </Section>
  )
}
