import React, { Component } from "react";
import ReactDOM from "react-dom";
import UserInfo from "./UserInfo";

const wrapper = document.getElementById("root");


// Компонент 1
class Body extends Component {
  render() {
    return (
     <div>
       <UserInfo name="Петр" age="26"/>
     </div>
    );
  }
}

let app = {
    name: 'Корягин',
    age: 35,
    location: '',
    lovelyFood: 'Макарохи',
    weight: ''
}

let userName = 'Ильюха';
let justText = 'Блиблаблу';

function getLocation(location) {
    return location || 'Unknown'
}

function getLovelyFood(food) {
    if(food) {
        return (
        <b>
            {food} это хорошо
        </b>
        )
    } else {
        return <b> Он не любитель поесть </b>
    }
}

// Компонент 2
class Body2 extends Component {
  render() {
    return (
     <div>
       {/*Можем сделать условие через &&*/}
       {app.age >= 35 && <b>Age: {app.age}</b>}
       {(app.age && app.age >= 35) && <b>Age: {app.age}</b>}
       <UserInfo name={userName + '-Братуха'} age="39"/>
       <p>{app.name}</p>
       <p>Живет в {getLocation(app.location)}</p>
       {getLovelyFood(app.lovelyFood)}
       <p>{app.weight || 'Невесом'}</p>
     </div>
    );
  }
}

// Компонент 3
let app2 = {
  counter: 0
}

let counter = 0;

const addOne = () => {counter++; renderCounterApp();}
const resetCounrer = () => {counter = 0; renderCounterApp();}
const minusOne = () => {counter--; renderCounterApp();}

const onFormSubmit = (event) => {
  event.preventDefault();
  const option = event.target.elements.option.value
  const optionInt = parseInt(option);
  if(optionInt) {
    counter += optionInt;
    renderCounterApp();
    console.log(option)
  }
}

const renderCounterApp = () => {
  class Body3 extends Component {
    render() {
      return (
        <div>
          <button onClick={addOne}>Conter++</button>
          <button onClick={minusOne}>Conter--</button>
          <button onClick={resetCounrer}>reset</button>  

          <form onSubmit={onFormSubmit}>
            <input type="text" name="option" />
            <input type="submit" style={{marginTop: '10px'}} value="Add to counter" />
          </form>

          <h1 className="className">{counter}</h1>
        </div>
      )
    }
  }

  // Получаем dom element в который будем вставлять контент
  const wrapper = document.getElementById("root");
  ReactDOM.render(<Body3 />, wrapper);
}

// renderCounterApp();



// Компонент 4
let listOfItems = [];
let visibility = true;

const addToList = (event) => {
   const value = event.target.elements.option.value
   listOfItems.push(value); 
   renderCounterApp2()
}

const clearList = () => {
  listOfItems = []
  renderCounterApp2()
}

const chooseTask = () => {
  const randIndex = Math.floor(Math.random() * listOfItems.length )
  const option = listOfItems[randIndex]
  console.log(option)
}

const hideAll = () => {
  visibility = !visibility
  renderCounterApp2()
}

function deleteItem(item) {
   console.log(item)
}

const renderCounterApp2 = () => {
  class Body4 extends Component {
    render() {
      return (
        <div>
             <button disabled={listOfItems.length === 0} onClick={(chooseTask({}))}>Чем заняться?</button>
             {(listOfItems.length > 0) ? 'Список дел:' : 'Отдохнем немножечко'} {(listOfItems.length > 0) && listOfItems.length}
             {visibility && 
              <ol>
                {
                  listOfItems.map((item) => <li key={item}>{item} <span onClick={deleteItem}>X</span></li>)
                }
              </ol>
             }
             <form onSubmit={addToList}>
               <input name="option" type="text"/>
               <input type="submit" value="Добавить в список" />
             </form>
             <button onClick={clearList}>Почистить</button>
             <button onClick={hideAll}>{ visibility ? 'Спрятать все' : 'Показать все'}</button>

        </div>
      )
    }
  }

  // Получаем dom element в который будем вставлять контент
  ReactDOM.render(<Body4 />, wrapper);

}

renderCounterApp2()