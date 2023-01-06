import React from "react";
//rendereização condicional
//teste impar ou par

export default (props) => {
  const isPar = props.numero % 2 === 0;
  return <div>{isPar ? <span>Par</span> : <span>Ímpar</span>}</div>;
};
