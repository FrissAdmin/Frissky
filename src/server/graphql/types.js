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

type Mutation {
  login(
    email: String!
    password: String!
  ): AuthResponse!

  register(
    email: String!
    password: String!
  ): AuthResponse!

  surveyAnswers(
    answers: [SurveyAnswerInput]
  ): Boolean!
}

type Query {
  authData: AuthUser

  surveyAnswers(
    user: ID
  ): [SurveyAnswer]!

  surveyQuestions: [SurveyQuestion]!

  users: [User]!
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
  id: ID!
  role: String!
}

`;
