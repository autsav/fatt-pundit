import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";

interface DoodleButtonProps {
  to: string;
  children: React.ReactNode;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const DoodleButton = ({
  to,
  children,
  onMouseEnter,
  onMouseLeave,
}: DoodleButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (onMouseEnter) onMouseEnter();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (onMouseLeave) onMouseLeave();
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ position: "relative", display: "inline-block" }}
    >
      <Link
        to={to}
        style={{
          display: "block",
          padding: "1.5rem 3rem",
          color: "var(--color-accent)", // Red
          fontSize: "1.2rem",
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "2px",
          position: "relative",
          zIndex: 10,
        }}
      >
        {children}
      </Link>

      {/* SVG Doodle Overlay */}
      <svg
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "120%",
          height: "140%",
          pointerEvents: "none",
          overflow: "visible",
        }}
        viewBox="0 0 200 60"
      >
        <motion.path
          d="M10,30 C30,10 170,10 190,30 C210,50 170,55 100,55 C30,55 -10,50 10,30"
          fill="transparent"
          stroke="var(--color-accent)"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: isHovered ? 1.1 : 0,
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
};

export default DoodleButton;
