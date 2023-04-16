import styled from 'styled-components';
export const StyledContacts = styled.li`
  padding-top: 5px;
  width: 500px;
  display: flex;
  justify-content: space-between;
`;

export const StyledButton = styled.button`
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 5px red;
  }
`;
