import styled from 'styled-components';

export const ButtonNav = styled.TouchableOpacity`
  height: 56px;
  width: 364px;
  border-radius: 6px;
  background: ${Props => (Props.color ? Props.color : '#00875f')};
  align-items: center;
  justify-content: center;
  align-self: center;
`;

export const Title = styled.Text`
  color: ${Props => (Props.colorText ? Props.colorText : '#ffffff')};
  font-size: 14px;
  font-weight: bold;
`;
