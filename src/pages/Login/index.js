import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
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
  ErrorMensage,
} from './styles';
import LoadingView from '../Components/Loading';
import {api} from '../../api';
import _ from 'loadsh';
import AlertCustom from '../Components/AlertCustom';

export default function Login() {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [visible, setVisible] = useState(false);

  const navigation = useNavigation();

  const ClickHome = async () => {
    // navigation.navigate('Home');
    setErrorEmail(!email);
    setErrorPassword(!password);
    if (email && password) {
      setLoading(true);
      api
        .get('user')
        .then(resp => {
          const isValidEmail = _.isEqual(resp.data[0].login, email);
          const isValidPassword = _.isEqual(resp.data[0].password, password);
          if (isValidEmail && isValidPassword) {
            navigation.navigate('Home');
          } else {
            setVisible(true);
          }
        })
        .catch(e => console.log(e))
        .finally(() => setLoading(false));
    }
  };

  const onPressModal = () => setVisible(false);

  return (
    <>
      <AlertCustom
        title="Falha ao realizar login"
        type="Error"
        information="Email ou senha incorretos"
        visible={visible}
        onPress={() => onPressModal()}
      />
      {loading && <LoadingView />}
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
                placeholderTextColor="#7c7c8a"
                keyboardType="email-address"
                value={email}
                onChangeText={text => {
                  setErrorEmail(!text);
                  setEmail(text);
                }}
              />
            </InputTextView>
            {errorEmail && (
              <ErrorMensage>Campo e-mail obrigatório</ErrorMensage>
            )}
            <Separator />
            <InputTextView>
              <ViewImage>
                <ImageSenha source={require('../../assets/images/Senha.png')} />
              </ViewImage>
              <InputOne
                placeholder="Senha"
                placeholderTextColor="#7c7c8a"
                secureTextEntry={true}
                value={password}
                onChangeText={text => {
                  setErrorPassword(!text);
                  setPassword(text);
                }}
              />
            </InputTextView>
            {errorPassword && (
              <ErrorMensage>Campo senha obrigatório</ErrorMensage>
            )}
          </ViewSpace>
          <ButtonNav onPress={() => ClickHome()}>
            <Title>Entrar</Title>
          </ButtonNav>
        </SubContainer>
      </Container>
    </>
  );
}
