import { Link } from "gatsby"
import React, { useState } from "react"
import { ChevronDown, ChevronUp } from "react-feather"
import styled from "styled-components"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { INLINES } from "@contentful/rich-text-types"

import useHome from "../../hooks/useHome"
import { ExternalLinkArrow } from "../../styles/GlobalStyle"

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
    <Container>
      <Inner>
        <Header>
          <Title>FAQ</Title>
          <Text>
            To learn more about RAI and Reflexer, check out the{" "}
            <Link to="/faq">FAQ page.</Link>
          </Text>
        </Header>

        <CollapseSection>
          {homeFAQ.map((faq, i) => (
            <CollapseBlock key={faq.id} onClick={() => handleClick(i)}>
              <CollapseTitle>
                {faq.title}{" "}
                {i === collapseIndex ? (
                  <ChevronUp size={25} />
                ) : (
                  <ChevronDown size={25} />
                )}
              </CollapseTitle>
              {i === collapseIndex ? (
                <CollapseText>{handleContent(faq.content.json)}</CollapseText>
              ) : null}
            </CollapseBlock>
          ))}
        </CollapseSection>
      </Inner>
    </Container>
  )
}

export default FAQsCollapse

const Container = styled.div`
  padding: 150px 20px;
  ${({ theme }) => theme.mediaWidth.upToSmall`
   padding: 80px 10px 60px 10px;
  `}
`

const Inner = styled.div`
  max-width: 650px;
  margin: 0 auto;
`

const Header = styled.div`
  text-align: center;
`

const Title = styled.div`
  color: ${props => props.theme.colors.primary};
  font-size: 38px;
  font-weight: 600;
  font-family: "Inter-Medium";
  ${({ theme }) => theme.mediaWidth.upToSmall`
    font-size: 25px;
  `}
`

const Text = styled.div`
  color: ${props => props.theme.colors.secondary};
  line-height: 24px;
  margin-top: 15px;
  padding: 0 20px;
  a {
    background: ${props => props.theme.colors.gradient};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: ${props => props.theme.colors.inputBorderColor};
  }
`

const CollapseSection = styled.div`
  margin-top: 20px;
`

const CollapseTitle = styled.div`
  color: ${props => props.theme.colors.primary};
  font-size: ${props => props.theme.font.large};
  font-weight: 600;
  font-family: "Inter-Medium";
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${({ theme }) => theme.mediaWidth.upToSmall`
   font-size: ${props => props.theme.font.medium};
  `}
`

const CollapseText = styled.div`
  color: ${props => props.theme.colors.secondary};
  font-size: ${props => props.theme.font.medium};
  letter-spacing: -0.18px;
  line-height: 24px;
  margin-top: 10px;
  a {
    ${ExternalLinkArrow}
  }
  ${({ theme }) => theme.mediaWidth.upToSmall`
   font-size: ${props => props.theme.font.default};
  `}
`

const CollapseBlock = styled.div`
  padding: 15px;
  cursor: pointer;
  ${({ theme }) => theme.mediaWidth.upToSmall`
  padding:10px;
  `}
`
