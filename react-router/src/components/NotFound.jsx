import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h2>404 - Pagina non trovata</h2>
      <p>
        <Link to="/">Torna alla home</Link>
      </p>
    </div>
  );
}

export default NotFound;
