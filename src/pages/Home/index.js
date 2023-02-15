import * as React from 'react';
import {
  Container,
  ButtonNav,
  Title,
  Logo,
  SubContainer,
  InputOne,
  ImageEmail,
  FirstView,
  TextColorWhite,
  InputTextView,
  ViewImage,
} from './styles';
import {useNavigation} from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();

  return (
    <Container>
      <SubContainer>
        <FirstView>
          <Logo source={require('../../assets/images/Logo.png')} />
        </FirstView>
        <TextColorWhite>Acesse sua conta</TextColorWhite>
        <InputTextView>
          <ViewImage>
            <ImageEmail source={require('../../assets/images/Msg.png')} />
          </ViewImage>
          <InputOne placeholder="e-mail" keyboardType="email" />
        </InputTextView>
        <InputTextView>
          <ViewImage>
            <ImageEmail source={require('../../assets/images/Senha.png')} />
          </ViewImage>
          <InputOne placeholder="Senha" keyboardType="passowrd" />
        </InputTextView>
        <ButtonNav onPress={() => navigation.navigate('Home')}>
          <Title>Entrar</Title>
        </ButtonNav>
      </SubContainer>
    </Container>
  );
}
