export default `

input SurveyAnswerInput {
  answer: String
  choice: ID
  question: ID!
}

type AuthResponse {
  error: String
  token: String
}

type AuthUser {
  email: String!
  id: String!
  role: String!
}

type Channel {
  id: ID!
  messages: [Message]
  name: String
  users: [User]
}

type Message {
  author: User!
  channel: Channel!
  content: String!
  id: ID!
  sent: Float!
}

type Mutation {
  beginMessage(
    channelName: String
    withUser: ID!
  ): Channel

  login(
    email: String!
    password: String!
  ): AuthResponse!

  register(
    email: String!
    password: String!
  ): AuthResponse!

  sendMessage(
    channel: ID!
    content: String!
  ): Message

  surveyAnswers(
    answers: [SurveyAnswerInput]
  ): Boolean!
}

type Query {
  authData: AuthUser

  channels: [Channel]!

  messages(
    afterTime: Int
    channel: ID!
  ): [Message]!

  surveyAnswers(
    user: ID
  ): [SurveyAnswer]!

  surveyQuestions: [SurveyQuestion]!

  users: [User]!
}

type Subscription {
  messageAdded(channel: ID!): Message
}

type SurveyAnswer {
  answer: String
  choice: SurveyQuestionChoice
  choiceId: ID
  id: ID!
  question: SurveyQuestion!
  questionId: ID!
  user: User!
}

type SurveyQuestion {
  choices: [SurveyQuestionChoice]
  id: ID!
  subtitle: String
  title: String!
  type: String!
}

type SurveyQuestionChoice {
  id: ID!
  question: SurveyQuestion!
  title: String!
}

type User {
  email: String!
  firstName: String
  id: ID!
  lastName: String
  role: String!
}

`;
