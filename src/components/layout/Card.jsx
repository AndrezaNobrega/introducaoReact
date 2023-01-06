import React from "react";
import "./Card.css";

export default (props) => {
    const cardStyle = {
        // após || indica que, caso não seja inserido nada
        // terá a cor vermelha como valor 'default'
        backgroundColor: props.color || '#f6bd60',
        borderColor: props.color || '#f6bd60',
    }
  return (
    <div className="Card" style={cardStyle}>
        <div className="Title"> {props.titulo} </div>
        <div className="Content"> 
            {props.children}
        </div>
    </div>
  );
};
