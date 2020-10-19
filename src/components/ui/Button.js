import React from "react"
import styled from "styled-components"

const Button = ({
  text,
  onClick,
  dimmed,
  withArrow,
  disabled,
  dimmedWithArrow,
  isBordered,
  arrowPlacement = "left",
  children,
}) => {
  const returnType = () => {
    if (dimmed) {
      return (
        <DimmedBtn disabled={disabled} onClick={onClick}>
          {text}
        </DimmedBtn>
      )
    }
    if (dimmedWithArrow) {
      return (
        <DimmedBtn disabled={disabled} onClick={onClick}>
          {arrowPlacement === "left" ? (
            <img src={"/img/dark-arrow.svg"} alt={""} />
          ) : null}
          {text}
          {arrowPlacement === "right" ? (
            <img className="rotate" src={"/img/dark-arrow.svg"} alt={""} />
          ) : null}
        </DimmedBtn>
      )
    } else if (withArrow) {
      return (
        <ArrowBtn disabled={disabled} onClick={onClick}>
          {text} <img src={"/img/arrow.svg"} alt={""} />
        </ArrowBtn>
      )
    } else if (isBordered) {
      return (
        <BorderedBtn disabled={disabled} onClick={onClick}>
          <Inner> {text}</Inner>
        </BorderedBtn>
      )
    } else {
      return (
        <Container disabled={disabled} onClick={onClick}>
          {text} {children ? children : null}
        </Container>
      )
    }
  }
  return returnType()
}

export default Button

const Container = styled.button`
  outline: none;
  cursor: pointer;
  min-width: 134px;
  border: none;
  box-shadow: none;
  padding: ${props => props.theme.global.buttonPadding};
  line-height: 24px;
  font-size: ${props => props.theme.font.small};
  font-weight: 600;
  color: ${props => props.theme.colors.neutral};
  background: ${props => props.theme.colors.gradient};
  border-radius: ${props => props.theme.global.borderRadius};
  transition: all 0.3s ease;
  &:hover {
    opacity: 0.8;
  }
  &:disabled {
    cursor: not-allowed;
  }
`

const DimmedBtn = styled.button`
  cursor: pointer;
  border: none;
  box-shadow: none;
  outline: none;
  background: transparent;
  border-radius: 0;
  color: ${props => props.theme.colors.secondary};
  font-size: ${props => props.theme.font.small};
  font-weight: 600;
  line-height: 24px;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  img {
    margin-right: 3px;
    &.rotate {
      transform: rotate(180deg);
      margin-right: 0;
      margin-left: 3px;
    }
  }
  transition: all 0.3s ease;
  &:hover {
    opacity: 0.8;
  }
  &:disabled {
    cursor: not-allowed;
  }
`

const ArrowBtn = styled.button`
  display: flex;
  align-items: center;
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
`

const BorderedBtn = styled.button`
  background: ${props => props.theme.colors.gradient};
  padding: 2px;
  border-radius: 25px;
  box-shadow: none;
  outline: none;
  border: 0;
  cursor: pointer;
  &:disabled {
    cursor: not-allowed;
  }
`

const Inner = styled.div`
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.inputBorderColor};
  border-radius: 25px;
  padding: 4px 6px;
  transition: all 0.3s ease;
  &:hover {
    opacity: 0.8;
  }
`
