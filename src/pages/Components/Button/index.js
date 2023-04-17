import React from 'react';
import {ButtonNav, Title} from './styles';

export default function Button({title, onPress, color, colorText}) {
  return (
    <ButtonNav activeOpacity={0.7} color={color} onPress={() => onPress()}>
      <Title colorText={colorText}>{title}</Title>
    </ButtonNav>
  );
}
