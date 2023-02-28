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
  ViewSpace,
  ImageSenha,
} from './styles';
import {useNavigation} from '@react-navigation/native';

export default function Login() {
  const navigation = useNavigation();

  return (
    <Container>
      <SubContainer>
        <FirstView>
          <Logo source={require('../../assets/images/Logo.png')} />
        </FirstView>
        <TextColorWhite>Acesse sua conta</TextColorWhite>
        <ViewSpace>
          <InputTextView>
            <ViewImage>
              <ImageEmail source={require('../../assets/images/Msg.png')} />
            </ViewImage>
            <InputOne
              placeholder="E-mail"
              keyboardType="email"
              placeholderTextColor="#7c7c8a"
            />
          </InputTextView>
          <InputTextView>
            <ViewImage>
              <ImageSenha source={require('../../assets/images/Senha.png')} />
            </ViewImage>
            <InputOne
              placeholder="Senha"
              keyboardType="passowrd"
              placeholderTextColor="#7c7c8a"
            />
          </InputTextView>
        </ViewSpace>
        <ButtonNav onPress={() => navigation.navigate('Home')}>
          <Title>Entrar</Title>
        </ButtonNav>
      </SubContainer>
    </Container>
  );
}
