import React from 'react';
import {
  Container,
  ViewRow,
  TitleSolicite,
  LogoArrow,
  InputOne,
  InputTwo,
  InputTextView,
} from './styles';
import Button from '../Components/Button';

export default function HomeProgress() {
  return (
    <Container>
      <ViewRow>
        <LogoArrow source={require('../../assets/images/Stroke.png')} />
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
