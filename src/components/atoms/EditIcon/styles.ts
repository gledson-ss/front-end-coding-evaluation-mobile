import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

export const Container = styled.View``;

export const Icon = styled(Feather).attrs({
  name: 'edit',
  size: 26,
})`
  color: ${(props) => props.theme.colors.white};
`;
