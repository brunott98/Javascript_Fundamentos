class Lancamento {
    constructor(nome = 'Generico', valor = 0){   
        this.nome = nome
        this.valor =  valor
    }   
}

class CicloFinanceiro {
    constructor(mes,ano){
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }
    addLancamentos(...lancamentos){
        lancamentos.forEach(l=>this.lancamentos.push(l))
    }
    sumario(){
        let valorConsolidado = 0
        this.lancamentos.forEach(l=>{
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const salario = new Lancamento('Salario',4200)
const contaDeLuz = new Lancamento('Luz',-180)

const contas = new CicloFinanceiro(6,2018)
contas.addLancamentos(salario,contaDeLuz)
console.log(contas.sumario())

/********************************************************************************************************** */


class Avo{
    constructor(sobrenome){
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo{
    constructor(sobrenome, profissao = "professor"){
        super(sobrenome)
        this.profissao = profissao
    }
}

class Filho extends Pai{
    constructor(){
        super('Silva')
    }
}

const f1 =  new Filho
console.log(f1)