import React from 'react';
import {
  Container,
  SubContainer,
  Logo,
  BackgroundFirst,
  ButtonBack,
  ImageSign,
  TitleNumber,
  TitleSolicite,
  ViewRow,
  TextGreen,
  TextOrange,
  ViewProgress,
  ViewSearch,
  ViewFinished,
  BackgroundSymbol,
  Symbol,
  TextAlert,
} from './styles';
import {useNavigation} from '@react-navigation/native';

import Button from '../Components/Button';

export default function Home() {
  const navigation = useNavigation();

  return (
    <Container>
      <SubContainer>
        <BackgroundFirst>
          <Logo source={require('../../assets/images/Logo2.png')} />
          <ButtonBack onPress={() => navigation.goBack()}>
            <ImageSign source={require('../../assets/images/sign.png')} />
          </ButtonBack>
        </BackgroundFirst>
      </SubContainer>
      <ViewRow>
        <TitleSolicite>Solicitações</TitleSolicite>
        <TitleNumber>0</TitleNumber>
      </ViewRow>
      <ViewSearch>
        <ViewProgress>
          <TextOrange>EM ANDAMENTO</TextOrange>
        </ViewProgress>
        <ViewFinished>
          <TextGreen>FINALIZADOS</TextGreen>
        </ViewFinished>
      </ViewSearch>
      <BackgroundSymbol>
        <Symbol source={require('../../assets/images/symbol.png')} />
        <TextAlert>{'Você ainda não tem \n chamados criados'}</TextAlert>
      </BackgroundSymbol>
      <Button />
    </Container>
  );
}
