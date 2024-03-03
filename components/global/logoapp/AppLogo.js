import Link from 'next/link'
import React from 'react'
import style from "./logo.module.css"
import { MdOutlineLibraryMusic } from "react-icons/md";

const AppLogo = () => {
  return (
    <Link className={style.logo} href={"/"}>
       <MdOutlineLibraryMusic fontSize={23} /> GhettoMusic
    </Link>
  )
}

export default AppLogo
