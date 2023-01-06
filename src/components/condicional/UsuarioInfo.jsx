import React from "react";
import If, {Else} from "./If";

//atalho p comentar linux ctrl + shift + a

export default props => {
    const usuario = props.usuario || {}
    return(
        <div>
{/*             <If test={usuario && usuario.nome}>
                Seja vem vindo <strong> {usuario.nome}</strong>!
           </If>
           <If test={!usuario || !usuario.nome}>
                Seja vem vindo <strong> usuário anônimo</strong>!
           </If> */}

           <If test={usuario && usuario.nome}>
                Seja vem vindo <strong> {usuario.nome}</strong>!

                <Else test={!usuario || !usuario.nome}>
                Seja vem vindo <strong> usuário anônimo</strong>!
                </Else>
           </If>
        </div>
    )
}