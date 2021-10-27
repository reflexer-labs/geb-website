import React from "react"
import styled from "styled-components"

const OutlineHeader = ({ outline, text, color }) => {
  return (
    <Header headerColor={color}>
      <span className="outlined">{outline}</span> {text}
    </Header>
  )
}

export default OutlineHeader

const Header = styled.h2`
  font-size: 70px;
  font-family: "open-sans", Impact;
  text-align: center;
  letter-spacing: 2px;
  color: ${({ theme, headerColor }) =>
    headerColor ? theme.colors[headerColor] : theme.colors.blueish};
  .outlined {
    color: transparent;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: ${({ theme, headerColor }) =>
      headerColor ? theme.colors[headerColor] : theme.colors.blueish};
  }
  @media (max-width: 767px) {
    font-size: 50px;
    .outlined {
      -webkit-text-stroke-width: 1.5px;
    }
  }
`
