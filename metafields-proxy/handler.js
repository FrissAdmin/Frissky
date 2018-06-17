'use strict';

var _graphql = require('graphql');

var _graphql2 = _interopRequireDefault(_graphql);

var _schema = require('./graphql/schema');

var _schema2 = _interopRequireDefault(_schema);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports.createMetaFields = function (event, context, callback) {
  return (0, _graphql2.default)(_schema2.default, event.queryStringParameters.query).then(function (result) {
    return callback(null, { statusCode: 200, body: JSON.stringify(result) });
  }, function (err) {
    return callback(err);
  });
};
