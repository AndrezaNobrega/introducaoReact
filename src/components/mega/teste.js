

function soma(resposta){
    const array = []

    for ( var i = 0; i< resposta; i++){
        novoNumero = parseInt(Math.random() * (59) + 1)
        if(array.includes(novoNumero)){
            i--,
            console.log('repetiu',array )  

        }else(
            array.push(novoNumero),
            console.log(array)  
        
        )        
    }    
            return(array)
}



    
    console.log(soma(10))

