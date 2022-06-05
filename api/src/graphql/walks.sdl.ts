export const schema = gql`
  type Walk {
    id: Int!
    dog: Dog!
    walker: User!
    dogId: Int!
    userId: Int!
    time: String!
    lengthMinutes: Int!
    didPoop: Boolean!
    didPee: Boolean!
    medicalConcerns: String
    numJumps: Int!
    jumpHandlage: String
    numMouthings: Int!
    mouthingsHandlage: String
    dogsSeen: Int!
    dogsSeenReacted: Int!
    seenDogReaction: String
    otherConcerns: String
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    walks: [Walk!]! @requireAuth
    walk(id: Int!): Walk @requireAuth
  }

  input CreateWalkInput {
    dogId: Int!
    userId: Int!
    time: String!
    lengthMinutes: Int!
    didPoop: Boolean!
    didPee: Boolean!
    medicalConcerns: String
    numJumps: Int!
    jumpHandlage: String
    numMouthings: Int!
    mouthingsHandlage: String
    dogsSeen: Int!
    dogsSeenReacted: Int!
    seenDogReaction: String
    otherConcerns: String
  }

  input UpdateWalkInput {
    dogId: Int
    userId: Int
    time: String
    lengthMinutes: Int
    didPoop: Boolean
    didPee: Boolean
    medicalConcerns: String
    numJumps: Int
    jumpHandlage: String
    numMouthings: Int
    mouthingsHandlage: String
    dogsSeen: Int
    dogsSeenReacted: Int
    seenDogReaction: String
    otherConcerns: String
  }

  type Mutation {
    createWalk(input: CreateWalkInput!): Walk! @requireAuth
    updateWalk(id: Int!, input: UpdateWalkInput!): Walk! @requireAuth
    deleteWalk(id: Int!): Walk! @requireAuth
  }
`
