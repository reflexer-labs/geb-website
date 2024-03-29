import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/Layout"

import { ExternalLinkArrow } from "../styles/GlobalStyle"
import getPrefixedPath from "../utils/getPrefixPath"

export default function NotFound() {
  return (
    <Layout headerStyle={{ position: "absolute", width: "100%", top: "20px" }}>
      <>
        <Container>
          <h2>Page not found</h2>
          <BtnContainer>
            <Button to="/">
              <img
                src={getPrefixedPath("/arrow.svg")}
                className="arrow"
                alt=""
              />{" "}
              Back to Home
            </Button>
          </BtnContainer>
        </Container>
      </>
    </Layout>
  )
}

const Container = styled.div`
  padding: 80px 15px;
  text-align: center;
  max-width: 900px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
  min-height: calc(100vh - 320px);
`

const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Button = styled(Link)`
  ${ExternalLinkArrow}
  .arrow {
    transform: rotate(180deg);
  }
`
