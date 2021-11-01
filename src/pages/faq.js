import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"
import useFAQs from "../hooks/useFAQs"
import AllFaqs from "../components/AllFaqs"

const FAQ = ({ location }) => {
  const faqs = useFAQs().map(item => item.node)
  return (
    <Layout
      customTitle={"FAQ"}
      location={location}
      headerStyle={{ position: "absolute", width: "100%", top: "20px" }}
      isWhiteLogo
      onlyBrand
      hasBackground
    >
      <Container>
        <InnerContent>
          <AllFaqs data={faqs} location={location} />
        </InnerContent>
      </Container>
    </Layout>
  )
}

export default FAQ

const Container = styled.div`
  padding: 100px 20px 0 20px;
`

const InnerContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`
