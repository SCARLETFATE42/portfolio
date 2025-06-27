"use client";
import { Box, Text } from "@mantine/core";
import { useScroll, useTransform, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="mt-32 px-4 sm:px-8 md:px-16 lg:px-32 backdrop-blur-lg"
      ref={containerRef}
    >
      <Text className="!font-bold !text-2xl !text-neutral-300 !text-center mb-12">
        My Work Experience
      </Text>

      <div ref={ref} className="relative pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row md:gap-10 pt-10 md:pt-32 items-center"
          >
            {/* Left Side */}
            <div className="relative z-40 flex items-center md:w-1/3 self-center">
              {/* Dot Indicator */}
              <div className="absolute -left-[220px] md:left-0 w-10 h-10 rounded-full bg-[#091228] flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-800 border border-neutral-700 p-2" />
              </div>

              {/* Desktop Text (Centered with content) */}
              <Box className="hidden md:flex flex-col gap-1 pl-16 self-center">
                <Text className="!text-4xl !font-bold !text-neutral-300">
                  {item.title}
                </Text>
                <Text className="!text-xl !font-semibold !text-neutral-400">
                  {item.job}
                </Text>
                <Text className="!text-md !text-neutral-500">{item.date}</Text>
              </Box>
            </div>

            {/* Right Content Area */}
            <div className="relative w-full pl-12 md:pl-0 md:w-2/3">
              {/* Mobile Title */}
              <Box className="block md:hidden mb-2">
                <Text className="!text-2xl !font-bold !text-neutral-300">
                  {item.title}
                </Text>
                <Text className="!text-md !text-neutral-400">{item.job}</Text>
                <Text className="!text-md !text-neutral-500">{item.date}</Text>
              </Box>

              {/* Content */}
              {Array.isArray(item.content) ? (
                item.content.map((content, idx) => (
                  <p key={idx} className="mb-3 text-neutral-400 text-base">
                    {content}
                  </p>
                ))
              ) : (
                <p className="mb-3 text-neutral-400 text-base">
                  {item.content}
                </p>
              )}
            </div>
          </div>
        ))}

        {/* Vertical Line */}
        <div
          style={{ height: `${height}px` }}
          className="absolute left-[28px] md:left-5 top-0 w-[2px] overflow-hidden bg-gradient-to-b from-transparent via-neutral-700 to-transparent [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute top-0 w-[2px] bg-gradient-to-t from-purple-300 via-violet-800/50 to-transparent rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
