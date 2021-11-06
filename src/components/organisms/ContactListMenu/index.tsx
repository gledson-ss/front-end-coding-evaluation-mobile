import React, { useEffect, useState } from 'react';
import { contactProps } from '../../../@types/contact';
import { useContactList } from '../../../hooks/useContactList';
import Contact from '../../molecules/Contact';

import * as Styled from './styles';

const ContactListMenu: React.FC = () => {
  const { contactList } = useContactList((state) => state);
  const [contacts, setContacts] = useState<contactProps[]>([]);

  useEffect(() => {
    setContacts([...contactList]);
  }, [contactList]);

  return (
    <Styled.Container>
      {contacts.map((item: contactProps) => (
        <Contact key={item.id} listItem={item} />
      ))}
    </Styled.Container>
  );
};

export default ContactListMenu;
