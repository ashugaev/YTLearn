import React, {Component} from 'react'

import './SearchForm.scss'

class SearchForm extends Component {
   render() {
       return (
           <div className="searchForm">
               <input placeholder="Введите поисковый запрос" className="searchForm__input"/>
           </div>
       )
   }
}

export default SearchForm