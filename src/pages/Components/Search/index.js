import React from 'react';
import {
  TextGreen,
  TextOrange,
  ViewProgress,
  ViewSearch,
  ViewFinished,
} from './styles';

export default function Search() {
  return (
    <ViewSearch>
      <ViewProgress>
        <TextOrange>EM ANDAMENTO</TextOrange>
      </ViewProgress>
      <ViewFinished>
        <TextGreen>FINALIZADOS</TextGreen>
      </ViewFinished>
    </ViewSearch>
  );
}
