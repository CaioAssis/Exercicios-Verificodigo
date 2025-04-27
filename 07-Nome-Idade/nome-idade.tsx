/*
Meu nome e idade
Descrição:
Você deverá implementar uma aplicação de formulário simples em React Native, 
onde o usuário pode inserir o nome e a idade. À medida que o usuário digita, 
os dados devem ser exibidos em tempo real na tela. O estado dos campos do 
formulário será gerenciado utilizando o hook useState.

Requisitos:
Gerenciamento de Estado: Utilize o useState para gerenciar o valor de dois 
campos: nome e idade.
Formulário: Crie dois campos de entrada de texto (TextInput), um para o nome 
e outro para a idade. À medida que o usuário digitar nos campos, os valores 
devem ser atualizados no estado.
Exibição dos Dados: Exiba abaixo dos campos de entrada o nome e a idade que 
foram digitados, atualizando em tempo real conforme o usuário altera o conteúdo 
dos campos.
Validação Simples: Exiba uma mensagem de erro se o campo da idade não for um número.

Sua resposta
*/

import React, { useState } from "react"
import { StyleSheet, View, Text } from "react-native"
import { TextInput } from "react-native-paper"


export default function NomeIdade() {
    const [campo, setCampo] = useState<{ nome: string, idade: number }>({ nome: '', idade: 0 })

    return (

        <View style={styles.container}>
            <TextInput placeholder="Digite seu nome" style={styles.mt20} onChangeText={(n) => setCampo({ ...campo, nome: n })} />
            <TextInput placeholder="Digite sua idade" style={styles.mt20} onChangeText={(n) => setCampo({ ...campo, idade: parseInt(n) })} />
            <Text style={styles.mt20}>{campo.nome == '' ? 'Nome' : campo.nome}</Text>
            <Text style={styles.mt20}>{Number.isNaN(campo.idade) ? 'Idade não é um número!' : campo.idade}</Text>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#fff',
        padding: 20,
    },
    mt20: {
        marginTop: 20,
    },
})

/*
Feedback da entrega
Correto.

O código apresentado está correto e atende aos requisitos solicitados. 
Ele utiliza o hook useState para gerenciar o estado dos campos de nome e 
idade, que são atualizados à medida que o usuário digita nos campos de 
texto. Além disso, o código exibe o nome e a idade em tempo real, e também 
valida se a idade digitada é um número válido.

*/