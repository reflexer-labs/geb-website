import React, { useState } from "react"
import { navigate } from "gatsby"
import styled from "styled-components"
import ReactTooltip from "react-tooltip"
import { Minus, Plus } from "react-feather"

const Footer = ({ slapToBottom, location }) => {
  const [selectedGroup, setSelectedGroup] = useState(0)

  const handleClick = group => {
    if (group === selectedGroup) {
      setSelectedGroup(0)
    } else {
      setSelectedGroup(group)
    }
  }

  const handleSamePageClick = (e, to) => {
    if (location && location.pathname && location.pathname.includes(to)) {
      e.stopPropagation()
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else {
      navigate(to)
    }
  }

  return (
    <Container className={`wow fadeIn ${slapToBottom ? "fixBottom" : ""}`}>
      <Inner>
        <UpperSection>
          <Company className="col20">
            <BrandContainer>
              <img src="/brand-white.png" alt="footer-logo" />
            </BrandContainer>
          </Company>

          <Column className={`col ${selectedGroup === 1 ? "active" : ""}`}>
            <Header onClick={() => handleClick(1)}>
              Project{" "}
              {selectedGroup === 1 ? <Minus size={16} /> : <Plus size={16} />}
            </Header>
            <LinksContainer>
              <LinkBtn
                href={"https://github.com/reflexer-labs"}
                target="_blank"
              >
                GitHub
              </LinkBtn>
              <LinkBtn href={"https://docs.reflexer.finance/"} target="_blank">
                Docs
              </LinkBtn>
              <LinkBtn
                href={
                  "https://medium.com/reflexer-labs/stability-without-pegs-8c6a1cbc7fbd"
                }
                target="_blank"
              >
                RAI Explainer
              </LinkBtn>
              <LinkBtn href={"https://memes.reflexer.finance"} target="_blank">
                Memes
              </LinkBtn>
            </LinksContainer>
          </Column>
          <Column className={`col ${selectedGroup === 2 ? "active" : ""}`}>
            <Header onClick={() => handleClick(2)}>
              Community{" "}
              {selectedGroup === 2 ? <Minus size={16} /> : <Plus size={16} />}
            </Header>
            <LinksContainer>
              <LinkBtn href={"https://discord.gg/AXwXHGsTaJ"} target="_blank">
                Discord
              </LinkBtn>
              <LinkBtn
                href={"https://twitter.com/reflexerfinance"}
                target="_blank"
              >
                Twitter
              </LinkBtn>
              <LinkBtn
                href={"https://medium.com/reflexer-labs"}
                target="_blank"
              >
                Medium
              </LinkBtn>
              <LinkBtn
                href={"https://community.reflexer.finance/"}
                target="_blank"
              >
                Forum
              </LinkBtn>
            </LinksContainer>
          </Column>

          <Column className={`col ${selectedGroup === 3 ? "active" : ""}`}>
            <Header onClick={() => handleClick(3)}>
              General{" "}
              {selectedGroup === 3 ? <Minus size={16} /> : <Plus size={16} />}
            </Header>
            <LinksContainer>
              <LinkBtn onClick={e => handleSamePageClick(e, "/faq")}>
                FAQ
              </LinkBtn>
              <LinkBtn
                href={"https://immunefi.com/bounty/reflexer/"}
                target="_blank"
              >
                Bug Bounty
              </LinkBtn>
            </LinksContainer>
          </Column>

          <Column className={`col ${selectedGroup === 4 ? "active" : ""}`}>
            <Header onClick={() => handleClick(4)}>
              Legal{" "}
              {selectedGroup === 4 ? <Minus size={16} /> : <Plus size={16} />}
            </Header>
            <LinksContainer>
              <LinkBtn onClick={e => handleSamePageClick(e, "/privacy")}>
                Privacy Policy
              </LinkBtn>
              <TipBtn
                data-tip={
                  "Reflexer, FLX, and RAI, and the contents of the Reflexer Media Kit, are trademarks of Reflexer Labs, Inc. Use of this website and the Reflexer trademarks is not allowed for any purpose without the express, written permission of Reflexer."
                }
              >
                Legal Notices
              </TipBtn>
            </LinksContainer>
          </Column>
          <Column>
            <Cover>
              <div>
                <Header>Get Covered</Header>
                <span>Powered by Nexus Mutual</span>
              </div>
              <div>
                <img src="/nexus-cover.svg" alt="mutual nexus" />
              </div>
            </Cover>
          </Column>
        </UpperSection>
      </Inner>
      <LowerSection>
        {`© Reflexer Labs ${new Date().getFullYear()}`}
      </LowerSection>
      <ReactTooltip multiline type="light" data-effect="float" place="top" />
    </Container>
  )
}

export default Footer

const Container = styled.div`
  background: ${props => props.theme.colors.foreground};
  position: relative;
`
const Inner = styled.div`
  max-width: 80vw;
  margin: 0 auto;
  padding: 60px 15px;
  ${({ theme }) => theme.mediaWidth.upToMedium`
 max-width: 100%;
 padding: 30px 15px;
`}
`

const BrandContainer = styled.div`
  text-align: left;
  img {
    max-width: 140px;
  }

  span {
    color: ${props => props.theme.colors.customSecondary};
    font-size: 14px;
    line-height: 1.6;
    display: block;
    margin-top: 15px;
  }
  ${({ theme }) => theme.mediaWidth.upToMedium`

 margin-bottom:20px;
 span {
   margin-top:10px;
 }
`}
`

const LinksContainer = styled.div``

const UpperSection = styled.div`
  display: flex;
  justify-content: space-between;

  .col40 {
    flex: 0 0 55%;
  }
  .col20 {
    flex: 0 0 15%;
    text-align: left;
  }
  ${({ theme }) => theme.mediaWidth.upToLarge`
     .col40 {
    flex: 0 0 40%;
  }
  .col20 {
    flex: 0 0 20%;
  }
  `}

  ${({ theme }) => theme.mediaWidth.upToMedium`
    justify-content: flex-start;
    flex-direction: column;

     .col40 {
    flex: 0 0 100%;
    margin-bottom:10px;
  }
  .col {
    flex: 0 0 100%;
    text-align: left;
    margin-top:10px;
    ${LinksContainer}{
    display:none;
    }

  &.active {
    ${LinksContainer}{
    display:block;
   }
  }
    
  }
 
  `}
`

const Company = styled.div`
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
 a > img {
  height:25px !important;
}
 `}
