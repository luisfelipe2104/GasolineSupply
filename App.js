import { StatusBar } from 'expo-status-bar';
import { View, Image, Alert } from 'react-native';
import { 
  MainContainer,
  Container, 
  TextBold, 
  Input, 
  ButtonContainer, 
  Button, 
  ButtonText,
  ContainerResult,
  ResultText,
} from './components.js';
import Alcool from './assets/alcool.webp'
import Gasoline from './assets/gasoline.png'
import GasolineIsBest from './assets/gasolineIsBest.jpg'
import AlcoolIsBest from './assets/alcoolisBest.jpg'
import { useState } from 'react';

export default function App() {
  const [alcoolPrice, setAlcoolPrice] = useState(0)
  const [gasolinePrice, setGasolinePrice] = useState(0)
  const [whichFuelIsTheBest, setWhichFuelIsTheBest] = useState(null)
  // if whichFuelIsTheBest is true then alcool is the best, if it is
  // false then gasoline is the best
  const [resultText, setResultText] = useState('')

  const calculate = () => {
    const result = alcoolPrice / gasolinePrice
    if (result < 0.7) {
      setWhichFuelIsTheBest(true)
      setResultText('ALCOOL É A MELHOR OPÇÃO MEU FI!!!')
    }
    else if (result >= 0.7) {
      setWhichFuelIsTheBest(false)
      setResultText('GASOLINA É A MELHOR OPÇÃO MEU FI!!!')
    }
    else {
      Alert.alert('Error!!!')
      setWhichFuelIsTheBest(null)
      setResultText('ERRO!!! Digite valores válidos!!!')
    }
  }

  return (
    <MainContainer>
      <Container>
        <View>
          <Image style={{height: 100, width: 80}} source={Alcool} /> 
          <TextBold>Alcool</TextBold>
          <Input 
            keyboardType='numeric' 
            placeholder='Alcool em R$...' 
            onChangeText={(text) => setAlcoolPrice(text)}
          />
        </View>
        <View style={{alignItems: 'flex-end'}}>
          <Image style={{height: 100, width: 80}} source={Gasoline} /> 
          <TextBold>Gasolina</TextBold>
          <Input 
            keyboardType='numeric' 
            placeholder='Gasolina em R$...' 
            onChangeText={(text) => setGasolinePrice(text)}
          />
        </View>
      </Container>

      <ButtonContainer>
        <Button onPress={calculate}>
          <ButtonText>Calculate</ButtonText>
        </Button>
      </ButtonContainer>

      <ContainerResult>
        <ResultText>{resultText}</ResultText>
        <Image style={{height: 300, width: 400}} 
          source={whichFuelIsTheBest && AlcoolIsBest || 
            whichFuelIsTheBest === false && GasolineIsBest} 
        />
      </ContainerResult>
      <StatusBar />
    </MainContainer>
  );
}
