import React from 'react'
import IndiretaFilho from './IndiretaFilho'

export default props =>{
    let nome = '?'
    let idade = 0
    let nerd = false

    // nome idade nerd
    function forncerInformacoes(nomeParam, idadeParam, nerdParam){
        nome = nomeParam
        idade = idadeParam
        nerd = nerdParam
    }

    return(
        <div>
            <div>
                <span>{nome} </span>
                <span>{idade} </span>
                <span>{nerd ? 'É nerd' : 'Não é nerd'}</span>
            </div>

            <IndiretaFilho quandoClicar={forncerInformacoes}></IndiretaFilho>
        </div>
    )
}