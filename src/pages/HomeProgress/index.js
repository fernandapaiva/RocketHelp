import React from 'react';
import {
  Container,
  ViewRow,
  TitleNumber,
  TitleSolicite,
  ProgressView,
  ViewOne,
  TitlePatrimony,
  TextDate,
  ViewBase,
  LogoTime,
  LogoClock,
  ViewColum,
} from './styles';
import Header from '../Components/Header';
import Button from '../Components/Button';
import Search from '../Components/Search';

export default function HomeProgress() {
  return (
    <Container>
      <Header />
      <ViewRow>
        <TitleSolicite>Solicitações</TitleSolicite>
        <TitleNumber>2</TitleNumber>
      </ViewRow>
      <Search />
      <ProgressView>
        <ViewOne>
          <ViewColum>
            <TitlePatrimony>Patrimônio 147456</TitlePatrimony>
            <ViewBase>
              <LogoTime source={require('../../assets/images/Vector.png')} />
              <TextDate>20/01/22 às 14h</TextDate>
            </ViewBase>
          </ViewColum>
          <LogoClock source={require('../../assets/images/IconTime.png')} />
        </ViewOne>
        <ViewOne>
          <ViewColum>
            <TitlePatrimony>Patrimônio 147456</TitlePatrimony>
            <ViewBase>
              <LogoTime source={require('../../assets/images/Vector.png')} />
              <TextDate>20/01/22 às 14h</TextDate>
            </ViewBase>
          </ViewColum>
          <LogoClock source={require('../../assets/images/IconTime.png')} />
        </ViewOne>
      </ProgressView>
      <Button />
    </Container>
  );
}
