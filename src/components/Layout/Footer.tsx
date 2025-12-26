import {
  FaInstagram,
  FaFacebook,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import sohoTexture from "../../assets/images/soho_texture.png";
import sohoFooterBg from "../../assets/images/soho_footer_bg_final.jpg";
import coventFooterBg from "../../assets/images/covent_footer_bg.jpg";



const Footer = ({ activeLocation = "soho" }: { activeLocation?: string }) => {
  // Static Settings (formerly fetched)
  const contact = {
    addressSoho: "77 Berwick Street, W1F 8TH",
    addressCovent: "6 Maiden Lane, WC2E 7NA",
    email: "info@fattpundit.co.uk",
    phone: "020 7287 7900" // Assuming common phone or specific one
  };

  // Map URLs
  const MAP_URLS: Record<string, string> = {
    soho: "https://maps.google.com/maps?q=77%20Berwick%20St%2C%20London%20W1F%208TH&t=&z=15&ie=UTF8&iwloc=&output=embed",
    "covent-garden":
      "https://maps.google.com/maps?q=6%20Maiden%20Lane%2C%20London%20WC2E%207NA&t=&z=15&ie=UTF8&iwloc=&output=embed",
  };

  const currentMapSrc = MAP_URLS[activeLocation] || MAP_URLS["soho"];

  return (
    <footer
      className="site-footer"
      style={{
        backgroundColor: "#202020",
        backgroundImage:
          activeLocation === "soho"
            ? `linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.85)), url(${sohoFooterBg})`
            : activeLocation === "covent-garden"
              ? `linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.85)), url(${coventFooterBg})`
              : `linear-gradient(rgba(32,32,32,0.65), rgba(32,32,32,0.65)), url(${sohoTexture})`,
        padding: "3rem 0 1.5rem",
        color: "#E0E0E0",
        borderTop: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div
        className="container"
        style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1rem" }}
      >
        <div className="footer-grid">
          {/* Column 1: Reservations */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
            }}
          >
            <h4
              style={{
                color: "#FFFFFF",
                marginBottom: "1rem",
                fontFamily: "var(--font-heading)",
              }}
            >
              RESERVATIONS
            </h4>
            <p
              style={{
                marginBottom: "1rem",
                color: "#E0E0E0",
                fontSize: "0.9rem",
              }}
            >
              Book your table online for the best experience.
            </p>
            <Link
              to={activeLocation === "covent-garden" ? "/covent-garden/reserve" : "/soho/reserve"}
              style={{
                display: "inline-block",
                padding: "0.75rem 1.5rem",
                backgroundColor: "var(--color-accent)",
                color: "#fff",
                textDecoration: "none",
                borderRadius: "4px",
                fontSize: "0.9rem",
                fontWeight: "bold",
                transition: "background-color 0.3s",
                fontFamily: "var(--font-heading)",
                textAlign: "center",
              }}
              onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor =
                "var(--color-accent-hover)")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.backgroundColor = "var(--color-accent)")
              }
            >
              BOOK A TABLE
            </Link>
          </div>

          {/* Column 2: Interactive Map */}
          <div
            style={{
              borderRadius: "8px",
              overflow: "hidden",
              height: "160px",
              border: "2px solid var(--color-accent)",
            }}
          >
            <iframe
              src={currentMapSrc}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Fatt Pundit Map"
            ></iframe>
          </div>

          {/* Column 3: Opening Hours */}
          <div>
            <h5
              style={{
                color: "var(--color-accent)",
                fontWeight: "bold",
                marginBottom: "1rem",
                fontFamily: "var(--font-heading)",
                fontSize: "0.95rem",
                letterSpacing: "0.1em",
              }}
            >
              OPENING HOURS
            </h5>
            <div
              style={{
                fontSize: "1rem",
                lineHeight: "1.8",
                color: "#E0E0E0",
                fontFamily: "var(--font-heading)",
              }}
            >
              {activeLocation === "covent-garden" ? (
                /* Covent Garden Hours */
                <>
                  <span
                    style={{
                      display: "block",
                      marginBottom: "0.2rem",
                      color: "var(--color-accent)",
                    }}
                  >
                    COVENT GARDEN
                  </span>
                  <span style={{ display: "block", marginBottom: "0.2rem" }}>
                    Mon: Closed
                  </span>
                  <span style={{ display: "block", marginBottom: "0.2rem" }}>
                    Tue – Thu: 12:00 - 14:15, 16:45 - 22:15
                  </span>
                  <span style={{ display: "block" }}>
                    Fri – Sun: 12:00 - 22:15
                  </span>
                </>
              ) : (
                /* Soho Hours (Default) */
                <>
                  <span
                    style={{
                      display: "block",
                      marginBottom: "0.2rem",
                      color: "var(--color-accent)",
                    }}
                  >
                    SOHO
                  </span>
                  <span style={{ display: "block", marginBottom: "0.2rem" }}>
                    Mon – Fri: 12:00 - 14:30, 17:00 - 22:30
                  </span>
                  <span style={{ display: "block", marginBottom: "0.2rem" }}>
                    Sat: 12:00 - 22:30
                  </span>
                  <span style={{ display: "block" }}>
                    Sun: 12:00 - 21:30
                  </span>
                </>
              )}
            </div>
          </div>

          {/* Column 4: Locations */}
          <div className="locations-col">
            <h4
              style={{
                color: "#ffffff",
                marginBottom: "1.5rem",
                fontFamily: "var(--font-heading)",
                fontSize: "1.2rem",
                letterSpacing: "0.05em",
              }}
            >
              LOCATIONS <span style={{ marginLeft: "10px", fontSize: "0.8rem", opacity: 0.7 }}>v1.7</span>
            </h4>

            {/* Soho */}
            <div className="location-block">
              <strong
                style={{
                  display: "block",
                  color:
                    activeLocation === "soho"
                      ? "var(--color-accent)"
                      : "#FFFFFF",
                  marginBottom: "0.3rem",
                  fontSize: "1.1rem",
                  transition: "color 0.3s",
                }}
              >
                SOHO
              </strong>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Fatt+Pundit+Soho+77+Berwick+Street"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  marginBottom: "0.3rem",
                  color: "#D0D0D0",
                  textDecoration: "none",
                  transition: "color 0.3s",
                  fontSize: "0.95rem",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.color = "var(--color-accent)")
                }
                onMouseOut={(e) => (e.currentTarget.style.color = "#D0D0D0")}
              >
                <FaMapMarkerAlt
                  size={16}
                  color="var(--color-accent)"
                  style={{ flexShrink: 0 }}
                />
                {contact.addressSoho}
              </a>
              <a
                href={`mailto:${contact.email}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  color: "#D0D0D0",
                  textDecoration: "none",
                  transition: "color 0.3s",
                  fontSize: "0.95rem",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.color = "var(--color-accent)")
                }
                onMouseOut={(e) => (e.currentTarget.style.color = "#D0D0D0")}
              >
                <FaEnvelope
                  size={16}
                  color="var(--color-accent)"
                  style={{ flexShrink: 0 }}
                />
                {contact.email}
              </a>
            </div>

            {/* Covent Garden */}
            <div className="location-block">
              <strong
                style={{
                  display: "block",
                  color:
                    activeLocation === "covent-garden"
                      ? "var(--color-accent)"
                      : "#FFFFFF",
                  marginBottom: "0.3rem",
                  fontSize: "1.1rem",
                  transition: "color 0.3s",
                }}
              >
                COVENT GARDEN
              </strong>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Fatt+Pundit+Covent+Garden+6+Maiden+Lane"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  marginBottom: "0.3rem",
                  color: "#D0D0D0",
                  textDecoration: "none",
                  transition: "color 0.3s",
                  fontSize: "0.95rem",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.color = "var(--color-accent)")
                }
                onMouseOut={(e) => (e.currentTarget.style.color = "#D0D0D0")}
              >
                <FaMapMarkerAlt
                  size={16}
                  color="var(--color-accent)"
                  style={{ flexShrink: 0 }}
                />
                {contact.addressCovent}
              </a>
            </div>
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.1)",
            paddingTop: "1.5rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <p style={{ fontSize: "0.875rem", color: "#D0D0D0" }}>
            &copy; {new Date().getFullYear()} Fatt Pundit. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            <a
              href="https://www.instagram.com/fattpundit"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#FFFFFF", transition: "color 0.3s" }}
              onMouseOver={(e) =>
                (e.currentTarget.style.color = "var(--color-accent)")
              }
              onMouseOut={(e) => (e.currentTarget.style.color = "#FFFFFF")}
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://www.facebook.com/fattpundit"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#FFFFFF", transition: "color 0.3s" }}
              onMouseOver={(e) =>
                (e.currentTarget.style.color = "var(--color-accent)")
              }
              onMouseOut={(e) => (e.currentTarget.style.color = "#FFFFFF")}
            >
              <FaFacebook size={24} />
            </a>
          </div>
        </div>
      </div>
      <style>{`
                .site-footer {
                    background-size: cover;
                    background-position: center;
                    background-repeat: no-repeat;
                }
                .footer-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 3rem;
                    margin-bottom: 2rem;
                }
                /* Locations Column - Responsive Spacing */
                /* Locations Column - Responsive Spacing */
                .locations-col {
                    display: block;
                    height: auto;
                }
                .location-block {
                    margin-bottom: 1.5rem;
                    height: auto;
                }
                .location-block:last-child {
                    margin-bottom: 0;
                }

                @media (max-width: 900px) {
                    .footer-grid {
                        grid-template-columns: 1fr 1fr;
                        gap: 2rem;
                    }
                    /* Mobile Background Adjustment */
                    .site-footer {
                        background-size: auto !important;
                        background-repeat: repeat !important;
                    }
                    /* Tighter layout for mobile locations */
                    .location-block {
                        margin-bottom: 1rem;
                    }
                }
                @media (max-width: 600px) {
                    .footer-grid {
                        grid-template-columns: 1fr;
                        gap: 2rem;
                    }
                    /* Reduce spacing further on small screens if needed */
                     .location-block {
                        margin-bottom: 0.8rem;
                    }
                }

                @media (max-width: 1024px) {
                    .location-block {
                        height: 100px !important;
                    }
                }
            `}</style>
    </footer>
  );
};

export default Footer;
