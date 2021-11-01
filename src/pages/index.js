import React from "react"
import Layout from "../components/Layout"
import FAQsCollapse from "../components/FAQsCollapse"
import HeroSeciton from "../components/ui/HeroSeciton"
import VideoSection from "../components/VideoSection"
import InfoBoxes from "../components/InfoBoxes"
import HomeIntegrations from "../components/HomeIntegrations"

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
      <HomeIntegrations />
    </Layout>
  )
}

export default Home
