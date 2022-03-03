import { Alimento } from "./models/Alimento"; 
import { Fruta } from "./models/Fruta";
import { Animal } from "./models/Animal";
import { Reptil } from "./models/Reptil";
import { Pessoa } from "./models/Pessoa";

var alimento_1 = new Alimento('torta(s) de limão', 'doce', 362);
alimento_1.kcalConsumidas(5);

var fruta_1 = new Fruta('laranja', 'azedo', 47,  'alcalino', 'laranjeira', 'C');
fruta_1.porqueComer();

var animal_1 = new Animal('leão', 'panthera leo', 'savana');
animal_1.ondeVive();

var reptil_1 = new Reptil('mamba negra', 'd. polylespis', 'selva',
'squamata', 'elapidae', 'dendroaspis');
reptil_1.classificacao();

var pessoa_1 = new Pessoa('Carlos', 1.84, 95);
pessoa_1.imc()