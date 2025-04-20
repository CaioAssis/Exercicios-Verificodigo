/*
Conversor de Temperatura
Crie uma função em JavaScript que converta uma temperatura de Celsius para Fahrenheit. A função deve:

Receber um parâmetro numérico representando a temperatura em Celsius Calcular a temperatura equivalente em 
Fahrenheit Retornar o resultado arredondado para uma casa decimal

Lembre-se que a fórmula para converter Celsius para Fahrenheit é: F = (C * 9/5) + 32

Sua resposta
*/

//Função de conversão
function ConversorTemperatura(celsius){

    let fahrenheit = (celsius * 9 / 5) + 32
    return fahrenheit.toFixed(1)

}

//Escolha do valor em ºC
const celsius = 20

//Call da função
console.log(`\nO resultado da conversão é ${ConversorTemperatura(celsius)}\n`)

/*
Feedback da entrega
Correto.

A função ConversorTemperatura está implementada corretamente e atende aos requisitos do exercício. 
Ela recebe um parâmetro numérico representando a temperatura em Celsius, 
calcula a temperatura equivalente em Fahrenheit usando a fórmula fornecida e retorna o resultado arredondado para uma casa decimal,
conforme solicitado.
*/