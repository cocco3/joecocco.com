import { AppHeader } from '../components/AppHeader'
import { AboutSection } from '../about/AboutSection'
import { ExperienceSection } from '../experience/ExperienceSection'
import { ProjectSection } from '../projects/ProjectsSection'
import { VideoSection } from '../videos/VideoSection'

export default function App() {
  return (
    <>
      <AppHeader />
      <AboutSection />
      <ExperienceSection />
      <ProjectSection />
      <VideoSection />
    </>
  )
}
