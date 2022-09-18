import styled from "styled-components";

export const StyledSwitch = styled.div`
  position: relative;
  display: inline-block;
  width: 34px;
  height: 18px;
`;

export const StyledSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 250ms ease-in-out;
  border-radius: 34px;

  &:before {
    position: absolute;
    content: "";
    height: 12px;
    width: 12px;
    left: 4px;
    bottom: 3px;
    background-color: white;
    transition: 250ms;
    border-radius: 50%;
  }
`;

export const StyledInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + ${StyledSlider} {
    background-color: ${({ theme }) => theme.colors.main.default};
  }

  &:checked + ${StyledSlider}:before {
    transform: translateX(14px);
  }
`;
