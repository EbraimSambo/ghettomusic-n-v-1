import Link from 'next/link'
import React from 'react'
import style from "./logo.module.css"

const AppLogo = () => {
  return (
    <Link className={style.logo} href={""}>
        Logo
    </Link>
  )
}

export default AppLogo
