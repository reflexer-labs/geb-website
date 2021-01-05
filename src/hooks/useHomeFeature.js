import { graphql, useStaticQuery } from "gatsby"

export default function useHomeFeature() {
  const { allContentfulHomeFeature } = useStaticQuery(graphql`
    query HomeFeature {
      allContentfulHomeFeature(sort: { fields: order }) {
        edges {
          node {
            id
            title
            link {
              name
              url
            }
            image {
              file {
                url
              }
            }
            content {
              json
            }
          }
        }
      }
    }
  `)
  return allContentfulHomeFeature.edges
}
