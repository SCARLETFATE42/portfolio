import { motion } from "framer-motion";

const Card = ({ text, style, containerRef }) => {
  return (
    <motion.div
      drag
      dragConstraints={containerRef}
      dragElastic={0.5}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="absolute bg-blue-800 text-white rounded-full px-3 py-2 shadow-md text-center items-center flex justify-center text-xs font-bold cursor-grab active:cursor-grabbing"
      style={{
        width: "100px",
        height: "60px",
        ...style,
      }}
    >
      {text}
    </motion.div>
  );
};

export default Card;
