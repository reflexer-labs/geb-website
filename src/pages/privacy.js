import React, { useEffect } from "react"
import moment from "moment"
import Layout from "../components/Layout"
import styled from "styled-components"
import usePrivacy from "../hooks/usePrivacy"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { SmoothVerticalScrolling } from "../utils/helper"

const Privacy = ({ location }) => {
  const privacyData = usePrivacy()[0].node
  useEffect(() => {
    if (location.state && location.state.section) {
      const h3List = document.getElementsByTagName("h3")
      if (h3List.length > 0) {
        SmoothVerticalScrolling(h3List[location.state.section], 300, "top")
      }
    }
  }, [location])
  return (
    <Layout
      customTitle={"Privacy"}
      headerStyle={{ position: "absolute", width: "100%", top: "20px" }}
      isWhiteLogo
      onlyBrand
      hasBackground
    >
      <InnterContent>
        <Title>{privacyData.title.title}</Title>
        <Date>
          Updated {moment(privacyData.updatedAt).format("MMMM Do YYYY")}
        </Date>
        {documentToReactComponents(JSON.parse(privacyData.content.raw))}
      </InnterContent>
    </Layout>
  )
}

export default Privacy

const Title = styled.h1`
  font-family: "Inter-Medium";
  font-weight: 600;
  text-align: center;
  max-width: 450px;
  margin: 0 auto 60px auto;
  font-size: 50px;
  font-weight: 600;
  font-family: "Inter-Medium";
  color: ${props => props.theme.colors.neutral};
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
      color: ${props => props.theme.colors.secondary};
      a {
        color: ${props => props.theme.colors.greenish};
        display: inline;
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
      color: ${props => props.theme.colors.greenish};
      display: inline;

      word-break: break-all;
    }
  }

  h3 {
    font-size: calc(0.8vw + 0.8vh + 0.5vmin);
    font-family: "Inter-Medium";
    color: ${props => props.theme.colors.neutral};
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
    color: ${props => props.theme.colors.secondary};
    font-family: "Inter-Medium";
    font-weight: bold;
    a {
      color: ${props => props.theme.colors.greenish};
      display: inline;
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
    color: ${props => props.theme.colors.secondary};
    a {
      color: ${props => props.theme.colors.greenish};
      display: inline;
      font-size: calc(0.44vw + 0.44vh + 0.5vmin);
      word-break: break-all;
    }
    ${({ theme }) => theme.mediaWidth.upToSmall`
     padding-top: 70px;
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
