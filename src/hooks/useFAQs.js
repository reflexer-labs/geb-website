import { graphql, useStaticQuery } from "gatsby"

export default function useFAQs() {
  const { allContentfulFaQs } = useStaticQuery(graphql`
    query FAQs {
      allContentfulFaQs(sort: { fields: order }) {
        edges {
          node {
            id
            title {
              title
            }
            content {
              json
            }
          }
        }
      }
    }
  `)
  return allContentfulFaQs.edges
}
