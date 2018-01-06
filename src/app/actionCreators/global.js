import * as actionTypes from '../constants/actionTypes';
import graphql          from '../lib/api/graphql';
import loadSurveyData   from '../graphQL/queries/loadSurveyData.graphql';

export default {
  loadSurvey: () => ({
    type    : actionTypes.LOAD_SURVEY,
    payload : graphql(loadSurveyData, {}),
  }),
};
