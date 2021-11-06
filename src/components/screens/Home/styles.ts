import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  background-color: #fff;
  height: 100%;
`;

export const Message = styled.Text`
  color: red;
`;

export const NavigationButton = styled.TouchableOpacity`
  padding: 20px 0;
  display: flex;
  justify-content: center;
  width: 100px;
  background-color: ${(props) => props.theme.colors.blueMedium};
`;
