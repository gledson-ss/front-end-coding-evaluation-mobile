import React from 'react';
import { useContactList } from '../../../hooks/useContactList';
import FormInputField from '../../molecules/FormInputField';
import SubmitField from '../../molecules/SubmitField';

import * as Styled from './styles';

interface formPros {
  screen: string;
}

const Form: React.FC<formPros> = ({ screen }) => {
  const { editingContact } = useContactList();
  
  return (
    <Styled.Form>
      <FormInputField initialData={editingContact} context={screen} />
      <SubmitField context={screen} />
    </Styled.Form>
  );
};

export default Form;
