import { ApolloServer } from 'apollo-server'

// TODO: @rsfarias Create Heroku account
// TODO: @rsfarias Configure typescript, webpack, automated reload
// TODO: @rsfarias Connect with MongoDB
// TODO: @joao Set up CI/CD
// TODO: @joao Set up authentication
// TODO: @douglas Set up JEST for unit testing
// TODO: @rsfarias Organize folder architecture

// TODO: RUN FOR IT 🏃‍♂️🏃‍♂️🏃‍♂️🏃‍♂️🏃‍♂️🏃‍♂️🏃‍♂️

// TODO: Load schema from schema.graphql instead of leaving it here.

import resolvers from './graphql/resolver'
import typeDefs from './graphql/type-defs'

const server = new ApolloServer({ typeDefs, resolvers })

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
