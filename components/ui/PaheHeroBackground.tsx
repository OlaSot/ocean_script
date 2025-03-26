"use client";
import { useEffect, useState } from "react";

interface Props {
  src: string;
}

export default function PageHeroBackground({ src }: Props) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setLoaded(true);
  }, [src]);

  return (
    <div
      className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat rounded-b-xl transition-opacity duration-700"
      style={{
        backgroundImage: loaded ? `url('${src}')` : "none",
        opacity: loaded ? 1 : 0,
      }}
    />
  );
}
