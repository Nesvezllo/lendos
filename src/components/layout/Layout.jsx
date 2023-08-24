import React, { FC, PropsWithChildren, ReactNode } from 'react'

import s from "./styles/index.module.scss"

const Layout = ({children}) => {
  return (
    <div className={s.layout}>
        { children }
    </div>
  )
}

export default Layout