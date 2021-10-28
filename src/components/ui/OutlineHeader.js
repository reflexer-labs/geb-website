import React from "react"
import styled from "styled-components"

const OutlineHeader = ({ outline, text, color, ...rest }) => {
  return (
    <Header headerColor={color} {...rest}>
      <span className="outlined wow fadeInLeft">{outline}</span>{" "}
      <span className="wow fadeInRight">{text}</span>
    </Header>
  )
}

export default OutlineHeader

const Header = styled.h2`
  font-size: 70px;
  font-family: "open-sans", Impact;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 2px;
  color: ${({ theme, headerColor }) =>
    headerColor ? theme.colors[headerColor] : theme.colors.blueish};
  .outlined {
    color: transparent;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: ${({ theme, headerColor }) =>
      headerColor ? theme.colors[headerColor] : theme.colors.blueish};
    margin-right: 10px;
  }
  @media (max-width: 767px) {
    font-size: 50px;
    .outlined {
      -webkit-text-stroke-width: 1.5px;
    }
  }
`
