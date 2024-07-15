'use clietn';

import { useEffect, useRef, useState } from "react";

export const useMusicPlayer = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null)
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const animtate = isPlaying ? "" : "animate-bounce";

  // useEffect(() => {
  //   if (buttonRef.current) buttonRef.current.focus();
  //   // document.documentElement.classList.add('no-scroll')

  //   return () => {
  //     // document.documentElement.classList.remove('no-scroll');
  //   }
  // }, []);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current!.pause();
    } else {
      audioRef.current!.play();
      // document.documentElement.classList.remove('no-scroll')
    }
    setIsPlaying(!isPlaying);
  };

  return { buttonRef, togglePlayPause, isPlaying, audioRef, animtate }
}