import { css } from "styled-components"

export const ExternalLinkArrow = css`
  border: 0;
  cursor: pointer;
  box-shadow: none;
  outline: none;
  padding: 0;
  margin: 0;
  background: ${props => props.theme.colors.gradient};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: ${props => props.theme.colors.inputBorderColor};
  font-size: ${props => props.theme.font.small};
  font-weight: 600;
  font-family: "Inter-Medium";
  line-height: 24px;
  letter-spacing: -0.18px;
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
    &:hover {
      opacity: 0.5;
    }
  }
  transition: all 0.3s ease;
  &:hover {
    opacity: 0.8;
  }

  img {
    position: relative;
    top: 1px;
  }
`
