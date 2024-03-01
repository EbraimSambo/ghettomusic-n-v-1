import Link from 'next/link'
import React from 'react'
import style from "./linkssidebar.module.css"
const LinksSidebar = () => {
    return (
        <>
        <ul className=''>
            <li className={style.desible}>Menu</li>
            <li> <Link href="/">Músicas</Link> </li>
            <li> <Link href="/">PlayLists</Link> </li>
            <li> <Link href="/">Albums</Link> </li>
        </ul>
        <ul className=''>
        <li className={style.desible}>Menu</li>
            <li> <Link href="/">Casts</Link> </li>
            <li> <Link href="/">Hits</Link> </li>
            <li> <Link href="/">News</Link> </li>
        </ul>
        </>
    )
}

export default LinksSidebar
