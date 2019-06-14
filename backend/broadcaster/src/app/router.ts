import * as express from 'express'

export const router = express()

router.get('/api', (req, res) => {
  res.send({ message: 'Welcome to broadcaster!' });
});