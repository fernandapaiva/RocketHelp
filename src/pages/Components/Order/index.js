import React from 'react';
import {TitleSolicite, LogoArrow, ButtonArrow, ViewOrder} from './styles';
import {useNavigation} from '@react-navigation/native';

export default function HomeProgress({backText = ''}) {
  const navigation = useNavigation();
  return (
    <ViewOrder>
      <ButtonArrow
        onPress={() =>
          backText ? navigation.navigate(backText) : navigation.goBack()
        }>
        <LogoArrow source={require('../../../assets/images/Stroke.png')} />
      </ButtonArrow>
      <TitleSolicite>Solicitação</TitleSolicite>
    </ViewOrder>
  );
}
