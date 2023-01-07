import React from 'react'

/* recebe um evento - o + é para converter p num 
comunicação direta: enviar o passo
no setPasso, o componente filho envia o valor de 
voltar por meio do target.value
o que faz com que seja uma comunicação indireta
*/
export default props => {
    return(
        <div>                        
            <label htmlFor="passoInput">Passo:</label>
            <input id="passoInput"type="number" value={props.passo} 
            onChange = {e => props.setPasso(+e.target.value)}/>           
        </div>
    )
}
