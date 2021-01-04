import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"
import SplitView from "../components/SplitView"
import useAbout from "../hooks/useAbout"

const headerStyle = {
  background: "#fff",
  boxShadow: "0px 1px 0px #eef3f9",
  borderBottom: "1px solid #eef3f9",
}

const About = ({ location }) => {
  const about = useAbout().map(item => item.node)

  return (
    <Layout
      customTitle={"About"}
      onlyBrand={false}
      headerStyle={headerStyle}
      smallLogo
      location={location}
    >
      <Container>
        <InnerContent>
          <SplitView isAbout={true} data={about} topOffset={300} />
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
