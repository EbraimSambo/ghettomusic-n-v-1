import React from 'react'
import style from "../songs.module.css"
import { IoIosPlay } from "react-icons/io";
const BtnPlay = ({play}) => {
  return (
    <button onClick={play} className={style.btnPlay}>
        <IoIosPlay fontSize={14} />
    </button>
  )
}

export default BtnPlay