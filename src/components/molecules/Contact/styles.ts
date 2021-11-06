import styled from 'styled-components/native';

export const Container = styled.View`
  width: 90%;
  margin: 0 20px;
  padding-top: 20px;
  background-color: ${(props) => props.theme.colors.smoke};
  border-radius: 8px;
  max-width: 600px;
  margin-bottom: 40px;
`;

export const NameContainer = styled.View`
  padding: 0 20px;
`;
