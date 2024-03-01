"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import style from "../songs.module.css"
import BtnPlay from '../acessores/BtnPlay'

export const SongCard = ({title, cover, id, }) => {
  return (
    <li className={style.card} ><Link key={id} href={""}>
        <div className='cover'>
        <Image src={cover} width={220} height={200} />
        </div>
        <h2> {title} </h2>
        <BtnPlay />
    </Link></li>
  )
}