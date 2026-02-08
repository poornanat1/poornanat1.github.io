import React, { useEffect, useMemo, useState } from "react";
import "../styles/photos.css";
const oceanSunset = new URL("../assets/photos/ocean-sunset.jpeg", import.meta.url).href;
const nycSkylineSunset = new URL("../assets/photos/nyc-skyline-sunset.jpeg", import.meta.url).href;
const maroonBells = new URL("../assets/photos/maroon-bells.jpeg", import.meta.url).href;
const cherryBlossoms = new URL("../assets/photos/cherry-blossoms.jpeg", import.meta.url).href;
const littleItaly = new URL("../assets/photos/little-italy.jpeg", import.meta.url).href;
const nmaahc = new URL("../assets/photos/nmaahc.jpeg", import.meta.url).href;
const tetons = new URL("../assets/photos/tetons.jpeg", import.meta.url).href;
const mammothHotSprings = new URL("../assets/photos/mammoth-hot-springs.jpeg", import.meta.url).href;
const sagebrushMeadow = new URL("../assets/photos/sagebush-meadow.jpeg", import.meta.url).href;


type LightboxState = {
  src: string;
  alt: string;
  open: boolean;
};

export default function Photos() {
  const [lightbox, setLightbox] = useState<LightboxState>({
    src: "",
    alt: "",
    open: false,
  });

  useEffect(() => {
    document.title = "Photos — Poorna Natarajan";
  }, []);

  useEffect(() => {
    if (lightbox.open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightbox.open]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  const images = useMemo(
    () => [
      // OC
      { src: oceanSunset, alt: "OC sunset", eager: true },
      // NYC
      { src: nycSkylineSunset, alt: "NYC skyline at golden hour" },
      { src: littleItaly, alt: "Little Italy at dusk" },
      // CO
      { src: maroonBells, alt: "Maroon Bells, Colorado" },
      // Yellowstone region
      { src: sagebrushMeadow, alt: "Sagebrush meadow" },
      { src: tetons, alt: "Jenny Lake and the Tetons" },
      { src: mammothHotSprings, alt: "Mammoth Hot Springs, Yellowstone" },
      // Remaining DC shots
      { src: cherryBlossoms, alt: "Cherry blossoms at Washington Monument" },
      { src: nmaahc, alt: "National Museum of African American History at night" },
    ],
    []
  );

  function openLightbox(src: string, alt: string) {
    setLightbox({ src, alt, open: true });
  }

  function closeLightbox() {
    setLightbox((prev) => ({ ...prev, open: false }));
  }

  return (
    <div className="photos-page">
      <div className="frame">
        <aside className="sidebar">
          <div>
            <div className="sidebar-name">Poorna Natarajan</div>
            <div className="sidebar-subtitle">Photography</div>
          </div>
          <a href="/" className="back-link" aria-label="Back to CV">← CV</a>
          <p className="sidebar-desc">Amateur photographer. These are from 2023–2025.</p>
        </aside>
        <main className="grid">
          {images.map((img) => (
            <div key={img.src} className="card">
              <div className="tile">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading={img.eager ? "eager" : "lazy"}
                  onClick={() => openLightbox(img.src, img.alt)}
                />
              </div>
              <div className="caption">{img.alt}</div>
            </div>
          ))}
        </main>
      </div>

      <div
        className={`lightbox ${lightbox.open ? "active" : ""}`}
        id="lightbox"
        onClick={closeLightbox}
      >
        <span className="lightbox-close" onClick={(e) => { e.stopPropagation(); closeLightbox(); }}>
          CLOSE
        </span>
        <img src={lightbox.src} alt={lightbox.alt} />
      </div>
    </div>
  );
}


