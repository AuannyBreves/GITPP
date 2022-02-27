class Alimento{
    nome: string;
    sabor: string;
    cor: string;
    consumido: boolean = false;

    constructor(nome: string, sabor: string, cor: string) {
        this.nome = nome;
        this.sabor = sabor;
        this.cor = cor;
    }

    comerAgora(){
        let res = (this.consumido) ? ' já foi consumido antes.' : ' foi consumido agora.';
        console.log('O alimento ' + this.nome + res);
        this.consumido = true;
    }

}

class Jogo{
    nome: string;
    jogadores: number;
    genero: string;

    constructor(nome: string, jogadores: number, genero: string) {
        this.nome = nome;
        this.jogadores = jogadores;
        this.genero = genero;
    }

    iniciarJogo(){
        console.log("O jogo escolhido foi " + this.nome + ". Vamos nos divertir!")
    }
}

class Roupa{
    material: string;
    valorPago: number;
    conforto: boolean;

    constructor(material: string, valorPago: number, conforto: boolean) {
        this.material = material;
        this.valorPago = valorPago;
        this.conforto = conforto;
    }

    opiniaoCliente(){
        let caro = (this.valorPago >= 300) ? ' é caro ' : ' não é caro ';
        let confortavel = (this.conforto == true) ? ' é confortável.' : ' não é confortável.';
        console.log('Esse produto' + caro + 'e' + confortavel);
    }

}

var a1 = new Alimento('limão','azedo', 'verde');
var a2 = new Alimento('banana','doce', 'amarelo')

var j1 = new Jogo('BF4', 1, 'Tiro');
var j2 = new Jogo('Mario', 2, 'Plataforma')

var r1 = new Roupa('Algodão', 150, true);
var r2 = new Roupa('Poliester', 70, false);

a1.comerAgora()
a1.comerAgora()
a2.comerAgora()
j1.iniciarJogo()
j2.iniciarJogo()
r1.opiniaoCliente()
r2.opiniaoCliente()