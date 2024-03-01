"use client"
import { ContainerSongs } from "@/components/songs/container/ContainerSongs";
import { songscover } from "@/data/songscover";
import React, { useState } from "react";
export default function HomePage() {
  const [songs, setSongs] = useState(songscover());
  return (
   <>
    <section className="homestart">
      <h2>Home</h2>
      <ContainerSongs songs={songs} />
    </section>
   </>
  );
}
