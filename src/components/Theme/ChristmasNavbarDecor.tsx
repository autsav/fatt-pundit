import "./ChristmasDecor.css";

const ChristmasNavbarDecor = () => {
  return (
    <div className="christmas-navbar-decor">
      <div className="string-wire"></div>
      <ul className="light-rope">
        {Array.from({ length: 20 }).map((_, i) => (
          <li key={i} className={`bulb bulb-${i % 4}`}></li>
        ))}
      </ul>
    </div>
  );
};

export default ChristmasNavbarDecor;
