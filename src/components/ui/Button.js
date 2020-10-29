import React from "react"
import styled from "styled-components"
import getPrefixedPath from "../../utils/getPrefixPath"

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
            <img src={getPrefixedPath("/dark-arrow.svg")} alt={""} />
          ) : null}
          {text}
          {arrowPlacement === "right" ? (
            <img
              className="rotate"
              src={getPrefixedPath("/dark-arrow.svg")}
              alt={""}
            />
          ) : null}
        </DimmedBtn>
      )
    } else if (withArrow) {
      return (
        <ArrowBtn disabled={disabled} onClick={onClick}>
          <div>
            <span>{text}</span>{" "}
            <img src={getPrefixedPath("/arrow.svg")} alt={""} />
          </div>
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
  font-family: "Inter-Medium";
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
  font-family: "Inter-Medium";
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
  padding: 0;
  margin: 0;
  background: none;
  border-radius: 0;
  box-shadow: none;
  border: 0;
  outline: none;
  div {
    img {
      float: right;
      position: relative;
      top: 7px;
    }
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
  }
  &:hover {
    opacity: 0.8;
  }
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
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
