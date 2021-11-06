import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Alert, Keyboard } from 'react-native';
import { contactProps } from '../../../@types/contact';
import { useContactList } from '../../../hooks/useContactList';
import { useForm } from '../../../hooks/useForm';
import { api } from '../../../service/api';
import { canRequestApi } from '../../../utils/InputValidation';
import * as Styled from './styles';

interface formButtonProps {
  value: string;
}

const FormButton: React.FC<formButtonProps> = ({ value }) => {
  const { inputValues, setInputValues } = useForm();
  const { goBack } = useNavigation();
  const { addContact, contactList, updateContact, editingContact } = useContactList();

  async function getResponseApi(cep: string) {
    let responseApiCep = null;

    try {
      responseApiCep = await (await api.get(`${cep}/json/`)).data;
      if (responseApiCep.erro === true) {
        throw new Error('');
      }
    } catch {
      responseApiCep = 'error';
    }
    if (responseApiCep === 'error') {
      Alert.alert('Invalid CEP');
    } else {
      const res: contactProps = {
        id: value === 'Create' ? contactList.length + 1 : editingContact.id,
        name: inputValues.name,
        email: inputValues.email,
        date: inputValues.date,
        adress: {
          cep: inputValues.cep,
          complemento: responseApiCep.complemento,
          logradouro: responseApiCep.logradouro,
          localidade: responseApiCep.localidade,
          ibge: responseApiCep.ibge,
          uf: responseApiCep.uf,
        },
      };

      if (value === 'Create') {
        addContact(res);
      }
      if (value === 'Edit') {
        updateContact(res);
      }
      Alert.alert('Sucess!');
      goBack();
    }
    Keyboard.dismiss();
  }

  function handleClick() {
    if (value === 'Cancel') {
      goBack();
      return;
    }
    const canRequest = canRequestApi(inputValues);

    if (canRequest !== 'yes') {
      Alert.alert(canRequest);
      return;
    }
    getResponseApi(inputValues.cep);
  }

  return (
    <Styled.Container onPress={() => handleClick()}>
      <Styled.ButtonText>{value}</Styled.ButtonText>
    </Styled.Container>
  );
};

export default FormButton;
