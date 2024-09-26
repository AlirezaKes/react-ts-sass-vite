import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App/App.tsx";
import "./styles/styles.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="root">
      <App />
    </div>
  </StrictMode>,
);
