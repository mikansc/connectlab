import styled from "styled-components";

export const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const StyledContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 1em;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.main.text};
    background-color: ${({ theme }) => theme.colors.main.light};
  }
`;

export const StyledUserData = styled.div`
  display: flex;
  justify-content: center;

  height: 100%;
  margin: 0 0.5em;
  display: flex;
  flex-direction: column;
`;

export const StyledUserName = styled.span`
  font-size: 1.5rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.main.text};
`;

export const StyledClock = styled.span`
  font-size: 1.25rem;
  font-weight: 300;
  line-height: 1.25;
  color: ${({ theme }) => theme.colors.main.text};
`;
