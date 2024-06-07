import express, { Request, Response } from 'express';
const app = express();
app.use(express.json());

app.get('/calculate', (req: Request, res: Response) => {
  const num1 = Number(req.query.num1);
  const num2 = Number(req.query.num2);
  const operation = req.query.operation as keyof typeof baseCalculations;

  if (isNaN(num1) || isNaN(num2)) {
    res.status(400).send('Invalid input');
    return;
  }

  const result = baseCalculations[operation](num1, num2);
  res.json({ success: true, result });
});

app.listen(3001, () => console.log('Server running on port 3001'));

const baseCalculations = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b,
};
