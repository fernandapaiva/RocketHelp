import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: black;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: ${({height}) => height}px;
  z-index: 999;
  elevation: 999;
  position: absolute;
  opacity: 0.6;
  justify-content: center;
  align-items: center;
`;
