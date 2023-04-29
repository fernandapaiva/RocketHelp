import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: black;
`;

export const ContainerInside = styled.View`
  background-color: #ffffff;
  width: 95%;
  min-height: 300px;
  border-radius: 5px;
  padding: 20px;
`;

export const ContainerSeparator = styled.View`
  align-items: center;
`;

export const AlertRed = styled.Image`
  width: 80px;
  height: 80px;
`;

export const SeparatorItems = styled.View`
  height: 35px;
`;

export const Separator = styled.View`
  height: 20px;
`;

export const TitleAlertRed = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${props => (props.type === 'Sucess' ? '#04d361' : '#ff0000')};
  /* font-weight: 'bold'; */
`;

export const Information = styled.Text`
  font-size: 14px;
  color: #282828;
`;
