"use client"
import { SongCard } from '../card/SongCard'
import style from "../songs.module.css"
import ShowPlayer from '../player/ShowPlayer';
import { useState } from 'react';

export const ContainerSongs = ({songs,}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <ul className={style.ContainerSongs}>
       { songs?.map((songs)=>(
        <SongCard  cover={songs.path_cover}   title={songs.title} id={songs.id}  />
       )) }
       <ShowPlayer isPlaying={isPlaying} setIsPlaying={setIsPlaying}  />
    </ul>
  )
}
