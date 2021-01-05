import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import getPrefixedPath from "../utils/getPrefixPath"
import helper from "../utils/helper"
import { ExternalLinkArrow } from "../styles/GlobalStyle"
import { useMedia } from "react-use"
import { INLINES } from "@contentful/rich-text-types"

const SplitView = ({ data, topOffset, isAbout = false }) => {
  const isBrowser = typeof window !== "undefined"
  const isWide = useMedia("(min-width: 991px)")
  const [activeIndex, setActiveIndex] = useState(0)

  const refs = {}

  const handleSideBarClick = (id, index) => {
    if (index === activeIndex) {
      return
    }
    if (refs) {
      const selectedRef = refs[id]
      if (isBrowser && selectedRef) {
        helper.SmoothVerticalScrolling(selectedRef, 300, "top")
      }
    }
    setActiveIndex(index)
  }

  useEffect(() => {
    if (!isBrowser || !refs || !refs.length || !isWide) return
    function handleScroll() {
      const offset = topOffset || 250
      const tops = Object.values(refs).map(
        val => val.getBoundingClientRect().top
      )
      tops.forEach((el, i) => {
        if (el > 0 && el < offset) {
          setActiveIndex(i)
        }
      })
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isBrowser, refs, topOffset, isWide])

  const extractImages = data => {
    if (!data) return
    let items = data.json.content.find(
      item => item.nodeType === "unordered-list"
    )

    let links = helper.findAllByKey(items, "value")
    let images = helper.findAllByKey(items, "url")
    let result = []
    if (links.length > 0 && images.length > 0) {
      links = links.filter(item => item !== "")
      images = images.filter(item => item !== "")
      result = links.map((link, i) => ({ link, image: images[i] }))
    }
    if (result.length > 0) {
      return (
        <Row>
          {result.map((item, i) => (
            <Col key={item.image + i}>
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
    <Content>
      <SideBar>
        {data.map((item, index) => (
          <SideTitle
            key={item.id + 1}
            isAbout={isAbout}
            onClick={() => handleSideBarClick(item.id, index)}
            className={activeIndex === index ? "active" : ""}
          >
            {item.title.title}{" "}
            {activeIndex === index ? (
              <img src={getPrefixedPath("/arrow.svg")} alt="" />
            ) : null}
          </SideTitle>
        ))}
      </SideBar>
      <MainContent>
        {data.map(item => (
          <SideContent key={item.id} ref={ref => (refs[item.id] = ref)}>
            <MainTitle>{item.title.title}</MainTitle>
            <MainDescription>
              <Text>{handleContent(item.content.json)}</Text>
              {returnLinks(item.links)}
              {extractImages(item.images)}
            </MainDescription>
          </SideContent>
        ))}
      </MainContent>
    </Content>
  )
}

export default SplitView

const Content = styled.div`
  min-height: 300px;
  display: flex;
`

const SideBar = styled.div`
  flex: 0 0 350px;
  position: sticky;
  top: 30px;
  min-width: 350px;
  max-height: 93vh;
  height: ${({ isAbout }) => (isAbout ? "300px" : "auto")};
  overflow-y: auto;
  transition: all 0.1s ease;
  margin-top: 10px;
  padding-right: 50px;

  ::-webkit-scrollbar {
    width: 4px;
    height: 4px;
  }

  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-button {
    display: none;
  }
  ::-webkit-scrollbar-corner {
    display: none;
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.16);
    border-radius: 2px;
  }

  ${({ theme }) => theme.mediaWidth.upToMedium`
    display:none;
  `}
`

const MainContent = styled.div`
  flex-grow: 1;
  margin-left: auto;
  padding-left: 70px;
  ${({ theme }) => theme.mediaWidth.upToMedium`
    padding-left: 0px;
  `}
`

const SideTitle = styled.div`
  color: ${props => props.theme.colors.customSecondary};
  margin-bottom: 20px;
  font-size: ${props => props.theme.font.default};
  cursor: pointer;
  &:last-child {
    margin-bottom: 0;
  }

  &:hover,
  &.active {
    background: ${props => props.theme.colors.gradient};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: ${props => props.theme.colors.inputBorderColor};
  }
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
