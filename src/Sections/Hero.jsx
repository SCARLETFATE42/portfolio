import { Box } from '@mantine/core'
import HeroText from '../components/HeroText'
import ParallaxBackground from '../components/ParallaxBackground'


const Hero = () => {
  return (
    <>
    <Box className='flex items-start justify-center  mx-auto text-white
    md:items-start md:justify-start overflow-hidden md:px-10 py-18
    c-space'>
        <HeroText />
        <ParallaxBackground />
    </Box>
    </>
  )
}

export default Hero
