import React from 'react';
import {
  BackgroundFirst,
  SubContainer,
  ImageSign,
  Logo,
  ButtonBack,
} from './styles';
import {useNavigation} from '@react-navigation/native';

export default function Header() {
  const navigation = useNavigation();
  return (
    <SubContainer>
      <BackgroundFirst>
        <Logo source={require('../../../assets/images/Logo2.png')} />
        <ButtonBack onPress={() => navigation.goBack()}>
          <ImageSign source={require('../../../assets/images/sign.png')} />
        </ButtonBack>
      </BackgroundFirst>
    </SubContainer>
  );
}
