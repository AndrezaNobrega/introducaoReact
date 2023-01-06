import React from "react";
import DiretaFilho from "./DiretaFilho";

export default (props) => {
  return (
    <div>
      <DiretaFilho nome="Ricardo" idade={20} nerd={true}></DiretaFilho>
      <DiretaFilho nome="Vanderlei" idade={15} nerd={false}></DiretaFilho>
    </div>
  );
};

//passamos propriedades pai -> filho por meio da comunicação direta