import React from "react"
import Layout from "../components/Layout"
import styled from "styled-components"
import useWhyRai from "../hooks/useWhyRai"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const WhyRai = () => {
  const data = useWhyRai()

  return (
    <Layout headerStyle={{ position: "absolute", width: "100%", top: "20px" }}>
      <InnterContent>
        <Title>{"Why RAI"}</Title>
        {data.map(item => {
          return (
            <Box
              key={item.node.title + Math.random()}
              style={{ background: `url(${item.node.background.file.url})` }}
            >
              <ItemTitle>{item.node.title.title}</ItemTitle>
              <Content>
                {documentToReactComponents(item.node.content.json)}
              </Content>
              <Link href={item.node.link.link} target="_blank">
                {item.node.link.name}
              </Link>
            </Box>
          )
        })}
      </InnterContent>
    </Layout>
  )
}

export default WhyRai

const Title = styled.h1`
  font-family: "Inter-Medium";
  font-weight: 600;
  text-align: center;
  max-width: 450px;
  margin: 0 auto 80px auto;
  font-size: 50px;
  font-weight: 600;
  font-family: "Inter-Medium";
  color: ${props => props.theme.colors.primary};
  ${({ theme }) => theme.mediaWidth.upToSmall`
   font-size:35px;
   `}
`

const InnterContent = styled.div`
  max-width: 880px;
  margin: 0 auto 120px auto;
  padding-top: 180px;
  padding-right: 20px;
  padding-left: 20px;
`

const Box = styled.div`
  border-radius: 30px;
  background-color: transparent;
  background-position: 50% 50%;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 40px;
  margin-bottom: 30px;
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

const Link = styled.a`
  padding: 8px 15px;
  border-radius: 4px;
  position: relative;
  color: #133ab3;
  background: white;
  font-size: 15px;
  font-weight: bold;
  margin-top: 10px;
  display: inline-block;
`
