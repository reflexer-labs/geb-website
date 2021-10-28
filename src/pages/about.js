import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"
import useAbout from "../hooks/useAbout"
import getPrefixedPath from "../utils/getPrefixPath"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { INLINES } from "@contentful/rich-text-types"
import { findAllByKey } from "../utils/helper"
import { ArrowUpRight } from "react-feather"
import OutlineHeader from "../components/ui/OutlineHeader"

const About = () => {
  const aboutData = useAbout().map(item => item.node)

  const extractImages = data => {
    if (!data) return
    let items = JSON.parse(data.raw).content.find(
      item => item.nodeType === "unordered-list"
    )

    const urls = data.references.map(f => f.file.url)
    let links = findAllByKey(items, "value")
    let ids = findAllByKey(items, "id")
    let result = []
    if (links.length > 0 && ids.length > 0) {
      links = links.filter(item => item !== "")
      ids = ids.filter(item => item !== "")
      result = links.map((link, i) => ({
        link,
        image: urls.find(x => x.includes(ids[i])),
      }))
    }
    if (result.length > 0) {
      return (
        <Row>
          {result.map((item, i) => (
            <Col
              key={item.image + i}
              className={result.length <= 3 ? "col3" : "col5"}
            >
              <a href={item.link} target="_blank" rel="noreferrer">
                <img src={item.image} alt="" />
              </a>
            </Col>
          ))}
        </Row>
      )
    }
    return null
  }

  const returnLinks = links => {
    if (links) {
      const linksIterator = Array.isArray(links) ? links : [links]
      return linksIterator.map(iterator => (
        <CustomLink
          key={iterator.link + Math.random()}
          href={iterator.link}
          target="_blank"
          rel="noreferrer"
        >
          {iterator.name} <ArrowUpRight size="16" />
        </CustomLink>
      ))
    }
    return null
  }

  const handleContent = content => {
    return documentToReactComponents(content, {
      renderNode: {
        [INLINES.HYPERLINK]: node => {
          return (
            <a
              href={
                node.data.uri.includes("zip")
                  ? getPrefixedPath(node.data.uri)
                  : node.data.uri
              }
              rel="noreferrer"
              target={
                node.data.uri.includes("mailto") ||
                node.data.uri.includes("zip")
                  ? ""
                  : "_blank"
              }
              download={node.data.uri.includes("zip")}
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
      customTitle={"About us"}
      headerStyle={{ position: "absolute", width: "100%", top: "20px" }}
      isWhiteLogo
      onlyBrand
      hasBackground
    >
      <Sep />
      {aboutData.map((item, i) => {
        return (
          <Container
            key={item.id}
            background={i % 2 === 0 ? "background" : "foreground"}
          >
            <ContentBlock>
              <OutlineHeader
                className="about-heading"
                outline={item.title.title.split(" ")[0]}
                text={item.title.title.split(" ")[1]}
                color={i % 2 === 0 ? "greenish" : "blueish"}
              />
              <MainDescription className="fadeInUp wow" data-wow-delay="0.2s">
                <Text color={i % 2 === 0 ? "greenish" : "blueish"}>
                  {handleContent(JSON.parse(item.content.raw))}
                </Text>
                <div className="padded-in">{returnLinks(item.links)}</div>
                {extractImages(item.images)}
              </MainDescription>
            </ContentBlock>
          </Container>
        )
      })}
    </Layout>
  )
}

export default About
const Sep = styled.div`
  padding-top: 100px;
  ${({ theme }) => theme.mediaWidth.upToMedium`
  padding-top: 30px;
`}
`
const Container = styled.div`
  background: ${({ theme, background }) => theme.colors[background]};
  margin: 0 auto;
  ${({ theme }) => theme.mediaWidth.upToMedium`
 flex-direction:column;
 max-width: 100%;
`}
`

const ContentBlock = styled.div`
  margin-bottom: 40px;
  max-width: 80vw;
  padding: 100px 15px;
  margin: 0 auto;
  ${({ theme }) => theme.mediaWidth.upToMedium`
 flex-direction:column;
 max-width: 100%;
`}
  .about-heading {
    flex-direction: column;
    align-items: flex-start;
    line-height: 0.95;
    margin-top: 0;
  }
`

const MainDescription = styled.div`
  font-size: ${props => props.theme.font.medium};
  color: ${props => props.theme.colors.customSecondary};
  line-height: 24px;
  letter-spacing: -0.18px;
  padding-left: 10%;
  .padded-in {
    padding-left: 10%;
  }
`

const CustomLink = styled.a`
  color: ${props => props.theme.colors.greenish};
  margin-right: 20px;
  svg {
    position: relative;
    top: 3px;
  }
`

const Row = styled.div`
  display: flex;
  margin: 40px -10px 0;
  flex-wrap: wrap;
`

const Col = styled.div`
  flex: 0 0 50%;
  padding: 0 10px;
  &.col3 {
    flex: 0 0 33.3%;
  }
  &.col5 {
    flex: 0 0 20%;
  }
  img {
    width: 100%;
    margin-top: 15px;
  }
  ${({ theme }) => theme.mediaWidth.upToSmall`
    flex: 0 0 100% !important;
  `}
`

const Text = styled.div`
  padding-left: 10%;
  border-left: 1px solid ${({ theme, color }) => theme.colors[color]};
  a {
    color: ${props => props.theme.colors.greenish};
  }
`
