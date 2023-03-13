import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  Container,
  InputOne,
  InputTwo,
  InputTextView,
  ItemSeparator,
  BackgroundGray,
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
          keyboardType="numeric"
          placeholderTextColor="#7c7c8a"
        />
        <ItemSeparator />
        <BackgroundGray>
          <InputTwo
            placeholder="Descrição do problema"
            keyboardType="text"
            placeholderTextColor="#7c7c8a"
          />
        </BackgroundGray>
      </InputTextView>
      <Button
        title="Cadastrar"
        onPress={() => navigation.navigate('Request')}
      />
    </Container>
  );
}
