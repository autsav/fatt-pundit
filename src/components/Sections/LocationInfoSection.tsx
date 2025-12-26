import React from 'react';
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";
import sohoVisitBg from "../../assets/images/soho_utility_bg.jpg";
import coventVisitBg from "../../assets/images/covent_texture.png";

interface LocationInfoProps {
  address: string;
  email: string;
  phone?: string;
  mapUrl: string;
  image: string;
  description: string;
  enableTexture?: boolean;
  locationName?: string;
  openingHours?: React.ReactNode;
}

const LocationInfoSection = ({
  address,
  email,
  phone,
  mapUrl,
  image,
  description,
  enableTexture = false,
  locationName,
  openingHours,
}: LocationInfoProps) => {
  // Determine background
  const isSoho = locationName === "soho" || (enableTexture && !locationName);
  const isCovent = locationName === "covent-garden";

  // Soho uses specific utility bg, Covent uses specific texture
  const bgImage = isSoho
    ? `url(${sohoVisitBg})`
    : isCovent
      ? `url(${coventVisitBg})`
      : "none";
  const hasTexture = isSoho || isCovent;

  // Dynamic styles for texture visibility
  const textShadow = hasTexture ? "0 2px 4px rgba(0,0,0,0.8)" : "none";
  const descColor = hasTexture ? "#F0F0F0" : "#ccc";
  const linkColor = hasTexture ? "#FFFFFF" : "#aaa";
  const labelColor = hasTexture ? "#FFFFFF" : "#fff";

  return (
    <section
      style={{
        padding: "6rem 0",
        backgroundColor: "#202020",
        // Overlay logic
        backgroundImage: hasTexture
          ? `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), ${bgImage}`
          : "none",
        backgroundSize: hasTexture ? "cover" : "auto",
        backgroundPosition: "center",
        color: hasTexture ? "#FFFFFF" : "#e0e0e0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        className="container"
        style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}
      >
        <div
          className="location-info-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "center",
          }}
        >
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "2.5rem",
                color: "var(--color-accent)", // Keeps Accent (Red/Gold)
                marginBottom: "1.5rem",
                textShadow: textShadow,
              }}
            >
              VISIT US
            </h2>
            <p
              style={{
                fontSize: "1.1rem",
                lineHeight: "1.8",
                marginBottom: "2rem",
                color: descColor,
                fontFamily: "var(--font-body)",
                textShadow: textShadow,
              }}
            >
              {description}
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
                marginBottom: "2.5rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "1rem",
                }}
              >
                <FaMapMarkerAlt
                  color="var(--color-accent)"
                  size={24}
                  style={{ marginTop: "0.2rem" }}
                />
                <div>
                  <h4
                    style={{
                      color: labelColor,
                      marginBottom: "0.2rem",
                      textShadow: textShadow,
                    }}
                  >
                    ADDRESS
                  </h4>
                  <a
                    href={mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: linkColor,
                      lineHeight: "1.5",
                      textDecoration: "none",
                      transition: "color 0.3s",
                      textShadow: textShadow,
                    }}
                    onMouseOver={(e) =>
                      (e.currentTarget.style.color = "var(--color-accent)")
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.style.color = linkColor)
                    }
                  >
                    {address}
                  </a>
                </div>
              </div>

              <div
                style={{ display: "flex", alignItems: "center", gap: "1rem" }}
              >
                <FaEnvelope color="var(--color-accent)" size={24} />
                <div>
                  <h4
                    style={{
                      color: labelColor,
                      marginBottom: "0.2rem",
                      textShadow: textShadow,
                    }}
                  >
                    EMAIL
                  </h4>
                  <a
                    href={`mailto:${email}`}
                    style={{
                      color: linkColor,
                      textDecoration: "none",
                      transition: "color 0.3s",
                      textShadow: textShadow,
                    }}
                    onMouseOver={(e) =>
                      (e.currentTarget.style.color = "var(--color-accent)")
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.style.color = linkColor)
                    }
                  >
                    {email}
                  </a>
                </div>
              </div>

              {phone && (
                <div
                  style={{ display: "flex", alignItems: "center", gap: "1rem" }}
                >
                  <FaPhone color="var(--color-accent)" size={24} />
                  <div>
                    <h4
                      style={{
                        color: labelColor,
                        marginBottom: "0.2rem",
                        textShadow: textShadow,
                      }}
                    >
                      PHONE
                    </h4>
                    <a
                      href={`tel:${phone}`}
                      style={{
                        color: linkColor,
                        textDecoration: "none",
                        textShadow: textShadow,
                      }}
                    >
                      {phone}
                    </a>
                  </div>
                </div>
              )}

              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "1rem",
                }}
              >
                <FaClock
                  color="var(--color-accent)"
                  size={24}
                  style={{ marginTop: "0.2rem" }}
                />
                <div>
                  <h4
                    style={{
                      color: labelColor,
                      marginBottom: "0.2rem",
                      textShadow: textShadow,
                    }}
                  >
                    OPENING HOURS
                  </h4>
                  <div
                    style={{
                      color: linkColor,
                      lineHeight: "1.5",
                      fontSize: "0.9rem",
                      textShadow: textShadow,
                    }}
                  >
                    {openingHours || (
                      <>
                        Mon - Thu: 12:00pm - 10:00pm
                        <br />
                        Fri - Sat: 12:00pm - 10:30pm
                        <br />
                        Sun: 12:00pm - 9:30pm
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <a
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                padding: "1rem 2rem",
                border: "1px solid var(--color-accent)",
                color: "var(--color-accent)",
                textDecoration: "none",
                borderRadius: "4px",
                fontWeight: "bold",
                transition: "all 0.3s ease",
                boxShadow: enableTexture
                  ? "0 4px 10px rgba(0,0,0,0.5)"
                  : "none",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = "var(--color-accent)";
                e.currentTarget.style.color = "#fff";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "var(--color-accent)";
              }}
            >
              GET DIRECTIONS
            </a>
          </motion.div>

          {/* Image/Map Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ position: "relative" }}
          >
            <div
              style={{
                position: "relative",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                border: "1px solid rgba(255,255,255,0.1)",
                height: "500px",
              }}
            >
              <img
                src={image}
                alt="Location Interior"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  filter: "brightness(0.8)",
                }}
              />
              {/* Overlay Gradient */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  height: "50%",
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
      <style>{`
                @media (max-width: 1024px) {
                    .location-info-grid {
                        grid-template-columns: 1fr !important;
                        gap: 3rem !important;
                    }
                    /* Target image container */
                    .location-info-grid > div:last-child > div {
                        height: 300px !important;
                    }
                }
            `}</style>
    </section>
  );
};

export default LocationInfoSection;
