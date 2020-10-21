import React from "react"
import styled, { ThemeProvider } from "styled-components"
import Header from "./Header"
import Footer from "./Footer"
import { lightTheme } from "../utils/themes/light"

const Layout = ({ children, headerStyle, isWhiteLogo }) => {
  return (
    <ThemeProvider theme={lightTheme}>
      <MainContainer>
        <Header headerStyle={headerStyle} isWhiteLogo={isWhiteLogo} />
        {children}
        <Footer />
      </MainContainer>
    </ThemeProvider>
  )
}

export default Layout

const MainContainer = styled.div`
  background: ${props => props.theme.colors.background};
`
