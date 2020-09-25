import { gql } from '@apollo/client';

export const POST_LISTS = gql`
  query PostList {
    posts {
      _id
      title
      teaser
    }
  }
`;


export const POST_DETAILS = gql`
  query PostDetails($id: ID!) {
    post(id: $id) {
      title
      _id
      teaser
    }
  }
`;

