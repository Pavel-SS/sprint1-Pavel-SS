import React, { useState } from 'react'

import { Burger } from './burger/burger'
import { Nav } from './nav/Nav'

import s from './nav/nav.module.scss'
import style from './nav-burger.module.scss'

type NavBurgerPropsType = {
    styleBurger: string
}
export const NavBurger: React.FC<NavBurgerPropsType> = ({styleBurger}) => {
    const [openNav, setOpenNav] = useState<boolean>(false)

    const openMenu = () => {
        setOpenNav(!openNav)
    }
    const hiddenMenu = () => {
        setOpenNav(false)
    }
    const styleNav = `${style.navBurger} ${openNav ? `${style.isShow}`: ''}`;
    
    return (<div className={styleBurger}>
            <Nav style={`${s.nav} ${styleNav}`} onClick={hiddenMenu}/>
            <Burger styles={style.burgerOpen} onClick={openMenu} isOpen={openNav}/>
        </div>)
}