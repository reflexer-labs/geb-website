import React from "react"
import Layout from "../components/Layout"
import HeroSeciton from "../components/ui/HeroSeciton"
import VideoSection from "../components/VideoSection"
import ChartsSection from "../components/ChartsSection"
import StatsSection from "../components/StatsSection"

const Home = () => {
  return (
    <Layout
      headerStyle={{ position: "absolute", width: "100%", top: "20px" }}
      isWhiteLogo
      onlyBrand
    >
      <h1
        style={{ visibility: "hidden", height: "0", margin: "0", width: "0" }}
      >
        Reflexer is a platform where anyone can use their crypto collateral to
        mint RAI, a non-pegged stablecoin backed by ETH.
      </h1>
      <HeroSeciton />
      <VideoSection />
      <StatsSection />
      <ChartsSection />
    </Layout>
  )
}

export default Home
