'use client';

import { useEffect, useRef, useState } from "react";
import { useMusicPlayer } from "./useMusicPlayer";

type MusicPlayerProps = {}

export const MusicPlayer = (props: MusicPlayerProps) => {
  const { isPlaying, togglePlayPause, audioRef, buttonRef, animtate } = useMusicPlayer();

  return (
    <div className={`${animtate} fixed top-[27%] left-[22%] bg-white rounded-full h-[110px] w-[110px] z-30 2xl:top-[36%] 2xl:left-[28%] md:h-[60px] md:w-[60px] md:left-[1.2rem] md:top-[11.5rem]`}>
      <audio ref={audioRef} src="/audios/perfect.mp3" />
      <button
        ref={buttonRef}
        className="h-[110px] w-[110px] rounded-full md:h-[60px] md:w-[60px]"
        onClick={togglePlayPause}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
    </div>
  )
}