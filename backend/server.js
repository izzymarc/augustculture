const express = require('express');
const cors = require('cors');
const productRoutes = require('./routes/products');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.use('/api/products', productRoutes);

app.get('/', (req, res) => {
  res.send('Backend server for August Culture');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
