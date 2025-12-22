import "./Snowfall.css";

const Snowfall = () => {
  // Generate static snowflakes to reduce JS load and use CSS animations
  const numberOfSnowflakes = 50;

  return (
    <div className="snow-container" style={{ pointerEvents: "none" }}>
      {Array.from({ length: numberOfSnowflakes }).map((_, index) => {
        const style = {
          left: `${Math.random() * 100}vw`,
          animationDuration: `${Math.random() * 5 + 5}s`,
          animationDelay: `${Math.random() * 5}s`,
          opacity: Math.random() * 0.5 + 0.3,
          fontSize: `${Math.random() * 10 + 10}px`,
        };
        return (
          <div key={index} className="snowflake" style={style}>
            ❄
          </div>
        );
      })}
    </div>
  );
};

export default Snowfall;
