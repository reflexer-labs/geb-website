import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import getPrefixedPath from "../../utils/getPrefixPath"

const Brand = ({ height, isWhiteLogo }) => {
  return (
    <Container>
      <Link to="/">
        <img
          height={height}
          src={
            isWhiteLogo
              ? getPrefixedPath("/brand-white.svg")
              : getPrefixedPath("/brand.svg")
          }
          alt="reflexer labs"
        />
      </Link>
    </Container>
  )
}

export default Brand

const Container = styled.div`
  a {
    color: inherit;
    text-decoration: none;
    img {
      width: 160px;
      ${({ theme }) => theme.mediaWidth.upToSmall`
        width:105px;
      `}
    }
  }
`