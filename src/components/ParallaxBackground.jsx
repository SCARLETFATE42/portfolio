import { Box } from '@mantine/core';
import React from 'react';
import { VortexDemo } from './VortexBackground';
import { ShootingStars } from './shootingStars';
import { StarsBackground } from './starBackground';
import { BackgroundBeamsWithCollision } from './background-beams-with-collision';
import { useScroll, useTransform, motion, useSpring } from 'motion/react';

const ParallaxBackground = () => {
  const { scrollYProgress } = useScroll();
//   const x = useSpring( scrollYProgress, )
  const Vortexbackground = useTransform(scrollYProgress, [0, 0.5], ["0%", "70%"]);
  const mountain = useTransform(scrollYProgress, [0, 0.5], ["0%", "-20%"], { damping:50 }  );
  const Planets = useTransform(scrollYProgress, [0, 0.5], ["0%", "30%"]);
  const mountain2Y = useTransform(scrollYProgress, [0, 0.5], ["0%", "0%"], { damping:50 }  );

  return (
    <section className="absolute inset-0 bg-black/40">
      <Box className="relative h-screen overflow-y-hidden">
        
        {/* Layer 1: Vortex background */}
        <motion.div
          className="absolute inset-0 w-full h-full z-0"
          style={{ y: Vortexbackground }}
        >
          <VortexDemo />
        </motion.div>

        {/* Layer 2: Shooting Stars + Mountains */}
        <motion.div
          className="absolute inset-0 w-full h-full z-10"
          style={{ x: mountain }}
        >
          <ShootingStars />
          <StarsBackground />
        </motion.div>

        {/* Layer 3: Planets */}
        <motion.div
          className="absolute inset-0 z-20"
          style={{ y: Planets }}
        >
          <BackgroundBeamsWithCollision />
        </motion.div>

        {/* Layer 4: Additional Mountains */}
        <motion.div
          className="absolute inset-0 z-30"
          style={{ x: mountain2Y }}
        >
          {/* Additional mountain content */}
        </motion.div>

      </Box>
    </section>
  );
};

export default ParallaxBackground;
