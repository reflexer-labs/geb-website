import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"
import FAQsCollapse from "../components/ui/FAQsCollapse"
import HeroSeciton from "../components/ui/HeroSeciton"
import VideoSection from "../components/VideoSection"
import InfoBoxes from "../components/InfoBoxes"

const Home = () => {
  return (
    <Layout
      headerStyle={{ position: "absolute", width: "100%", top: "20px" }}
      isWhiteLogo
      onlyBrand
    >
      <HeroSeciton />
      <VideoSection />
      <InfoBoxes />
      <FAQsCollapse />
    </Layout>
  )
}

export default Home

const BoxesContainer = styled.div`
  margin-top: -95px;
`
