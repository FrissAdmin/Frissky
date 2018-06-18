import {
  GraphQLBoolean,
  GraphQLID,
  GraphQLInputObjectType,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} from 'graphql';

import request from 'request';

const cleanFields = (fields) => fields.map(({
  key,
  value,
}) => ({
  key,
  namespace  : 'survey',
  value_type : 'string',
  value,
}));

const FieldInput = new GraphQLInputObjectType({
  name: 'FieldInput',
  fields: {
    key    : { type : new GraphQLNonNull(GraphQLString) },
    value  : { type : new GraphQLNonNull(GraphQLString) },
  },
});

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name   : 'Query',
    fields : {
      noop: {
        args    : {},
        type    : GraphQLBoolean,
        resolve : () => true,
      },
    },
  }),
  mutation: new GraphQLObjectType({
    name: 'Mutation',
    fields : {
      createMetaFields : {
        args : {
          customer : { type : new GraphQLNonNull(GraphQLID) },
          fields   : { type : new GraphQLList(FieldInput) },
        },

        type: GraphQLBoolean,

        resolve: (parent, args) => new Promise((resolve, reject) => {
          request.put(
            {
              url     : `https://friss-beauty.myshopify.com/admin/customers/${args.customer}.json`,
              method  : 'PUT',
              headers : {
                /* eslint-disable max-len */
                Authorization : 'Basic NGNhNmMxOWRiNmQwNzIzNWNhMzMwZTgxNTc5OTBjZDA6ODI1OTdkMDUwYjVjZjYxMmMzM2FiMWE5ZDkxNWQ4NTQ=',
                /* eslint-enable max-len */
              },
              json : true,
              body : {
                customer : {
                  id         : args.customer,
                  metafields : cleanFields(args.fields),
                },
              },
            },
            (error, response, body) => {
              if (error !== null) return reject(error);
              return resolve({
                body,
                response,
              });
            },
          );
        }),
      },
    },
  }),
});
