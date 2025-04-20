/*
Botão clicado

Neste exercício, você vai criar um componente funcional em React Native que exibe um botão na tela. 
O texto dentro do botão deve mostrar quantas vezes ele foi clicado. Toda vez que o botão for clicado, 
o número exibido deve ser incrementado.

Crie um componente funcional chamado ContadorDeCliques.

Utilize o hook useState para criar uma variável de estado chamada contador que será inicializada com o valor 0. contador irá armazenar o número de cliques no botão.
Sua resposta
*/

import React, { useState } from "react"
import { View, Button } from "react-native"

export default function ContadorDeCliques(){
    const [contador, setContador] = useState<number>(0)
    function Contar(){
        setContador(contador + 1)
    }
    return (
        <View>
            <Button title={contador.toString()} onPress={Contar}></Button>
        </View>
    )
}

/*
Feedback da entrega
Correto.

O código fornecido está correto e implementa o exercício proposto. Vamos analisar cada parte:

O componente funcional ContadorDeCliques é criado corretamente.

O hook useState é utilizado para criar a variável de estado contador e sua função de atualização setContador.

A função Contar é definida para incrementar o valor de contador sempre que o botão é pressionado.

O componente Button é renderizado dentro de um View e exibe o valor atual de contador como o título do botão. 

Ao clicar no botão, a função Contar é chamada, atualizando o valor de contador e, consequentemente, o título do botão.

Portanto, o código está correto e implementa o exercício solicitado.
*/