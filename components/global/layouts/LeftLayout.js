import React from 'react'
import style from "./leftlayoy.module.css"
import AppLogo from '../logoapp/AppLogo'
import LinksSidebar from '../sidebar/LinksSidebar'
import BottomLefLayuot from '../sidebar/BottomLefLayuot'

const LeftLayout = () => {
  return (
    <aside className={style.leftLayout}>
      <div className={style.topLeft}>
      <AppLogo />
       <LinksSidebar />
      </div>
      <BottomLefLayuot />
    </aside>
  )
}

export default LeftLayout
