// src/App.jsx
import { Outlet, Link, useNavigation } from "react-router-dom";
import "./App.css";

function App() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="app-container">
      {/* This div is the loading indicator */}
      <div
        id="loading-indicator"
        style={{
          transform: isLoading ? "scaleX(1)" : "scaleX(0)",
          // Add a delay to hiding the bar so it's not too jarring
          transition: `transform 0.2s ${isLoading ? "ease-out" : "ease-in 0.5s"}`,
        }}
      />

      <nav style={{ padding: "10px", borderBottom: "1px solid #ccc", display: "flex", gap: "10px" }}>
        <Link to="/home">Home</Link>
        <Link to="/posts/new">New Post</Link>
      </nav>
      <main>
        <Outlet />
      </main>
      <footer style={{ padding: "10px", borderTop: "1px solid #ccc", marginTop: "20px", textAlign: "center" }}>
        <p>Social Media Dashboard Footer</p>
      </footer>
    </div>
  );
}

export default App;