/*
useEffect na prática
Descrição:
Você deverá criar um componente simples com React Native. 
O componente deve fazer uma requisição a uma API externa utilizando 
o hook useEffect, e exibir os dados retornados na tela. O objetivo 
é que os dados sejam buscados assim que o componente for montado 
(quando a tela é carregada).

Requisitos:
Estrutura Inicial: Crie um componente funcional chamado ApiConsulta.
useState para Gerenciar Estado: Defina um estado para armazenar os dados retornados pela API.
useEffect para Efeito Colateral: Utilize o useEffect para fazer uma requisição à API 
(ou simular a chamada com setTimeout), atualizando o estado com os dados retornados.
Exibir os Dados: Quando os dados forem carregados, exiba-os na tela em formato de lista.
Sua resposta
*/

import React, { useEffect, useState } from "react"
import { Text, ScrollView } from "react-native"

interface IPost {
    id: number
    title: string
    status: string
}

export default function ApiConsulta() {
    const [posts, setPosts] = useState<IPost[]>([])
    useEffect(() => {
        fetch('https://jsonplaceholder.org/posts')
            .then(response => response.json())
            .then(json => setPosts(json))
    }, [])
    return (
        <ScrollView >
            {
                posts.map((post) => (
                    <Text key={post.id}>
                        {post.id} - {post.title}
                    </Text>
                ))
            }

        </ScrollView>
    )
}

/*

Feedback da entrega
Correto.

O código fornecido está correto e atende aos requisitos solicitados. 
Aqui está uma breve explicação:

Estrutura Inicial: O componente funcional ApiConsulta está criado 
corretamente.

useState para Gerenciar Estado: O estado posts é definido corretamente 
usando o useState para armazenar os dados retornados pela API.

useEffect para Efeito Colateral: O useEffect é utilizado corretamente 
para fazer a requisição à API (neste caso, https://jsonplaceholder.org/posts) 
e atualizar o estado posts com os dados retornados.

Exibir os Dados: Quando os dados são carregados, eles são exibidos na 
tela em formato de lista usando o método map do array posts.

O código está funcionando conforme esperado e atende aos requisitos do exercício.
*/