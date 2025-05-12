import React from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const ScrollSpringDemo = () => {
  // Track page scroll progress (0 to 1)
  const { scrollYProgress } = useScroll();

  // Smooth the progress value with a spring
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Animate circle's rotation and scale based on scroll
  const rotate = useSpring(useTransform(scrollYProgress, [0, 1], [0, 360]), {
    stiffness: 100,
    damping: 30
  });
  const scale = useSpring(useTransform(scrollYProgress, [0, 1], [1, 1.2]), {
    stiffness: 100,
    damping: 30
  });

  return (
    <>
      {/* Progress bar at the top */}
      <motion.div className="progress-bar" style={{ scaleX }} />

      {/* Floating animated circle */}
      <motion.div
        className="floating-circle"
        style={{ rotate, scale }}
      />

      {/* Example content for scrolling */}
      
    </>
  );
};

export default ScrollSpringDemo;
