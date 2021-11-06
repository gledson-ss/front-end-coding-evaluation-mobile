import React, { FC } from 'react';
import FormButton from '../../atoms/FormButton';
import * as Styled from './styles';

interface submitFieldProp {
  context: string;
}

const SubmitField: FC<submitFieldProp> = ({ context }) => {
  return (
    <Styled.ButtonContainer>
      <FormButton value={context} />
      <FormButton value="Cancel" />
    </Styled.ButtonContainer>
  );
};

export default SubmitField;
