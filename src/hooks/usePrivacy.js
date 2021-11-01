import { graphql, useStaticQuery } from "gatsby"

export default function usePrivacy() {
  const { allContentfulPrivacy } = useStaticQuery(graphql`
    query Privacy {
      allContentfulPrivacy {
        edges {
          node {
            title {
              title
            }
            content {
              raw
            }
            updatedAt
          }
        }
      }
    }
  `)
  return allContentfulPrivacy.edges
}
