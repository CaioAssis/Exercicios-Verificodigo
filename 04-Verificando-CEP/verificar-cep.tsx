/*
Verificando o CEP
Neste exercício, você criará um componente React que aceita um número (CEP) 
como entrada do usuário e exibe qual os detalhes daquele endereço.

Componente Principal:Crie um componente chamado CEPForm que renderiza um 
formulário simples com um campo de entrada (input) e um botão para pesquisar.
Estado Local: O componente deve utilizar o estado local para armazenar o 
número digitado pelo usuário e a resposta da API (pode ser utilizado aqui a ViaCEP).
Exibição do Resultado: Após o usuário clicar no botão, o componente deve 
exibir o resultado na tela.

Sua resposta
*/

import React, { useState } from "react"
import api from "../helpers/axios"

interface CEPProps {
    cep: string
    logradouro: string
    complemento: string
    unidade: string
    bairro: string
    localidade: string
    uf: string
    estado: string
    regiao: string
    ibge: string
    gia: string
    ddd: string
    siafi: string
}

export default function CEPForm() {
    const [CEP, setCEP] = useState<string>('')
    const [mostraCEP, setMostraCEP] = useState<CEPProps>(
        {
            cep: "",
            logradouro: "",
            complemento: "",
            unidade: "",
            bairro: "",
            localidade: "",
            uf: "",
            estado: "",
            regiao: "",
            ibge: "",
            gia: "",
            ddd: "",
            siafi: ""
        }
    )

    async function Procurar() {
        if (CEP) {
            let val = CEP.replace(/[a-zA-Z\s-]/g, '')
            try {
                await api.get(`/${val}/json/`)
                .then((resposta) => {
                    if (resposta.status === 200) {
                        setMostraCEP(resposta.data)
                    }
                })
                
            }
            catch (e) {
                alert(e)
            }
        }

    }

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 10
        }}>

            <input
                style={{ backgroundColor: '#1111', borderRadius: 10, textAlign: 'center' }}
                placeholder="Digite o CEP"
                type="number"
                onChange={(cep) => setCEP(cep.target.value)}
            />

            <button onClick={Procurar} style={{ backgroundColor: 'lightblue', padding: 5, borderRadius: 10 }}>Procurar CEP</button>

            <div style={{borderRadius: 10, backgroundColor: '#1111', textAlign: 'left', gap: 5}}>
                <text style={{fontSize: 20}}>{mostraCEP?.estado}</text>
                <br/>
                <text style={{fontSize: 20}}>{mostraCEP?.localidade}</text>
                <br/>
                <text style={{fontSize: 20}}>{mostraCEP?.bairro}</text>
            </div>
            
        </div>
    )
}

/*
Feedback da entrega
Correto.

O código apresentado está correto e atende aos requisitos do exercício proposto. 

O componente CEPForm é responsável por renderizar um formulário com um campo de 
entrada para o CEP e um botão para pesquisar. O componente utiliza o estado local 
para armazenar o número digitado pelo usuário e a resposta da API da ViaCEP. 

Quando o usuário clica no botão "Procurar CEP", o componente chama a função assíncrona 
Procurar(), que faz a chamada à API e atualiza o estado local com os dados do endereço 
correspondente ao CEP digitado. O resultado é exibido na tela, mostrando o estado, a 
localidade e o bairro.
*/