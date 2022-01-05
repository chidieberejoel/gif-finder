import { gql } from "@apollo/client";

export const SEARCH_GIFS = gql`
  query search(
    $after: String
    $first: Int
    $before: String
    $last: Int
    $query: String!
  ) {
    search(
      after: $after
      first: $first
      before: $before
      last: $last
      query: $query
    ) {
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
        total
      }
      edges {
        node {
          id
          url
          rating
          title
          type
          images {
            original {
              ...ImagePropertyFields
            }
            downsized {
              ...ImagePropertyFields
            }
          }
          user {
            banner_image
            display_name
            avatar_url
            website_url
          }
        }
        cursor
      }
    }
  }

  fragment ImagePropertyFields on ImageProperty {
    height
    width
    url
    size
  }
`;
