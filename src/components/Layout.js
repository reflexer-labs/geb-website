import React from "react"
import styled, { ThemeProvider } from "styled-components"
import Header from "./Header"
import Footer from "./Footer"
import { lightTheme } from "../utils/themes/light"

const Layout = props => {
  return (
    <ThemeProvider theme={lightTheme}>
      <MainContainer>
        <Header />
        {props.children}
        <Footer />
      </MainContainer>
    </ThemeProvider>
  )
}

export default Layout

const MainContainer = styled.div`
  background: ${props => props.theme.colors.background};
`
