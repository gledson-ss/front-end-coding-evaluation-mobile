import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import React from 'react';
import CreateHeader from '../../organisms/CreateHeader';
import Form from '../../organisms/Form';
import * as Styled from './styles';

const Create: React.FC<NativeStackHeaderProps> = ({ navigation }) => {
  return (
    <Styled.Container>
      <CreateHeader navigation={navigation} />
      <Styled.FormContainer>
        <Form screen="Create" />
      </Styled.FormContainer>
    </Styled.Container>
  );
};

export default Create;
