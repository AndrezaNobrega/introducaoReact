import React from "react"


export default function Aleatorio(props){
    const numero = Math.random()* (props.max - props.min) + props.min;
    return (
    <div>
            <strong>Valor máximo: <h2>{props.max}</h2></strong>
            <strong> Valor mínimo:<h3>{props.min}</h3></strong>        
        <p>
            O número sorteado agora é:
            <strong> {numero} </strong> !
        </p>

    </div>
    )
}

  