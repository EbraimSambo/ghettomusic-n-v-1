"use client"
import React, { useRef, useState } from 'react'
import style from "../songs.module.css"
import Image from 'next/image'


const ShowPlayer = ({isPlaying, setIsPlaying}) => {
  const audioPlayer = useRef();
  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      audioPlayer.current.play();
    } else {
      audioPlayer.current.pause();
    }
  }
  return (
    <div className={style.showPlayer}>
      <div className={style.cover}>
        <div className={style.orifice}>
          <div></div>
        </div>
        <Image className={isPlaying ? style.rotateSong : ''}  src={"/assets/imagens/covers/ciencia-sem-fim.jpeg"} width={140} height={140} />
      </div>
      <div className={style.progress}>
        <span>00</span> <input type="range" min={0} max={100} /> <span>3:33</span>
      </div>
      <div className={style.controls}>
        
        <button className={style.btnPl}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-skip-start-fill" viewBox="0 0 16 16">
            <path d="M4 4a.5.5 0 0 1 1 0v3.248l6.267-3.636c.54-.313 1.232.066 1.232.696v7.384c0 .63-.692 1.01-1.232.697L5 8.753V12a.5.5 0 0 1-1 0z" />
          </svg>
        </button>
         <button className={style.btnPl} onClick={togglePlayPause}>
          {isPlaying  ?(
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
            <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5m5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5" />
          </svg>):(
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
            <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393" />
          </svg>)}
        </button>
        <button className={style.btnPl}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-skip-end-fill" viewBox="0 0 16 16">
            <path d="M12.5 4a.5.5 0 0 0-1 0v3.248L5.233 3.612C4.693 3.3 4 3.678 4 4.308v7.384c0 .63.692 1.01 1.233.697L11.5 8.753V12a.5.5 0 0 0 1 0z" />
          </svg>
        </button>
      </div>
      <audio ref={audioPlayer}   src={"/assets/songs/1.mp3"} preload="metadata"></audio>
    </div>
  )
}

export default ShowPlayer