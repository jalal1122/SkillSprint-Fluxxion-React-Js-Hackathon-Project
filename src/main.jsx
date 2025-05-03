import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { SkillsProvider } from "./Context/skillContext";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
    <SkillsProvider>
      <App />
    </SkillsProvider>
  // </StrictMode>
);
