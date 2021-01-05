import { graphql, useStaticQuery } from "gatsby"

export default function useHomeBoxes() {
  const { allContentfulHomeBoxes } = useStaticQuery(graphql`
    query HomeBoxes {
      allContentfulHomeBoxes(sort: { fields: order }) {
        edges {
          node {
            id
            title
            link {
              name
              link
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
  return allContentfulHomeBoxes.edges
}
