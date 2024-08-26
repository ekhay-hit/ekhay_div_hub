import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap
import '@fontsource/roboto'; // Defaults to weight 400
import '@fontsource/roboto/700.css'; // Weight 700 (bold)
import '@fontsource/open-sans'; // Defaults to weight 400
import '@fontsource/open-sans/700.css'; // Weight 700 (bold)
import "./styles/index.css";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
