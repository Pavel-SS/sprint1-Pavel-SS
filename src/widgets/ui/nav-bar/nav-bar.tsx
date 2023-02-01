
import { useState } from 'react'

import avatarImg from '../../../assets/img/avatar-default.webp'
import cleverlandLogo from '../../../assets/svg/Cleverland.svg'
import { Burger } from '../nav-burger/burger'

// import style from "../nav-burger/nav-burger.module.scss"
import s from './nav-bar.module.scss'
import media from '../../../styles/media.module.scss'

export const NavBar = () => {
    const [openNav, setOpenNav] = useState<boolean>(false)

    const openMenu = () => {
        setOpenNav(!openNav)
    }
    // const hiddenMenu = () => {
    //     setOpenNav(false)
    // }

    return(
    <header className={`${s.header} ${media.header}`}>
        <div className={`${s.header__section} ${media.header__section} section`}>
        <Burger styles={`${s.header__burger} ${media.header__burger}`} onClick={openMenu} isOpen={openNav}/>
            <img className={`${s.header__logo} ${media.header__logo}`} src={cleverlandLogo} alt="Cleverland" />
            <h1 className={s.header__title}>Библиотека</h1>
            <div className={`${s.header__dropdownUser} ${media.header__dropdownUser}`}>
                <span className={`${s.header__dropdownUser_descr} ${media.header}`}>Привет, Иван!</span>
                <div className={s.header__dropdownUser_avatar}>
                    <img src={avatarImg} alt="avatar"/>
                </div>
            </div>
        </div>
    </header>
  )}
