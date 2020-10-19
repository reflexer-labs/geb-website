import React from "react"
import styled from "styled-components"
import { ExternalLinkArrow } from "../../styles/GlobalStyle"

const HeroBox = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Block>
            <ImgBox>
              <img src={"/img/box-ph.svg"} alt="" />
            </ImgBox>
            <Title>Leverage RAI</Title>
            <Text>
              Auctor cursus tellus pretium dolor convallis ornare lectus. Nam
              sem etiam netus eget vitae amet.
            </Text>
            <LinkContainer>
              <Link href={"/"}>
                Get Leverage <img src={"/img/arrow.svg"} alt="" />
              </Link>
            </LinkContainer>
          </Block>
        </Col>
        <Col>
          <Block>
            <ImgBox>
              <img src={"/img/box-ph.svg"} alt="" />
            </ImgBox>
            <Title>Use RAI</Title>
            <Text>
              Auctor cursus tellus pretium dolor convallis ornare lectus. Nam
              sem etiam netus eget vitae amet.
            </Text>
            <LinkContainer>
              <Link href={"/"}>
                Start Using <img src={"/img/arrow.svg"} alt="" />
              </Link>
            </LinkContainer>
          </Block>
        </Col>
        <Col>
          <Block>
            <ImgBox>
              <img src={"/img/box-ph.svg"} alt="" />
            </ImgBox>
            <Title>Protocol Statistics</Title>
            <Text>
              Auctor cursus tellus pretium dolor convallis ornare lectus. Nam
              sem etiam netus eget vitae amet.
            </Text>
            <LinkContainer>
              <Link href={"/"}>
                View Stats <img src={"/img/arrow.svg"} alt="" />
              </Link>
            </LinkContainer>
          </Block>
        </Col>
      </Row>
    </Container>
  )
}

export default HeroBox

const Container = styled.div`
  max-width: 1170px;
  padding: 0 20px;
  margin: 0 auto;
`

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -10px;
`

const Col = styled.div`
  padding: 0 10px;
  flex: 0 0 33.33%;
  margin-bottom: 20px;
  ${({ theme }) => theme.mediaWidth.upToSmall`
  flex: 0 0 100%;
  `}
`

const Block = styled.div`
  border: 1px solid ${props => props.theme.colors.border};
  background: ${props => props.theme.colors.background};
  border-radius: ${props => props.theme.global.borderRadius};
  padding: 20px;
`

const ImgBox = styled.div`
  img {
    max-width: 70px;
  }
`

const Title = styled.div`
  font-size: ${props => props.theme.font.medium};
  color: ${props => props.theme.colors.primary};
  font-weight: bold;
  margin-top: 10px;
`

const Text = styled.div`
  font-size: ${props => props.theme.font.extraSmall};
  color: ${props => props.theme.colors.secondary};
  margin-top: 5px;
`

const LinkContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 5px;
`

const Link = styled.a`
  ${ExternalLinkArrow}
`
