import { graphql, useStaticQuery } from "gatsby"

export default function usePrivacy() {
  const { allContentfulWhyRai } = useStaticQuery(graphql`
    query WhyRai {
      allContentfulWhyRai(sort: { fields: order }) {
        edges {
          node {
            title {
              title
            }
            content {
              json
            }
            background {
              file {
                url
              }
            }
            link {
              name
              link
            }
          }
        }
      }
    }
  `)
  return allContentfulWhyRai.edges
}
