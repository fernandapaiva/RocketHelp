import React from 'react';
import {ActivityIndicator, StatusBar, Dimensions} from 'react-native';

import {Container} from './styles';

const {height} = Dimensions.get('window');

const LoadingView = () => {
  return (
    <Container height={height + (StatusBar.currentHeight || 0)}>
      <ActivityIndicator size="large" color="#63bda8" />
    </Container>
  );
};

export default LoadingView;
