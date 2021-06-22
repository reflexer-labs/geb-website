import React from "react"
import moment from "moment"
import Layout from "../components/Layout"
import styled from "styled-components"
import { ExternalLinkArrow } from "../styles/GlobalStyle"
import useWhyRai from "../hooks/useWhyRai"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const WhyRai = () => {
  const data = useWhyRai()[0].node

  return (
    <Layout headerStyle={{ position: "absolute", width: "100%", top: "20px" }}>
      <InnterContent>
        <Title>{data.title.title}</Title>
        <Date>Updated {moment(data.updatedAt).format("MMMM Do YYYY")}</Date>
        {documentToReactComponents(data.content.json)}
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
  margin: 0 auto 60px auto;
  font-size: 50px;
  font-weight: 600;
  font-family: "Inter-Medium";
  color: ${props => props.theme.colors.primary};
  ${({ theme }) => theme.mediaWidth.upToSmall`
   font-size:35px;
   `}
`

const InnterContent = styled.div`
  max-width: 1024px;
  margin: 0 auto 80px auto;
  padding-top: 180px;
  padding-right: 20px;
  padding-left: 20px;

  p {
    line-height: 1.8 !important;
    margin-bottom: 0 !important;
    > b {
      font-size: calc(0.44vw + 0.44vh + 0.5vmin);
      line-height: 2;
      margin: 0;
      color: ${props => props.theme.colors.primary};
      a {
        ${ExternalLinkArrow}
        display:inline;
        font-size: calc(0.44vw + 0.44vh + 0.5vmin);
        word-break: break-all;
      }
      ${({ theme }) => theme.mediaWidth.upToSmall`
      font-size: 16px;
      a{
        font-size: 16px;
      }
    `}
    }
  }
  p,
  li {
    color: ${props => props.theme.colors.secondary};
    font-weight: bold;
    font-size: calc(0.42vw + 0.42vh + 0.5vmin);
    ${({ theme }) => theme.mediaWidth.upToSmall`
    font-size:15px;
  `}
    a {
      ${ExternalLinkArrow}
      display:inline;

      word-break: break-all;
    }
  }

  h3 {
    font-size: calc(0.8vw + 0.8vh + 0.5vmin);
    font-family: "Inter-Medium";
    color: ${props => props.theme.colors.primary};
    margin-top: 60px;
    margin-bottom: 20px;
    ${({ theme }) => theme.mediaWidth.upToSmall`
  font-size:20px;
  margin-bottom:20px;
  `}
  }

  h5 {
    font-size: calc(0.55vw + 0.55vh + 0.5vmin);
    line-height: 2;
    margin: 20px 0 0 0;
    color: ${props => props.theme.colors.primary};
    font-family: "Inter-Medium";
    font-weight: bold;
    a {
      ${ExternalLinkArrow}
      display:inline;
      font-size: calc(0.44vw + 0.44vh + 0.5vmin);
      word-break: break-all;
    }
    ${({ theme }) => theme.mediaWidth.upToSmall`
      font-size: 17px;
      a{
        font-size: 17px;
      }
    `}
  }

  h6 {
    font-size: calc(0.44vw + 0.44vh + 0.5vmin);
    line-height: 2;
    margin: 0;

    a {
      ${ExternalLinkArrow}
      display:inline;
      font-size: calc(0.44vw + 0.44vh + 0.5vmin);
      word-break: break-all;
    }
    ${({ theme }) => theme.mediaWidth.upToSmall`
      font-size: 16px;
      a{
        font-size: 16px;
      }
    `}
  }
`

const Date = styled.div`
  color: ${props => props.theme.colors.secondary};
  text-align: center;
  margin: 30px 0 80px 0;
  font-weight: bold;
`
