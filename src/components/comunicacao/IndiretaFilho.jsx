import React from 'react'

//precisamos colocar uma div para envolver o retorno
export default props =>{

    return(
        <div>
            <div> 
                Filho
            </div>
            <button onClick={
                function(e) {
                    props.quandoClicar('Jackson', 53, true)
                }
            }>
                Fornecer Informações</button>
        </div>
    )
}