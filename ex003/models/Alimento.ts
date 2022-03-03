export class Alimento{
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