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
import ErrorImage from './assets/error.png'
import Alcool from './assets/alcool.webp'
import Gasoline from './assets/gasoline.png'
import GasolineIsBest from './assets/gasolineIsBest.jpg'
import AlcoolIsBest from './assets/alcoolisBest.jpg'
import { useState } from 'react';
import Toast from 'react-native-toast-message'
import { toastConfig } from './toastConfig.js';

export default function App() {
  const [alcoolPrice, setAlcoolPrice] = useState(0)
  const [gasolinePrice, setGasolinePrice] = useState(0)
  const [whichFuelIsTheBest, setWhichFuelIsTheBest] = useState(null)
  // if whichFuelIsTheBest is true then alcool is the best, if it is
  // false then gasoline is the best
  const [resultText, setResultText] = useState('')

  const showToastSuccess = () => {
    Toast.show({
      type: "success", // tipo da mensagem
      text1: "Toast Message Success", // titulo
      text2: "This is the secondary text", //descrição
      autoHide: true, // ocultar automaticamente ou não
      visibilityTime: 2500, // tempo de exibição do toasty
      position: 'top', // de onde a mensagem vai aparecer
    })
  }

  const showToastError = (text1, text2) => {
    Toast.show({
      type: "error", // tipo da mensagem
      text1: text1, // titulo
      text2: text2, //descrição
      autoHide: true, // ocultar automaticamente ou não
      visibilityTime: 5500, // tempo de exibição do toasty
      position: 'top', // de onde a mensagem vai aparecer
    })
  }

  const calculate = () => {
    const result = alcoolPrice / gasolinePrice
    if (result < 0.7) {
      setWhichFuelIsTheBest(true)
      setResultText('ALCOOL É A MELHOR OPÇÃO MEU TRUTA!!!')
    }
    else if (result >= 0.7) {
      setWhichFuelIsTheBest(false)
      setResultText('GASOLINA É A MELHOR OPÇÃO MEU TRUTA!!!')
    }
    else {
      showToastError('ERRO!!! Digite valores válidos!!!', 'Erro ao realizar a conta!')
      setWhichFuelIsTheBest('error')
      setResultText('ERRO!!! ESSE RESULTADO É FULMINANTE MEU TRUTA!!!')
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
          source={
            whichFuelIsTheBest === 'error' && ErrorImage ||
            whichFuelIsTheBest && AlcoolIsBest || 
            whichFuelIsTheBest === false && GasolineIsBest            
          } 
        />
      </ContainerResult>
      <Toast config={toastConfig} />
      <StatusBar />
    </MainContainer>
  );
}
