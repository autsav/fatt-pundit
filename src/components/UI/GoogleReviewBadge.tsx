import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const MOCK_REVIEWS = [
  {
    name: "Sarah J.",
    rating: 5,
    text: "Absolutely incredible food. The momos are to die for!",
    date: "2 days ago",
  },
  {
    name: "David C.",
    rating: 5,
    text: "Great fusion of flavors. The best Indo-Chinese in London.",
    date: "1 week ago",
  },
  {
    name: "Emily R.",
    rating: 4,
    text: "Lovely atmosphere and friendly staff. Highly recommend the lamb chops.",
    date: "3 weeks ago",
  },
];

// Helper to render stars safely
const RenderStars = ({
  size = 14,
  rating = 4.8,
}: {
  size?: number;
  rating?: number;
}) => {
  return (
    <div style={{ display: "flex", gap: "1px" }}>
      {[...Array(5)].map((_, i) => {
        const isFull = i < Math.floor(rating);
        const isHalf = i === Math.floor(rating) && rating % 1 !== 0; // 4.8 will trigger 4 full + 0.8 partial (rendered as half star logically or full depending on logic, but logic uses rating % 1)
        // Note: The RenderStars logic for 'isHalf' checks exact floor match.
        // 4.8 floor is 4. i=4 is floor. 4.8 % 1 is 0.8 != 0. So it renders a half star mask.
        // Visually 4.8 is close to 5, but a "Half Star" icon is reasonable for non-5.

        return (
          <div
            key={i}
            style={{ position: "relative", width: size, height: size }}
          >
            {/* Background Star (Gray for empty/half, Gold for full) */}
            <FaStar
              size={size}
              fill={isFull ? "#FBBC05" : "#E8EAED"}
              stroke="none"
              style={{ position: "absolute", top: 0, left: 0 }}
            />

            {/* Foreground Half Star Mask */}
            {isHalf && (
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: `${(rating % 1 || 1) * 100}%`, // Logic: If x.0, full width (100%). If x.8, 80%.
                  height: "100%",
                  overflow: "hidden",
                  zIndex: 1,
                }}
              >
                <FaStar
                  size={size}
                  fill="#FBBC05"
                  stroke="none"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    minWidth: size,
                  }}
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};


const GoogleReviewBadge = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8, type: "spring" }}
        className="google-review-badge"
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        style={{
          position: "fixed",
          bottom: "20px",
          left: "20px",
          zIndex: 9990,
          backgroundColor: "white",
          padding: "10px 16px",
          borderRadius: "8px",
          boxShadow: "0 4px 25px rgba(0,0,0,0.15)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "12px",
          cursor: "pointer",
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
          border: "1px solid rgba(0,0,0,0.05)",
        }}
      >
        {/* Google G Logo - Centered */}
        <div
          style={{
            width: "24px",
            height: "24px",
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: "100%", height: "100%" }}
          >
            <path
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              fill="#4285F4"
            />
            <path
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              fill="#34A853"
            />
            <path
              d="M5.84 14.12c-.22-.66-.35-1.36-.35-2.12s.13-1.46.35-2.12V7.04H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.96l3.66-2.84z"
              fill="#FBBC05"
            />
            <path
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.04l3.66 2.84c.87-2.6 3.3-4.5 6.16-4.5z"
              fill="#EA4335"
            />
          </svg>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <span
              style={{
                fontWeight: "600",
                color: "#202124",
                fontSize: "15px",
                lineHeight: "1",
              }}
            >
              4.8
            </span>
            <RenderStars size={14} rating={4.8} />
          </div>
          <div
            style={{
              fontSize: "11px",
              color: "#5f6368",
              marginTop: "2px",
              fontWeight: 500,
            }}
          >
            See our reviews
          </div>
        </div>
      </motion.div>

      {/* Expanded Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)} // Close on backdrop click
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              backgroundColor: "rgba(0,0,0,0.4)",
              backdropFilter: "blur(4px)",
              zIndex: 9999,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "20px",
            }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()} // Prevent close on card click
              style={{
                width: "100%",
                maxWidth: "400px",
                backgroundColor: "white",
                borderRadius: "16px",
                boxShadow: "0 20px 50px rgba(0,0,0,0.2)",
                overflow: "hidden",
                fontFamily:
                  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
              }}
            >
              {/* Header */}
              <div
                style={{
                  padding: "20px",
                  borderBottom: "1px solid #eee",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <span
                    style={{
                      fontSize: "24px",
                      fontWeight: "bold",
                      color: "#202124",
                    }}
                  >
                    4.8
                  </span>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <RenderStars size={16} rating={4.8} />
                    <span
                      style={{
                        fontSize: "12px",
                        color: "#5f6368",
                        marginTop: "2px",
                      }}
                    >
                      based on 512 reviews
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: "5px",
                  }}
                >
                  <IoClose size={20} color="#5f6368" />
                </button>
              </div>

              {/* Reviews List */}
              <div
                style={{ maxHeight: "300px", overflowY: "auto", padding: "0" }}
              >
                {MOCK_REVIEWS.map((review, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: "16px 20px",
                      borderBottom: "1px solid #f0f0f0",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: "6px",
                      }}
                    >
                      <span
                        style={{
                          fontWeight: "600",
                          fontSize: "14px",
                          color: "#202124",
                        }}
                      >
                        {review.name}
                      </span>
                      <span style={{ fontSize: "12px", color: "#5f6368" }}>
                        {review.date}
                      </span>
                    </div>
                    <div style={{ display: "flex", marginBottom: "8px" }}>
                      <RenderStars size={12} rating={review.rating} />
                    </div>
                    <p
                      style={{
                        fontSize: "13px",
                        color: "#3c4043",
                        margin: 0,
                        lineHeight: "1.5",
                      }}
                    >
                      {review.text}
                    </p>
                  </div>
                ))}
              </div>

              {/* Footer Action */}
              <div
                style={{
                  padding: "16px 20px",
                  backgroundColor: "#f8f9fa",
                  textAlign: "center",
                }}
              >
                <a
                  href="https://www.google.com/search?q=fatt+pundit+london" // Generic search link
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "inline-block",
                    backgroundColor: "#1a73e8",
                    color: "white",
                    textDecoration: "none",
                    padding: "10px 24px",
                    borderRadius: "20px",
                    fontSize: "14px",
                    fontWeight: "500",
                  }}
                >
                  Write a review
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default GoogleReviewBadge;
