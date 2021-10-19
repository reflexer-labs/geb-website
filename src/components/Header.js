import React, { useState } from "react"
import styled from "styled-components"
import { navigate } from "gatsby"
import classNames from "classnames"
import { Menu, X } from "react-feather"
import Brand from "./ui/Brand"
import Button from "./ui/Button"

const Header = ({
  headerStyle,
  isWhiteLogo,
  smallLogo,
  onlyBrand,
  location,
}) => {
  const [openMenu, setOpenMenu] = useState(false)
  const handleSamePageClick = (e, to) => {
    setOpenMenu(false)
    if (location && location.pathname && location.pathname.includes(to)) {
      e.stopPropagation()
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else {
      navigate(to)
    }
  }

  const menuClassNames = classNames({
    white: isWhiteLogo,
    active: openMenu,
  })

  return (
    <Container style={{ ...headerStyle }}>
      <Left>
        <Brand smallLogo={smallLogo} isWhiteLogo={isWhiteLogo} />
      </Left>

      <Right>
        <MenuIcon onClick={() => setOpenMenu(true)}>
          <Menu size={20} color={isWhiteLogo ? "white" : "black"} />
        </MenuIcon>

        <MenuContent className={menuClassNames}>
          <CloseIcon onClick={() => setOpenMenu(false)}>
            <X size={20} />
          </CloseIcon>
          <Column>
            <NavLink className={isWhiteLogo ? "white" : "black"}>
              Products
            </NavLink>
            <LinksContainer>
              <LinkBtn href="https://app.reflexer.finance/" target="_blank">
                App
              </LinkBtn>
              <LinkBtn href={"https://stats.reflexer.finance/"} target="_blank">
                Analytics
              </LinkBtn>
            </LinksContainer>
          </Column>
          <Column>
            <NavLink className={isWhiteLogo ? "white" : ""}>Community</NavLink>
            <LinksContainer>
              <LinkBtn href={"https://discord.gg/G6SZSAvX32"} target="_blank">
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
          <Column>
            <NavLink className={isWhiteLogo ? "white" : ""}>Project</NavLink>
            <LinksContainer>
              <LinkBtn
                href={"https://github.com/reflexer-labs"}
                target="_blank"
              >
                GitHub
              </LinkBtn>
              <LinkBtn onClick={e => handleSamePageClick(e, "/bug-bounty")}>
                Bug Bounty
              </LinkBtn>
              <LinkBtn
                href="https://angel.co/company/reflexer-labs"
                target="_blank"
              >
                Jobs
              </LinkBtn>
              <LinkBtn href="https://memes.reflexer.finance" target="_blank">
                Memes
              </LinkBtn>
            </LinksContainer>
          </Column>

          <Column>
            <NavLink className={isWhiteLogo ? "white" : ""}>Resources</NavLink>
            <LinksContainer>
              <LinkBtn onClick={e => handleSamePageClick(e, "/about")}>
                About
              </LinkBtn>
              <LinkBtn onClick={e => handleSamePageClick(e, "/faq")}>
                FAQ
              </LinkBtn>
              <LinkBtn href={"https://docs.reflexer.finance/"} target="_blank">
                Documentation
              </LinkBtn>

              <LinkBtn
                href={
                  "https://medium.com/reflexer-labs/stability-without-pegs-8c6a1cbc7fbd"
                }
                target={"_blank"}
              >
                RAI Explainer
              </LinkBtn>
              <LinkBtn
                href={
                  "https://github.com/reflexer-labs/whitepapers/blob/master/English/rai-english.pdf"
                }
                target={"_blank"}
              >
                Whitepaper
              </LinkBtn>
            </LinksContainer>
          </Column>
          <Button>
            <a
              href="https://app.reflexer.finance/"
              target="_blank"
              rel="noreferrer"
            >
              Dashboard
            </a>
          </Button>
        </MenuContent>
      </Right>
    </Container>
  )
}

export default Header

const Container = styled.div`
  display: flex;
  height: 68px;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  ${({ theme }) => theme.mediaWidth.upToSmall`
     padding: 0 20px;
     top:0 !important;
  `}
`

const Left = styled.div`
  min-width: 194px;
  display: flex;
  align-items: center;
`

const MenuIcon = styled.div`
  padding: 20px 0px 20px 20px;
  cursor: pointer;
  display: none;
  ${({ theme }) => theme.mediaWidth.upToSmall`
    display:block;
  `}
`

const Right = styled.div``

const CloseIcon = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  display: none;
  cursor: pointer;
  padding: 20px;
  ${({ theme }) => theme.mediaWidth.upToSmall`
    display:block;
  `}
`

const MenuContent = styled.div`
  display: flex;
  align-items: center;
  a {
    color: inherit;
  }
  &.white {
    button {
      background: rgba(255, 255, 255, 0.2);
      color: ${props => props.theme.colors.primary};
      font-weight: normal;
      color: white;
    }
  }

  ${({ theme }) => theme.mediaWidth.upToSmall`
    display:none;
    position:fixed;
    top:0;
    left:0;
    height:100vh;
    overflow-y:auto;
    width:100%;
    z-index:100;
    background:white;
    padding:2rem;
    &.active {
      display:block;
    }
    button {
      display:none;
    }
    
  `}
`

const LinksContainer = styled.div`
  display: none;
  position: absolute;
  top: 40px;
  border-radius: 4px;
  background: #fff;
  padding: 20px;
  min-width: 200px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.06);
  ${({ theme }) => theme.mediaWidth.upToSmall`
  display:block;
  position:static;
  box-shadow:none;
  padding:0;
  margin-bottom:20px;
  `}
`

const Column = styled.div`
  margin-right: 3rem;
  position: relative;
  &:hover {
    div {
      display: block;
    }
  }
`

const NavLink = styled.p`
  cursor: pointer;
  font-family: "Inter-Medium";
  font-size: ${props => props.theme.font.default};
  line-height: 22px;
  letter-spacing: -0.18px;
  padding: 10px 0;
  color: ${props => props.theme.colors.primary};
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  transition: all 0.3s ease;
  svg {
    display: none;
  }
  ${({ theme }) => theme.mediaWidth.upToSmall`
    font-weight:bold;
    color: ${props => props.theme.colors.primary} !important;
  `}
  ${({ theme }) => theme.mediaWidth.upToMedium`
    svg {
       display: block;
    }
    justify-content: flex-start;
    cursor:pointer;
  
  `}
  &.white {
    color: white;
  }
`

const LinkBtn = styled.a`
  color: ${props => props.theme.colors.secondary};
  font-size: 15px;
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
    text-decoration: none;
    transform: translateX(5px);
    color: ${props => props.theme.colors.secondary};
  }
`
