import { css, createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
        body {
          color: ${props => props.theme.colors.primary};
          background:${props => props.theme.colors.foreground};
            

.__react_component_tooltip {
    max-width: 250px;
    padding-top: 20px;
    padding-bottom: 20px;
    border-radius: 5px;
    color:${props => props.theme.colors.primary};
    opacity: 1 !important;
    background: ${props => props.theme.colors.background};
    border: ${props => props.theme.colors.border} !important;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.16);
    &:after {
      border-top-color: ${props => props.theme.colors.background} !important;
    }
  }
        }
`

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

export default GlobalStyle
