//desafio da mega:
//recebe o input: quantidade de números
//gera x números aleatórios
// n podem repetir
import "./Mega.css"
import React, { Component } from "react"


class Mega extends Component{
    state = {
        numerosSorteio: this.props.numeroInicial || 6,
        array:  this.props.arrayInicial || [0,0],
    };

    
    sorteio = () => {
        let novoArray = []
        for ( var i = 0; i< this.state.numerosSorteio; i++){
            let novoNumero = parseInt(Math.random() * (59) + 1)
            if(novoArray.includes(novoNumero)){
                i--    
            }else(
                novoArray.push(novoNumero)            
            )        
        }    
        this.setState({
            array: novoArray.sort((n1, n2) => n1 - n2)  //ordem crescente  

        })
    }

    setNumerosSorteados = (e) => {
        this.setState({
            numerosSorteio : +e.target.value,
        })
    }



    render(){
        return(
            <div className="Mega">
                <h2>MegaSena</h2>
                    <h2>{this.state.array.join(' - ')}</h2> 
                    <label htmlFor="">Sorteio de {this.state.numerosSorteio} números </label>  
                    <div>
                        <label htmlFor="numerosSorteios">Digite a quantidade:</label>
                        <input 
                        min="1"
                        max = "15"
                        id="numerosSorteios"
                        type="number" 
                        value={this.state.numerosSorteio} 
                        onChange={this.setNumerosSorteados}/>
                    </div> 
                    <button onClick={this.sorteio}>sorteio</button>                
                    
            </div>
        )
    }
}


export default Mega