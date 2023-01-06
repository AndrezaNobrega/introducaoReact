//criar uma tabela onde mostre os produtos
// em suas devidas colunas
import React from "react";
import produtos from "../../data/produtos";

export default props =>{
    const { products } = props;
    return (
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
              <td>{produtos.preço}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }