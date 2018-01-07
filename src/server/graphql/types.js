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

type Mutation {
  login(
    email: String!
    password: String!
  ): AuthResponse!

  mutationRoleCustomer(
    token: String!
  ): MutationRoleCustomer

  register(
    email: String!
    password: String!
  ): AuthResponse!
}

type MutationRoleCustomer {
  surveyAnswers(
    answers: [SurveyAnswerInput]
  ): Boolean
}

type Query {
  queryRoleAdmin(
    token: String!
  ): QueryRoleAdmin

  queryRoleCustomer(
    token: String!
  ): QueryRoleCustomer

  surveyQuestions: [SurveyQuestion]!
}

type QueryRoleAdmin {
  surveyAnswers(
    user: ID!
  ): [SurveyAnswer]!

  users: [User]!
}

type QueryRoleCustomer {
  surveyAnswers: [SurveyAnswer]!
}

type SurveyAnswer {
  answer: String
  choice: SurveyQuestionChoice
  choiceId: ID!
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
