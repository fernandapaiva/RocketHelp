import * as React from 'react';
import {
  Container,
  ButtonNav,
  Title,
  Logo,
  SubContainer,
  InputOne,
  ImageEmail,
  TextColorWhite,
  InputTextView,
  ViewImage,
  ViewSpace,
  ImageSenha,
  Separator,
  SeparatorItem,
} from './styles';
import {useNavigation} from '@react-navigation/native';

export default function Login() {
  const navigation = useNavigation();

  return (
    <Container>
      <SubContainer>
        <SeparatorItem />
        <Logo source={require('../../assets/images/Logo.png')} />
        <SeparatorItem />
        <TextColorWhite>Acesse sua conta</TextColorWhite>
        <Separator />
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
          <Separator />
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
