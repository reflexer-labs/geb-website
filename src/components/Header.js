import React from "react"
import styled from "styled-components"
import Brand from "./ui/Brand"

const Header = ({ headerStyle, isWhiteLogo }) => {
  return (
    <Container style={{ ...headerStyle }}>
      <Left>
        <Brand isWhiteLogo={isWhiteLogo} />
      </Left>
    </Container>
  )
}

export default Header

const Container = styled.div`
  display: flex;
  height: 68px;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  ${({ theme }) => theme.mediaWidth.upToSmall`
     padding: 0 20px;
     top:0 !important;
  `}
`

const Left = styled.div`
  min-width: 194px;
  display: flex;
  align-items: center;
`
