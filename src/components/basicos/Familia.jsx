import React, { cloneElement } from "react";

//o parâmetro do componente pai ñ é passado automaticamente
// para o componente filho

//portanto, nesse caso, acessamos novamente como prop

//chamamos todos os filhos
//para cada um desses filhos
//executamos => - nesse caso, temos um array de filhos

export default (props) => {
  return (
    <div>
      {React.Children.map(props.children, (chield) => {
        return cloneElement(chield, props);
      })}
    </div>
  );
};
