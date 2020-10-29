import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Sticky from "react-stickynode"
import getPrefixedPath from "../utils/getPrefixPath"
import helper from "../utils/helper"
import { ExternalLinkArrow } from "../styles/GlobalStyle"
import { useMedia } from "react-use"

const SplitView = ({ data, topOffset }) => {
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
    if (!isBrowser || !refs || !isWide) return
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

  return (
    <Content>
      <SideBar>
        <Sticky enabled={true} top={40}>
          {data.map((item, index) => (
            <SideTitle
              key={item.id + 1}
              onClick={() => handleSideBarClick(item.id, index)}
              className={activeIndex === index ? "active" : ""}
            >
              {item.title.title}{" "}
              {activeIndex === index ? (
                <img src={getPrefixedPath("/arrow.svg")} alt="" />
              ) : null}
            </SideTitle>
          ))}
        </Sticky>
      </SideBar>
      <MainContent>
        {data.map(item => (
          <SideContent key={item.id} ref={ref => (refs[item.id] = ref)}>
            <MainTitle>{item.title.title}</MainTitle>
            <MainDescription>
              <Text>{documentToReactComponents(item.content.json)}</Text>
              {item.links ? (
                <CustomLink href={item.links.link} target="_blank">
                  {item.links.name}{" "}
                  <img src={getPrefixedPath("/arrow.svg")} alt="" />
                </CustomLink>
              ) : null}
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
  flex: 0 0 300px;
  min-width: 300px;
  transition: all 0.1s ease;
  margin-top: 10px;
  ${({ theme }) => theme.mediaWidth.upToMedium`
    display:none;
  `}
`
const MainContent = styled.div`
  flex-grow: 1;
  margin-left: auto;
`

const SideTitle = styled.div`
  color: ${props => props.theme.colors.secondary};
  margin-bottom: 30px;
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
  font-weight: 600;
  font-family: "Inter-Medium";
  font-size: 48px;
  line-height: 60px;
  letter-spacing: -0.33px;
  color: ${props => props.theme.font.primary};
  ${({ theme }) => theme.mediaWidth.upToSmall`
     font-size: 30px;
     line-height: 35px;
  `}
`

const MainDescription = styled.div`
  font-size: ${props => props.theme.font.default};
  color: ${props => props.theme.colors.secondary};
  line-height: 24px;
  letter-spacing: -0.18px;
`

const CustomLink = styled.a`
  ${ExternalLinkArrow}
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
