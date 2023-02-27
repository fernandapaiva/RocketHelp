import React from 'react';
import {BackgroundFirst, SubContainer, ImageSign, Logo} from './styles';

export default function Header() {
  return (
    <SubContainer>
      <BackgroundFirst>
        <Logo source={require('../../../assets/images/Logo2.png')} />
        <ImageSign source={require('../../../assets/images/sign.png')} />
      </BackgroundFirst>
    </SubContainer>
  );
}
