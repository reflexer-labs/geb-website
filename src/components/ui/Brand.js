import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import getPrefixedPath from "../../utils/getPrefixPath"

const Brand = ({ height, smallLogo }) => {
  return (
    <Container>
      <Link to="/">
        <img
          className={smallLogo ? "small" : ""}
          height={height}
          src={getPrefixedPath("/brand-white.png")}
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
      &.small {
        width: 105.14px;
        height: 25.49px;
      }
      ${({ theme }) => theme.mediaWidth.upToSmall`
        width: 105.14px;
        height: 25.49px;
      }
      `}
    }
  }
`
