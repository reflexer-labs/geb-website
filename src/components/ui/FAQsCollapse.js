import { Link } from "gatsby"
import React, { useState } from "react"
import { ChevronDown, ChevronUp } from "react-feather"
import styled from "styled-components"

const INITIAL_STATE = [
  {
    title: "First Question",
    text:
      "Metus egestas placerat vel sed pretium, tellus. Ut tincidunt sit a nec velit proin. Lobortis a fermentum ipsum cras eu et neque iaculis nulla. Eu egestas vulputate ut arcu.",
  },
  {
    title: "Second Question",
    text:
      "Metus egestas placerat vel sed pretium, tellus. Ut tincidunt sit a nec velit proin. Lobortis a fermentum ipsum cras eu et neque iaculis nulla. Eu egestas vulputate ut arcu.",
  },
  {
    title: "Third Question",
    text:
      "Metus egestas placerat vel sed pretium, tellus. Ut tincidunt sit a nec velit proin. Lobortis a fermentum ipsum cras eu et neque iaculis nulla. Eu egestas vulputate ut arcu.",
  },
  {
    title: "Fourth Question",
    text:
      "Metus egestas placerat vel sed pretium, tellus. Ut tincidunt sit a nec velit proin. Lobortis a fermentum ipsum cras eu et neque iaculis nulla. Eu egestas vulputate ut arcu.",
  },
]

const FAQsCollapse = () => {
  const [collapseIndex, setCollapseIndex] = useState(0)
  const handleClick = i => {
    if (i === collapseIndex) {
      setCollapseIndex()
    } else {
      setCollapseIndex(i)
    }
  }
  return (
    <Container>
      <Inner>
        <Header>
          <Title>FAQ's</Title>
          <Text>
            To learn more about Reflexer head to the{" "}
            <Link to="/faqs">FAQ’s.</Link>
          </Text>
        </Header>

        <CollapseSection>
          {INITIAL_STATE.map((faq, i) => (
            <CollapseBlock key={faq.title} onClick={() => handleClick(i)}>
              <CollapseTitle>
                {faq.title}{" "}
                {i === collapseIndex ? (
                  <ChevronUp size={25} />
                ) : (
                  <ChevronDown size={25} />
                )}
              </CollapseTitle>
              {i === collapseIndex ? (
                <CollapseText>{faq.text}</CollapseText>
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
  background: ${props => props.theme.colors.foreground};
  padding: 150px 20px;
  ${({ theme }) => theme.mediaWidth.upToSmall`
   padding: 80px 0px 60px 0px;
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
  font-size: 48px;
  font-weight: 600;
  ${({ theme }) => theme.mediaWidth.upToSmall`
    font-size: 35px;
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
  font-size: ${props => props.theme.font.medium};
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const CollapseText = styled.div`
  color: ${props => props.theme.colors.secondary};
  font-size: ${props => props.theme.font.default};
  letter-spacing: -0.18px;
  line-height: 24px;
  margin-top: 10px;
`

const CollapseBlock = styled.div`
  padding: 20px;
  cursor: pointer;
`
