import {
  GraphQLBoolean,
  GraphQLID,
  GraphQLList,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLNonNull,
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

export default new GraphQLSchema({
  mutation: new GraphQLObjectType({
    name: 'RootMutationType',
    fields : {
      createMetaFields : {
        args : {
          customer : new GraphQLNonNull(new GraphQLID()),
          fields   : new GraphQLList(new GraphQLObjectType({
            key    : new GraphQLNonNull(new GraphQLString()),
            value  : new GraphQLNonNull(new GraphQLString()),
          })),
        },

        type: GraphQLBoolean,

        resolve: (parent, args) => new Promise((resolve, reject) => {
          request.put(
            {
              url             : `/admin/customers/${args.customer}.json`,
              method          : 'PUT',
              headers         : {
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
