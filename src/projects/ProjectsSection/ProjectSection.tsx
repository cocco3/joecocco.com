import { projects } from '../../content/projects'
import { ItemGrid } from '../../components/ItemGrid'
import { Section } from '../../components/Section'
import { ProjectItem } from '../ProjectItem'
import { getGradient } from './getGradient'

export const ProjectSection = () => {
  return (
    <Section id="projects" heading="Projects">
      <ItemGrid gap="24px" minItemWidth="320px">
        {projects.map((item, index) => (
          <ProjectItem
            key={item.name}
            {...item}
            background={getGradient(index)}
          />
        ))}
      </ItemGrid>
    </Section>
  )
}
