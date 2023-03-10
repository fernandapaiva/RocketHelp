import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {FlatList} from 'react-native';
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
  ViewOne,
  TitlePatrimony,
  TextDate,
  ViewBase,
  LogoTime,
  LogoClock,
  ViewColum,
  SeparatorItems,
  Line,
  ContentItem,
  Separator,
} from './styles';

import Button from '../Components/Button';
import Header from '../Components/Header';

export default function Home() {
  const navigation = useNavigation();

  const [progess, setProgress] = useState(true);
  const [done, setDone] = useState(false);

  const onPressProgress = () => {
    setProgress(!progess);
    setDone(false);
  };

  const onPressDone = () => {
    setDone(!done);
    setProgress(false);
  };

  const DATA = [
    {
      title: 'Patrimônio 147456',
      date: '20/01/22 às 14h',
      status: 'progess',
    },
    {
      title: 'Patrimônio 147456',
      date: '20/01/22 às 14h',
      status: 'progess',
    },
    {
      title: 'Patrimônio 147456',
      date: '20/01/22 às 14h',
      status: 'done',
    },
  ];

  return (
    <Container>
      <Header />
      <ViewRow>
        <TitleSolicite>Solicitações</TitleSolicite>
        <TitleNumber>{DATA.length}</TitleNumber>
      </ViewRow>
      <ViewSearch>
        <ButtonProgress isProgress={progess} onPress={() => onPressProgress()}>
          <TextOrange isProgress={progess}>EM ANDAMENTO</TextOrange>
        </ButtonProgress>
        <ButtonDone done={done} onPress={() => onPressDone()}>
          <TextGreen done={done}>FINALIZADOS</TextGreen>
        </ButtonDone>
      </ViewSearch>
      <SeparatorItems />
      {DATA.length > 0 ? (
        <FlatList
          data={DATA}
          renderItem={() => (
            <>
              <ViewOne>
                <ViewColum>
                  <Line isProgress={progess} />
                  <ContentItem>
                    <TitlePatrimony>Patrimônio 147456</TitlePatrimony>
                    <Separator />
                    <ViewBase>
                      <LogoTime
                        source={require('../../assets/images/Vector.png')}
                      />
                      <TextDate>20/01/22 às 14h</TextDate>
                    </ViewBase>
                  </ContentItem>
                </ViewColum>
                {progess ? (
                  <LogoClock
                    source={require('../../assets/images/IconTime.png')}
                  />
                ) : (
                  <LogoClock
                    source={require('../../assets/images/IconCheck.png')}
                  />
                )}
              </ViewOne>
              <SeparatorItems />
            </>
          )}
        />
      ) : (
        <BackgroundSymbol>
          <Symbol source={require('../../assets/images/symbol.png')} />
          <TextAlert>{'Você ainda não tem \n chamados criados'}</TextAlert>
        </BackgroundSymbol>
      )}
      <Button
        title="Nova solicitação"
        onPress={() => navigation.navigate('Details')}
      />
    </Container>
  );
}
