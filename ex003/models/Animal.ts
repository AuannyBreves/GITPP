export class Animal{
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