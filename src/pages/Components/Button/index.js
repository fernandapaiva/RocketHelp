import React from 'react';
import {ButtonNav, Title} from './styles';

export default function Button({title, onPress, color}) {
  return (
    <ButtonNav color={color} onPress={() => onPress()}>
      <Title>{title}</Title>
    </ButtonNav>
  );
}
