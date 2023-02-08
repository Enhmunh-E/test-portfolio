import React from "react";
import { motion } from "framer-motion";

export const MotionSection = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
};

export default MotionSection;
