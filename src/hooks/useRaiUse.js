import { graphql, useStaticQuery } from "gatsby"

export default function useRaiUse() {
  const { allContentfulRaiUsage } = useStaticQuery(graphql`
    query RaiUsage {
      allContentfulRaiUsage {
        edges {
          node {
            title {
              title
            }
            id
            content {
              content
            }
            image {
              file {
                url
              }
            }
            link {
              link
            }
            category {
              category
            }
          }
        }
      }
    }
  `)
  return allContentfulRaiUsage.edges
}
