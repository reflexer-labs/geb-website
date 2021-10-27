import React, { useState } from "react"
import styled from "styled-components"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import getPrefixedPath from "../utils/getPrefixPath"
import { ExternalLinkArrow } from "../styles/GlobalStyle"
import { INLINES } from "@contentful/rich-text-types"
import OutlineHeader from "./ui/OutlineHeader"
import SearchBox from "./ui/SearchBox"

const AllFaqs = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0)

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
          {iterator.name} <img src={getPrefixedPath("/arrow-up.svg")} alt="" />
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
    <Content>
      <MainContent>
        <OutlineHeader outline="Search" text="FAQs" color="blueish" />
        <SearchBox data={data} />
        {data.map(item => (
          <SideContent key={item.id}>
            <MainTitle>{item.title.title}</MainTitle>
            <MainDescription>
              <Text>{handleContent(item.content.json)}</Text>
              {returnLinks(item.links)}
            </MainDescription>
          </SideContent>
        ))}
      </MainContent>
    </Content>
  )
}

export default AllFaqs

const Content = styled.div`
  min-height: 300px;
  display: flex;
`

const MainContent = styled.div`
  flex-grow: 1;
  margin-left: auto;
  padding-left: 70px;
  ${({ theme }) => theme.mediaWidth.upToMedium`
    padding-left: 0px;
  `}
`

const SideContent = styled.div`
  margin-bottom: 40px;
`

const MainTitle = styled.div`
  font-weight: normal;
  font-family: "Inter-Medium";
  font-size: 24px;
  letter-spacing: -0.33px;
  color: ${props => props.theme.font.primary};
  ${({ theme }) => theme.mediaWidth.upToSmall`
     font-size: 20px;
  `}
`

const MainDescription = styled.div`
  font-size: ${props => props.theme.font.default};
  color: ${props => props.theme.colors.customSecondary};
  line-height: 24px;
  letter-spacing: -0.18px;
`

const CustomLink = styled.a`
  ${ExternalLinkArrow}
  margin-right:20px;
  img {
    width: 8px;
    height: 8px;
  }
`

const Row = styled.div`
  display: flex;
  margin: 0 -10px;
  flex-wrap: wrap;
`

const Col = styled.div`
  flex: 0 0 50%;
  padding: 0 10px;
  img {
    width: 100%;
    margin-top: 15px;
  }
  ${({ theme }) => theme.mediaWidth.upToSmall`
    flex: 0 0 100%;
  `}
`

const Text = styled.div`
  a {
    ${ExternalLinkArrow}
  }
`
