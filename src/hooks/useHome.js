import { graphql, useStaticQuery } from "gatsby"

export default function useHome() {
  const {
    allContentfulHomeHero,
    allContentfulHomeBoxes,
    allContentfulHomeFeature,
    allContentfulHomeFaq,
  } = useStaticQuery(graphql`
    query Home {
      allContentfulHomeHero {
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
  return {
    allContentfulHomeHero,
    allContentfulHomeBoxes,
    allContentfulHomeFeature,
    allContentfulHomeFaq,
  }
}
