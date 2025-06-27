import { Text } from '@mantine/core'
import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react';

const CopyemailButton = () => {
    const [ copied, setCopied ] = useState(false);
    const email = "michaelemediong13@gmail.com";

    const copyToClipboard =()=>{
        navigator.clipboard.writeText(email);
        setCopied(true);

        setTimeout(()=>{
            setCopied(false)
        }, 2000)
    }
  return (
    <>
    <motion.button
    whileHover={{ y: -5 }}
    whileTap={{ scale: 1.05 }}
    onClick={copyToClipboard}
    className='relative px-1 py-1 text-sm
    text-center rounded-full font-extralight bg-black w-[12rem] 
    cursor-pointer overflow-hidden'>
        <AnimatePresence mode='wait'>   
        {copied ? (<motion.p 
        className='flex items-center justify-center gap-2'
        key="copied"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration:0.1, ease: "easeInOut" }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-copy-check-icon lucide-copy-check">
        <path d="m12 15 2 2 4-4"/><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/>
        <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
        Email Has Been Copied
        </motion.p>)
        : (
        <motion.p 
        className='flex items-center justify-center gap-2'
        key="copy"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration:0.1, ease: "easeInOut" }}
        >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-copy-icon lucide-copy">
        <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/>
        <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
        Copy Email Address
        </motion.p>)}
            </AnimatePresence>
    </motion.button>
    </>
  )
}

export default CopyemailButton
