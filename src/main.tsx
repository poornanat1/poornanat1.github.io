
  import React from "react";
  import { createRoot } from "react-dom/client";
  import App from "./app/App.tsx";
  import Photos from "./pages/Photos.tsx";
  import "./styles/index.css";

  const path = window.location.pathname;
  const isPhotos =
    path.endsWith("/photos") ||
    path.endsWith("/photos/") ||
    path.endsWith("/photos.html");

  createRoot(document.getElementById("root")!).render(
    isPhotos ? <Photos /> : <App />
  );
  