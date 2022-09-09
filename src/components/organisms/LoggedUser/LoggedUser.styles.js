import styled from "styled-components";

export const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 1em;
  margin-right: 3em;
`;

export const StyledUserData = styled.div`
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
