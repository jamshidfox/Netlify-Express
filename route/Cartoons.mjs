import express from 'express';

const route = express.Router();

const FakeData = [
  {
    title: 'A',
  },
  {
    title: 'B',
  },
  {
    title: 'C',
  },
];

route.get('/all_data', (req, res) => {
  res.json(FakeData);
});

export default route;
