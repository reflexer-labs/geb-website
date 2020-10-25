import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"
import SplitView from "../components/SplitView"
import useAbout from "../hooks/useAbout"

const About = () => {
  const about = useAbout().map(item => item.node)

  return (
    <Layout headerStyle={{ background: "#fff" }}>
      <Container>
        <InnerContent>
          <SplitView data={about} topOffset={300} />
        </InnerContent>
      </Container>
    </Layout>
  )
}

export default About

const Container = styled.div`
  padding: 80px 20px;
  background: ${props => props.theme.colors.foreground};
`

const InnerContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`
