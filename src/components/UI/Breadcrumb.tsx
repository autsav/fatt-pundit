import { Link, useLocation, useParams } from "react-router-dom";
import { IoChevronForward, IoHome } from "react-icons/io5";

interface BreadcrumbItem {
    label: string;
    path: string;
}

const Breadcrumb = () => {
    const location = useLocation();
    const params = useParams();

    const generateBreadcrumbs = (): BreadcrumbItem[] => {
        const pathSegments = location.pathname.split("/").filter(Boolean);
        const breadcrumbs: BreadcrumbItem[] = [{ label: "Home", path: "/" }];

        let currentPath = "";

        pathSegments.forEach((segment, index) => {
            currentPath += `/${segment}`;

            // Capitalize and format segment
            let label = segment
                .split("-")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ");

            // Special formatting for locations
            if (segment === "soho") {
                label = "Soho";
            } else if (segment === "covent-garden") {
                label = "Covent Garden";
            } else if (segment === "click-and-collect") {
                label = "Click & Collect";
            }

            breadcrumbs.push({
                label,
                path: currentPath,
            });
        });

        return breadcrumbs;
    };

    const breadcrumbs = generateBreadcrumbs();

    // Don't show breadcrumbs on homepage
    if (breadcrumbs.length <= 1) {
        return null;
    }

    return (
        <nav
            aria-label="Breadcrumb"
            style={{
                padding: "1rem 0",
                backgroundColor: "#f9f9f9",
                borderBottom: "1px solid #e5e5e5",
            }}
        >
            <div
                className="container"
                style={{
                    maxWidth: "1200px",
                    margin: "0 auto",
                    padding: "0 2rem",
                }}
            >
                <ol
                    style={{
                        display: "flex",
                        alignItems: "center",
                        listStyle: "none",
                        padding: 0,
                        margin: 0,
                        flexWrap: "wrap",
                        gap: "0.5rem",
                    }}
                >
                    {breadcrumbs.map((crumb, index) => {
                        const isLast = index === breadcrumbs.length - 1;
                        const isHome = index === 0;

                        return (
                            <li
                                key={crumb.path}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "0.5rem",
                                }}
                            >
                                {index > 0 && (
                                    <IoChevronForward
                                        size={14}
                                        style={{ color: "#999", flexShrink: 0 }}
                                    />
                                )}

                                {isLast ? (
                                    <span
                                        style={{
                                            fontSize: "0.875rem",
                                            color: "#666",
                                            fontWeight: 500,
                                            textTransform: "uppercase",
                                            letterSpacing: "0.05em",
                                        }}
                                        aria-current="page"
                                    >
                                        {isHome ? <IoHome size={16} /> : crumb.label}
                                    </span>
                                ) : (
                                    <Link
                                        to={crumb.path}
                                        style={{
                                            fontSize: "0.875rem",
                                            color: "#333",
                                            textDecoration: "none",
                                            fontWeight: 500,
                                            textTransform: "uppercase",
                                            letterSpacing: "0.05em",
                                            transition: "color 0.2s",
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "0.25rem",
                                        }}
                                        onMouseOver={(e) =>
                                            (e.currentTarget.style.color = "var(--color-accent)")
                                        }
                                        onMouseOut={(e) => (e.currentTarget.style.color = "#333")}
                                    >
                                        {isHome ? <IoHome size={16} /> : crumb.label}
                                    </Link>
                                )}
                            </li>
                        );
                    })}
                </ol>
            </div>

            <style>{`
        @media (max-width: 768px) {
          nav[aria-label="Breadcrumb"] {
            padding: 0.75rem 0;
          }
          nav[aria-label="Breadcrumb"] ol {
            font-size: 0.75rem;
          }
        }
      `}</style>
        </nav>
    );
};

export default Breadcrumb;
