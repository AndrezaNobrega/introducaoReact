import React from "react";
import alunos from "../../data/alunos";

//usando o id como chave para a lista
//list style none p tirar aquela bolinha
export default props =>{
    const alunosLi = alunos.map(aluno=> {
        return(
            <li key={aluno.id}>
                {aluno.id}: {aluno.nome} -- {aluno.nota}
            </li>
        )
    })
    return(
        <div>
            <ul style={{listStyle: 'none'}}>
                {alunosLi}
            </ul>
        </div>
    )
}