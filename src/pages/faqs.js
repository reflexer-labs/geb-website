import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"
import useFAQs from "../hooks/useFAQs"
import SplitView from "../components/SplitView"

const headerStyle = {
  background: "#fff",
  boxShadow: "0px 1px 0px #eef3f9",
  borderBottom: "1px solid #eef3f9",
}

const FAQs = () => {
  const faqs = useFAQs().map(item => item.node)
  return (
    <Layout smallLogo={true} headerStyle={headerStyle}>
      <Container>
        <InnerContent>
          <SplitView data={faqs} />
        </InnerContent>
      </Container>
    </Layout>
  )
}

export default FAQs

const Container = styled.div`
  padding: 80px 20px;
  background: ${props => props.theme.colors.foreground};
`

const InnerContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`
