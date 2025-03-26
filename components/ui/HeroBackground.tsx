"use client";

import { useEffect, useState } from "react";

export default function HeroBackground() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = "/mainPbg.webp";
    img.onload = () => setLoaded(true);
  }, []);

  return (
    <div
      className="absolute inset-0 bg-cover bg-center bg-no-repeat rounded-b-xl transition-opacity duration-700 z-0"
      style={{
        backgroundImage: loaded ? `url('/mainPbg.webp')` : "none",
        opacity: loaded ? 1 : 0,
      }}
    />
  );
}
