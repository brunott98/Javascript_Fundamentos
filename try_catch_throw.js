function tratamento_erro(erro){
        //throw new Error("É necessário atualizar o jogo.");
       //throw 7  para jogar um número
      //throw false 
     //throw 7  para jogar um número
    //throw "É necessário atualizar o jogo."
    throw{
        Erro
    }
    
}


function AumentoDeExp(programador){
    try{
        while(programador.experiencia<=10){
        
            console.log(`${programador.nome} ganhou:${programador.experiencia} EXP para seu personagem ${programador.nick}`)
            programador.experiencia = programador.experiencia +1; 
        }
        console.log('Brunott98 desbloqueou a conquista: "JAVASCRIPT WANDERER"'); 
    }catch(e){
        tratamento_erro(e);
    }finally{
        console.log("\nRodada finalizada com sucesso.")
    }

}

const programador ={
    nome:"Bruno Teixeira",
    nick:"Childe Teixeira",
    experiencia:0
}

const Erro = {
    mensagem:"É necessário atualizar o jogo",
    data: (new Date()).toString()
}


AumentoDeExp(programador);