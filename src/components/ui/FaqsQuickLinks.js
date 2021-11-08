import { Link } from "gatsby"
import React from "react"
import { ArrowRight } from "react-feather"
import styled from "styled-components"

const FaqsQuickLinks = () => {
  return (
    <Container>
      <Title className="wow fadeInUp" data-wow-delay="0.2s">
        Or <b>Browse</b> quick links
      </Title>
      <Content>
        <Box className="wow fadeInUp" data-wow-delay="0.4s">
          <Inner>
            <img src={"/f-icon1.svg"} alt="why-rai" />
            <BoxTitle>Why RAI</BoxTitle>
            <Description>
              Read a quick explainer about RAI and its advantages
            </Description>
            <LinkContainer>
              <Link to="/why-rai">
                <ArrowRight size="18" />
              </Link>
            </LinkContainer>
          </Inner>
        </Box>

        <Box className="wow fadeInUp" data-wow-delay="0.6s">
          <Inner>
            <img src={"/f-icon2.svg"} alt="assistance" />
            <BoxTitle>Assistance</BoxTitle>
            <Description>
              Reach us out on{" "}
              <a
                href="https://discord.gg/SwYjUtG5qU"
                rel="noreferrer"
                target="_blank"
              >
                Discord
              </a>
              . Or email us at{" "}
              <a
                href="mailto:contact@reflexer.finance"
                rel="noreferrer"
                target=""
              >
                contact@reflexer.finance
              </a>
              .
            </Description>
            <LinkContainer className="disabled">
              <Link to="/why-rai">
                <ArrowRight size="18" />
              </Link>
            </LinkContainer>
          </Inner>
        </Box>

        <Box className="wow fadeInUp" data-wow-delay="0.8s">
          <Inner>
            <img src={"/f-icon3.svg"} alt="docs" />
            <BoxTitle>Docs</BoxTitle>
            <Description>
              Start building and take advantage of RAI’s repricing mechanism
            </Description>
            <LinkContainer>
              <a
                href="https://docs.reflexer.finance"
                rel="noreferrer"
                target="_blank"
              >
                <ArrowRight size="18" />
              </a>
            </LinkContainer>
          </Inner>
        </Box>
      </Content>
    </Container>
  )
}

export default FaqsQuickLinks

const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;
`
const Content = styled.div`
  display: flex;
  @media (max-width: 991px) {
    flex-direction: column;
  }
`

const Title = styled.div`
  font-size: 22px;
  text-align: center;
  margin: 50px 0;
  color: ${props => props.theme.colors.neutral};
  b {
    font-weight: bold;
    font-family: "inter-medium";
  }
`
const Box = styled.div`
  flex: 0 0 33.3%;
  padding: 10px;
  @media (max-width: 991px) {
    flex: 0 0 100%;
  }
`

const Inner = styled.div`
  padding: 2rem 1.5rem;
  border-radius: 5px;
  background: ${props => props.theme.colors.foreground};
  text-align: center;
  img {
    width: 70px;
    height: 70px;
    margin-bottom: 10px;
  }
`

const BoxTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: ${props => props.theme.colors.neutral};
  font-family: "inter-medium";
`

const Description = styled.div`
  font-size: 15px;
  line-height: 1.5;
  color: ${props => props.theme.colors.secondary};
  margin-top: 10px;
  text-align: left;
  a {
    color: ${props => props.theme.colors.blueish};
  }
`

const LinkContainer = styled.div`
  text-align: right;
  a {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    background: #072c50;
    svg {
      color: ${props => props.theme.colors.blueish};
    }
  }

  &.disabled {
    visibility: hidden;
    a {
      pointer-events: none;
    }
  }
`
