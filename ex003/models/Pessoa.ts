export class Pessoa{
    nome: string;
    altura: number;
    peso: number;

    constructor(name: string, height: number, weight: number){
        this.nome = name;
        this.altura = height;
        this.peso = weight;
    }

    imc(){
        let imc = this.peso / (this.altura * this.altura);
        if (imc < 18.5){
            console.log('Condição Atual: Abaixo do Peso.');
        } else if (imc < 25){
            console.log('Condição Atual: Peso Normal.');
        } else if (imc < 30){
            console.log('Condição Atual: Sobrepeso.');
        } else if (imc < 35){
            console.log('Condição Atual: Obesidade Grau I.');
        } else if (imc < 40){
            console.log('Condição Atual: Obesidade Grau II.');
        } else{
            console.log('Condição Atual: Obesidade Grau III.');
        }
    }
}