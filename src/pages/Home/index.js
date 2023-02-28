import React, {useState} from 'react';
import {
  Container,
  TitleNumber,
  TitleSolicite,
  ViewRow,
  TextGreen,
  TextOrange,
  ButtonProgress,
  ViewSearch,
  BackgroundSymbol,
  Symbol,
  TextAlert,
  ButtonDone,
} from './styles';

import Button from '../Components/Button';
import Header from '../Components/Header';

export default function Home() {
  const [progess, setProgress] = useState(false);
  const [done, setDone] = useState(false);

  const onPressProgress = () => {
    setProgress(!progess);
    setDone(false);
  };

  const onPressDone = () => {
    setDone(!done);
    setProgress(false);
  };
  return (
    <Container>
      <Header />
      <ViewRow>
        <TitleSolicite>Solicitações</TitleSolicite>
        <TitleNumber>0</TitleNumber>
      </ViewRow>
      <ViewSearch>
        <ButtonProgress isProgress={progess} onPress={() => onPressProgress()}>
          <TextOrange isProgress={progess}>EM ANDAMENTO</TextOrange>
        </ButtonProgress>
        <ButtonDone done={done} onPress={() => onPressDone()}>
          <TextGreen done={done}>FINALIZADOS</TextGreen>
        </ButtonDone>
      </ViewSearch>
      <BackgroundSymbol>
        <Symbol source={require('../../assets/images/symbol.png')} />
        <TextAlert>{'Você ainda não tem \n chamados criados'}</TextAlert>
      </BackgroundSymbol>
      <Button />
    </Container>
  );
}
