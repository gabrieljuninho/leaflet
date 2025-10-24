import { createRoot } from "react-dom/client";

import "./globals.css";

import HomePage from "./pages/home";

createRoot(document.getElementById("root")!).render(<HomePage />);
