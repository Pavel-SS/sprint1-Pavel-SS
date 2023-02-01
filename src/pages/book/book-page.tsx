/* eslint-disable no-irregular-whitespace */
import coverImg from "../../assets/img/bigPictureBook.webp"

import star from '../../assets/svg/filledStart.svg'
import noStar from '../../assets/svg/notFilledStar.svg'
import avatar from '../../assets/svg/comment-avatar.svg'
import media from "../../styles/media.module.scss"
import s from './book-page.module.scss'

export const BookPage = () =>(
    <section className='book-page'>
        <div className={`${s.bread_crumbs__wrapper} ${media.bread_crumbs__wrapper}`}>
            <p className={`${s.bread_crumbs} ${media.bread_crumbs}`}>
                Бизнес книги / Грокаем алгоритмы. Иллюстрированное пособие для программистов и любопытствующих
            </p>
        </div>
        <div className={`${s.book_page__wrapper} ${media.book_page__wrapper}`}>
            <div className={`${s.book_page__general_descr} ${media.book_page__general_descr}`}>
                <div className={`${s.book_page_image} ${media.book_page__image}`}>
                    <img src={coverImg} alt="pic" />
                </div>
                <div className={`${s.book_page__titleBook_wrapper} ${media.book_page__titleBook_wrapper}`}>
                    <h2 className={`${s.book_page__titleBook} ${media.book_page__titleBook}`}>Грокаем
                        алгоритмы. Иллюстрированное пособие для программистов илюбопытствующих</h2>
                    <h3 className={`${s.book_page__authorBook} ${media.book_page__authorBook}`}>
                        Адитья Бхаргава, 2019
                    </h3>
                    <button className={s.btn} type='button'>Забронировать</button>
                </div>
                <div className={`${s.book_page__about_book} ${media.book_page__about_book}`}>
                    <h4 className={` ${s.book_page__about_book_title}
                        ${media.book_page__about_book_title}` }>
                        О книге
                    </h4>
                    <p>Алгоритмы — это всего лишь пошаговые алгоритмы решения задач, и большинство
                        таких задач уже были кем-то решены, протестированы и проверены. Можно,
                        конечно,
                        погрузится в глубокую философию гениального Кнута, изучить многостраничные
                        фолианты с доказательствами и обоснованиями, но хотите ли вы тратить на это
                        свое
                        время?<br /><br />
                        Откройте великолепно иллюстрированную книгу и вы сразу поймете, что
                        алгоритмы —
                        это просто. А грокать алгоритмы — это веселое и увлекательное занятие.</p>
                </div>
            </div>
            <div className={`${s.book_page__raiting} ${media.book_page__raiting}`}>
                <h4 className={`${s.book_page_title} ${media.book_page_title}`}>
                    Рейтинг
                </h4>
                <div className={`${s.book_page__raiting_line} ${media.book_page__raiting_line}`} />
                <div>
                    <img className={s.book__raiting} src={star} alt="star" />
                    <img className={s.book__raiting} src={star} alt="star" />
                    <img className={s.book__raiting} src={star} alt="star" />
                    <img className={s.book__raiting} src={star} alt="star" />
                    <img className={s.book__raiting} src={noStar} alt="no star" />
                    <span>4.3</span>
                </div>
            </div>
            <div className={`${s.book_page__info} ${media.book_page__info}`}>
                <h4 className={`${s.book_page_title} ${media.book_page_title}`}>Подробная информация
                </h4>
                <div/>
                <ul className={`${s.book_page__info_list} ${media.book_page__info_list}`}>
                    <li className={`${s.book_page__info_1} ${media.book_page__info_1}`}>
                        <span className={`${s.book_page__info_list_title}
                            ${media.book_page__info_list_title}`}>
                            Издательство
                        </span>
                        <span className={`${s.book_page__info_list_descr}
                            ${media.book_page__info_list_descr}`}>Питер</span>
                    </li>
                    <li className={`${s.book_page__info_2} ${media.book_page__info_2}`}>
                        <span className={`${s.book_page__info_list_title}
                            ${media.book_page__info_list_title}`}>
                            Год издания
                        </span>
                        <span className={`${s.book_page__info_list_descr}
                            ${media.book_page__info_list_descr}`}>2019</span>
                    </li>
                    <li className={`${s.book_page__info_3} ${media.book_page__info_3}`}>
                        <span className={`${s.book_page__info_list_title}
                            ${media.book_page__info_list_title}`}>
                            Страниц
                        </span>
                        <span className={`${s.book_page__info_list_descr}
                            ${media.book_page__info_list_descr}`}>
                            288
                        </span>
                    </li>
                    <li className={`${s.book_page__info_4} ${media.book_page__info_4}`}>
                        <span className={`${s.book_page__info_list_title}
                            ${media.book_page__info_list_title}`}>
                            Переплёт
                        </span>
                        <span className={`${s.book_page__info_list_descr}
                            ${media.book_page__info_list_descr}`}>
                            Мягкая обложка
                        </span>
                    </li>
                    <li className={`${s.book_page__info_5} ${media.book_page__info_5}`}>
                        <span className={`${s.book_page__info_list_title}
                            ${media.book_page__info_list_title}`}>
                            Формат
                        </span>
                        <span className={`${s.book_page__info_list_descr}
                            ${media.book_page__info_list_descr}`}>
                            70х100
                        </span>
                    </li>
                    <li className={`${s.book_page__info_6} ${media.book_page__info_6}`}>
                        <span className={`${s.book_page__info_list_title}
                            ${media.book_page__info_list_title}`}>
                            Жанр
                        </span>
                        <span className={`${s.book_page__info_list_descr}
                            ${media.book_page__info_list_descr}`}>
                            Компьютерная литература
                        </span>
                    </li>
                    <li className={`${s.book_page__info_7} ${media.book_page__info_7}`}>
                        <span className={`${s.book_page__info_list_title}
                            ${media.book_page__info_list_title}`}>
                            Вес
                        </span>
                        <span className={`${s.book_page__info_list_descr}
                            ${media.book_page__info_list_descr}`}>
                            370 г
                        </span>
                    </li>
                    <li className={`${s.book_page__info_8} ${media.book_page__info_8}`}>
                        <span className={`${s.book_page__info_list_title}
                            ${media.book_page__info_list_title}`}>
                            ISBN
                        </span>
                        <span className={`${s.book_page__info_list_descr}
                            ${media.book_page__info_list_descr}`}>
                            978-5-4461-0923-4
                        </span>
                    </li>
                    <li className={`${s.book_page__info_9} ${media.book_page__info_9}`}>
                        <span className={`${s.book_page__info_list_title}
                            ${media.book_page__info_list_title}`}>
                            Изготовитель
                        </span>
                        <span className={`${s.book_page__info_list_descr}
                            ${media.book_page__info_list_descr}`}>
                            ООО «Питер Мейл». РФ, 198 206, г. Санкт-Петербург, Петергофское ш, д.
                            73, лит. А29
                        </span>
                    </li>
                </ul>
            </div>
            <div className={`${s.book_page__comment} ${media.book_page__comment}`}>
                <h4 className={`${s.book_page_title} ${media. book_page_title}`}>
                    Отзывы
                    <span>2</span>
                </h4>
                <div className={`${s.book_page__comment_line} ${media.book_page__comment_line}`} />
                <div className={`${s.book_page__comment_block} ${media.book_page__comment_block}`}>
                    <div className={`${s.book_page__comment__block_avtor}
                        ${media.book_page_comment__block_avtor}`}>
                        <img src={avatar} alt="avatar" />
                        <span className={ `${s.book_page__comment__block_avtor_name}
                            ${media.book_page__comment__block_avtor_name} `}>
                            Иван Иванов
                        </span>
                        <span className={ `${s.book_page__comment__block_avtor_date}
                            ${media.book_page__comment__block_avtor_date} `}>
                            5 января 2019
                        </span>
                    </div>
                    <div className={` ${s.book_page__comment_raiting}
                        ${media.book_page__comment_raiting} `}>
                        <img className={s.book__raiting} src={star} alt="star" />
                        <img className={s.book__raiting} src={star} alt="star" />
                        <img className={s.book__raiting} src={star} alt="star" />
                        <img className={s.book__raiting} src={star} alt="star" />
                        <img className={s.book__raiting} src={noStar} alt="no star" />
                    </div>
                    <p className={` ${s.book_page__comment_descr} ${media.book_page__comment_descr}
                        `} />
                </div>
                <div className={`${s.book_page__comment_block} ${media.book_page__comment_block}`}>
                    <div className={`${s.book_page__comment__block_avtor}
                        ${media.book_page_comment__block_avtor}`}>
                        <img src={avatar} alt="avatar" />
                        <span className={ `${s.book_page__comment__block_avtor_name}
                            ${media.book_page__comment__block_avtor_name} `}>
                            Иван Иванов
                        </span>
                        <span className={ `${s.book_page__comment__block_avtor_date}
                            ${media.book_page__comment__block_avtor_date} `}>
                            5 января 2019
                        </span>
                    </div>
                    <div className={` ${s.book_page__comment_raiting}
                        ${media.book_page__comment_raiting} `}>
                        <img className={s.book__raiting} src={star} alt="star" />
                        <img className={s.book__raiting} src={star} alt="star" />
                        <img className={s.book__raiting} src={star} alt="star" />
                        <img className={s.book__raiting} src={star} alt="star" />
                        <img className={s.book__raiting} src={noStar} alt="no star" />
                    </div>
                    <p className={` ${s.book_page__comment_descr} ${media.book_page__comment_descr}
                        `}>
                        Учитывая ключевые сценарии поведения, курс на социально-ориентированный
                        национальный проект не оставляет шанса для анализа существующих паттернов
                        поведения. Для современного мира внедрение современных методик предоставляет
                        широкие возможности для позиций, занимаемых участниками в отношении
                        поставленных задач. Как уже неоднократно упомянуто, сделанные на базе
                        интернет-аналитики выводы будут в равной степени предоставлены сами себе.
                        Вот вам яркий пример современных тенденций — глубокий уровень погружения
                        создаёт предпосылки для своевременного выполнения сверхзадачи. И нет
                        сомнений, что акционеры крупнейших компаний, инициированные исключительно
                        синтетически, превращены в посмешище, хотя само их существование приносит
                        несомненную пользу обществу.
                    </p>
                </div>
                <div className={`${s.book_page__comment_block} ${media.book_page__comment_block}`}>
                    <div className={`${s.book_page__comment__block_avtor}
                        ${media.book_page_comment__block_avtor}`}>
                        <img src={avatar} alt="avatar" />
                        <span className={ `${s.book_page__comment__block_avtor_name}
                            ${media.book_page__comment__block_avtor_name} `}>
                            Иван Иванов
                        </span>
                        <span className={ `${s.book_page__comment__block_avtor_date}
                            ${media.book_page__comment__block_avtor_date} `}>
                            5 января 2019
                        </span>
                    </div>
                    <div className={` ${s.book_page__comment_raiting}
                        ${media.book_page__comment_raiting} `}>
                        <img className={s.book__raiting} src={star} alt="star" />
                        <img className={s.book__raiting} src={star} alt="star" />
                        <img className={s.book__raiting} src={star} alt="star" />
                        <img className={s.book__raiting} src={star} alt="star" />
                        <img className={s.book__raiting} src={noStar} alt="no star" />
                    </div>
                    <p className={` ${s.book_page__comment_descr} ${media.book_page__comment_descr}
                        `} />
                </div>
            </div>
            <button className={`${s.btn} ${media.btn}`} type='button'>оценить книгу</button>
        </div>
    </section>
);
