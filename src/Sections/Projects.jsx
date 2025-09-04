import { Box, Text } from '@mantine/core'
import { myProjects } from '../constants/index'
import Project from '../components/Project'
import ProjectDetail from '../components/ProjectDetail' // 👈 import modal
import { motion, useMotionValue, useSpring } from 'motion/react'
import { useState } from 'react'

const Projects = () => {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { damping: 10, stiffness: 50 })
  const springY = useSpring(y, { damping: 10, stiffness: 50 })

  const handleMouseMove = (e) => {
    x.set(e.clientX + 20)
    y.set(e.clientY + 20)
  }

  const [preview, setPreview] = useState(null)
  const [activeProject, setActiveProject] = useState(null) // 👈 modal state

  return (
    <>
      <Box onMouseMove={handleMouseMove} className='relative c-space px-24'>
        <Text className='!text-2xl !text-neutral-300 !font-bold'>
          My Selected Projects
        </Text>

        {/* divider */}
        <Box className='bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-0.5 w-full' />

        {/* Project cards */}
        {myProjects.map((project) => (
          <div key={project.id} onClick={() => setActiveProject(project)}>
            <Project {...project} setPreview={setPreview} />
          </div>
        ))}

        {/* hover preview image */}
        {preview && (
          <motion.img
            src={preview}
            alt=""
            className='fixed top-0 left-0 z-50 object-cover h-50 rounded-lg shadow-lg pointer-events-none w-75'
            style={{ x: springX, y: springY }}
          />
        )}
      </Box>

      {/* modal for project details */}
      {activeProject && (
        <ProjectDetail
          {...activeProject}
          closeModel={() => setActiveProject(null)} // 👈 close modal
        />
      )}
    </>
  )
}

export default Projects
