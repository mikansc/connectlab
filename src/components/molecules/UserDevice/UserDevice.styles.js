import styled from "styled-components";

export const StyledWrapper = styled.div`
  width: 100%;
  cursor: pointer;
  transition: box-shadow 150ms ease-in-out;

  &:hover {
    box-shadow: ${({ theme }) => theme.shadow.big};
  }
`;

export const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledDeviceData = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding: 0 1em;
`;

export const StyledDeviceStatus = styled.div`
  font-size: 3.2rem;
  color: ${({ theme, active }) => (active ? theme.colors.success : theme.colors.gray)};
`;
