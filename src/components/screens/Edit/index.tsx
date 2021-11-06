import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import React from 'react';
import EditHeader from '../../organisms/EditHeader';
import Form from '../../organisms/Form';
import * as Styled from './styles';

const Edit: React.FC<NativeStackHeaderProps> = ({ navigation }) => {
  return (
    <Styled.Container>
      <EditHeader navigation={navigation} />
      <Styled.FormContainer>
        <Form screen="Edit" />
      </Styled.FormContainer>
    </Styled.Container>
  );
};

export default Edit;
