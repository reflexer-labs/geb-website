import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import getPrefixedPath from "../utils/getPrefixPath"
import { ExternalLinkArrow } from "../styles/GlobalStyle"
import { INLINES } from "@contentful/rich-text-types"
import OutlineHeader from "./ui/OutlineHeader"
import SearchBox from "./ui/SearchBox"
import { ArrowRightCircle, XCircle } from "react-feather"
import { slugifyTitle } from "../utils/helper"
import FaqsQuickLinks from "./ui/FaqsQuickLinks"

const AllFaqs = ({ data, location }) => {
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

  const handleClick = index => {
    activeIndex === index ? setActiveIndex(-1) : setActiveIndex(index)
  }

  useEffect(() => {
    if (location && location.hash) {
      const foundIndex = data.findIndex(
        x => slugifyTitle(x.title.title) === location.hash.split("#")[1]
      )
      if (foundIndex) {
        setActiveIndex(foundIndex)
      }
    }
  }, [location, data])

  return (
    <Content>
      <MainContent>
        <OutlineHeader outline="Search" text="FAQs" color="blueish" />
        <SearchBox data={data} />
        <FaqsQuickLinks />
        <Faqs className="wow fadeInUp" data-wow-delay="1s">
          <SmallTitle>FAQs</SmallTitle>
          {data.map((item, i) => (
            <FaqBlock
              key={item.id}
              id={slugifyTitle(item.title.title)}
              onClick={() => handleClick(i)}
              className={activeIndex === i ? "active" : ""}
            >
              <MainTitle>
                {item.title.title}{" "}
                <div>
                  {activeIndex === i ? (
                    <XCircle size="22" />
                  ) : (
                    <ArrowRightCircle size="22" />
                  )}
                </div>
              </MainTitle>
              <MainDescription>
                <Text>{handleContent(JSON.parse(item.content.raw))}</Text>
                {returnLinks(item.links)}
              </MainDescription>
            </FaqBlock>
          ))}
        </Faqs>
      </MainContent>
    </Content>
  )
}

export default AllFaqs

const Content = styled.div`
  margin-bottom: 100px;
`

const MainContent = styled.div`
  flex-grow: 1;
  margin-left: auto;
  ${({ theme }) => theme.mediaWidth.upToMedium`
    padding-left: 0px;
  `}
`

const MainTitle = styled.div`
  font-weight: normal;
  font-family: "Inter-Medium";
  font-size: 20px;
  letter-spacing: -0.33px;
  display: flex;
  justify-content: space-between;
  svg {
    color: ${props => props.theme.colors.blueish};
  }
  color: ${props => props.theme.colors.neutral};
  ${({ theme }) => theme.mediaWidth.upToSmall`
     font-size: 20px;
  `}
`

const MainDescription = styled.div`
  font-size: ${props => props.theme.font.default};
  color: ${props => props.theme.colors.customSecondary};
  line-height: 24px;
  letter-spacing: -0.18px;
  display: none;
`

const CustomLink = styled.a`
  ${ExternalLinkArrow}
  margin-right:20px;
  img {
    width: 8px;
    height: 8px;
  }
`

const Text = styled.div`
  a {
    color: ${props => props.theme.colors.blueish};
  }
`

const Faqs = styled.div`
  max-width: 800px;
  margin: 0 auto;
`

const SmallTitle = styled.div`
  font-size: 25px;
  text-align: center;
  margin: 50px 0;
  color: ${props => props.theme.colors.neutral};
  font-weight: bold;
  font-family: "inter-medium";
`

const FaqBlock = styled.div`
  margin-bottom: 20px;
  padding: 1rem 2rem;
  border-radius: 5px;
  background: ${props => props.theme.colors.foreground};
  cursor: pointer;
  &.active {
    ${MainDescription} {
      display: block;
    }
  }
  ${({ theme }) => theme.mediaWidth.upToSmall`
      margin-bottom: 10px;
  `}
`
