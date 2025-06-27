import { Box } from '@mantine/core'
import React from 'react'
import { Timeline } from '../components/Timeline'
import { experiences } from '../constants'

const Experiences = () => {
  return (
    <>
    <Box className='w-full'>
       <Timeline data={experiences} />
       
    </Box>
    </>
  )
}

export default Experiences
