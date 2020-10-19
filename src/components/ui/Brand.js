import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Brand = ({ height }) => {
  return (
    <Container>
      <Link to="/">
        <img height={height} src={"/img/brand.svg"} alt="reflexer labs" />
      </Link>
    </Container>
  )
}

export default Brand

const Container = styled.div`
  a {
    color: inherit;
    text-decoration: none;
    img {
      width: 105.14px;
      height: 25.49px;
    }
  }
`
