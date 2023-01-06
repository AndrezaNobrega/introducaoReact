import React from 'react'

export default props =>{
    return(
        <div>
            <div><strong>Nome: </strong>{props.nome}</div>
            <div><strong>Idade: </strong> {props.idade}</div>
            <div><strong>É nerd?: </strong> {props.nerd ? 'Verdadeiro' : 'Falso'}!</div>
        </div>
    )
}