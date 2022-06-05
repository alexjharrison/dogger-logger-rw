export const schema = gql`
  type Dog {
    id: Int!
    name: String!
    gender: Gender!
    Walk: [Walk]!
    weight: Float
    breed: String
    neutered: Boolean
    status: Status!
    photoUrl: String
    birthday: DateTime
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  enum Gender {
    MALE
    FEMALE
    NON_BINARY
  }
  enum Status {
    RECEIVING
    ADOPTION
  }

  type Query {
    dogs: [Dog!]! @requireAuth
    dog(id: Int!): Dog @requireAuth
  }

  input CreateDogInput {
    name: String!
    gender: Gender!
    weight: Float
    breed: String
    neutered: Boolean
    status: Status!
    photoUrl: String
    birthday: DateTime
  }

  input UpdateDogInput {
    name: String
    gender: Gender
    weight: Float
    breed: String
    neutered: Boolean
    status: Status
    photoUrl: String
    birthday: DateTime
  }

  type Mutation {
    createDog(input: CreateDogInput!): Dog! @requireAuth
    updateDog(id: Int!, input: UpdateDogInput!): Dog! @requireAuth
    deleteDog(id: Int!): Dog! @requireAuth
  }
`
