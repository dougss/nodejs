import { gql } from 'apollo-server'

export default gql`
  type Query {
    """
    This is an example of a documentation string.
    """
    testMessage: String!
  }
`
