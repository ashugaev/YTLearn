import React, { Component } from "react";
import ReactDOM from "react-dom";
import UserInfo from "./UserInfo";


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

export default Body;

// Получаем dom element в который будем вставлять контент
const wrapper = document.getElementById("root");
ReactDOM.render(<Body2 />, wrapper);
