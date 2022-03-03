import { Alimento } from "./Alimento"

export class Fruta extends Alimento{
    private ph: string;
    planta: string;
    private vitamina: string;

    constructor(name: string, flavor: string, kcal: number, ph: string, plant: string, vit: string){
        super(name, flavor, kcal);
        this.ph = ph;
        this.planta = plant;
        this.vitamina = vit;
    }

    porqueComer(){
        if (this.ph === 'alcalino'){
            console.log('A fruta %s é rica em vitamina %s e seu PH é %s, o que a torna ideal para melhorar o funcionamento do intestino e previnir doenças.', this.nome, this.vitamina, this.ph);
        } else {
            console.log('A fruta %s é rica em vitamina %s e seu PH é %s, o que a torna ideal para pessoas com problemas de refluxo e gastrite.')
        }
        console.log('');
    }
}