class CpfValido{
    constructor(cpf){
        this.cpf = cpf.replace(/\D+/g, '')
    }

  /*   formataCpf(){
        return this.cpf = this.cpf.replace(/\D+/g, '')
    } */

    valida(){
        if(typeof this.cpf === 'undefined') return false;
        if(this.cpf.length !== 11) return false;
        if(this.isSequencia()) return false;
        const cpfParcial = this.cpf.slice(0, -2)
        const digito1 = this.criaDigito(cpfParcial)
        const digito2 = this.criaDigito(cpfParcial + digito1)

        const novoCpf = cpfParcial + digito1 + digito2
        if(novoCpf !== this.cpf) return false
        return true

    }

    criaDigito(cpfParcial){
        const cpfArray = Array.from(cpfParcial)
        let regressivo = cpfArray.length + 1;
        const digito = cpfArray.reduce((ac,val) =>{
            ac+= (regressivo * Number(val));
            regressivo--;
            return ac
        }, 0)
        let firstDigit = 11 - (digito % 11)
        return firstDigit > 9 ? 0 : firstDigit
    }


    isSequencia(){
        const sequencia = this.cpf[0].repeat(this.cpf.length)
        return sequencia === this.cpf
    }
}

const cpf = new CpfValido('070.987.720-03')
console.log(cpf.valida())
console.log(cpf.cpf) 
