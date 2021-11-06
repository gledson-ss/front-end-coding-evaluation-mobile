import React from 'react';
import * as Styled from './styles';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ParamListBase } from '@react-navigation/native';
import HeaderText from '../../atoms/HeaderText';

interface headerProps {
  navigation: NativeStackNavigationProp<ParamListBase, string>;
}
const CreateHeader: React.FC<headerProps> = ({ navigation }) => {
  return (
    <Styled.Container>
      <Styled.NavigationButton onPress={() => navigation.goBack()}>
        <Styled.BackIcon />
      </Styled.NavigationButton>
      <HeaderText text="Hello!" />
    </Styled.Container>
  );
};

export default CreateHeader;
