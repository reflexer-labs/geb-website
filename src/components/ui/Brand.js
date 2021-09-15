import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import getPrefixedPath from "../../utils/getPrefixPath"
import useDarkMode from "use-dark-mode"

const Brand = ({ height, isWhiteLogo, smallLogo, forceWhite }) => {
  const { value: isDarkMode } = useDarkMode()
  return (
    <Container>
      <Link to="/">
        <img
          className={smallLogo ? "small" : ""}
          height={height}
          src={
            forceWhite
              ? getPrefixedPath("/brand-white.svg")
              : isWhiteLogo && !isDarkMode
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
