import React from 'react';
import {
  Container,
  ViewRow,
  TitleNumber,
  TitleSolicite,
  ViewSearchFinish,
  ViewProgress,
  TextGreen,
  TextGray,
  ViewFinished,
  LogoCheck,
  LogoTime,
  ViewBase,
  ViewColum,
  ViewGreen,
  TitlePatrimony,
  TextDate,
} from './styles';
import Header from '../Components/Header';
import Button from '../Components/Button';

export default function HomeFinalized() {
  return (
    <Container>
      <Header />
      <ViewRow>
        <TitleSolicite>Solicitações</TitleSolicite>
        <TitleNumber>1</TitleNumber>
      </ViewRow>
      <ViewSearchFinish>
        <ViewProgress>
          <TextGray>EM ANDAMENTO</TextGray>
        </ViewProgress>
        <ViewFinished>
          <TextGreen>FINALIZADOS</TextGreen>
        </ViewFinished>
      </ViewSearchFinish>
      <ViewGreen>
        <ViewColum>
          <TitlePatrimony>Patrimônio 147456</TitlePatrimony>
          <ViewBase>
            <LogoTime source={require('../../assets/images/Vector.png')} />
            <TextDate>20/01/22 às 14h</TextDate>
          </ViewBase>
        </ViewColum>
        <LogoCheck source={require('../../assets/images/IconCheck.png')} />
      </ViewGreen>
      <Button />
    </Container>
  );
}
