export const schema = gql`
  type User {
    id: Int!
    email: String!
    firstName: String!
    lastName: String!
    role: Role!
    Walk: [Walk]!
    photoUrl: String
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  enum Role {
    SUPERADMIN
    ADMIN
    USER
  }

  type Query {
    users: [User!]! @requireAuth
    user(id: Int!): User @requireAuth
  }

  input CreateUserInput {
    email: String!
    firstName: String!
    lastName: String!
    role: Role!
    photoUrl: String
  }

  input UpdateUserInput {
    email: String
    firstName: String
    lastName: String
    role: Role
    photoUrl: String
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @requireAuth
    updateUser(id: Int!, input: UpdateUserInput!): User! @requireAuth
    deleteUser(id: Int!): User! @requireAuth
  }
`
