import { Outlet, Navigate, Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const AdminLayout = () => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
    const location = useLocation();

    useEffect(() => {
        const token = localStorage.getItem("adminToken");
        if (isAuthenticated !== !!token) {
            // eslint-disable-next-line react-hooks/exhaustive-deps
            setIsAuthenticated(!!token);
        }
    }, [location, isAuthenticated]);

    const handleLogout = () => {
        localStorage.removeItem("adminToken");
        window.location.href = "/admin/login";
    };

    if (isAuthenticated === null) return null; // Loading state

    if (!isAuthenticated) return <Navigate to="/admin/login" replace />;

    return (
        <div
            style={{
                display: "flex",
                minHeight: "100vh",
                backgroundColor: "#f3f4f6",
                fontFamily: "sans-serif",
            }}
        >
            {/* Sidebar */}
            <aside
                style={{
                    width: "250px",
                    backgroundColor: "#1f2937",
                    color: "#fff",
                    padding: "2rem 1rem",
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <h2
                    style={{
                        fontSize: "1.5rem",
                        fontWeight: "bold",
                        marginBottom: "2rem",
                        textAlign: "center",
                        letterSpacing: "1px",
                    }}
                >
                    FATT PUNDIT
                    <br />
                    <span style={{ fontSize: "0.8rem", opacity: 0.7 }}>ADMIN</span>
                </h2>

                <nav style={{ flex: 1 }}>
                    <ul style={{ listStyle: "none", padding: 0 }}>
                        <NavPath to="/admin/dashboard" label="Dashboard" />
                        <NavPath to="/admin/menu" label="Menu Manager" />
                        <NavPath to="/admin/settings" label="Settings" />
                        <NavPath to="/admin/media" label="Media Library" />
                    </ul>
                </nav>

                <button
                    onClick={handleLogout}
                    style={{
                        marginTop: "auto",
                        padding: "0.75rem",
                        backgroundColor: "#dc2626",
                        color: "white",
                        border: "none",
                        borderRadius: "4px",
                        cursor: "pointer",
                        fontWeight: "bold",
                    }}
                >
                    Logout
                </button>
            </aside>

            {/* Main Content */}
            <main style={{ flex: 1, overflowY: "auto", padding: "2rem" }}>
                <Outlet />
            </main>
        </div>
    );
};

const NavPath = ({ to, label }: { to: string; label: string }) => {
    const location = useLocation();
    const isActive = location.pathname.startsWith(to);

    return (
        <li style={{ marginBottom: "0.5rem" }}>
            <Link
                to={to}
                style={{
                    display: "block",
                    padding: "0.75rem 1rem",
                    color: isActive ? "#fff" : "#9ca3af",
                    backgroundColor: isActive ? "#374151" : "transparent",
                    textDecoration: "none",
                    borderRadius: "6px",
                    transition: "all 0.2s",
                    fontWeight: isActive ? 600 : 400,
                }}
            >
                {label}
            </Link>
        </li>
    );
};

export default AdminLayout;
