/*
Celular de pé
Neste exercício, você vai criar um componente React Native com o 
Expo que utiliza o sensor de Giroscópio para detectar a orientação 
do celular. Quando o celular estiver na posição vertical (em pé), um 
alerta será exibido informando o usuário.

Verifique se o valor do eixo y do giroscópio é próximo de 0, indicando 
que o celular está em pé.
Quando essa condição for verdadeira, exiba o alerta informando que o 
celular está na posição vertical.
Sua resposta
*/

import { View, StyleSheet } from "react-native"
import { Text } from "react-native-paper"
import { Gyroscope } from 'expo-sensors'
import React, { useEffect, useState } from "react"

export default function Sensors() {
    const [gData, setGData] = useState({ x: 0, y: 0, z: 0 });
    const [isVertical, setIsVertical] = useState(false);
  
    useEffect(() => {
      const subscription = Gyroscope.addListener((data) => {
        setGData(data);
        if (Math.abs(data.y) <= 0.1 && !isVertical) {
          setIsVertical(true);
          alert("Em pé");
        } else if (Math.abs(data.y) > 0.1) {
          setIsVertical(false);
        }
      });
  
      return () => {
        subscription.remove();
      };
    }, [isVertical]);
  
    return (
      <View style={styles.container}>
        <Text>Sensores</Text>
        <Text>X: {gData.x}</Text>
        <Text>Y: {gData.y}</Text>
        <Text>Z: {gData.z}</Text>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#fff',
      padding: 20,
    },
  });

/*
Feedback da entrega
Correto.

O código apresentado está corretamente implementando a funcionalidade 
de detecção da orientação do dispositivo usando o sensor de giroscópio 
do Expo. Ele verifica se o valor do eixo y do giroscópio é próximo de 0, 
indicando que o dispositivo está na posição vertical (em pé), e então exibe 
um alerta informando o usuário.

O código utiliza o hook useEffect para adicionar um listener ao sensor 
de giroscópio, que atualiza o estado gData com os valores dos eixos x, y e z. 
Dentro do listener, é verificado se o valor absoluto do eixo y é menor ou 
igual a 0.1 (indicando que o dispositivo está em pé) e se o estado isVertical 
não é verdadeiro. Nesse caso, o estado isVertical é atualizado para true e um 
alerta é exibido.

Caso o valor absoluto do eixo y seja maior que 0.1 (indicando que o 
dispositivo não está em pé), o estado isVertical é atualizado para false.

Ao final, o componente renderiza o texto "Sensores" e os valores dos 
eixos x, y e z do giroscópio.
  
*/