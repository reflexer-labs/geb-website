import { graphql, useStaticQuery } from "gatsby"

export default function useBugBounty() {
  const { allContentfulBugBounty } = useStaticQuery(graphql`
    query BugBounty {
      allContentfulBugBounty {
        edges {
          node {
            title
            content {
              raw
            }
            rewardTable {
              very_low {
                value
                color
              }
              low {
                value
                color
              }
              moderate {
                value
                color
              }
              high {
                value
                color
              }
              severe {
                value
                color
              }
            }
          }
        }
      }
    }
  `)
  return allContentfulBugBounty.edges
}
