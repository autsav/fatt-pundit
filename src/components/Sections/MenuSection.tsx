import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { IoChevronForward, IoClose, IoLeaf } from "react-icons/io5";
import api from "../../services/api";

import menuBgTiger from "../../assets/images/menu_bg_tiger.png";
import sohoMenuBg from "../../assets/images/soho_menu_bg.jpg";

// Define DB Item Type
interface MenuItem {
  _id: string;
  name: string;
  description: string;
  price: string;
  category: string;
  imageUrl?: string; // DB field is imageUrl
  image?: string; // Frontend expects image
  isVegetarian: boolean;
  isVegan: boolean;
  isGlutenFree: boolean;
  isSpicy: boolean;
}

type MenuCategory = {
  category: string;
  description?: string | null;
  items: MenuItem[];
};

type Menus = {
  [key: string]: MenuCategory[];
};

const MENU_TYPES = [
  "A LA CARTE",
  "PRE THEATRE MENU",
  "VEGETARIAN PRE THEATRE MENU",
  "SET MENU",
  "DRINKS",
  "VEGETARIAN MENU",
  "VEGAN MENU",
  "GLUTEN FREE",
  "SIDES + DESSERTS",
  "DESSERT",
];

const MenuSection = ({ location }: { location?: string }) => {
  const [menuData, setMenuData] = useState<Menus | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeMenu, setActiveMenu] = useState("A LA CARTE");
  const [isVegFilter, setIsVegFilter] = useState(false);
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);

  // Background Logic
  const currentBg = location === "soho" ? sohoMenuBg : menuBgTiger;
  const overlayOpacity = location === "soho" ? 0.5 : 0.9;

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const res = await api.get("/menu");
      const items: MenuItem[] = res.data
        .map((item: any) => ({
          ...item,
          image: item.imageUrl, // Map DB field to frontend
        }))
        .filter((item: any) => {
          // Filter by location if specified
          if (!location) return true; // Show all if no location context (or maybe default to something?)
          // Normalized comparison
          const loc = location.toLowerCase();
          if (item.locations && Array.isArray(item.locations)) {
            return item.locations.includes(loc);
          }
          return true; // Default to visible if no locations field
        });

      // Transform data into Menus structure
      const transformed = transformData(items);
      setMenuData(transformed);
    } catch (err) {
      console.error("Failed to fetch menu", err);
    } finally {
      setLoading(false);
    }
  };

  const transformData = (items: MenuItem[]): Menus => {
    const menus: Menus = {};

    // Helper to group items by category
    const groupByCategory = (
      filteredItems: MenuItem[],
      customOrder?: string[],
      categoryMapper?: (cat: string) => string,
    ) => {
      const groups: { [key: string]: MenuItem[] } = {};
      filteredItems.forEach((item) => {
        const catKey = categoryMapper
          ? categoryMapper(item.category)
          : item.category;
        if (!groups[catKey]) groups[catKey] = [];
        groups[catKey].push(item);
      });

      // Default Sort Order
      const defaultOrder = [
        "PRICE",
        "TO START (CHOOSE ONE)",
        "TO START ( CHOOSE ONE )",
        "( CHOOSE ONE / PER PERSON )",
        "MAINS (CHOOSE ONE)",
        "MAINS ( CHOOSE ONE / PER PERSON )",
        "SIDES ( CHOOSE ONE / PER PERSON )",
        "MOMO'S",
        "VEG",
        "SEAFOOD",
        "MEAT, GAME + POULTRY",
        "BREAD, RICE & NOODLES",
        "SIDES",
        "COCKTAILS",
        "BEERS",
        "SPARKLING",
        "ROSE",
        "WHITE WINES",
        "RED WINES",
        "SOFT DRINKS",
        "HOT DRINKS",
        "DESSERT",
      ];

      const order = customOrder || defaultOrder;

      return Object.keys(groups)
        .sort((a, b) => {
          const idxA = order.indexOf(a);
          const idxB = order.indexOf(b);
          // Items not in list go to end
          if (idxA === -1 && idxB === -1) return 0;
          if (idxA === -1) return 1;
          if (idxB === -1) return -1;
          return idxA - idxB;
        })
        .map((cat) => ({
          category: cat,
          items: groups[cat],
          description:
            cat === "MOMO'S"
              ? "All meals in Tangra start with these hearty, flavoursome steamed dumplings coming straight from the Steel Steamers."
              : null,
        }));
    };

    const drinkCategories = [
      "COCKTAILS",
      "BEERS",
      "SOFT DRINKS",
      "HOT DRINKS",
      "SPARKLING",
      "ROSE",
      "WHITE WINES",
      "RED WINES",
    ];
    const specialMenuPrefixes = ["PT_", "VPT_", "SET_"];

    const isStandardItem = (item: MenuItem) => {
      return (
        !drinkCategories.includes(item.category) &&
        !specialMenuPrefixes.some((prefix) => item.category.startsWith(prefix))
      );
    };

    // 1. A LA CARTE
    menus["A LA CARTE"] = groupByCategory(items.filter(isStandardItem));

    // 2. PRE THEATRE MENU
    menus["PRE THEATRE MENU"] = groupByCategory(
      items.filter((i) => i.category.startsWith("PT_")),
      [
        "PRICE",
        "TO START (CHOOSE ONE)",
        "( CHOOSE ONE / PER PERSON )",
        "MAINS (CHOOSE ONE)",
        "SIDES ( CHOOSE ONE / PER PERSON )",
        "DESSERT",
      ],
      (cat) => {
        if (cat === "PT_INFO") return "PRICE";
        if (cat === "PT_STARTER") return "TO START (CHOOSE ONE)";
        if (cat === "PT_SMALL_PLATES") return "( CHOOSE ONE / PER PERSON )";
        if (cat === "PT_MAIN") return "MAINS (CHOOSE ONE)";
        if (cat === "PT_SIDE") return "SIDES ( CHOOSE ONE / PER PERSON )";
        if (cat === "PT_DESSERT") return "DESSERT";
        return cat;
      },
    );

    // 3. VEGETARIAN PRE THEATRE MENU
    menus["VEGETARIAN PRE THEATRE MENU"] = groupByCategory(
      items.filter((i) => i.category.startsWith("VPT_")),
      [
        "PRICE",
        "TO START ( CHOOSE ONE )",
        "( CHOOSE ONE / PER PERSON )",
        "MAINS ( CHOOSE ONE / PER PERSON )",
        "SIDES ( CHOOSE ONE / PER PERSON )",
        "DESSERT",
      ],
      (cat) => {
        if (cat === "VPT_INFO") return "PRICE";
        if (cat === "VPT_STARTER") return "TO START ( CHOOSE ONE )";
        if (cat === "VPT_SMALL_PLATES") return "( CHOOSE ONE / PER PERSON )";
        if (cat === "VPT_MAIN") return "MAINS ( CHOOSE ONE / PER PERSON )";
        if (cat === "VPT_SIDE") return "SIDES ( CHOOSE ONE / PER PERSON )";
        if (cat === "VPT_DESSERT") return "DESSERT";
        return cat;
      },
    );

    // 4. SET MENU
    menus["SET MENU"] = groupByCategory(
      items.filter((i) => i.category.startsWith("SET_")),
      [
        "PRICE",
        "MOMO'S",
        "VEG",
        "SEAFOOD",
        "MEAT, GAME + POULTRY",
        "BREAD, RICE & NOODLES",
        "SIDES",
        "DESSERT",
      ],
      (cat) => {
        if (cat === "SET_INFO") return "PRICE";
        if (cat === "SET_MOMO") return "MOMO'S";
        if (cat === "SET_VEG") return "VEG";
        if (cat === "SET_SEAFOOD") return "SEAFOOD";
        if (cat === "SET_MEAT") return "MEAT, GAME + POULTRY";
        if (cat === "SET_SIDE") return "SIDES";
        if (cat === "SET_DESSERT") return "DESSERT";
        return cat;
      },
    );

    // 5. DRINKS
    menus["DRINKS"] = groupByCategory(
      items.filter((i) => drinkCategories.includes(i.category)),
    );

    // 6. VEGETARIAN MENU
    menus["VEGETARIAN MENU"] = groupByCategory(
      items.filter((i) => i.isVegetarian && isStandardItem(i)),
    );

    // 7. VEGAN MENU
    menus["VEGAN MENU"] = groupByCategory(
      items.filter((i) => i.isVegan && isStandardItem(i)),
    );

    // 8. GLUTEN FREE
    menus["GLUTEN FREE"] = groupByCategory(
      items.filter((i) => i.isGlutenFree && isStandardItem(i)),
    );

    // 9. SIDES + DESSERTS
    menus["SIDES + DESSERTS"] = groupByCategory(
      items.filter((i) => ["SIDES", "DESSERT"].includes(i.category)),
    );

    // 10. DESSERT
    menus["DESSERT"] = groupByCategory(
      items.filter((i) => i.category === "DESSERT"),
    );

    return menus;
  };

  if (loading)
    return (
      <div style={{ padding: "4rem", textAlign: "center", color: "white" }}>
        Loading Menu...
      </div>
    );
  if (!menuData)
    return (
      <div style={{ padding: "4rem", textAlign: "center", color: "white" }}>
        Failed to load menu.
      </div>
    );

  const activeMenuCategories = menuData[activeMenu] || [];

  return (
    <section
      id="menu"
      style={{
        backgroundColor: "var(--color-bg-primary)",
        color: "var(--color-text-primary)",
        backgroundImage: `linear-gradient(rgba(0,0,0,${overlayOpacity}), rgba(0,0,0,${overlayOpacity})), url(${currentBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <style>{`
                .menu-container {
                    display: grid;
                    grid-template-columns: 300px 1fr;
                    gap: 4rem;
                    max-width: 1400px;
                    margin: 0 auto;
                    padding: 4rem 2rem;
                    min-height: 100vh;
                }
                .menu-sidebar {
                    position: sticky;
                    top: 140px;
                    align-self: start;
                    height: auto;
                    max-height: calc(100vh - 150px);
                    overflow-y: auto;
                    padding-right: 2rem;
                    border-right: 1px solid rgba(255,255,255,0.1);
                    scrollbar-width: none;
                }
                .menu-sidebar::-webkit-scrollbar { display: none; }
                .menu-content { min-height: 80vh; }
                .menu-item-card {
                    padding: 1rem;
                    border-radius: 8px;
                    transition: background-color 0.3s ease;
                    cursor: pointer;
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                    gap: 1rem;
                }
                .menu-item-card:hover {
                    background-color: rgba(255,255,255,0.05);
                }
                .menu-nav-btn {
                    background: none;
                    border: none;
                    cursor: pointer;
                    font-family: var(--font-heading);
                    font-size: 1.2rem;
                    color: #888;
                    text-align: left;
                    padding: 0.8rem 1rem;
                    transition: all 0.3s ease;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    width: 100%;
                    border-radius: 8px;
                    opacity: 0.6;
                }
                .menu-nav-btn:hover {
                    color: #fff !important;
                    background: rgba(255,255,255,0.05);
                    padding-left: 1.5rem;
                    opacity: 1;
                }
                .menu-nav-btn.active {
                    color: var(--color-accent) !important;
                    opacity: 1 !important;
                    background: rgba(255,255,255,0.02);
                }
                @media (max-width: 1024px) {
                    .menu-container {
                        grid-template-columns: 1fr;
                        gap: 2rem;
                        padding: 2rem 1rem;
                        padding-top: 80px;
                        width: 100%;
                        box-sizing: border-box;
                    }
                    .menu-sidebar {
                        position: sticky;
                        top: 85px;
                        background: #151313;
                        z-index: 40;
                        border-right: none;
                        border-bottom: 1px solid rgba(255,255,255,0.1);
                        padding-right: 0;
                        padding-bottom: 0.5rem;
                        margin-bottom: 1rem;
                        width: 100%;
                    }
                    .menu-nav-items {
                        flex-direction: row !important;
                        overflow-x: auto;
                        gap: 1rem !important;
                        padding: 0.5rem 4px;
                        width: 100%;
                        white-space: nowrap;
                    }
                     .menu-nav-items .menu-nav-btn {
                       white-space: nowrap;
                       flex-shrink: 0;
                       width: auto;
                       background: rgba(255,255,255,0.05);
                       border: 1px solid rgba(255,255,255,0.1);
                       border-radius: 50px;
                       padding: 0.8rem 1.5rem;
                       font-size: 1rem;
                       justify-content: center;
                    }
                    /* Slim Red Scrollbar for Mobile */
                    .menu-nav-items::-webkit-scrollbar {
                        height: 2px !important;
                    }
                    .menu-nav-items::-webkit-scrollbar-track {
                        background: rgba(255,255,255,0.1);
                        border-radius: 2px;
                    }
                    .menu-nav-items::-webkit-scrollbar-thumb {
                        background-color: var(--color-accent) !important;
                        border-radius: 2px;
                    }
                }
                @media (max-width: 768px) {
                    .menu-category-grid { grid-template-columns: 1fr !important; }
                    .menu-content h3 { font-size: 2rem !important; margin-top: 1rem; }
                    .menu-content { scroll-margin-top: 140px; }
                    
                    /* Mobile Card Adjustments */
                    .menu-item-card {
                        padding: 0.8rem;
                        gap: 0.8rem;
                    }
                    .menu-item-card img {
                        width: 80px !important;
                        height: 80px !important;
                    }
                    .menu-item-card h5 {
                        font-size: 1.1rem !important;
                    }
                    .menu-item-card p {
                        font-size: 0.9rem !important;
                    }
                }
            `}</style>

      <AnimatePresence>
        {hoveredImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setHoveredImage(null)}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 9999,
              backgroundColor: "rgba(0,0,0,0.85)",
              backdropFilter: "blur(5px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                position: "relative",
                maxWidth: "90vw",
                maxHeight: "90vh",
              }}
            >
              <img
                src={hoveredImage}
                alt="Dish Preview"
                style={{
                  maxWidth: "100%",
                  maxHeight: "80vh",
                  borderRadius: "12px",
                  boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
                  border: "2px solid var(--color-accent)",
                }}
              />
              <button
                onClick={() => setHoveredImage(null)}
                style={{
                  position: "absolute",
                  top: -20,
                  right: -20,
                  background: "#fff",
                  borderRadius: "50%",
                  border: "none",
                  width: 40,
                  height: 40,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  color: "#000",
                }}
              >
                <IoClose size={24} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="menu-container">
        <div className="menu-sidebar">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "2rem",
                marginBottom: "2rem",
                color: "var(--color-accent)",
              }}
            >
              MENU
            </h2>

            <div className="menu-filter" style={{ marginBottom: "2rem" }}>
              <p
                style={{
                  fontSize: "0.85rem",
                  color: "#888",
                  marginBottom: "0.8rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                Quick Filter
              </p>
              <button
                onClick={() => setIsVegFilter(!isVegFilter)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.8rem",
                  background: isVegFilter
                    ? "linear-gradient(135deg, #4ade80 0%, #22c55e 100%)"
                    : "rgba(255,255,255,0.05)",
                  color: isVegFilter ? "#000" : "#fff",
                  border: isVegFilter
                    ? "2px solid #22c55e"
                    : "2px solid rgba(74, 222, 128, 0.3)",
                  padding: "1rem 1.5rem",
                  borderRadius: "12px",
                  cursor: "pointer",
                  fontFamily: "var(--font-heading)",
                  fontSize: "1rem",
                  fontWeight: 700,
                  width: "100%",
                  transition: "all 0.3s ease",
                  boxShadow: isVegFilter
                    ? "0 4px 15px rgba(74, 222, 128, 0.4)"
                    : "none",
                  transform: isVegFilter ? "scale(1.02)" : "scale(1)",
                }}
              >
                <IoLeaf
                  size={20}
                  style={{ color: isVegFilter ? "#000" : "#4ade80" }}
                />
                <span>
                  {isVegFilter ? "🌱 VEGETARIAN ONLY" : "SHOW VEGETARIAN"}
                </span>
              </button>
            </div>

            <div
              className="menu-nav-items"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              {MENU_TYPES.map((menu) => (
                <button
                  key={menu}
                  onClick={() => setActiveMenu(menu)}
                  className={`menu-nav-btn ${activeMenu === menu ? "active" : ""}`}
                >
                  {menu}
                  {activeMenu === menu && (
                    <motion.div
                      layoutId="active-arrow"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                    >
                      <IoChevronForward size={18} />
                    </motion.div>
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="menu-content">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeMenu}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "3rem",
                  marginBottom: "2rem",
                  color: "#fff",
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                }}
              >
                {activeMenu}
              </h3>

              {activeMenuCategories.map((section, index) => {
                const filteredItems = isVegFilter
                  ? section.items.filter((item) => item.isVegetarian)
                  : section.items;
                if (filteredItems.length === 0) return null;

                return (
                  <div key={index} style={{ marginBottom: "3rem" }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "baseline",
                        gap: "1rem",
                        marginBottom: "1.5rem",
                        borderBottom: "1px solid rgba(255,255,255,0.1)",
                        paddingBottom: "0.5rem",
                      }}
                    >
                      <h4
                        style={{
                          fontFamily: "var(--font-heading)",
                          fontSize: "1.5rem",
                          color: "var(--color-accent)",
                        }}
                      >
                        {section.category}
                      </h4>
                      {section.description && (
                        <span
                          style={{
                            fontSize: "0.9rem",
                            color: "#888",
                            fontStyle: "italic",
                          }}
                        >
                          {section.description}
                        </span>
                      )}
                    </div>

                    <div
                      className="menu-category-grid"
                      style={{
                        display: "grid",
                        gridTemplateColumns:
                          "repeat(auto-fill, minmax(260px, 1fr))",
                        gap: "2rem",
                      }}
                    >
                      {filteredItems.map((item, idx) => (
                        <div key={idx} className="menu-item-card">
                          <div style={{ flex: 1 }}>
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "baseline",
                                marginBottom: "0.5rem",
                              }}
                            >
                              <h5
                                style={{
                                  fontFamily: "var(--font-heading)",
                                  fontSize: "1.2rem",
                                  color: "#fff",
                                  letterSpacing: "0.5px",
                                  margin: 0,
                                }}
                              >
                                {item.name}
                              </h5>
                              {item.price && item.price !== "0" && (
                                <span
                                  style={{
                                    color: "var(--color-accent)",
                                    fontWeight: "bold",
                                    fontFamily: "var(--font-mono)",
                                    flexShrink: 0,
                                    whiteSpace: "nowrap",
                                    marginLeft: "1rem",
                                  }}
                                >
                                  £{item.price}
                                </span>
                              )}
                            </div>
                            <p
                              style={{
                                color: "#aaa",
                                fontSize: "0.95rem",
                                lineHeight: "1.5",
                                fontFamily: "var(--font-body)",
                                margin: 0,
                              }}
                            >
                              {item.description}
                            </p>
                          </div>
                          {item.image && (
                            <img
                              src={item.image}
                              alt={item.name}
                              onClick={(e) => {
                                e.stopPropagation();
                                setHoveredImage(item.image || null);
                              }}
                              style={{
                                width: "100px",
                                height: "100px",
                                objectFit: "cover",
                                borderRadius: "8px",
                                cursor: "pointer",
                                border: "1px solid rgba(255,255,255,0.1)",
                                flexShrink: 0,
                              }}
                            />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
              {activeMenuCategories.length === 0 && (
                <p>No items found for this menu.</p>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
