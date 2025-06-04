import React, { useRef, useEffect, useState } from 'react';
import { PauseIcon, PlayIcon } from '@heroicons/react/24/solid';
import { PlayIcon as SolidPlayIcon } from '@heroicons/react/24/solid';
import LandvideoFile from "../assets/videos/video.mp4";
import PortvideoFile from "../assets/videos/videomob.mp4";

const Section3 = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const togglePlayback = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-100 sm:py-15 px-1 sm:px-6">
      <div className="relative max-w-[80%] sm:w-[80vw] w-[80vw] sm:max-w-8xl aspect-[9/16] sm:aspect-video bg-black shadow-lg rounded-2xl overflow-hidden">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          src={isMobile ? PortvideoFile : LandvideoFile}
          autoPlay
          muted
          loop
          playsInline
          poster="/mnt/data/dcb34425-8c7d-48f0-ac40-259011059e21.png"
        />

        {/* Play/Pause Control Button (bottom right) */}
        <button
          onClick={togglePlayback}
          className="absolute bottom-4 right-4 bg-white/70 hover:bg-white text-black p-2 rounded-full shadow transition"
        >
          {isPlaying ? (
            <PauseIcon className="h-6 w-6" />
          ) : (
            <PlayIcon className="h-6 w-6" />
          )}
        </button>

        {/* Center Button - Discover the Project */}
        <button
          className="absolute inset-0 m-auto h-fit w-fit flex items-center gap-3 bg-gray-500/50 backdrop-blur-md text-white font-medium px-6 py-3 rounded-full shadow-md hover:bg-gray-500/10 transition"
        >
          <SolidPlayIcon className="h-5 w-5" />
          Discover the project
        </button>
      </div>
    </section>
  );
};

export default Section3;
