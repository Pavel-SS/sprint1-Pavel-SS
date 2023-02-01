/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, KeyboardEvent, useState } from 'react';

import style from '../../styles/media.module.scss'
import fromBooks from '../../widgets/ui/panel-list-of-related-books/panel-list-of-related-books.module.scss'
import s from "./inputText.module.scss"

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type InputTextPropsType = Omit<DefaultInputPropsType,'type'> & {
    onChangeText?: (value: string)=> void,
    onEnterPress?: ()=> void,
    visibilityPassword?: boolean
    searchType?: boolean
    wrapperStyle?: string
}

export const InputText: React.FC<InputTextPropsType> = React.memo(({
    onChange,
    onChangeText,
    onKeyPress,
    onEnterPress,
    visibilityPassword,
    searchType,
    wrapperStyle,
    ...props
}) => {
    const [textOrPassword, setTextOrPassword] = useState<boolean>(!visibilityPassword);

    const [isSearch, setIsSearch] = useState<boolean>(!searchType)

    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>)=>{
        onChange && onChange(e)
        onChangeText && onChangeText(e.currentTarget.value)
    }
    const onKeyPressCallback = (e: KeyboardEvent<HTMLInputElement>)=>{
        onKeyPress && onKeyPress(e);
        onEnterPress && e.key === 'Enter' && onEnterPress()
    }

    const hiddenPassword = () => {
        setTextOrPassword(!textOrPassword)
    }

    return (
        <div className={wrapperStyle}>
                <input type={textOrPassword ? 'text' : 'password' } onChange={onChangeCallback}
                    onKeyPress={onKeyPressCallback} {...props} />
                {visibilityPassword &&
                <div onClick={hiddenPassword} className={textOrPassword ?`${s.eye} ${s.eye_open}` : `${s.eye}
                    ${s.eye_close}`}/>
                }
                {
                    searchType && <div className={`${s.search_icon} ${style.search_icon_mini}`}/> 
                }
        </div>
    )
})