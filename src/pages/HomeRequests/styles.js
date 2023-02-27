import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
  background-color: #202024;
`;

export const ViewRow = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  margin-top: 20px;
`;

export const TitleSolicite = styled.Text`
  color: #e1e1e6;
  font-size: 20px;
  font-weight: bold;
  right: 100px;
`;

export const LogoArrow = styled.Image`
  width: 9px;
  height: 16px;
`;

export const InputOne = styled.TextInput`
  width: 360px;
  height: 56px;
  background-color: #121214;
  border-radius: 6px;
  padding: 15px;
`;

export const InputTwo = styled.TextInput`
  width: 360px;
  height: 540px;
  background-color: #121214;
  border-radius: 6px;
  margin-top: 15px;
  padding: 15px;
`;

export const InputTextView = styled.View`
  width: 100%;
  padding: 15px;
`;
