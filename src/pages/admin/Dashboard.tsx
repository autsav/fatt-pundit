import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <h1
        style={{
          fontSize: "2rem",
          fontWeight: "bold",
          marginBottom: "2rem",
          color: "#111827",
        }}
      >
        Welcome Back, Admin
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "2rem",
        }}
      >
        <ActionCard
          title="Manage Menu"
          description="Update dishes, prices, and categories."
          link="/admin/menu"
          color="#10b981"
        />
        <ActionCard
          title="Site Settings"
          description="Change opening hours and contact info."
          link="/admin/settings"
          color="#3b82f6"
        />
        <ActionCard
          title="Media Library"
          description="Upload and manage images."
          link="/admin/media"
          color="#f59e0b"
        />
      </div>
    </div>
  );
};

const ActionCard = ({
  title,
  description,
  link,
  color,
}: {
  title: string;
  description: string;
  link: string;
  color: string;
}) => {
  return (
    <Link to={link} style={{ textDecoration: "none" }}>
      <div
        style={{
          backgroundColor: "white",
          padding: "2rem",
          borderRadius: "8px",
          boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
          borderTop: `4px solid ${color}`,
          cursor: "pointer",
          transition: "transform 0.2s",
          height: "100%",
          boxSizing: "border-box",
        }}
        onMouseOver={(e) =>
          (e.currentTarget.style.transform = "translateY(-4px)")
        }
        onMouseOut={(e) => (e.currentTarget.style.transform = "translateY(0)")}
      >
        <h3
          style={{
            fontSize: "1.25rem",
            fontWeight: "bold",
            marginBottom: "0.5rem",
            color: "#111827",
          }}
        >
          {title}
        </h3>
        <p style={{ color: "#6b7280" }}>{description}</p>
      </div>
    </Link>
  );
};

export default Dashboard;
