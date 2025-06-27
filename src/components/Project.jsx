import { Box, Text } from '@mantine/core'
import React, { useState } from 'react'
import ProjectDetail from './ProjectDetail'

const Project = ({title, description, href, Image, boyfitness, tags, setPreview,}) => {
    const [ isHidden, setIsHidden ] = useState(false);
  return (
    <>
    <Box className=' flex items-start flex-col md:flex-row md:items-center md:justify-between mt-12'
    onMouseEnter={()=>setPreview(Image)}
    onMouseLeave={()=>setPreview(null)}
    >
        <Box>
      <Text className='!text-2xl !py-4'>
        {title}
      </Text>
    <Box className='flex gap-5 mt-2 text-amber-500'>
      {tags.map((tag)=>(
        <span key={tag.id}>{tag.name}</span>
      ))}
    </Box>
        </Box>
        <button 
        onClick={() => setIsHidden(true)}
        className='flex items-center py-4 gap-1 cursor-pointer hover:animate-bounce'>
            Read More
            <img src={boyfitness} alt="" />
        </button>   
    </Box >
    <Box className='bg-gradient-to-r from-transparent via-neutral-700
       to-transparent h-0.5 mt-8' />
       {isHidden &&
       (<ProjectDetail title={title} description={description}
       Image={Image} tags={tags} href={href} 
       closeModel={() => setIsHidden(false)}/>)}
    </>
  )
}

export default Project
