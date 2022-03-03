import { Animal } from "./Animal"

export class Reptil extends Animal{
    private filo: string;
    private classe: string;
    private ordem: string;
    private familia: string;
    private genero: string;

    constructor(pop: string, cien: string, hab: string, od: string, fm: string, gn: string){
        super(pop, cien, hab);
        this.filo = 'chordata';
        this.classe = 'reptilia';
        this.ordem = od;
        this.familia = fm;
        this.genero = gn;
    }

    classificacao(){
        console.log('Nome Popular: %s \nNome Científico: %s', this.nomePopular, this.nomeCientifico);
        console.log('Habitat: %s \nReino: %s', this.habitat, this.reino);
        console.log('Filo: %s \nClasse: %s', this.filo, this.classe);
        console.log('Ordem: %s \nFamília: %s', this.ordem, this.familia);
        console.log('Gênero: %s', this.genero);
        console.log('');
    }

}