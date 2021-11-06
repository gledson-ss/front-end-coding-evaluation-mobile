import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';
export const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${(props) => props.theme.colors.purpleBold};
  padding: 40px 20px 20px 20px;
`;
export const NavigationButton = styled.TouchableOpacity`
  padding-right: 8px;
`;

export const BackIcon = styled(Ionicons).attrs({
  name: 'arrow-back-circle-outline',
  size: 30,
  color: 'black',
})`
  color: ${(props) => props.theme.colors.orange};
`;
