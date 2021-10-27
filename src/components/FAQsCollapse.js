import { Link } from "gatsby"
import React, { useState } from "react"
import styled from "styled-components"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { INLINES } from "@contentful/rich-text-types"

import useHome from "../hooks/useHome"

const FAQsCollapse = () => {
  const [collapseIndex, setCollapseIndex] = useState(0)

  const { allContentfulHomeFaq } = useHome()
  const homeFAQ = allContentfulHomeFaq.edges.map(item => item.node)

  const handleClick = i => {
    if (i === collapseIndex) {
      setCollapseIndex()
    } else {
      setCollapseIndex(i)
    }
  }

  const handleContent = content => {
    return documentToReactComponents(content, {
      renderNode: {
        [INLINES.HYPERLINK]: node => {
          return (
            <a
              href={node.data.uri}
              rel="noreferrer"
              target={node.data.uri.includes("mailto") ? "" : "_blank"}
            >
              {node.content[0].value}
            </a>
          )
        },
      },
    })
  }
  return (
    <Container className="wow fadeInUp">
      <Inner>
        <Header>
          <div className="wow fadeInDown" data-wow-delay="0.2s">
            <HeaderLabel>Go through our</HeaderLabel>
            <Title>FAQ</Title>
            <Border></Border>
          </div>
          <Text className="wow fadeInLeft" data-wow-delay="0.4s">
            To learn more about RAI and Reflexer, check out the{" "}
            <Link to="/faq">FAQ page.</Link>
          </Text>
        </Header>

        <CollapseSection>
          {homeFAQ.map((faq, i) => (
            <CollapseBlock
              className="wow fadeInUp"
              data-wow-delay={`${0.4 + (i + 1) * 0.2}s`}
              key={faq.id}
              onClick={() => handleClick(i)}
            >
              <CollapseTitle>
                {i === collapseIndex ? (
                  <img src="/minus.svg" alt="" />
                ) : (
                  <img src="/plus.svg" alt="" />
                )}
                {faq.title}{" "}
              </CollapseTitle>

              <CollapseText
                style={{
                  maxHeight: i === collapseIndex ? "200px" : "0",
                  marginBottom: i === collapseIndex ? "30px" : "0",
                }}
              >
                {handleContent(faq.content.json)}
              </CollapseText>
            </CollapseBlock>
          ))}
        </CollapseSection>
      </Inner>
    </Container>
  )
}

export default FAQsCollapse

const Container = styled.div`
  margin-top: 50px;
  padding: 80px 0 60px 0;
  background: ${props => props.theme.colors.foreground};
  ${({ theme }) => theme.mediaWidth.upToSmall`
   padding: 60px 0 60px 0;
  `};
`

const Inner = styled.div`
  max-width: 80vw;
  margin: 0 auto;
  padding: 0 15px;
  ${({ theme }) => theme.mediaWidth.upToMedium`
   flex-direction:column;
   max-width: 100%;
`}
`

const Header = styled.div`
  text-align: left;
`
const HeaderLabel = styled.div`
  font-size: 12px;
  color: ${props => props.theme.colors.greenish};
`
const Border = styled.div`
  height: 1px;
  width: 40px;
  background: ${props => props.theme.colors.greenish};
`

const Title = styled.div`
  color: ${props => props.theme.colors.neutral};
  font-size: 50px;
  font-weight: 600;
  font-family: "Inter-Medium";
  ${({ theme }) => theme.mediaWidth.upToSmall`
    font-size: 25px;
  `}
`

const Text = styled.div`
  color: ${props => props.theme.colors.secondary};
  font-size: 14px;
  margin-top: 20px;
  a {
    color: ${props => props.theme.colors.greenish};
  }
`

const CollapseSection = styled.div`
  margin-top: 50px;
  @media (min-width: 991px) {
    padding-left: 15%;
  }
`

const CollapseTitle = styled.div`
  color: ${props => props.theme.colors.neutral};
  font-size: ${props => props.theme.font.large};
  font-weight: 600;
  font-family: "Inter-Medium";
  display: flex;
  align-items: center;
  img {
    margin-right: 20px;
    max-width: 20px;
  }

  ${({ theme }) => theme.mediaWidth.upToSmall`
   font-size: ${props => props.theme.font.medium};
  `}
`

const CollapseText = styled.div`
  color: ${props => props.theme.colors.customSecondary};
  font-size: ${props => props.theme.font.default};
  letter-spacing: -0.18px;
  line-height: 24px;
  margin-top: 30px;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  max-width: 90%;
  padding-left: 50px;
  margin-left: auto;
  border-left: 1px solid ${props => props.theme.colors.greenish};
  a {
    color: ${props => props.theme.colors.greenish};
  }

  ${({ theme }) => theme.mediaWidth.upToSmall`
   font-size: ${props => props.theme.font.default};
  `}
`

const CollapseBlock = styled.div`
  cursor: pointer;
  ${({ theme }) => theme.mediaWidth.upToSmall`
  padding:10px;
  `}
`
