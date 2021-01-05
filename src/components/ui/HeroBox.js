import React from "react"
import styled from "styled-components"
import useHomeBoxes from "../../hooks/useHomeBoxes"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { ExternalLinkArrow } from "../../styles/GlobalStyle"
import getPrefixedPath from "../../utils/getPrefixPath"

const HeroBox = () => {
  const homeBoxes = useHomeBoxes().map(item => item.node)

  return (
    <Container>
      <Row>
        {homeBoxes.map(item => (
          <Col key={item.id}>
            <Block>
              <ImgBox>
                <img src={item.image.file.url} alt={item.title} />
              </ImgBox>
              <Title>{item.title}</Title>
              <Text>{documentToReactComponents(item.content.json)}</Text>
              <LinkContainer>
                <Link href={item.link.link} target="_blank">
                  {item.link.name}{" "}
                  <img src={getPrefixedPath("/arrow.svg")} alt="" />
                </Link>
              </LinkContainer>
            </Block>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default HeroBox

const Container = styled.div`
  max-width: 1280px;
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
  height: 100%;
  display: flex;
  flex-direction: column;
`

const ImgBox = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 3px;
  img {
    width: 100%;
  }
  ${({ theme }) => theme.mediaWidth.upToSmall`
  width: 38px;
  height: 38px;
  `}
`

const Title = styled.div`
  font-size: ${props => props.theme.font.medium};
  color: ${props => props.theme.colors.primary};
  font-weight: bold;
  margin-top: 10px;
`

const Text = styled.div`
  font-size: ${props => props.theme.font.default};

  color: ${props => props.theme.colors.secondary};
  margin-top: 5px;
  p {
    margin: 0;
  }
  ${({ theme }) => theme.mediaWidth.upToSmall`
  font-size: ${props => props.theme.font.small};
  `}
  flex-grow: 1;
`

const LinkContainer = styled.div`
  align-self: flex-end;
  margin-top: 5px;
`

const Link = styled.a`
  ${ExternalLinkArrow}
`
