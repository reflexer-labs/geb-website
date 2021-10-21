import { Link } from "gatsby"
import React from "react"
import { ArrowRightCircle } from "react-feather"
import styled from "styled-components"
import { BtnStyle } from "../../styles/GlobalStyle"

const LinkButton = ({ text, url, isExternal, withArrow }) => {
  return isExternal ? (
    <ExtLink href={url} target="_blank" rel="norefferer">
      {text} {withArrow ? <ArrowRightCircle size={"18"} /> : null}
    </ExtLink>
  ) : (
    <CustomLink to={url}>
      {text} {withArrow ? <ArrowRightCircle size={"18"} /> : null}
    </CustomLink>
  )
}

export default LinkButton

const ExtLink = styled.a`
  ${BtnStyle}
`
const CustomLink = styled(Link)`
  ${BtnStyle}
`
