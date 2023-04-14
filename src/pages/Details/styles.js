import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
  background-color: #202024;
`;

export const InputOne = styled.TextInput`
  width: 360px;
  height: 56px;
  background-color: #121214;
  border-radius: 6px;
  padding: 12px;
  align-self: center;
`;

export const InputTwo = styled.TextInput`
  background-color: #121214;
  padding: 12px;
  width: 360px;
  height: 560px;
  border-radius: 6px;
  align-self: center;
  text-align: justify;
  text-align-vertical: top;
`;

export const InputTextView = styled.View`
  width: 100%;
  align-items: center;
`;

export const ButtonArrow = styled.TouchableOpacity``;

export const ItemSeparator = styled.View`
  margin-top: 15px;
`;
