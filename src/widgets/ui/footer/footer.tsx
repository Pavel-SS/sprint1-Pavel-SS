import React from 'react'

import faceboockIcon from "../../../assets/svg/facebook_icon.svg"
import instagramIcon from "../../../assets/svg/instagram_icon.svg"
import linkedInIcon from "../../../assets/svg/linkedIn_icon.svg"
import vkIcon from "../../../assets/svg/vk_icon.svg"

import media from "../../../styles/media.module.scss";
import s from './footer.module.scss';

export const Footer = () => (
    <footer className={`${s.footer} ${media.footer}`}>
        <div>
            <span>
                © 2020-2023 Cleverland. Все права защищены.
            </span>
            <ul>
                <li>
                    <a href="#">
                        <img src={faceboockIcon} alt="facebook" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src={instagramIcon} alt="instagram" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src={vkIcon} alt="vk" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src={linkedInIcon} alt="linkedIn" />
                    </a>
                </li>
            </ul>
        </div>
    </footer>
  )
