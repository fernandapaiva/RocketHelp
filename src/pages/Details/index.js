/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {KeyboardAvoidingView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Container, InputOne, InputTwo, ItemSeparator} from './styles';
import Button from '../Components/Button';
import Order from '../Components/Order';

export default function Details() {
  const navigation = useNavigation();
  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior="height"
      keyboardVerticalOffset={-100}>
      <Container>
        <Order />
        <ItemSeparator />
        <InputOne
          placeholder="Número do Patrimônio"
          keyboardType="numeric"
          placeholderTextColor="#7c7c8a"
        />
        <ItemSeparator />
        <InputTwo
          placeholder="Descrição do problema"
          placeholderTextColor="#7c7c8a"
          multiline={true}
        />
        <ItemSeparator />
        <Button
          title="Cadastrar"
          onPress={() => navigation.navigate('Request')}
        />
      </Container>
    </KeyboardAvoidingView>
  );
}
