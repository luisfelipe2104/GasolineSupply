import styled from "styled-components/native";

export const MainContainer = styled.View`
    flex: 1;
    width: 100%;
    background-color: #fff;
    align-items: center;
`

export const Container = styled.View`
    margin-top: 30;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    padding-left: 20;
    padding-right: 20;
`

export const TextBold = styled.Text`
    font-weight: bold;
    font-size: 28;
    margin-top: 18;
`

export const Input = styled.TextInput`
    width: 150;
    height: 30;
    font-size: 18;
    color: #555755;
`

export const ButtonContainer = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Button = styled.TouchableOpacity`
    margin-top: 20;
    border-radius: 20;
    background-color: #6bf25e;
    padding-left: 12;
    padding-right: 12;
    padding-top: 10;
    padding-bottom: 10;
`

export const ButtonText = styled.Text`
    font-size: 22px;
`

export const ContainerResult = styled.View`
    margin-top: 25;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ResultText = styled.Text`
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 10px;
`