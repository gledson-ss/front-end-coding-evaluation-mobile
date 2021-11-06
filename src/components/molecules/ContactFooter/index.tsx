import React from 'react';
import { useContactList } from '../../../hooks/useContactList';
import ContactCityName from '../../atoms/ContactCityName';
import EditIcon from '../../atoms/EditIcon';
import TrashIcon from '../../atoms/TrashIcon';
import { contactProps } from '../../../@types/contact';
import * as Styled from './styles';
import { CommonActions, useNavigation } from '@react-navigation/native';

interface footerProps {
  list: contactProps;
}

const ContactFooter: React.FC<footerProps> = ({ list }) => {
  const { setEditingContact, removeContact } = useContactList();
  const navigation = useNavigation();
  
  function handleEditingContact() {
    setEditingContact(list);
    navigation.dispatch(
      CommonActions.navigate({
        name: 'Edit',
      })
    );
  }

  function handleRemoveContact() {
    removeContact(list.id);
  }

  return (
    <Styled.Footer>
      <Styled.ButtonsContainer>
        <Styled.ContactButton onPress={() => handleEditingContact()}>
          <EditIcon />
        </Styled.ContactButton>
        <Styled.ContactButton onPress={() => handleRemoveContact()}>
          <TrashIcon />
        </Styled.ContactButton>
      </Styled.ButtonsContainer>
      <ContactCityName>city: {list.adress.localidade}</ContactCityName>
    </Styled.Footer>
  );
};

export default ContactFooter;
