import React from "react"
import styled from "styled-components"
import CookieConsent from "react-cookie-consent"
import getPrefixedPath from "../utils/getPrefixPath"
import { Link } from "gatsby"
import { ExternalLinkArrow } from "../styles/GlobalStyle"

const CookieBanner = () => {
  return (
    <CookieConsent
      location="bottom"
      buttonText="✓ Accept"
      cookieName="cookiesAccepted"
      style={{ background: "#0b1226", boxShadow: "0 0 6px rgba(0,0,0,0.16)" }}
    >
      <CookiesText>
        {" "}
        <img src={getPrefixedPath("/cookie.svg")} alt="" />
        This website uses cookies to enhance the user experience. By continuing
        to browse the site you're agreeing to our{" "}
        <CustomLink to="/privacy" state={{ section: 3 }}>
          use of cookies.
        </CustomLink>
      </CookiesText>
    </CookieConsent>
  )
}

export default CookieBanner

const CookiesText = styled.span`
  color: ${props => props.theme.colors.neutral};
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  img {
    width: 20px;
    margin-right: 10px;
  }
  @media (max-width: 991px) {
    font-size: 14px;
  }
`

const CustomLink = styled(Link)`
  ${ExternalLinkArrow}
  margin-left:10px;
`
