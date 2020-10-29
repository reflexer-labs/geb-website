import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"
import SiteMetadata from "../components/SiteMetadata"
import DeveloperBlock from "../components/ui/DeveloperBlock"
import FAQsCollapse from "../components/ui/FAQsCollapse"
import HeroBox from "../components/ui/HeroBox"
import HeroSeciton from "../components/ui/HeroSeciton"

const Home = () => {
  return (
    <Layout
      headerStyle={{ position: "absolute", width: "100%", top: "20px" }}
      isWhiteLogo
      onlyBrand
    >
      <SiteMetadata />
      <HeroSeciton />
      <BoxesContainer>
        <HeroBox />
      </BoxesContainer>
      <DeveloperBlock />
      <FAQsCollapse />
    </Layout>
  )
}

export default Home

const BoxesContainer = styled.div`
  margin-top: -95px;
`
