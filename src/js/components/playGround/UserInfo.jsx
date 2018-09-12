import React from "react";

const UserInfo = props => (
  <div>
    <p>Имя {props.name}</p>
    <p>Возраст {props.age}</p>
  </div>
);

export default UserInfo;
