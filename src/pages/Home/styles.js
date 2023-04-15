import styled from 'styled-components';
import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

export const Container = styled.View`
  flex: 1;
  background-color: #000;
`;

export const SubContainer = styled.View`
  background: #202024;
  width: 400px;
  height: 136px;
`;

export const Logo = styled.Image`
  width: 154px;
  height: 26px;
`;

export const Symbol = styled.Image`
  width: 40.74px;
  height: 40px;
`;

export const BackgroundSymbol = styled.View`
  width: 100%;
  align-items: center;
  margin-top: 30px;
`;

export const ButtonBack = styled.TouchableOpacity`
  height: 26px;
  width: 26px;
  background: #202024;
`;

export const ImageSign = styled.Image`
  width: 26px;
  height: 26px;
`;

export const ViewRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 20px;
  margin-top: 15px;
`;

export const ViewSearch = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  padding: 8px;
`;

export const ButtonProgress = styled.TouchableOpacity`
  width: 184px;
  height: 35px;
  border-radius: 4px;
  background-color: #202024;
  justify-content: center;
  align-items: center;
  border-color: ${props => (props.isProgress ? '#fba94c' : '#202024')};
  border-width: 1px;
`;

export const ButtonDone = styled.TouchableOpacity`
  width: 184px;
  height: 35px;
  border-radius: 4px;
  background-color: #202024;
  justify-content: center;
  align-items: center;
  border-color: ${props => (props.done ? '#04d361' : '#202024')};
  border-width: 1px;
`;

export const ButtonFinishedGray = styled.View`
  width: 184px;
  height: 35px;
  border-radius: 4px;
  background-color: #202024;
  justify-content: center;
  align-items: center;
`;

export const TextOrange = styled.Text`
  color: ${props => (props.isProgress ? '#fba94c' : '#7C7C8A')};
  font-size: 12px;
`;

export const TextGreen = styled.Text`
  color: ${props => (props.done ? '#04D361' : '#7c7c8a')};
  font-size: 12px;
`;

export const TitleSolicite = styled.Text`
  color: #e1e1e8;
  font-size: 20px;
`;

export const TitleNumber = styled.Text`
  color: #c4c4cc;
  font-size: 16px;
`;

export const TextAlert = styled.Text`
  color: #7c7c8a;
  font-size: 20px;
  line-height: 32px;
  top: 15px;
`;

export const ContentItem = styled.View`
  margin-left: 20px;
`;

export const TitlePatrimony = styled.Text`
  color: #e1e1e6;
  font-size: 16px;
  font-weight: bold;
`;

export const TextDate = styled.Text`
  color: #c4c4cc;
  font-size: 12px;
  margin-left: 5px;
`;

export const ViewOne = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: ${width - 20}px;
  height: 88px;
  border-radius: 5px;
  background-color: #202024;
  align-self: center;
`;

export const Line = styled.View`
  height: 88px;
  width: 12px;
  background-color: ${props => (props.isProgress ? '#fba94c' : '#04D361')};
  align-self: center;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
`;

export const ViewColum = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ViewBase = styled.View`
  flex-direction: row;
`;

export const LogoTime = styled.Image`
  width: 14.63px;
  height: 14.63px;
`;

export const LogoClock = styled.Image`
  width: 48px;
  height: 48px;
  margin-right: 10px;
`;

export const SeparatorItems = styled.View`
  height: 16px;
`;

export const Separator = styled.View`
  height: 5px;
`;

export const ViewAbsolute = styled.View`
  position: absolute;
  width: 100%;
  bottom: 15px;
`;
