import React from 'react';
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
} from './styles';
import {ScrollView} from 'react-native';
import Button from '../Components/Button';
import Order from '../Components/Order';

export default function HomeProgress() {
  return (
    <Container>
      <ScrollView>
        <Order />
        <PacesView>
          <LogoOrange
            source={require('../../assets/images/VectorOrange.png')}
          />
          <TitleOrange>EM ANDAMENTO</TitleOrange>
        </PacesView>
        <EquipmentView>
          <ViewLine>
            <LogoComputer source={require('../../assets/images/pc.png')} />
            <TitleDescription>EQUIPAMENTO</TitleDescription>
          </ViewLine>
          <TitleStandard>Patrimônio 123456</TitleStandard>
        </EquipmentView>
        <ViewDescribe>
          <ViewLine>
            <LogoDescribing
              source={require('../../assets/images/Describe.png')}
            />
            <TitleDescription> DESCRIÇÃO DO PROBLEMA</TitleDescription>
          </ViewLine>
          <TitleStandard>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </TitleStandard>
        </ViewDescribe>
        <ViewSolving>
          <ViewLine>
            <LogoSolution source={require('../../assets/images/verific.png')} />
            <TitleDescription>SOLUÇÃO</TitleDescription>
          </ViewLine>
        </ViewSolving>
        <InputDescribe
          placeholder="Descrição da solução"
          keyboardType="text"
          placeholderTextColor="#7c7c8a"
        />
      </ScrollView>
      <Button />
    </Container>
  );
}
