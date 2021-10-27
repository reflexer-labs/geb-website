import React, { useState, useMemo } from "react"
import { ArrowRight, Hash, Search } from "react-feather"
import Highlighter from "react-highlight-words"
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer"
import styled from "styled-components"
import { slugifyTitle } from "../../utils/helper"
import { Link } from "gatsby"

const SearchBox = ({ data }) => {
  const [value, setValue] = useState("")
  const [results, setResults] = useState([])
  const faqs = useMemo(
    () =>
      data.map(x => {
        return { ...x, content: documentToPlainTextString(x.content.json) }
      }),
    [data]
  )
  console.log(results)
  const handleValueChange = e => {
    setValue(e.target.value)
    try {
      const hits = faqs.filter(
        f =>
          f.title.title.toLowerCase().includes(e.target.value.toLowerCase()) ||
          f.content.toLowerCase().includes(e.target.value.toLowerCase())
      )
      setResults(hits)
    } catch (error) {
      console.info("no hits")
    }
  }

  return (
    <Content>
      <Container>
        <Search size="18" />
        <CustomInput
          value={value}
          onChange={handleValueChange}
          placeholder="What are you searching for…"
        />
        <ArrowRight size="18" />
      </Container>
      {results.length > 0 ? (
        <Results>
          {results.map(r => {
            return (
              <Link to={`/faq#${slugifyTitle(r.title.title)}`} key={r.id}>
                <Box>
                  <div>
                    <Hash size="22" />
                  </div>
                  <Block>
                    <Title>{r.title.title}</Title>
                    <Description>
                      <Highlighter
                        highlightClassName="YourHighlightClass"
                        searchWords={[`${value}`]}
                        autoEscape={true}
                        textToHighlight={r.content}
                      />
                    </Description>
                  </Block>
                </Box>
              </Link>
            )
          })}
        </Results>
      ) : null}
    </Content>
  )
}

export default SearchBox

const Content = styled.div`
  position: relative;
  max-width: 700px;
  margin: 0 auto;
`
const Results = styled.div`
  position: absolute;
  top: calc(100% + 10px);
  left: 0;
  border-radius: 5px;
  background: ${props => props.theme.colors.foreground};
  padding: 1rem;
  width: 100%;
  z-index: 3;
  a {
    color: inherit;
    text-decoration: none;
  }
`
const Container = styled.div`
  display: flex;
  align-items: center;
  border-radius: 50px;
  background: ${props => props.theme.colors.foreground};
  padding: 5px 20px;
  svg {
    &:first-child {
      color: ${props => props.theme.colors.secondary};
    }
    &:last-child {
      color: ${props => props.theme.colors.blueish};
    }
  }
`

const CustomInput = styled.input`
  box-shadow: none;
  border: 0;
  outline: none;
  flex-grow: 1;
  background: transparent;
  font-size: 18px;
  padding: 10px 10px;
  color: ${props => props.theme.colors.neutral};
`

const Box = styled.div`
  display: flex;
  border-radius: 5px;
  padding: 1rem;
  background: #121b33;
  svg {
    color: ${props => props.theme.colors.secondary};
    margin-right: 10px;
  }
`

const Block = styled.div`
  flex-grow: 1;
`

const Title = styled.h3`
  margin: 0;
  font-weight: bold;
  font-family: "inter-medium";
  color: ${props => props.theme.colors.neutral};
  font-size: 18px;
`

const Description = styled.div`
  color: ${props => props.theme.colors.secondary};
  font-size: 14px;
  line-height: 1.6;
  margin-top: 10px;
`
