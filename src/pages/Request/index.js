/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  Container,
  LogoOrange,
  PacesView,
  TitleOrange,
  EquipmentView,
  TitleDescription,
  LogoComputer,
  ViewLine,
  TitleStandard,
  ViewDescribe,
  LogoDescribing,
  ViewSolving,
  LogoSolution,
  InputDescribe,
  SeparatorItem,
  SubContainer,
  ViewSolvingTotal,
  LineGray,
  TitleRegistre,
} from './styles';
import {KeyboardAvoidingView, ScrollView} from 'react-native';
import Button from '../Components/Button';
import Order from '../Components/Order';
import {api} from '../../api';

export default function Request({route}) {
  const navigation = useNavigation();

  const params = route?.params;
  console.log(params.data);

  const onPressFinish = () => {
    api
      .put(`request/${params.data.id}`)
      .then(resp => {
        if (resp.data) {
          navigation.navigate('Home');
        }
      })
      .catch(e => console.log(e));
  };

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior="height"
      keyboardVerticalOffset={-100}>
      <ScrollView>
        <Container>
          <Order />
          <PacesView>
            <LogoOrange
              source={require('../../assets/images/VectorOrange.png')}
            />
            <TitleOrange>EM ANDAMENTO</TitleOrange>
          </PacesView>
          <SeparatorItem />
          <SubContainer>
            <EquipmentView>
              <ViewLine>
                <LogoComputer source={require('../../assets/images/pc.png')} />
                <TitleDescription>EQUIPAMENTO</TitleDescription>
              </ViewLine>
              <TitleStandard>{params.data.equipment}</TitleStandard>
            </EquipmentView>
            <SeparatorItem />
            <ViewDescribe>
              <ViewLine>
                <LogoDescribing
                  source={require('../../assets/images/Describe.png')}
                />
                <TitleDescription> DESCRIÇÃO DO PROBLEMA</TitleDescription>
              </ViewLine>
              <TitleStandard>{params.data.description}</TitleStandard>
              <LineGray />
              <TitleRegistre>Registrado em 20/11/2022 às 14:30</TitleRegistre>
            </ViewDescribe>
            <SeparatorItem />
            <ViewSolvingTotal>
              <ViewSolving>
                <LogoSolution
                  source={require('../../assets/images/verific.png')}
                />
                <TitleDescription>SOLUÇÃO</TitleDescription>
              </ViewSolving>
              <InputDescribe
                placeholder="Descrição da solução"
                placeholderTextColor="#7c7c8a"
              />
            </ViewSolvingTotal>
          </SubContainer>
          <SeparatorItem />
          <Button title="Finalizar" onPress={() => onPressFinish} />
          <SeparatorItem />
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
