import { Box, Text } from '@mantine/core'
import { myProjects } from '../constants/index'
import Project from '../components/Project'
import { motion, useMotionValue, useSpring } from 'motion/react'
import { useState } from 'react'

const Projects = () => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const springX = useSpring(x, { damping: 10, stiffness: 50 });
    const springY = useSpring(y, { damping: 10, stiffness: 50 });
    const handleMouseMove=(e)=>{
        x.set(e.clientX + 20);
        y.set(e.clientY + 20);
    }
    const [ preview, setPreview ] = useState(null)
  return (
    <>
    <Box onMouseMove={handleMouseMove} className='relative c-space px-24'>
       <Text className='!text-2xl !text-neutral-300 !font-bold'>
        My Selected Projects
       </Text>
       <Box className='bg-gradient-to-r from-transparent via-neutral-700
       to-transparent mt-12 h-0.5 w-full' />
       {myProjects.map((project)=>(
        <Project key={project.id} {...project} setPreview={setPreview} />
       ))}
       {preview &&(
        <motion.img src={preview} alt=""  className='fixed top-0 left-0 z-50 object-cover h-50 
       rounded-lg shadow-lg pointer-events-none w-75'
       style={{ x: springX, y: springY }}/>)}
    </Box>
    </>
  )
}

export default Projects
