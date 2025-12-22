import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

import { FaMapMarkerAlt } from "react-icons/fa";
import { IoArrowForward } from "react-icons/io5";
import heroInterior from "../assets/images/hero_interior.jpg";
import wallshow from "../assets/images/wallshow.jpg";
import sohoUtilityBg from "../assets/images/soho_utility_bg.jpg";
import coventTexture from "../assets/images/covent_texture.png";

import "../styles/pages/Reserve.css";

// OpenTable URLs
const SOHO_URL = "https://www.opentable.co.uk/r/fatt-pundit-london";
const COVENT_GARDEN_URL =
  "https://www.opentable.co.uk/r/fatt-pundit-covent-garden-london";

const Reserve = () => {
  const { location } = useParams();

  // Logic to determine active section if derived directly from location param
  const showSoho = !location || location.includes("soho");
  const showCovent = !location || location.includes("covent");
  const isCovent = location === "covent-garden";

  let bgStyle = {};
  if (isCovent) {
    bgStyle = {
      backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${coventTexture})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    };
  } else if (showSoho) {
    bgStyle = {
      backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${sohoUtilityBg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    };
  }

  return (
    <>
      <section className="reserve-section" style={bgStyle}>
        <div className="container reserve-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="reserve-header"
          >
            <h1 className="reserve-title">
              {location
                ? `${location.replace(/-/g, " ").toUpperCase()} RESERVATION`
                : "RESERVE A TABLE"}
            </h1>
            <p className="reserve-subtitle">
              {location
                ? "Book your table below."
                : "Choose your preferred location below."}
            </p>
          </motion.div>

          <div
            className={`reserve-grid ${location ? "single-col" : "multi-col"}`}
          >
            {/* Soho Card */}
            {showSoho && (
              <LocationCard
                name="SOHO"
                image={heroInterior}
                address="77 Berwick Street, Soho, London W1F 8TH"
                bookingUrl={SOHO_URL}
                delay={0.2}
              />
            )}

            {/* Covent Garden Card */}
            {showCovent && (
              <LocationCard
                name="COVENT GARDEN"
                image={wallshow}
                address="6 Maiden Lane, Covent Garden, London WC2E 7NA"
                bookingUrl={COVENT_GARDEN_URL}
                delay={0.4}
              />
            )}
          </div>

          <div className="reserve-footer-note">
            <p>Note: Widget requires real Restaurant IDs (RIDs) to function.</p>
          </div>
        </div>
      </section>
    </>
  );
};

const LocationCard = ({
  name,
  image,
  address,
  bookingUrl,
  delay,
}: {
  name: string;
  image: string;
  address: string;
  bookingUrl: string;
  delay: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="location-card"
    >
      <div className="location-card-image-wrapper">
        <img
          src={image}
          alt={`${name} Interior`}
          className="location-card-image"
        />
      </div>
      <div className="location-card-content">
        <h3 className="location-name">{name}</h3>
        <div className="location-address">
          <FaMapMarkerAlt size={18} color="var(--color-accent)" />
          <span>{address}</span>
        </div>

        <a
          href={bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="reserve-btn"
        >
          BOOK ON OPENTABLE <IoArrowForward size={18} />
        </a>
      </div>
    </motion.div>
  );
};

export default Reserve;
