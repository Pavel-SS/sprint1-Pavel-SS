/* eslint-disable arrow-body-style */
import React, { useState } from 'react'
import { Button } from 'common/buttons/button'
import { InputText } from 'common/input-text/input-text'

import iconSortColumn from "../../../assets/svg/sort-column_icon.svg"
import iconSortNoColumn from "../../../assets/svg/sort-nocolumn_icon.svg"
import iconSortRow from "../../../assets/svg/sort-row_icon.svg"
import iconSortNoRow from "../../../assets/svg/sort-norow_icon.svg" 

import sortIcon from "../../../assets/svg/filter_icon.svg"
import { ListOfBooks } from './list-of-books/list-of-books'

import s from './panel-list-of-related-books.module.scss'
import media from '../../../styles/media.module.scss';

export const PanelListOfRelatedBooks = () => {

    const [activeTypeSort, setActiveTypeSort] = useState<boolean>(true)

    const [isColumn, setIsColumn] = useState<boolean>(false)

    const clickColumnOrientation = () => {
        setIsColumn(true)
        setActiveTypeSort(false)
    }
    const clickRowOrientation = () => {
        setIsColumn(false)
        setActiveTypeSort(true)
    }

    return(
        <main className={`${s.main} ${media.main}`}>
            <div className={`${s.panel} ${media.panel}`}>
                <div className={`${s.panel__find} ${media.panel__find}`}>
                    <InputText wrapperStyle={`${s.container} ${media.container}`} className={`${s.searchPanel}`} placeholder="Поиск книги или автора..."
                        searchType={true} />
                    <InputText wrapperStyle={`${s.container_mini} ${media.container_mini}`} className={`${s.searchPanel}`} searchType={true} />  
                    <Button className={`${s.panel__btn_filter} ${media.panel__btn_filter}`} iconBtn={sortIcon} textInButton="По рейтингу" />
                    <Button className={`${s.panel__btn_filter_mini} ${media.panel__btn_filter_mini}`} iconBtn={sortIcon}/>
                </div>
                <div className={s.panel__position}>
                    <Button 
                        data-test-id='button-menu-view-window'
                        onClick={()=>{
                            clickRowOrientation()
                            }} 
                            className={`${s.panel__position_row} ${activeTypeSort ? 
                            s.active : 
                            s.inactive}`}  
                            iconBtn={
                                activeTypeSort ? iconSortRow : iconSortNoRow}
                    />
                    <Button 
                        data-test-id='button-menu-view-list'
                        onClick={()=>{
                            clickColumnOrientation()
                           }} 
                            className={`${s.panel__position_column}  ${!activeTypeSort ? 
                                s.active : 
                                s.inactive}`} 
                                iconBtn={activeTypeSort ? iconSortColumn : iconSortNoColumn}
                    />
                </div>
            </div>
            <ListOfBooks orientationBooks={isColumn}/>
        </main>
    )}