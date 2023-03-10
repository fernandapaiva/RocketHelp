import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  Container,
  InputOne,
  InputTwo,
  InputTextView,
  ItemSeparator,
} from './styles';
import Button from '../Components/Button';
import Order from '../Components/Order';

export default function Details() {
  const navigation = useNavigation();
  return (
    <Container>
      <Order />
      <ItemSeparator />
      <InputTextView>
        <InputOne
          placeholder="Número do Patrimônio"
          keyboardType="text"
          placeholderTextColor="#7c7c8a"
        />
        <ItemSeparator />
        <InputTwo
          placeholder="Descrição do problema"
          keyboardType="text"
          placeholderTextColor="#7c7c8a"
        />
      </InputTextView>
      <Button
        title="Cadastrar"
        onPress={() => navigation.navigate('Request')}
      />
    </Container>
  );
}
