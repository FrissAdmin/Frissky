import { graphqlExpress } from 'graphql-server-express';
import bodyParser         from 'body-parser';
import express            from 'express';
import schema             from './graphql/schema';

const app = express();
const PORT = 8081;

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));

// app.get('/', (request, response) => response.send('Hello World!'));

app.listen(PORT, () => console.log(`Listening on localhost:${PORT}\n`));
