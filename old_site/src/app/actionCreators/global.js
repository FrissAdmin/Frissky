import * as actionTypes from 'constants/actionTypes';
import graphql          from 'lib/api/graphql';
import loadSurveyData   from 'graphQL/queries/loadSurveyData.graphql';
import loadUsers        from 'graphQL/queries/loadUsers.graphql';

export default {
  loadSurveyData: () => ({
    type    : actionTypes.LOAD_SURVEY,
    payload : graphql(loadSurveyData, {}),
  }),

  loadUsers: () => ({
    type    : actionTypes.LOAD_USERS,
    payload : graphql(loadUsers, {}),
  }),
};
