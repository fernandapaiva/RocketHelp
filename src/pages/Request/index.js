/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
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
  LogoGreen,
  TitleGreen,
} from './styles';
import {KeyboardAvoidingView, ScrollView} from 'react-native';
import Button from '../Components/Button';
import Order from '../Components/Order';
import {api} from '../../api';
import LoadingView from '../Components/Loading';

export default function Request({route}) {
  const navigation = useNavigation();

  const [solution, setSolution] = useState('');
  const [errorSolution, setErrorSolution] = useState(false);
  const [loading, setLoading] = useState(false);

  const params = route?.params;

  const onPressFinish = () => {
    setErrorSolution(!solution);
    if (solution) {
      setLoading(true);
      api
        .patch(`request/${params.data.id}`, {solution, status: 'Finish'})
        .then(resp => {
          if (resp.data) {
            navigation.navigate('Home');
          }
        })
        .catch(e => console.log(e))
        .finally(() => setLoading(false));
    }
  };

  return (
    <>
      {loading && <LoadingView />}
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior="height"
        keyboardVerticalOffset={-100}>
        <ScrollView>
          <Container>
            <Order />
            <PacesView>
              {params?.data?.status !== 'Finish' ? (
                <>
                  <LogoOrange
                    source={require('../../assets/images/VectorOrange.png')}
                  />
                  <TitleOrange>EM ANDAMENTO</TitleOrange>
                </>
              ) : (
                <>
                  <LogoGreen
                    source={require('../../assets/images/verificGreen.png')}
                  />
                  <TitleGreen>FINALIZADO</TitleGreen>
                </>
              )}
            </PacesView>
            <SeparatorItem />
            <SubContainer>
              <EquipmentView>
                <ViewLine>
                  <LogoComputer
                    source={require('../../assets/images/pc.png')}
                  />
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
                  placeholder={
                    errorSolution
                      ? 'Campo obrigatório *'
                      : 'Descrição da solução'
                  }
                  placeholderTextColor={errorSolution ? '#996DFF' : '#7c7c8a'}
                  value={params?.data?.solution || solution}
                  onChangeText={text => setSolution(text)}
                  editable={params?.data?.status !== 'Finish'}
                />
              </ViewSolvingTotal>
            </SubContainer>
            <SeparatorItem />
            {params?.data?.status !== 'Finish' && (
              <Button title="Finalizar" onPress={() => onPressFinish()} />
            )}
            <SeparatorItem />
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
}
