import React from "react"
import styled from "styled-components"
import Brand from "./ui/Brand"
import Button from "./ui/Button"

const Header = ({ headerStyle, isWhiteLogo, smallLogo, onlyBrand }) => {
  return (
    <Container style={{ ...headerStyle }}>
      <Left>
        <Brand smallLogo={smallLogo} isWhiteLogo={isWhiteLogo} />
      </Left>
      {!onlyBrand ? (
        <Right>
          <Button>
            <a
              href="https://app.reflexer.finance/"
              target="_blank"
              rel="noreferrer"
            >
              Dashboard
            </a>
          </Button>
        </Right>
      ) : (
        ""
      )}
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

const Right = styled.div`
  a {
    color: inherit;
  }
`
