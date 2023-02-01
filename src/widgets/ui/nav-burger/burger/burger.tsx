/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import s from './burger.module.scss'

type BurgerPropsType = {
    onClick?: ()=>void;
    styles?: string;
    isOpen?: boolean
}

export const Burger = ({onClick, styles, isOpen}: BurgerPropsType) => (
    // eslint-disable-next-line react/button-has-type
    <div className={styles} onClick={onClick}>
        <div className={isOpen ? s.burger__open : '' } />
        <div className={isOpen ? s.burger__open : '' } />
        <div className={isOpen ? s.burger__open : '' } />
    </div>
)