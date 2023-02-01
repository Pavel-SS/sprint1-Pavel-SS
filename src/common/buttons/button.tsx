import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type ButtonPropsType ={textInButton?: string, iconBtn?: string} & DefaultButtonPropsType;

export const Button: React.FC<ButtonPropsType> = React.memo(({textInButton, iconBtn,...props})=>(
        <button type='button' {...props}>{textInButton ?<><img src={iconBtn} alt='icon'/> {textInButton}</>: <img src={iconBtn} alt='icon'/>}</button>
))
