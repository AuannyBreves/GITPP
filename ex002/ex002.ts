class Alimento{
    nome: string;
    sabor: string;
    calorias: number;

    constructor(name: string, flavor: string, kcal: number){
        this.nome = name;
        this.sabor = flavor;
        this.calorias = kcal;
    }

    kcalConsumidas(qtd: number){
        console.log("Em %i %s foram consumidas %i kcal.", qtd, this.nome, this.calorias * qtd);
        console.log('');
    }
}

class Animal{
    nomePopular: string;
    nomeCientifico: string;
    habitat: string;
    reino: string;

    constructor(pop: string, cien: string, hab: string){
        this.nomePopular = pop;
        this.nomeCientifico = cien;
        this.habitat = hab;
        this.reino = 'animalia';
    }

    ondeVive(){
        console.log('O habitat do animal %s (%s) é o(a) %s.', this.nomePopular, this.nomeCientifico, this.habitat);
        if (this.habitat == 'savana'){
            console.log('A savana é um bioma categorizado por uma região plana cuja a vegetação predominante são as plantas gramíneas.')
        } else if (this.habitat == 'selva'){
            console.log('A selva é um bioma florestal categorizado por vegetação densa e grande biodiversidade.')
        } else{
            console.log('Infelizmente, não temos mais informações sobre esse bioma.')
        }
        console.log('');
    }
}

class Pessoa{
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

var alimento_1 = new Alimento('batata(s) frita(s)', 'salgado', 312);
alimento_1.kcalConsumidas(4);

var animal_1 = new Animal('elefante-africano', 'Loxodonta', 'savana');
animal_1.ondeVive();

var pessoa_1 = new Pessoa('Maria', 1.58, 58);
pessoa_1.imc();