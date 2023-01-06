import React from 'react'

//precisamos colocar uma div para envolver o retorno
//componente com estado
export default props =>{
    const min = 50
    const max = 100
    const gerarIdade = () => parseInt(Math.random() * (max - min) + min ) 
    const gerarNerd = () => Math.random()> 0.5
    return(
        <div>
            <button onClick={
                function(e) {
                    props.quandoClicar('Jackson', gerarIdade(), gerarNerd())
                }
            }>
                Fornecer Informações</button>
        </div>
    )
}