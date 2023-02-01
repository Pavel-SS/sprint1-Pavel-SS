/* eslint-disable unicorn/filename-case */
import React from 'react'
import { thematicBookList } from 'data/data-list';

import media from '../../../styles/media.module.scss';
import thematicListStyle from './list-of-books-by-section.module.scss'

type BookListType = {
    listTitle?: string
    thematicList?: Array<{
        title:string
        quantity:number
        id: string
    }>
    clickRules?: () => void
    clickContract?: () => void
};


export const ListOfBooksByAside: React.FC<BookListType> = ({
    listTitle = thematicBookList.listTitle, 
    thematicList = thematicBookList.thematicList,
    clickRules,
    clickContract
}) => (
        <aside className={`${thematicListStyle.aside} ${media.aside}`}>
            <h2 className={thematicListStyle.aside__title}>
                Витрина книг
            </h2>
            <ul className={thematicListStyle.lists}>
                <li className={thematicListStyle.lists__title}>{listTitle}</li>
                {thematicList.map(thematicBooks => (
                <li key={thematicBooks.id} className={thematicListStyle.lists__items}>
                    <a href='#' className={thematicListStyle.lists__items_link}>
                        {thematicBooks.title}
                    </a>
                    <span className={thematicListStyle.lists__items_quantity}>{thematicBooks.quantity}</span>
                </li>
                ))}
            </ul>
            <input 
                type="submit" 
                onClick={clickRules} 
                className={thematicListStyle.aside__descr}
                value="Правила пользования"
            />
            <input 
                type="submit" 
                onClick={clickContract} 
                className={thematicListStyle.aside__descr}
                value="Договор оферты"
            />
        </aside>
    )