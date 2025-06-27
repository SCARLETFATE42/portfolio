import { Box } from '@mantine/core';
import Navbar from './Sections/Navbar';
import Hero from './Sections/Hero';
import About from './Sections/About';
import './App.css';
import React from 'react';
import Projects from './Sections/Projects';
import Experiences from './Sections/Experiences';
import { MarqueeDemo } from './Sections/Opinions';
import Contacts from './Sections/Contacts';
import Footer from './Sections/Footer';
import { SpeedInsights } from "@vercel/speed-insights/react"



const App = () => {
  return (
    <Box className="bg-gray-950 bg-cover bg-no-repeat bg-center bg-fixed text-white">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experiences />
      <MarqueeDemo />
      <Contacts />
      <Footer />
      <SpeedInsights />
    </Box>
  );
};

export default App;
