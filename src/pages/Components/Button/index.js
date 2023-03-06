import React from 'react';
import {ButtonNav, Title} from './styles';
import {useNavigation} from '@react-navigation/native';

export default function Button() {
  const navigation = useNavigation();
  return (
    <ButtonNav onPress={() => navigation.navigate('Request')}>
      <Title>Nova solicitação</Title>
    </ButtonNav>
  );
}
