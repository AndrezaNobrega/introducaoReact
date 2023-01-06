//criar uma tabela onde mostre os produtos
// em suas devidas colunas
import './TabelaProdutos.css'
import React from "react";
import produtos from "../../data/produtos";

//to fixed, para programar apenas duas casas decimais

export default props =>{
    const { products } = props;
    return (
        <div className="TabelaProdutos">
            <table>
                <caption>Tabela de produtos</caption>
                <thead>
                <tr>
                    <th>id</th>
                    <th>Nome</th>
                    <th>Preço</th>
                </tr>
                </thead>
                <tbody>
                {produtos.map(produtos => (
                    <tr key={produtos.id}>
                    <td>{produtos.id}</td>
                    <td>{produtos.nome}</td>
                    <td>R$ {produtos.preço.toFixed(2).replace('.', ',')}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
  }