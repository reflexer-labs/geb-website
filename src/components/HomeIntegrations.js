import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import useRaiUse from "../hooks/useRaiUse"
import IntegrationItem from "./ui/IntegrationItem"

const HomeIntegrations = () => {
  const integrations = useRaiUse().slice(0, 3)
  return (
    <Container>
      <Inner>
        <Header>
          <div className="wow fadeInDown" data-wow-delay="0.2s">
            <HeaderLabel>Checkout our</HeaderLabel>
            <Title>Recent Integrations</Title>
            <Border></Border>
          </div>
          <Text className="wow fadeInLeft" data-wow-delay="0.4s">
            To find out the projects and interfaces that accept RAI, check out
            the <Link to="/faq">integrations page.</Link>
          </Text>
        </Header>

        <Content>
          {integrations.map((x, i) => {
            return <IntegrationItem x={x} i={i} key={x.node.id} />
          })}
        </Content>
      </Inner>
    </Container>
  )
}

export default HomeIntegrations

const Container = styled.div`
  padding: 80px 0 60px 0;
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
  color: ${props => props.theme.colors.blueish};
`
const Border = styled.div`
  height: 1px;
  width: 40px;
  background: ${props => props.theme.colors.blueish};
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
    color: ${props => props.theme.colors.blueish};
  }
`

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 70px;

  @media (max-width: 1024px) {
    flex-wrap: wrap;
  }
`
