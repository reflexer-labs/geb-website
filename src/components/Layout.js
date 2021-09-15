import React from "react"
import styled, { ThemeProvider } from "styled-components"
import useDarkMode from "use-dark-mode"
import Header from "./Header"
import Footer from "./Footer"
import CookieBanner from "./CookieBanner"
import SEO from "./SEO"
import GlobalStyle from "../styles/GlobalStyle"
import { lightTheme } from "../utils/themes/light"
import { darkTheme } from "../utils/themes/dark"

const Layout = ({
  children,
  headerStyle,
  isWhiteLogo,
  smallLogo,
  onlyBrand,
  customTitle,
  location,
  forceWhite,
}) => {
  const { value: isDarkMode } = useDarkMode(false)

  return (
    <>
      <SEO customTitle={customTitle} />
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <GlobalStyle />
        <MainContainer>
          <Header
            headerStyle={headerStyle}
            isWhiteLogo={isWhiteLogo}
            smallLogo={smallLogo}
            onlyBrand={onlyBrand}
            location={location}
            forceWhite={forceWhite}
          />
          {children}
          <Footer isWhiteLogo={isDarkMode} location={location} />
          <CookieBanner />
        </MainContainer>
      </ThemeProvider>
    </>
  )
}

export default Layout

const MainContainer = styled.div`
  background: ${props => props.theme.colors.background};
  position: relative;
  .CookieConsent {
    z-index: 999 !important;
    bottom: 20px !important;
    width: 90% !important;
    max-width: 1280px;
    margin: 0 auto;
    right: 0;
    border-radius: ${props => props.theme.global.borderRadius};
    padding: 10px 20px;
    button {
      background: ${props => props.theme.colors.gradient} !important;
      font-family: "Inter-Medium";
      color: ${props => props.theme.colors.neutral} !important;
      padding: 8px 15px !important;
      background: ${props => props.theme.colors.gradient};
      border-radius: ${props => props.theme.global.borderRadius} !important;
      font-size: ${props => props.theme.font.small};
      font-weight: 600;
      font-family: "Inter-Medium";
      cursor: pointer;
      flex: 0 0 auto;
      margin: 0px 15px 0px 0px !important;
      text-align: center;
      outline: none;
      position: relative;
      top: -5px;
    }
    @media (max-width: 991px) {
      display: block !important;
      button {
        margin-left: 10px !important;
      }
    }
  }
`
