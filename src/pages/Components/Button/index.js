import React from 'react';
import {ButtonNav, Title} from './styles';
import {useNavigation} from '@react-navigation/native';

export default function Button() {
  const navigation = useNavigation();
  return (
    <ButtonNav onPress={() => navigation.navigate('')}>
      <Title>Nova solicitação</Title>
    </ButtonNav>
  );
}
