import * as React from 'react';
import {
  Container,
  ButtonNav,
  Title,
  Logo,
  SubContainer,
  InputOne,
  ImageEmail,
  ImageSenha,
} from './styles';
import {useNavigation} from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();

  return (
    <Container>
      <SubContainer>
        <Logo source={require('../../assets/images/Logo.png')} />
        <InputOne>
          <ImageEmail source={require('../../assets/images/Msg.png')} />
        </InputOne>
        <InputOne>
          <ImageSenha source={require('../../assets/images/Senha.png')} />
        </InputOne>
        <ButtonNav onPress={() => navigation.navigate('Home')}>
          <Title>Entrar</Title>
        </ButtonNav>
      </SubContainer>
    </Container>
  );
}
