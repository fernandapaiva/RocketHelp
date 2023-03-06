import React from 'react';
import {TitleSolicite, LogoArrow, ButtonArrow, ViewOrder} from './styles';
import {useNavigation} from '@react-navigation/native';

export default function HomeProgress() {
  const navigation = useNavigation();
  return (
    <ViewOrder>
      <ButtonArrow onPress={() => navigation.goBack()}>
        <LogoArrow source={require('../../../assets/images/Stroke.png')} />
      </ButtonArrow>
      <TitleSolicite>Solicitação</TitleSolicite>
    </ViewOrder>
  );
}
