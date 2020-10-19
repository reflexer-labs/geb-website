import React from "react"
import { DollarSign, Search, ThumbsUp } from "react-feather"
import styled from "styled-components"

const NavLinks = ({ setShowSideMenu }) => {
  const handleLinkClick = (e, disable = false) => {
    if (disable) {
      e.preventDefault()
    }
    setShowSideMenu(false)
  }
  return (
    <Nav>
      <NavBarLink href="/incentives" onClick={e => handleLinkClick(e, true)}>
        <DollarSign size="18" /> Incentives
      </NavBarLink>
      <NavBarLink href="/voting" onClick={e => handleLinkClick(e, false)}>
        <ThumbsUp size="18" /> Voting
      </NavBarLink>
      <NavBarLink href="" onClick={e => handleLinkClick(e, true)}>
        <Search size="18" />
        Analytics
      </NavBarLink>

      <SepBlock className="disableDesktop">
        <NavBarLink href="" onClick={e => handleLinkClick(e, false)}>
          Request features
        </NavBarLink>
        <NavBarLink href="" onClick={e => handleLinkClick(e, true)}>
          Talk to us
        </NavBarLink>
      </SepBlock>
    </Nav>
  )
}

export default NavLinks

const Nav = styled.div`
  display: flex;
  align-items: center;

  svg {
    display: none;
  }
  ${({ theme }) => theme.mediaWidth.upToSmall`
  
    flex-direction: column;
    a,
    div {
      flex: 0 0 100%;
      min-width: 100%;
      font-weight: normal;
      padding: 15px 25px;
      display: flex;
      align-items:center;
      text-align: left;
      margin: 0;
      color :${props => props.theme.colors.primary};
      svg {
         display: inline;
         margin-right:10px;
         color: ${props => props.theme.colors.secondary}
        
      }
    }
  `}
`

const NavBarLink = styled.a`
  color: ${props => props.theme.colors.secondary};
  font-weight: 600;
  transition: all 0.3s ease;
  &:hover {
    background: ${props => props.theme.colors.gradient};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: ${props => props.theme.colors.inputBorderColor};
  }
  margin-right: 20px;
  &:last-child {
    margin-right: 0;
  }
`

const SepBlock = styled.div`
  border-top: 1px solid ${props => props.theme.colors.border};
  display: flex;
  flex-direction: column;
  padding: 10px 0 0 !important;
  margin-top: 15px !important;
  > div,
  a {
    padding-top: 10px;
    padding-bottom: 10px;
    color: ${props => props.theme.colors.secondary} !important;
  }

  @media (min-width: 768px) {
    &.disableDesktop {
      display: none;
    }
  }
`
