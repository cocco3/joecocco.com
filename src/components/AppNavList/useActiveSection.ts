import { useEffect, useState } from 'react'

export function useActiveSection(sectionIds: string[]) {
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('section[id]')

    function navHighlighter() {
      const scrollY = window.pageYOffset

      sections.forEach((section) => {
        const sectionId = section.getAttribute('id') as string

        // const sectionHeight = section.offsetHeight
        // const sectionTop = section.offsetTop + 50

        // const isSectionVisible =
        //   scrollY > sectionTop && scrollY <= sectionTop + sectionHeight

        const sectionHeight = section.offsetHeight
        const sectionTop = section.offsetTop - 50

        const isSectionVisible = scrollY > sectionTop

        console.log({
          sectionId,
          scrollY,
          sectionHeight,
          sectionTop,
          isSectionVisible,
        })

        if (isSectionVisible) {
          setActiveId(sectionId)
        }
      })
    }

    window.addEventListener('scroll', navHighlighter)

    return () => {
      window.removeEventListener('scroll', navHighlighter)
    }
  }, [sectionIds])

  return activeId
}
