import { Box, Text } from "@mantine/core"
import { FlipWords } from "../utils/FlipWords"
import { motion } from "motion/react";

const HeroText = () => {
  const words = ["Secure", "Cute", "Modern"];
  const variants = {
    hidden: { opacity:0, x: -50 },
    visible: { opacity:1, x:0 }
  }
  return (
    <>
    <Box className="z-10 mt-10 text-center
     md:mt-30 md:text-left rounded-3xl bg-clip-text">
        {/* Desktop view */}
        <Box className="flex-col hidden md:flex c-space">
    <motion.h1 className="!text-4xl !font-medium"
    variants={variants}
    initial="hidden"
    animate="visible"
    transition={{ delay:1 }}>
        Hi I'm Scarletfate
    </motion.h1>
    <Box className="flex flex-col items-start">
    <motion.p className="capitalize !text-5xl 
    !font-medium !text-neutral-300"
    variants={variants}
    initial="hidden"
    animate="visible"
    transition={{ delay: 1.2 }}>
        a developer <br /> dedicated to crafting
    </motion.p>
    <motion.div
    variants={variants}
    initial="hidden"
    animate="visible"
    transition={{ delay: 1.5 }}>
        <FlipWords words={words} className="!font-black !text-white !text-8xl" />
    </motion.div>
    <motion.p className="!text-4xl !font-medium !text-neutral-300"
    variants={variants}
    initial="hidden"
    animate="visible"
    transition={{ delay: 1.8 }}>
        web solutions
    </motion.p>
    </Box>
        </Box>
        {/* Mobile view */}
        <Box className="flex flex-col space-y-6 md:hidden">
            <motion.p className="!text-4xl !font-medium"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1 }}>
                Hi I'm Scarletfate
            </motion.p>
            <Box>
                <motion.p className="!text-5xl !font-black !text-neutral-300"
                variants={variants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 1.2 }}>
                    building
                </motion.p>
                <motion.div
                variants={variants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 1.5 }}>
                    <FlipWords words={words} className="!font-bold !text-white text-4xl" />
                </motion.div>
                <motion.p className="capitalize !text-4xl !font-black !text-neutral-300"
                variants={variants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 1.8 }}>
                    web applications
                </motion.p>
            </Box>
        </Box>
    </Box>
    </>
  )
}

export default HeroText
