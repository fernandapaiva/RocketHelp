import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
  background-color: #202024;
`;

export const SubContainer = styled.View`
  width: 100%;
  align-items: center;
`;

export const ViewSpace = styled.View``;

export const InputTextView = styled.View`
  flex-direction: row;
  width: 364px;
  height: 56px;
  background: #121214;
  border-radius: 6px;
`;

export const InputOne = styled.TextInput`
  width: 90%;
`;

export const ViewImage = styled.TextInput`
  width: 10%;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
`;

export const ButtonNav = styled.TouchableOpacity`
  height: 56px;
  width: 364px;
  border-radius: 6px;
  background: #00875f;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 14px;
`;

export const TextColorWhite = styled.Text`
  color: #e1e1e6;
  font-size: 20px;
  font-weight: bold;
`;

export const Logo = styled.Image`
  width: 163px;
  height: 87px;
`;

export const ImageEmail = styled.Image`
  width: 18.5px;
  height: 15px;
`;

export const ImagePassowrd = styled.Image`
  width: 18.5px;
  height: 18.5;
`;

export const ImageSenha = styled.Image`
  width: 19.25px;
  height: 20.25px;
`;

export const SeparatorItem = styled.View`
  margin-top: 50px;
`;

export const Separator = styled.View`
  margin-top: 15px;
`;

export const ErrorMensage = styled.Text`
  font-size: 13px;
  color: red;
  margin-left: 5px;
  margin-top: 5px;
`;
