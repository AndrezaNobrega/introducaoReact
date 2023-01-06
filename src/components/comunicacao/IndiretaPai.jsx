import React, {useState} from 'react'
import IndiretaFilho from './IndiretaFilho'

//estado dentro do componente

export default props =>{
    const[nome, setNome] = useState('?')
    const[idade, setIdade] = useState(0)   
    const[nerd, setNerd] = useState(false)    

    // alteramos os dados
    //a interface irá refletir essa mudança
    function forncerInformacoes(nome, idade, nerd){
        setNome(nome)
        setIdade(idade)
        setNerd(nerd)
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