import { Box, Text } from "@mantine/core"
import { mySocials } from "../constants"  

const Footer = () => {
  return (
    <>
    <section className="flex flex-wrap items-center justify-between 
    text-white px-4 md:px-8 lg:px-16 py-10">
        <Box className="mb-4 bg-gradient-to-r from-transparent
        via-neutral-700 to-transparent h-[1px] w-full"/> 
        <Box className="flex gap-2">
            <Text>Terms & Conditions</Text>
            <Text>|</Text>
            <Text>Privacy Policy</Text>
           <Text>Copyright &copy; 2025 <a href="" className= "text-blue-400 hover:text-yellow-500">Michael Emediong</a> </Text> 
        </Box>
       <Box className="flex space-x-6 justify-center items-center py-4 ml-4">
      {mySocials.map((social) => (
        <a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.name}
          className="hover:scale-110 transition-transform duration-300"
        >
          {social.icon}
        </a>
      ))}
    </Box>
    </section>
   
    </>
  )
}

export default Footer