import React from "react"
import moment from "moment"
import Layout from "../components/Layout"
import styled from "styled-components"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import useBugBounty from "../hooks/useBugBounty"
import { INLINES, BLOCKS } from "@contentful/rich-text-types"

const BugBounty = () => {
  const bugBounty = useBugBounty()[0].node
  const returnRewardTable = () => {
    return (
      <TableContainer>
        <Likelihood>Likelihood</Likelihood>
        <Severity>Severity</Severity>

        <InnerContainer>
          <Content>
            <Col className="heads">
              <Item>Almost certain</Item>
              <Item>Likely</Item>
              <Item>Possible</Item>
              <Item>Unlikely</Item>
              <Item>Almost possible</Item>
              <Item></Item>
            </Col>
            {Object.keys(bugBounty.rewardTable).map((key, index) => {
              return (
                <Col key={index * Math.random() + 3}>
                  {bugBounty.rewardTable[key].map((item, i) => (
                    <Item
                      key={i * Math.random() + 5}
                      style={{ color: item.color }}
                    >
                      {item.value}
                    </Item>
                  ))}
                  <Item className="foot">{key.split("_").join(" ")}</Item>
                </Col>
              )
            })}
          </Content>
        </InnerContainer>
      </TableContainer>
    )
  }

  const handleContent = content => {
    return documentToReactComponents(content, {
      renderNode: {
        [BLOCKS.QUOTE]: () => {
          return returnRewardTable()
        },
        [INLINES.HYPERLINK]: node => {
          return (
            <a
              href={node.data.uri}
              rel="noreferrer"
              target={
                node.data.uri.includes("mailto") ||
                node.data.uri.includes("zip")
                  ? ""
                  : "_blank"
              }
            >
              {node.content[0].value}
            </a>
          )
        },
      },
    })
  }

  return (
    <Layout
      customTitle={"Bug Bounty"}
      headerStyle={{ position: "absolute", width: "100%", top: "20px" }}
      isWhiteLogo
      onlyBrand
      hasBackground
    >
      <InnterContent>
        <Title>{bugBounty.title}</Title>
        <Date>
          Updated {moment(bugBounty.updatedAt).format("MMMM Do YYYY")}
        </Date>
        {handleContent(JSON.parse(bugBounty.content.raw))}
      </InnterContent>
    </Layout>
  )
}

export default BugBounty

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
        color: ${props => props.theme.colors.blueish};
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
      color: ${props => props.theme.colors.blueish};
      display: inline;

      word-break: break-all;
    }
  }

  h3 {
    font-size: calc(0.8vw + 0.8vh + 0.5vmin);
    font-family: "Inter-Medium";
    color: ${props => props.theme.colors.secondary};
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
      color: ${props => props.theme.colors.blueish};
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

    a {
      color: ${props => props.theme.colors.blueish};
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

const TableContainer = styled.div`
  margin: 30px 0 100px 0;
  position: relative;
  padding-left: 30px;
  max-width: 650px;
`

const InnerContainer = styled.div`
  overflow-x: auto;
`
const Content = styled.div`
  display: flex;
  margin-top: 20px;
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.3);
  width: 610px;
`

const Item = styled.div`
  height: 3rem;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  justify-content: center;
  font-weight: bold;
  font-size: 14px;
  &:last-child {
    border-bottom: 0;
  }
  &.foot {
    font-weight: normal;
    text-transform: capitalize;
    color: rgba(255, 255, 255, 0.9);
  }
`

const Col = styled.div`
  flex: 1;
  border-right: 1px solid rgba(255, 255, 255, 0.3);
  &:last-child {
    border-right: 0;
  }
  &.heads {
    flex: 0 0 150px;
    ${Item} {
      font-weight: normal !important;
      justify-content: flex-start;
      padding-left: 20px;
      color: rgba(255, 255, 255, 0.9);
    }
  }
`

const Likelihood = styled.div`
  position: absolute;
  color: ${props => props.theme.colors.customSecondary};
  font-size: 20px;
  left: -40px;
  top: calc(50%);
  -webkit-transform: translateY(-50%) rotate(90deg);
  transform: translateY(-50%) rotate(90deg);
`

const Severity = styled.div`
  position: absolute;
  color: ${props => props.theme.colors.customSecondary};
  font-size: 20px;
  left: calc(50%);
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  bottom: -40px;
`
