import { graphql, useStaticQuery } from "gatsby"

export default function usePrivacy() {
  const { allContentfulWhyRai } = useStaticQuery(graphql`
    query WhyRai {
      allContentfulWhyRai {
        edges {
          node {
            title {
              title
            }
            content {
              json
            }
            updatedAt
          }
        }
      }
    }
  `)
  return allContentfulWhyRai.edges
}
