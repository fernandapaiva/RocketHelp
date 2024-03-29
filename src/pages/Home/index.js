import React, {useState, useEffect} from 'react';
import {useNavigation, useIsFocused} from '@react-navigation/native';
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
  ViewAbsolute,
} from './styles';
import LoadingView from '../Components/Loading';

import Button from '../Components/Button';
import Header from '../Components/Header';
import {api} from '../../api';

export default function Home() {
  const navigation = useNavigation();

  const isFocused = useIsFocused();

  const [progess, setProgress] = useState(true);
  const [done, setDone] = useState(false);
  const [requestAll, setRequestAll] = useState([]);
  const [requestFilter, setRequestFilter] = useState([]);
  const [loading, setLoading] = useState(false);

  const onPressProgress = () => {
    setRequestFilter(requestAll?.filter(item => item?.status === 'Progress'));
    setProgress(true);
    setDone(false);
  };

  const onPressDone = () => {
    setRequestFilter(requestAll?.filter(item => item?.status === 'Finish'));
    setDone(true);
    setProgress(false);
  };

  const getData = () => {
    setLoading(true);
    api
      .get('request')
      .then(resp => {
        if (resp.data) {
          setRequestAll(resp.data);
        }
      })
      .catch(e => console.log(e))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    if (isFocused) {
      getData();
    }
  }, [isFocused]);

  useEffect(() => {
    if (requestAll) {
      setRequestFilter(requestAll?.filter(item => item?.status === 'Progress'));
      setProgress(true);
      setDone(false);
    }
  }, [requestAll]);

  return (
    <>
      {loading && <LoadingView />}
      <Container>
        <Header />
        <ViewRow>
          <TitleSolicite>Solicitações</TitleSolicite>
          <TitleNumber>{requestFilter.length}</TitleNumber>
        </ViewRow>
        <ViewSearch>
          <ButtonProgress
            isProgress={progess}
            onPress={() => onPressProgress()}>
            <TextOrange isProgress={progess}>EM ANDAMENTO</TextOrange>
          </ButtonProgress>
          <ButtonDone done={done} onPress={() => onPressDone()}>
            <TextGreen done={done}>FINALIZADOS</TextGreen>
          </ButtonDone>
        </ViewSearch>
        <SeparatorItems />
        {requestFilter.length > 0 ? (
          <FlatList
            data={requestFilter}
            renderItem={item => (
              <>
                <ViewOne
                  activeOpacity={0.7}
                  onPress={() =>
                    navigation.navigate('Request', {data: item.item})
                  }>
                  <ViewColum>
                    <Line isProgress={progess} />
                    <ContentItem>
                      <TitlePatrimony>{item.item.equipment}</TitlePatrimony>
                      <Separator />
                      <ViewBase>
                        <LogoTime
                          source={require('../../assets/images/Vector.png')}
                        />
                        <TextDate>{item.item.registDate}</TextDate>
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
        <SeparatorItems />
        <SeparatorItems />
        <SeparatorItems />
        <SeparatorItems />
        <ViewAbsolute>
          <Button
            title="Nova solicitação"
            onPress={() => navigation.navigate('Details')}
          />
        </ViewAbsolute>
      </Container>
    </>
  );
}
