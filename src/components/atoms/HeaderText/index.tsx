import React from 'react';

import * as Styled from './styles';

interface headerTextProps {
  text: string;
}

const HeaderText: React.FC<headerTextProps> = ({ text }) => (
  <Styled.HeaderText>{text}</Styled.HeaderText>
);

export default HeaderText;
