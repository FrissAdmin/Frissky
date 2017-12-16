export default `

input SurveyAnswer {
  answer: String
  choice: ID
  question: ID!
}

type Mutation {
  surveyAnswers(
    answers: [SurveyAnswer]
  ): Boolean
}

type Query {
  surveyQuestions: [SurveyQuestion]!
  users: [User]!
}

type SurveyQuestion {
  choices: [SurveyQuestionChoice]
  id: ID!
  subtitle: String
  title: String!
  type: String!
}

type SurveyQuestionAnswer {
  answer: String
  choice: SurveyQuestionChoice
  question: SurveyQuestion!
  user: User!
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
