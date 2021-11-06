import * as Styled from './styles';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import React from 'react';
import Header from '../../organisms/HomeHeader';
import { Ionicons } from '@expo/vector-icons';
import ContactListMenu from '../../organisms/ContactListMenu';
const Home: React.FC<NativeStackHeaderProps> = ({ navigation }) => {
  return (
    <Styled.Container>
      <Header navigation={navigation} />
      <ContactListMenu />
    </Styled.Container>
  );
};

export default Home;
