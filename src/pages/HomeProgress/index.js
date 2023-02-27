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
          <TitlePatrimony>Patrimônio 147456</TitlePatrimony>
        </ViewOne>
        <ViewOne>
          <TitlePatrimony>Patrimônio 147456</TitlePatrimony>
          <ViewBase>
            <TextDate>20/01/22 às 14h</TextDate>
          </ViewBase>
        </ViewOne>
      </ProgressView>
      <Button />
    </Container>
  );
}
