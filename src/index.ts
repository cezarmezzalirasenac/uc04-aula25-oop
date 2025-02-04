import { Pessoa } from "./classes/Pessoa";
import { Forma } from "./classes/Forma";
import { Quadrado } from "./classes/Quadrado";
import { Triangulo } from "./classes/Triangulo";

const pessoa = new Pessoa("Cezar", 34, "12345678901", "M");

console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa.cpf);
console.log(pessoa.sexo);

pessoa.idade = 35;

const quadrado = new Quadrado([1, 1, 1, 1]);
quadrado.dimensoes = [1, 2, 3, 4];

const forma2 = new Forma("Triangulo", [1, 2, 3], 3);

// Criação do objeto triangulo
const triangulo = new Triangulo([1, 2, 3]);

// Altera apenas a propriedade das dimensões
triangulo.dimensoes = [2, 2, 2];
console.log(triangulo.getTipo());

const trianguloIsosceles = new Triangulo([1, 2, 1]);
console.log(trianguloIsosceles.getTipo());

const trianguloEscaleno = new Triangulo([1, 2, 3]);
console.log(trianguloEscaleno.getTipo());
