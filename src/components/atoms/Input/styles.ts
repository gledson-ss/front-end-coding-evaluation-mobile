import styled from 'styled-components/native';
import { FontAwesome5 } from '@expo/vector-icons';

export const Input = styled.TextInput`
  background: #fff;
  border-radius: 8px;
  font-size: 16px;
  border: 2px solid ${(props) => props.theme.colors.greyLight};
  width: 100%;
  padding: 16px 24px;
`;

export const Button = styled.TouchableOpacity`
  background: #fff;
  border-radius: 8px;
  border: 2px solid ${(props) => props.theme.colors.greyLight};
  width: 100%;
  padding: 16px 24px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ButtonText = styled.Text`
  color: ${(props) => props.theme.colors.black};
  font-size: 16px;
`;

export const ButtonIcon = styled(FontAwesome5).attrs({
  name: 'calendar',
  size: 20,
})``;
