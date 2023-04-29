import React from 'react';
import {Modal} from 'react-native';
import {
  Container,
  ContainerInside,
  AlertRed,
  TitleAlertRed,
  Information,
  SeparatorItems,
  ContainerSeparator,
  Separator,
} from './styles';
import Button from '../Button';

export default function AlertCustom({
  type,
  visible,
  setVisible,
  title,
  information,
}) {
  return (
    <Modal
      animationType="fade"
      transparent
      visible={visible}
      onRequestClose={() => setVisible(false)}>
      <Container>
        <ContainerInside>
          <ContainerSeparator>
            {type === 'Sucess' ? (
              <AlertRed source={require('../../../assets/images/ok.png')} />
            ) : (
              <AlertRed source={require('../../../assets/images/notok.png')} />
            )}
            <Separator />
            <TitleAlertRed type={type}>{title}</TitleAlertRed>
            <Separator />
            <Information>{information}</Information>
            <SeparatorItems />
            <SeparatorItems />
            <Button title="OK, ENTENDI" onPress={() => {}} />
          </ContainerSeparator>
        </ContainerInside>
      </Container>
    </Modal>
  );
}
