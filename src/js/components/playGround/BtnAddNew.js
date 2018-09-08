import React from "react";
import { Button } from "react-bootstrap";

const BtnAddNew = (props) => (
    <Button 
      bsStyle="success"
      onClick={BtnClick}>
         { props.text }
    </Button>
);

const BtnClick = () => {
    console.log('Привет');
}

export default BtnAddNew;