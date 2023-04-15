/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {KeyboardAvoidingView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Container, InputOne, InputTwo, ItemSeparator} from './styles';
import Button from '../Components/Button';
import Order from '../Components/Order';

export default function Details() {
  const navigation = useNavigation();

  const [numberPatrimony, setNumberPatrimony] = useState('');
  const [description, setDescription] = useState('');

  const onPressRequest = () => {
    if (numberPatrimony && description) {
      const data = {
        status: 'Progress',
        equipment: `Patrimônio ${numberPatrimony}`,
        description: description,
        registDate: '2022-11-20',
        solution: '',
      };
      // navigation.navigate('Request');
    }
  };

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
          value={numberPatrimony}
          onChangeText={text => setNumberPatrimony(text)}
        />
        <ItemSeparator />
        <InputTwo
          placeholder="Descrição do problema"
          placeholderTextColor="#7c7c8a"
          multiline={true}
          value={description}
          onChangeText={text => setDescription(text)}
        />
        <ItemSeparator />
        {numberPatrimony && description ? (
          <Button title="Cadastrar" onPress={() => onPressRequest()} />
        ) : (
          <Button
            title="Cadastrar"
            onPress={() => {}}
            color="#A5A5A5"
            colorText="#D7D7D7"
          />
        )}
      </Container>
    </KeyboardAvoidingView>
  );
}
