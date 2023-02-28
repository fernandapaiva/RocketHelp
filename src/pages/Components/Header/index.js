import React from 'react';
import {
  BackgroundFirst,
  SubContainer,
  ImageSign,
  Logo,
  ButtonBack,
} from './styles';
import {useNavigation} from '@react-navigation/native';

const DATA = [
  {
    title: 'Patrimônio 147456',
    date: '20/01/22 às 14h',
    status: 'progess',
  },
  {
    title: 'Patrimônio 147456',
    date: '20/01/22 às 14h',
    status: 'done',
  },
  {
    title: 'Patrimônio 147456',
    date: '20/01/22 às 14h',
    status: 'progess',
  },
  {
    title: 'Patrimônio 147456',
    date: '20/01/22 às 14h',
    status: 'done',
  },
];

const listAux = DATA.filter(item => item.status === 'done');

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
