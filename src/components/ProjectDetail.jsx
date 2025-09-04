import { Box, Text } from '@mantine/core'
import { IconX } from '@tabler/icons-react'
import { motion } from 'motion/react'

const ProjectDetail = (
    {
    title,
    description,
    Image,
    tags,
    href,
    onClick,
    closeModel
})=>  {
  return (
    <>
    <Box className='fixed inset-0 z-50 flex items-center
    justify-center w-full h-full overflow-hidden
    backdrop-blur-sm'>
        <motion.div className='relative max-w-2xl border shadow-sm
        rounded-2xl bg-gradient-to-l from-slate-900 to-blue-950
        border-white/10 mx-5'
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}>
            <button 
            onClick={closeModel}
            className='absolute p-2 rounded-sm top-5 right-5
            bg-slate-900 hover:bg-gray-500'>
                <IconX className="text-black dark:text-white" onClick={onClick} />
            </button>
            <img src="/public/Boy-fitness.png" alt={title} className='w-full rounded-t-2xl' />
            <Box className='p-5'>
            <Text className='!mb-2 !text-2xl !font-bold !text-white'>{title}</Text>
            <Text className='!mb-3 !font-normal !text-neutral-400'>{description}</Text>
            <Box className='flex items-center justify-between
            mt-4'>
                <Box className='flex gap-3'>
                    {tags.map((tag) =>(
                        <img key={tag.id} src={tag.path} alt={tag.name} 
                        className='rounded-lg size-10 animate-bounce'/>
                    )
                    )}
                </Box>
                <a href='https://boy-fitness-scarletfate42s-projects.vercel.app/' className='inline-flex items-center justify-center gap-1
                font-medium cursor-pointer animate-bounce'
                > View Projects
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round" 
                class="lucide lucide-square-arrow-out-up-right-icon lucide-square-arrow-out-up-right" href={href}>
                <path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6"/><path d="m21 3-9 9"/><path d="M15 3h6v6"/>
                </svg>
                </a>
            </Box>
                <Box className='flex gap-3'>
                    {tags.map((tag) =>(
                        <img key={tag.id} src={tag.path} alt={tag.name} 
                        className='rounded-lg size-10 animate-bounce'/>
                    )
                    )}
                </Box>
                <a href='https://awards-gamma.vercel.app/' className='inline-flex items-center justify-center gap-1
                font-medium cursor-pointer animate-bounce'
                > View Projects
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round" 
                class="lucide lucide-square-arrow-out-up-right-icon lucide-square-arrow-out-up-right" hhref={href}>
                <path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6"/><path d="m21 3-9 9"/><path d="M15 3h6v6"/>
                </svg>
                </a>
            </Box>
        </motion.div>
    </Box>
    </>
  )
}

export default ProjectDetail