`

const Column = styled.div``

const Header = styled.h4`
  font-weight: 600;
  font-family: "Inter-Medium";
  font-size: ${props => props.theme.font.default};
  line-height: 22px;
  letter-spacing: -0.18px;
  color: ${props => props.theme.colors.neutral};
  margin: 0 0 10px 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  svg {
    display: none;
  }
  ${({ theme }) => theme.mediaWidth.upToMedium`
    svg {
       display: block;
    }
    justify-content: flex-start;
    cursor:pointer;
  
  `}
`

const LinkBtn = styled.a`
  color: ${props => props.theme.colors.secondary};
  font-size: ${props => props.theme.font.small};
  line-height: 24px;
  letter-spacing: -0.18px;
  transition: all 0.3s ease;
  display: block;
  margin: 5px 0;
  cursor: pointer;
  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    text-decoration: underline;
    color: ${props => props.theme.colors.customSecondary};
    svg {
      color: ${props => props.theme.colors.primary};
    }
  }
`

const LowerSection = styled.div`
  text-align: center;
  background: ${props => props.theme.colors.background};
  padding: 15px;
  color: ${props => props.theme.colors.secondary};
`

const TipBtn = styled.div`
  font-size: ${props => props.theme.font.small};
  line-height: 22px;
  margin: 5px 0;
  letter-spacing: -0.18px;
  color: ${props => props.theme.colors.secondary};
  transition: all 0.3s ease;
  display: block;
  cursor: pointer;
  &:hover {
    color: ${props => props.theme.colors.customSecondary};
    svg {
      color: ${props => props.theme.colors.primary};
    }
  }
  ${({ theme }) => theme.mediaWidth.upToSmall`
    margin-bottom: 20px;
      color: ${props => props.theme.colors.secondary};
     &:hover {
      text-decoration:none;
      
     }
   
  `}
`

const Cover = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${Header} {
    margin-bottom: 3px;
  }
  span {
    font-size: ${props => props.theme.font.extraSmall};
    color: ${props => props.theme.colors.secondary};
  }

  img {
    max-width: 30px;
  }
  ${({ theme }) => theme.mediaWidth.upToMedium`
    max-width:300px;
  `}
`
