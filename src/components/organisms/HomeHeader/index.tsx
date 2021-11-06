import React from 'react';
import * as Styled from './styles';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ParamListBase } from '@react-navigation/native';

interface headerProps {
  navigation: NativeStackNavigationProp<ParamListBase, string>;
}

const Header: React.FC<headerProps> = ({ navigation }) => {
  return (
    <Styled.Container>
      <Styled.InfoHeader>
        <Styled.ContactPageIcon name="person-sharp" />
        <Styled.HeaderText>Contact List</Styled.HeaderText>
      </Styled.InfoHeader>
      <Styled.Button onPress={() => navigation.navigate('Create')}>
        <Styled.AddIcon name="plus-square" />
      </Styled.Button>
    </Styled.Container>
  );
};

export default Header;
