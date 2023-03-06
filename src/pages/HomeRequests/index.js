import React from 'react';
import {
  Container,
  ViewRow,
  TitleSolicite,
  LogoArrow,
  InputOne,
  InputTwo,
  InputTextView,
  ButtonArrow,
} from './styles';
import Button from '../Components/Button';
import {useNavigation} from '@react-navigation/native';

export default function HomeProgress() {
  const navigation = useNavigation();
  return (
    <Container>
      <ViewRow>
        <ButtonArrow onPress={() => navigation.goBack()}>
          <LogoArrow source={require('../../assets/images/Stroke.png')} />
        </ButtonArrow>
        <TitleSolicite>Solicitações</TitleSolicite>
      </ViewRow>
      <InputTextView>
        <InputOne
          placeholder="Número do Patrimônio"
          keyboardType="text"
          placeholderTextColor="#7c7c8a"
        />
        <InputTwo
          placeholder="Descrição do problema"
          keyboardType="text"
          placeholderTextColor="#7c7c8a"
        />
      </InputTextView>
      <Button />
    </Container>
  );
}
