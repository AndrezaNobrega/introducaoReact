import React from "react"
export default function ComParametro(props){
    const status = props.nota >= 7 ? 'Aprovado' : ' em Recuperação'
    return (
    <div>
        <h2> {props.titulo}</h2>
        <p>
            <strong><h2>{props.aluno}</h2></strong>
            tem nota
            <strong><h3>{props.nota}</h3></strong>
            e está
            <strong> {status} </strong> !
        </p>

    </div>
    )
}