import { Box, Text } from "@mantine/core";
import Card from "../components/Card";
import { useRef } from "react";
import { Globe } from "../components/Globe";
import CopyemailButton from "../components/CopyemailButton";
import { OrbitingCircles } from "../components/OrbitalPlanets";
import { FrameWork } from "../components/FrameWork";

const About = () => {
  const grid2Container = useRef();

  return (
    <section className="my-80 md:my-40 px-4 md:px-8 lg:px-16 py-16 bg-gray-950 text-white">
      <Text className="!text-3xl md:!text-4xl !font-bold !mb-8 text-center">About Me</Text>

      <Box className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 mt-12 auto-rows-[200px] sm:auto-rows-[220px] lg:auto-rows-[260px]">

        {/* Large Intro Block */}
       <Box className="relative bg-gray-800 col-span-full sm:col-span-2 lg:col-span-3 row-span-2 rounded-xl p-4 flex flex-col justify-end overflow-hidden">

  {/* Background Image */}
  <img
    src="/src/assets/mountains.jpeg"
    alt="Mountain Landscape"
    className="absolute inset-0 w-full h-full object-cover opacity-60"
  />

  {/* Indigo Aura Glow */}
  <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-indigo-500/40 to-transparent pointer-events-none overflow-hidden" />

  {/* Text Content */}
  <Text className="!text-xl !font-semibold z-10 text-white">Hi I'm ScarletFate</Text>
  <Text className="!text-sm !text-white/40 z-10">
    A passionate frontend developer who blends creativity with functionality to deliver meaningful user experiences.
  </Text>
</Box>


        {/* Animated Cards */}
        <Box className="bg-gray-600 col-span-full sm:col-span-2 lg:col-span-3 row-span-1 rounded-xl relative flex items-center justify-center">
          <Box className="w-full h-full flex items-center justify-center relative overflow-hidden" ref={grid2Container}>
            <Text className="!text-gray-400 !text-2xl md:!text-3xl z-10 text-center">CODE IS CRAFT</Text>
            <Card style={{ rotate: "75deg", top: "30%", left: "20%" }} text="GRASP" containerRef={grid2Container} />
            <Card style={{ rotate: "-30deg", top: "63%", left: "40%" }} text="SOLID" containerRef={grid2Container} />
            <Card style={{ rotate: "90deg", bottom: "30%", left: "70%" }} text="DESIGN PATTERN" containerRef={grid2Container} />
            <Card style={{ rotate: "-45deg", top: "48%", left: "-2%" }} text="DESIGN PRINCIPLES" containerRef={grid2Container} />
            <Card style={{ rotate: "20deg", top: "10%", left: "40%" }} text="SRP" containerRef={grid2Container} />
          </Box>
        </Box>

        {/* Time Zone Block */}
        <Box className="bg-gradient-to-r from-[#202833df] to-gray-600 col-span-full sm:col-span-2 lg:col-span-3 row-span-1 rounded-xl p-4 relative overflow-hidden">
          <Text className="!text-neutral-300 !font-semibold !text-2xl">Time Zone</Text>
          <Text className="!text-neutral-500 !text-xl mt-1">Based in Nigeria, open to remote Worldwide</Text>
          <figure className="absolute left-[20%] top-[20%] scale-75 sm:scale-100">
            <Globe />
          </figure>
        </Box>

        {/* CTA Block */}
        <Box className="bg-gray-700 col-span-full sm:col-span-2 lg:col-span-2 row-span-1 rounded-xl p-4 flex items-center justify-center">
          <Box className="flex flex-col items-center justify-center gap-4 w-full">
            <Text className="text-center capitalize text-[18px] font-semibold text-white">
              Do you wanna start a project together?
            </Text>
            <CopyemailButton />
          </Box>
        </Box>

        {/* Tech Stack Block */}
        <Box className="bg-gray-800 col-span-full lg:col-span-4 row-span-1 rounded-xl p-4 flex flex-col md:flex-row items-start justify-between relative overflow-hidden">
          <Box className="z-10 w-full md:w-1/2 py-2">
            <Text className="!text-2xl !text-neutral-300 !py-2">Tech Stack</Text>
            <Text className="!text-lg !text-neutral-400">
              I specialize in HTML, CSS, JavaScript, <br /> React, Tailwind CSS, and Next.js
            </Text>
          </Box>
          <Box className="absolute inset-y-0 top-4 -right-4 w-full md:w-1/2 h-full md:scale-125 md:translate-x-10">
            <FrameWork />
          </Box>
        </Box>
      </Box>
    </section>
  );
};

export default About;
