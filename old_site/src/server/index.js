import { graphqlExpress } from 'graphql-server-express';
import auth               from './auth';
import bodyParser         from 'body-parser';
import buildHtml          from './buildHTML';
import express            from 'express';
import fs                 from 'fs';
import path               from 'path';
import schema             from './graphql/schema';

const app = express();
const PORT = process.env.PORT || 8081;

const INDEX = fs.readFileSync(path.resolve(__dirname, './index.html'), { encoding : 'utf-8' });

const DIST_DIR = path.resolve(__dirname, '../../dist');
app.use('/dist', express.static(DIST_DIR));

app.use('/graphql', bodyParser.json(), auth, graphqlExpress((request) => ({
  schema,
  context: { user : request.user },
})));

app.get('*', (request, response) => {
  response.send(buildHtml(INDEX));
});

app.listen(PORT, () => {
  console.log(`Listening on localhost:${PORT}\n`);
});
