import * as React from 'react';
import {Container, ButtonNav, Title} from './styles';
import {useNavigation} from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();

  return (
    <Container>
      <Title>Home Screen</Title>
      <ButtonNav
        title="Go to Details"
        onPress={() => navigation.navigate('Profile')}
      />
    </Container>
  );
}
