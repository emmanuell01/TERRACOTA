import { useState, useEffect } from "react";

import presentationImage from "/presentation-image.png"
import terracotaMainLogo from "../assets/terracota-logos/terracota-main-logo.png";
import CurvedDivider from "./ShapeDividers/CurvedDivider.jsx";

export default function Header() {
  const [height, setHeight] = useState('h-screen');

  useEffect(() => {
    const timer = setTimeout(() => {
      setHeight('h-64');
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <header
      id="inicio"
      className={`relative ${height} transition-all bg-cover bg-center bg-no-repeat bg-fixed`}
      style={{
        backgroundImage: `url(${presentationImage})`,
        transitionDuration: '2s',
      }}
    >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="h-full z-10 flex justify-center items-center relative">
          <img src={terracotaMainLogo} alt="Terracota" className="w-55 h-55" />
        </div>
        <CurvedDivider />
    </header>
  )
}
