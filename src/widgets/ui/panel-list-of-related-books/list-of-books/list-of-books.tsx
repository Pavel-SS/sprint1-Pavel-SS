/* eslint-disable no-negated-condition */
import React from 'react'
import { Link } from 'react-router-dom';
import { booksList , maxRaiting } from 'data/data-list';

import star from '../../../../assets/svg/filledStart.svg'
import noCoverBook from '../../../../assets/svg/noImage_icon.svg'
import noStar from '../../../../assets/svg/notFilledStar.svg'

import media from "../../../../styles/media.module.scss"
import s from './list-of-books.module.scss'

type ListOfBooksType = {
    orientationBooks: boolean
}

export const ListOfBooks:React.FC<ListOfBooksType> = ({orientationBooks}) => (
    <ul className={orientationBooks ? `${s.list_row} ${media.list_row}` : `${s.list} ${media.list}`}>
        {booksList.map(book => (
        <li data-test-id='card' key={booksList.length + Math.random()}>
            <Link to="/book" className={`${s.book} ${media.book}`}>
                {!book.bookCover ? 
                <div className={`${s.book__image} ${s.book__image_noCover} ${media.book__image}`}>
                   <img src={noCoverBook} alt="pic" />
                </div>:
                <div className={`${s.book__image} ${media.book__image}`}>
                    <img src={book.bookCover} alt="pic" />
                </div>
                }
                {!book.rating ?
                <p className={s.book__raiting_none}>ещё нет оценок</p>:
                <span className={`${s.book__raiting_stars} ${media.book__raiting_stars}`}>
                    {
                    maxRaiting.map(raiting => (
                    raiting
                    <= Array.from(Array(book.rating)).length ? 
                    <img key={booksList.length + Math.random()} className={s.book__raiting} src={star} alt="star" />:
                    <img key={booksList.length + Math.random()} className={s.book__raiting} src={noStar} alt="star" />
                    ))
                    }
                </span>}
                <h2 className={`${s.book__titleBook} ${media.book__titleBook}`}>{book.title}</h2>
                <h3 className={`${s.book__authorBook} ${media.book__authorBook}`}>
                    {book.author}
                    <span className={s.book__authorBook_year}>
                        {book.yearOfPublishing}
                    </span>
                </h3>
            <button className={s.btn} type='button'>Забронировать</button>
            </Link>
        </li>
        ))}
    </ul>
  )
