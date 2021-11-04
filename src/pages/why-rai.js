import React from "react"
import Layout from "../components/Layout"
import styled from "styled-components"
import useWhyRai from "../hooks/useWhyRai"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import OutlineHeader from "../components/ui/OutlineHeader"
import LinkButton from "../components/ui/LinkButton"

const WhyRai = () => {
  const data = useWhyRai()

  return (
    <Layout
      customTitle={"Why RAI"}
      headerStyle={{ position: "absolute", width: "100%", top: "20px" }}
      isWhiteLogo
      onlyBrand
      hasBackground
    >
      <InnterContent>
        <OutlineHeader outline="Why" text="RAI" color="blueish" />
        {data.map(item => {
          return (
            <Box
              className="wow fadeInUp"
              data-wow-delay={"0.2s"}
              key={item.node.title + Math.random()}
              style={{ background: `url(${item.node.background.file.url})` }}
            >
              <ItemTitle>{item.node.title.title}</ItemTitle>
              <Content>
                {documentToReactComponents(JSON.parse(item.node.content.raw))}
              </Content>
              <LinkButton
                text={item.node.link.name}
                href={item.node.link.link}
                withArrow
                isExternal
              />
            </Box>
          )
        })}
      </InnterContent>
    </Layout>
  )
}

export default WhyRai

const InnterContent = styled.div`
  max-width: 880px;
  margin: 0 auto 120px auto;
  padding-top: 180px;
  padding-right: 20px;
  padding-left: 20px;
  @media (max-width: 767px) {
    padding-top: 70px;
  }
`

const Box = styled.div`
  border-radius: 30px;
  background-color: transparent;
  background-position: 50% 50%;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 40px;
  margin-bottom: 30px;
  a {
    width: fit-content;
    background: #05284c;
    svg {
      margin-left: 20px;
    }
  }
`

const ItemTitle = styled.div`
  color: white;
  font-weight: 900;
  font-size: 22px;
`

const Content = styled.div`
  color: white;
  line-height: 1.7;
  font-size: 17px;
  p {
    margin-top: 10px;
  }
`
