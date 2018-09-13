1. Компонент, в котором будет управление роутом заключием в тег

<BrowserRouter></BrouserRouter>

2. Там где хотим вставить компонент в соответсвии с роутом ставим

   <Route path='/page' component={ComponentForRender}>

Что бы исключить адреса '/page/....'
Добавим атрибут

match
