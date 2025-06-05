import React, { useEffect, useState } from "react";
import LandvideoFile from "../assets/videos/video.mp4";
import PortvideoFile from "../assets/videos/videomob.mp4";
import posterImage from "../assets/images/section1/placeholder.webp";
import Logo from "../assets/images/section1/logo.svg"; 

export default function Section1() {
  const [videoSrc, setVideoSrc] = useState(LandvideoFile);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 768; // Tailwind's md breakpoint
      setVideoSrc(isMobile ? PortvideoFile : LandvideoFile);
    };

    handleResize(); // Run on mount
    window.addEventListener("resize", handleResize); // Re-check on resize
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className=" w-full h-screen ">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={videoSrc}
        poster={posterImage}
        autoPlay
        muted
        loop
        playsInline
        preload="none"
      />

      {/* Centered SVG Logo */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <img src={Logo} alt="Logo" className="w-52 md:w-80 h-auto" />
      </div>
    </section>
  );
}
