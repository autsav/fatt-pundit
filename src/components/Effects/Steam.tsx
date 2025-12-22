import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const SteamParticle = ({ delay }: { delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 0, scale: 0.5, x: 0 }}
    animate={{
      opacity: [0, 0.4, 0],
      y: -100,
      scale: [0.5, 1.5, 2],
      x: [0, Math.random() * 20 - 10, Math.random() * 40 - 20],
    }}
    transition={{
      duration: 2.5,
      delay: delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    style={{
      position: "absolute",
      width: "20px",
      height: "20px",
      background:
        "radial-gradient(circle, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 70%)",
      borderRadius: "50%",
      filter: "blur(8px)",
      pointerEvents: "none",
    }}
  />
);

const Steam = () => {
  const [particles, setParticles] = useState<number[]>([]);

  useEffect(() => {
    // Create an array of random delays
    setParticles(Array.from({ length: 6 }, () => Math.random() * 2));
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        top: "10%",
        left: "50%",
        transform: "translateX(-50%)",
        width: "100px",
        height: "100px",
        pointerEvents: "none",
        zIndex: 10,
      }}
    >
      {particles.map((delay, i) => (
        <SteamParticle key={i} delay={delay} />
      ))}
    </div>
  );
};

export default Steam;
