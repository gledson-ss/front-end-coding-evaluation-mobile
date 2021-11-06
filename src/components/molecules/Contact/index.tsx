import React from 'react';
import { contactProps } from '../../../@types/contact';
import ContactName from '../../atoms/ContactName';
import * as Styled from './styles';
import ContactFooter from '../ContactFooter';
import ContactDataContainer from '../ContactDataContainer';

interface componentProps {
  listItem: contactProps;
}

const Contact: React.FC<componentProps> = ({ listItem }) => {
  return (
    <Styled.Container>
      <Styled.NameContainer>
        <ContactName>{listItem.name}</ContactName>
      </Styled.NameContainer>
      <ContactDataContainer listItem={listItem} />
      <ContactFooter list={listItem} />
    </Styled.Container>
  );
};

export default Contact;
