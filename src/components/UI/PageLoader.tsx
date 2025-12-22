import LoadingSpinner from "./LoadingSpinner";

const PageLoader = () => {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "var(--color-bg-primary)",
        zIndex: 9999,
      }}
    >
      <LoadingSpinner size="large" />
    </div>
  );
};

export default PageLoader;
