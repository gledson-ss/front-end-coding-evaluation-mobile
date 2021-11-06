import React, { ReactNode } from 'react';

import * as Styled from './styles';

interface componentProps {
  value: string;
}

const InputLabel: React.FC<componentProps> = ({ value }) => (
  <Styled.Label editable={false} value={value} />
);

export default InputLabel;
