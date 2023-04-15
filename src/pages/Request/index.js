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

export default function HomeProgress() {
  const navigation = useNavigation();

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
              <TitleStandard>Patrimônio 123456</TitleStandard>
            </EquipmentView>
            <SeparatorItem />
            <ViewDescribe>
              <ViewLine>
                <LogoDescribing
                  source={require('../../assets/images/Describe.png')}
                />
                <TitleDescription> DESCRIÇÃO DO PROBLEMA</TitleDescription>
              </ViewLine>
              <TitleStandard>
                {
                  'Lorem Ipsum has the industrys standard \ndummy text ever since the 1500s, when an \nunknown printer took a galley of type and \nscrambled it to make a type specimen book.'
                }
              </TitleStandard>
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
          <Button
            title="Finalizar"
            onPress={() => navigation.navigate('Home')}
          />
          <SeparatorItem />
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
