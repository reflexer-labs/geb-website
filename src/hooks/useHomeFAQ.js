import { graphql, useStaticQuery } from "gatsby"

export default function useHomeFAQ() {
  const { allContentfulHomeFaq } = useStaticQuery(graphql`
    query HomeFAQ {
      allContentfulHomeFaq(sort: { fields: order }) {
        edges {
          node {
            id
            title
            content {
              json
            }
          }
        }
      }
    }
  `)
  return allContentfulHomeFaq.edges
}
