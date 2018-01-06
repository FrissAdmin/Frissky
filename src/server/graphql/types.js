export default `

input SurveyAnswerInput {
  answer: String
  choice: ID
  question: ID!
}

type Mutation {
  surveyAnswers(
    answers: [SurveyAnswerInput]
  ): Boolean
}

type Query {
  surveyAnswers: [SurveyAnswer]!
  surveyQuestions: [SurveyQuestion]!
  users: [User]!
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
