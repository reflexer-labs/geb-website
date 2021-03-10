import React, { useState } from "react"
import { navigate, Link } from "gatsby"
import styled from "styled-components"
import jsonp from "jsonp"
import qs from "query-string"
import ReactTooltip from "react-tooltip"
import Brand from "./ui/Brand"
import EmailInput from "./ui/EmailInput"
import Button from "./ui/Button"
import { isValidEmail } from "../utils/validations"
import { MAILCHIMP_URL } from "../utils/constants"
import { Minus, Plus } from "react-feather"

const Footer = ({ slapToBottom, location }) => {
  const [selectedGroup, setSelectedGroup] = useState(0)
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const onChangeInput = val => {
    setEmail(val)
    setError("")
  }

  const onClickSubmit = () => {
    if (!email || !isValidEmail(email)) {
      setError("Please enter a valid email address")
      setIsSubmitting(false)
      return
    }
    const formData = {
      EMAIL: email,
    }

    setIsSubmitting(true)

    jsonp(
      `${MAILCHIMP_URL}&${qs.stringify(formData)}`,
      {
        param: "c",
      },
      (err, data) => {
        if (err) {
          setError(err.message)
        } else if (data.result !== "success") {
          setError(data.msg)
        } else {
          setEmail("")
          setShowSuccess(true)

          setTimeout(() => {
            setShowSuccess(false)
          }, 5000)
        }

        setIsSubmitting(false)
      }
    )
  }

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
    <Container className={slapToBottom ? "fixBottom" : ""}>
      <UpperSection>
        <Company className="col40">
          <BrandContainer>
            <Brand height={30} />
          </BrandContainer>
          <Subscribe>
            <EmailInput
              disabled={error ? true : false}
              isSubmitting={isSubmitting}
              label={"Updates"}
              value={email}
              handleEmailClick={onClickSubmit}
              onChange={onChangeInput}
              error={error}
            />
            {showSuccess && <Success>Confirmation email sent!</Success>}
          </Subscribe>
        </Company>
        <Column className={`col20 ${selectedGroup === 1 ? "active" : ""}`}>
          <Header onClick={() => handleClick(1)}>
            Community{" "}
            {selectedGroup === 1 ? <Minus size={16} /> : <Plus size={16} />}
          </Header>
          <LinksContainer>
            <LinkBtn href={"https://discord.gg/83t3xKT"} target="_blank">
              Discord
            </LinkBtn>
            <LinkBtn
              href={"https://twitter.com/reflexerfinance"}
              target="_blank"
            >
              Twitter
            </LinkBtn>
            <LinkBtn href={"https://medium.com/reflexer-labs"} target="_blank">
              Medium
            </LinkBtn>
          </LinksContainer>
        </Column>
        <Column className={`col20 ${selectedGroup === 2 ? "active" : ""}`}>
          <Header onClick={() => handleClick(2)}>
            Project{" "}
            {selectedGroup === 2 ? <Minus size={16} /> : <Plus size={16} />}
          </Header>
          <LinksContainer>
            <LinkBtn href={"https://github.com/reflexer-labs"} target="_blank">
              GitHub
            </LinkBtn>
            <LinkBtn onClick={e => handleSamePageClick(e, "/bug-bounty")}>
              Bug Bounty
            </LinkBtn>
            <LinkBtn
              href={"https://angel.co/company/reflexer-labs"}
              target="_blank"
            >
              Jobs
            </LinkBtn>
          </LinksContainer>
        </Column>

        <Column className={`col20 ${selectedGroup === 3 ? "active" : ""}`}>
          <Header onClick={() => handleClick(3)}>
            Resources{" "}
            {selectedGroup === 3 ? <Minus size={16} /> : <Plus size={16} />}
          </Header>
          <LinksContainer>
            <LinkBtn onClick={e => handleSamePageClick(e, "/about")}>
              About
            </LinkBtn>
            <LinkBtn onClick={e => handleSamePageClick(e, "/faq")}>FAQ</LinkBtn>
            <LinkBtn href={"https://docs.reflexer.finance/"} target="_blank">
              Documentation
            </LinkBtn>

            <LinkBtn
              href={
                "https://medium.com/reflexer-labs/stability-without-pegs-8c6a1cbc7fbd"
              }
              target="_blank"
            >
              TL;DR Reflex Index
            </LinkBtn>
          </LinksContainer>
        </Column>
      </UpperSection>
      <LowerSection>
        <LinkContainer>
          <Link to={"/privacy"}>Privacy Policy</Link>
          <TipBtn
            data-tip={
              "Reflexer, FLX, and RAI, and the contents of the Reflexer Media Kit, are trademarks of Reflexer Labs, Inc. Use of this website and the Reflexer trademarks is not allowed for any purpose without the express, written permission of Reflexer."
            }
          >
            Legal Notices
          </TipBtn>
        </LinkContainer>
        {/* <Button text={`Deployed Commit - master`} /> */}
        <Button text={`© Reflexer Labs ${new Date().getFullYear()}`} />
      </LowerSection>
      <ReactTooltip multiline type="light" data-effect="float" place="top" />
    </Container>
  )
}

export default Footer

const Container = styled.div`
  background: white;
  padding: 60px 40px 30px;
`

const BrandContainer = styled.div`
  img {
    width: auto !important;
  }
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
    text-align: right;
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
  .col20 {
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

const Subscribe = styled.div`
  margin-top: 20px;
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
  color: ${props => props.theme.colors.primary};
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
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
  font-size: ${props => props.theme.font.default};
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
    color: ${props => props.theme.colors.primary};
    svg {
      color: ${props => props.theme.colors.primary};
    }
  }
`

const LowerSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  align-items: center;
  button {
    padding: 4px 8px;
    pointer-events: none;
  }
  ${({ theme }) => theme.mediaWidth.upToMedium`
   margin-top: 25px;
   flex-direction:column;
   justify-content: flex-start;
   width:fit-content;
   align-items: flex-start;
   button {
     margin-top:15px;
   }
  
  `}
`

const Success = styled.p`
  color: ${props => props.theme.colors.successColor};
  font-size: ${props => props.theme.font.extraSmall};
`

const LinkContainer = styled.div`
  a {
    font-size: ${props => props.theme.font.default};
    line-height: 22px;
    letter-spacing: -0.18px;
    color: ${props => props.theme.colors.secondary};
    transition: all 0.3s ease;
    display: block;
    &:hover {
      text-decoration: underline;
      color: ${props => props.theme.colors.primary};
      svg {
        color: ${props => props.theme.colors.primary};
      }
    }
  }

  ${({ theme }) => theme.mediaWidth.upToSmall`
    margin-bottom: 20px;
    a {
      font-weight: 600;
      font-family: "Inter-Medium";
      color: ${props => props.theme.colors.primary};
     &:hover {
      text-decoration:none;
     }
    }
  `}
`

const TipBtn = styled.div`
  font-size: ${props => props.theme.font.default};
  line-height: 22px;
  margin-top: 15px;
  letter-spacing: -0.18px;
  color: ${props => props.theme.colors.secondary};
  transition: all 0.3s ease;
  display: block;
  cursor: pointer;
  &:hover {
    color: ${props => props.theme.colors.primary};
    svg {
      color: ${props => props.theme.colors.primary};
    }
  }
  ${({ theme }) => theme.mediaWidth.upToSmall`
    margin-bottom: 20px;
      font-weight: 600;
      font-family: "Inter-Medium";
      color: ${props => props.theme.colors.primary};
     &:hover {
      text-decoration:none;
     }
   
  `}
`
