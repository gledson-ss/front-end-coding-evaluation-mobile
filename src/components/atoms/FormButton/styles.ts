import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  border-radius: 3px;
  background: ${(props) => props.theme.colors.blueMedium};
  padding: 16px 36px;
  width: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: ${(props) => props.theme.colors.white};
`;
