import "./Contador.css"
import React, {Component} from "react";

import PassoForm from "./PassoForm";
import Botoes from "./Botoes";
import Display from "./Display";

//baseado em classe
//lembrar de utilizar o this, ao tratar componentes baseados em classe
class Contador extends Component {

    state = {
        numero: this.props.numeroInicial || 0,
        passo:  this.props.passoInicial || 1,
    }

    inc = () => {
        this.setState(
            {
                numero: this.state.numero + this.state.passo
            }
        )
    }

    dec = () => {
        this.setState(
            {
                numero: this.state.numero - this.state.passo
            }
        )
    }
/*
preferência em usar funções arrow para evitar problemas
com o this
*/
    setPasso = (novoPasso) => {
        this.setState({
            passo: novoPasso,
        })
    }

    render(){
        return (
            <div className="Contador">
                <h2>Contador</h2>
                <Display numero={this.state.numero}/>
                <PassoForm passo={this.state.passo} setPasso={this.setPasso}/>
                {/* aqui ele chama os dois botões de vez, ent colocamos ambos os param*/}
                <Botoes incrementar={this.inc} decrementar={this.dec}></Botoes>
            </div>
        )
    }

}

export default Contador