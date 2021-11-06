import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  background-color: ${(props) => props.theme.colors.purpleBold};
  justify-content: space-between;
  align-items: center;
  padding: 40px 20px 20px 20px;
`;

export const InfoHeader = styled.View``;

export const HeaderText = styled.Text`
  color: ${(props) => props.theme.colors.orange};
`;

export const ContactPageIcon = styled(Ionicons).attrs({
  size: 24,
})`
  color: ${(props) => props.theme.colors.orange};
`;

export const Button = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.colors.blueLight};
  border-radius: 8px;
  padding: 10px;
`;

export const AddIcon = styled(Feather).attrs({
  size: 24,
})`
  color: ${(props) => props.theme.colors.white};
  margin: 0 auto;
`;

export const Input = styled.TextInput``;
