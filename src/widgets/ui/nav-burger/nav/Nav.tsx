/* eslint-disable unicorn/filename-case */
import React from 'react';

type NavPropsType = {
    style: string
    // logo?: string
    // avatar?: string
    linkName?: string
    link?:string
    onClick?: () => void
}

export const Nav: React.FC<NavPropsType> = ({
    style, 
    // logo, 
    // avatar, 
    linkName, 
    link, 
    onClick
}) => (
            <nav className={style}>
                {/* <a href={link} onClick={onClick}>
                    <img src={logo} alt="logo" />
                </a>
                <div>
                    <img src={avatar} alt="avatar" />
                </div> */}
                <a href={link} onClick={onClick}>Личный кабинет</a>
                <a href={link} onClick={onClick}>{linkName}</a>
            </nav>
    )