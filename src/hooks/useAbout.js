import { graphql, useStaticQuery } from "gatsby"

export default function useAbout() {
  const { allContentfulAbout } = useStaticQuery(graphql`
    query About {
      allContentfulAbout(sort: { fields: order }) {
        edges {
          node {
            id
            title {
              title
            }
            links {
              name
              link
            }
            images {
              json
            }
            content {
              json
            }
          }
        }
      }
    }
  `)
  return allContentfulAbout.edges
}
