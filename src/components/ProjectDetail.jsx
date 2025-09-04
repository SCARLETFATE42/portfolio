import { Box, Text } from '@mantine/core'
import { IconX } from '@tabler/icons-react'
import { motion } from 'motion/react'

const links = [
  { href: "https://boy-fitness-scarletfate42s-projects.vercel.app/" },
  { href: "https://awards-gamma.vercel.app/" }
]

const ProjectDetail = ({
  title,
  description,
  Image,
  tags,
  href,        // 👈 each project should pass its own href
  onClick,
  closeModel
}) => {
  return (
    <Box className='fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-hidden backdrop-blur-sm'>
      <motion.div
        className='relative max-w-2xl border shadow-sm rounded-2xl bg-gradient-to-l from-slate-900 to-blue-950 border-white/10 mx-5'
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        {/* Close Button */}
        <button 
          onClick={closeModel}
          className='absolute p-2 rounded-sm top-5 right-5 bg-slate-900 hover:bg-gray-500'
        >
          <IconX className="text-black dark:text-white" onClick={onClick} />
        </button>

        {/* Image */}
        <img src="/public/Boy-fitness.png" alt={title} className='w-full rounded-t-2xl' />

        {/* Text Content */}
        <Box className='p-5'>
          <Text className='!mb-2 !text-2xl !font-bold !text-white'>{title}</Text>
          <Text className='!mb-3 !font-normal !text-neutral-400'>{description}</Text>

          <Box className='flex items-center justify-between mt-4'>
            {/* Tags */}
            <Box className='flex gap-3'>
              {tags.map((tag) => (
                <img key={tag.id} src={tag.path} alt={tag.name} className='rounded-lg size-10' />
              ))}
            </Box>

            {/* ✅ Link to project */}
            <a
              href={href} // use the prop, not the array
              target="_blank"
              rel="noopener noreferrer"
              className='inline-flex items-center justify-center gap-1 font-medium cursor-pointer animate-bounce'
            >
              View Project
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="0.75" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6"/>
                <path d="m21 3-9 9"/>
                <path d="M15 3h6v6"/>
              </svg>
            </a>
          </Box>
        </Box>
      </motion.div>
    </Box>
  )
}

export default ProjectDetail
