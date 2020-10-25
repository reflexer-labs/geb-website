import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"
import useFAQs from "../hooks/useFAQs"
import SplitView from "../components/SplitView"

const FAQs = () => {
  const faqs = useFAQs().map(item => item.node)
  return (
    <Layout headerStyle={{ background: "#fff" }}>
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
