import React from 'react';
import { contactProps } from '../../../@types/contact';
import Input from '../../atoms/Input';
import InputLabel from '../../atoms/InputLabel';
import * as Styled from './styles';

interface formInputFieldProps {
  initialData: contactProps;
  context: string;
}

const FormInputField: React.FC<formInputFieldProps> = ({ initialData, context }) => {
  return (
    <Styled.Container>
      <Styled.InputLabelContainer>
        <InputLabel value="Name:" />
        <Input
          field="name"
          placeholderValue="type your name."
          value={context === 'Edit' ? initialData.name : ''}
          context="Edit"
        />
      </Styled.InputLabelContainer>

      <Styled.InputLabelContainer>
        <InputLabel value="Email:" />
        <Input
          field="email"
          placeholderValue="ex: oi@gledson.dev"
          value={context === 'Edit' ? initialData.email : ''}
          context="Edit"
        />
      </Styled.InputLabelContainer>

      <Styled.InputLabelContainer>
        <InputLabel value="Date of Birth:" />
        <Input
          field="date"
          placeholderValue="ex: 06/07/1999"
          value={context === 'Edit' ? initialData.date : ''}
          context="Edit"
        />
      </Styled.InputLabelContainer>

      <Styled.InputLabelContainer>
        <InputLabel value="Cep:" />
        <Input
          field="cep"
          placeholderValue="00000-000"
          value={context === 'Edit' ? initialData.adress.cep : ''}
          context="Edit"
        />
      </Styled.InputLabelContainer>
    </Styled.Container>
  );
};

export default FormInputField;
