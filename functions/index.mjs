import express from 'express';
import serverless from 'serverless-http';
import Cartoons from '../route/Cartoons.mjs';

const app = express();

app.get('/', (req, res) => {
  res.send('Welcome');
});

app.use('/cartoons', Cartoons);

const handler2 = serverless(app);

export const handler = async (event, context) => {
  const result = await handler2(event, context);
  return result;
};
