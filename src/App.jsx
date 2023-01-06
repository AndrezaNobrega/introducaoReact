import React from "react";
import "./App.css";

//importações dos componentes
import DiretaPai from "./components/comunicacao/DiretaPai";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import ParOuImpar from "./components/condicional/ParOuImpar";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import Card from "./components/layout/Card";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import Aleatorio from "./components/basicos/Aleatorio";
//é necessário importar apenas o arquivo que será usado diretamente
//pois os demais já estão sendo importados dentro do arquivo
import Familia from "./components/basicos/Familia";

//nesse caso, estamos importando, pois será acessado diretamente neste arquivo
import FamiliaMembro from "./components/basicos/FamiliaMembro";

//recebe dois parâmetros. O que será exibido e o elemento onde será
//JSX, uma 'integração' entre o html e js
//esse modo de escrever uma função é a mais reduzida
// arrow function


// quando colocamos ... (operador spread) o componente acessa todas as propriedades
// que foram colocadas no componente pai
// mesmo enviando como parâmetro no componente pai
// podemos colocar um nome diferente

export default () => (
  <div className="App">
    <h1>Fundamentos React</h1>

    <div className="Cards">
    
    <Card titulo="#09 - Comunicação direta" color="#bb3e03">
      <DiretaPai/>
      </Card>

    <Card titulo="#08 - Rendererização condicional" color="#ee9b00">
        <ParOuImpar numero={1}/>
        <UsuarioInfo/>
      </Card>
    
    <Card titulo="#07 - Desafio tabela produtos" color="#0a9396">
        <TabelaProdutos></TabelaProdutos>
      </Card>

    <Card titulo="#06 - Repetição" color="#ca6702">
        <ListaAlunos></ListaAlunos>
      </Card>


    <Card titulo="#05 - Componente com filho" color="#f6bd60">
        <Familia sobrenome= "Ferreira">
            <FamiliaMembro nome='Arnaldo'/>
            <FamiliaMembro nome='Merli' />
            <FamiliaMembro nome='Creusa' />
        </Familia>
      </Card>

      <Card titulo="#04 - Desafio aleatório" color="#f28482">
        <Aleatorio max={100} min={85}></Aleatorio>
      </Card>

      <Card titulo="#03 - Fragmento" color="#84a59d">
        <Fragmento />
      </Card>

      <Card titulo="# 02- Com parâmetro" color="#f5cac3">
        <ComParametro
          titulo="Situação do aluno"
          aluno="Pedro"
          nota={4.5}
        ></ComParametro>
      </Card>

      <Card titulo=" #01 - Primeiro componente" color="f7ede2">
        <Primeiro></Primeiro>
      </Card>
    </div>
  </div>
);

//desafio: número aleatório
// novo componentes: aleatório
// valor máximo e mínimo é recebido como prop dentro do comp
// será sorteado um número aleatório dentro desse intervalo
