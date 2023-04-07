import React, {useState} from 'react';
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
import {api} from '../../api';

export default function Login() {
  const navigation = useNavigation();

  const [password, setPassword] = useState('fernandapaiva11@hotmail.com');
  const [email, setEmail] = useState('123456');
  const [errorEmail, setErrorEmail] = useState(null);
  const [errorPassword, setErrorPassword] = useState(null);

  const ClickHome = async () => {
    if (email & password) {
      api
        .get('user')
        .then(resp => console.log(resp.data))
        .catch(e => console.log(e));
    }
  };

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
