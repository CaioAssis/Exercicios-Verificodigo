/*
Exibir Números de Fibonacci
Neste exercício, você criará um componente React que aceita um número como entrada do usuário e exibe 
o número correspondente na sequência de Fibonacci.

Componente Principal:Crie um componente chamado FibonacciComponent que renderiza um 
formulário simples com um campo de entrada (input) e um botão para calcular.
Estado Local: O componente deve utilizar o estado local para armazenar o número digitado 
pelo usuário e o número Fibonacci correspondente.
Função Fibonacci: Inclua uma função para calcular o número Fibonacci com base no valor inserido.
Exibição do Resultado: Após o usuário clicar no botão, o componente deve exibir o resultado na tela.

Exemplo de Comportamento Esperado

O usuário digita 7 no campo de entrada.
Ao clicar no botão "Calcular Fibonacci", o número 13 (que é o 7º número na sequência de Fibonacci) é exibido na tela.

Sua resposta
*/

import React, { useState } from "react"

export default function FibonacciComponent() {

    const [fib, setFib] = useState(0)
    const [resultado, setResultado] = useState<string>('')

    function Calcular() {
        console.log(fib)
        let valor = ( Math.pow( (1 + Math.sqrt(5) ) / 2 , fib) - Math.pow( ( 1 - Math.sqrt(5) ) / 2 , fib) ) / Math.sqrt(5)
        setResultado(valor.toFixed(0))
    }
    return (
        <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            gap: 10}}>

            <input 
            style={{backgroundColor: '#1111', borderRadius: 10, textAlign: 'center'}}
            type='number' 
            placeholder="Digite a posição desejada"
            onChange={(num) => setFib(+num.target.value)}
            />

            <button onClick={Calcular} style={{backgroundColor:'lightblue', padding: 5, borderRadius: 10}}>Calcular Fibonacci</button>

            <text style={{fontSize: 30}}>{resultado}</text>

        </div>
    )
}

/*

Feedback da entrega
Incorreto.

Embora o código esteja quase correto, existem algumas melhorias que poderiam ser feitas para 
torná-lo mais eficiente e alinhado com as melhores práticas de desenvolvimento em React.

A função para calcular o número de Fibonacci não está correta. A fórmula utilizada não é a 
mais adequada para calcular o n-ésimo número da sequência de Fibonacci. Uma alternativa mais 
simples e eficiente seria utilizar um loop iterativo ou uma função recursiva para calcular o 
número de Fibonacci.

O estado local do componente não está sendo utilizado de forma adequada. Ao invés de armazenar 
o valor digitado pelo usuário (que é o índice da sequência de Fibonacci) e o resultado, seria 
melhor armazenar apenas o índice digitado e calcular o número de Fibonacci correspondente sempre 
que o valor mudar.

O uso do toFixed(0) para exibir o resultado não é necessário, uma vez que os números da sequência 
de Fibonacci são sempre inteiros.

Aqui está uma versão corrigida do código:

/////
import { useState } from \"react\"

export default function FibonacciComponent() {
  const [index, setIndex] = useState(0)
  const [fibNumber, setFibNumber] = useState(0)

  function calculateFibonacci(n) {
    if (n <= 1) {
      return n
    }
    return calculateFibonacci(n - 1) + calculateFibonacci(n - 2)
  }

  function handleInputChange(event) {
    const newIndex = parseInt(event.target.value)
    setIndex(newIndex)
    setFibNumber(calculateFibonacci(newIndex))
  }

  return (
    <div style={{
      display: \'flex\',
      flexDirection: \'column\',
      alignItems: \'center\',
      gap: 10
    }}>
      <input
        style={{
          backgroundColor: \'#1111\',
          borderRadius: 10,
          textAlign: \'center\'
        }}
        type=\'number\'
        placeholder=\"Digite a posição desejada\"
        onChange={handleInputChange}
      />

      <button style={{
        backgroundColor: \'lightblue\',
        padding: 5,
        borderRadius: 10
      }}>
        Calcular Fibonacci
      </button>

      <text style={{
        fontSize: 30
      }}>
        {fibNumber}
      </text>
    </div>
  )
}
/////

Nessa versão corrigida, utilizamos uma função recursiva calculateFibonacci para calcular 
o número de Fibonacci correspondente ao índice digitado pelo usuário. Também atualizamos 
o estado local do componente sempre que o valor do índice é alterado, e exibimos o resultado 
diretamente, sem a necessidade de usar o toFixed(0).
*/