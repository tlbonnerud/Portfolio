'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import Dock from "../components/Dock";
import DotGrid from "../components/DotGrid";
import { Folder, Home, Mail, User } from "lucide-react";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import GradualBlur from '../components/GradualBlur';
import HomePage from "../components/HomePage";

const navItems = [
  { label: "Home", icon: <Home color="white"/> },
  { label: "About", icon: <User color="white"/> },
  { label: "Projects", icon: <Folder color="white"/> },
  { label: "Contact", icon: <Mail color="white"/> },
];

export default function PortfolioPage() {
  const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 });

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-[var(--background)]">
      <FlickeringGrid
        className="z-0 absolute inset-0 size-full"
        squareSize={10}
        gridGap={8}
        color="#240046"
        maxOpacity={0.4}
        flickerChance={0.1}
        height={dimensions.height}
        width={dimensions.width} 
      />
        <GradualBlur
          target="parent"
          position="bottom"
          height="6rem"
          strength={2}
          divCount={5}
          curve="bezier"
          exponential={true}
          opacity={1}
        />
      <HomePage />
      {/* <Dock items={navItems} className="custom-dock" /> */}
    </div>
  );
}
