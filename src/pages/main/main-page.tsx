
import { useState } from 'react';
import { ListOfBooksByAside } from 'widgets/ui/list-of-books-by-aside/list-of-books-by-aside';
import { ListOfContract } from 'widgets/ui/list-of-contract/list-of-contract';
import { ListOfRules } from 'widgets/ui/list-of-rules/list-of-rules';
import { PanelListOfRelatedBooks } from 'widgets/ui/panel-list-of-related-books/panel-list-of-related-books';

import media from '../../../styles/media.module.scss'
import mainStyle from'./main-page.module.scss';

export const MainPage = () => {
    const [filter, setFilter] = useState<'books' | 'rules' | 'contract'>('books')

    const clickFilterRules = () => {
        setFilter('rules')
    }
    const clickFilterContract = () => {
        setFilter('contract')
    }

    return(
    <section className={`${mainStyle.main_page}`}>
        <div className={`${mainStyle.container}`}>
            <ListOfBooksByAside  
                clickRules={() => clickFilterRules()}
                clickContract={() => clickFilterContract()}
            />
            {
                filter === 'rules'? 
                    <ListOfRules/>: 
                    filter === 'contract'?
                    <ListOfContract/> :
                    <PanelListOfRelatedBooks/>
            }
        </div>
    </section>
)};
