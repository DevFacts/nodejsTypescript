import express from 'express';
import connectDB from './models/db';
import homeRoute from './routes/home';

const app = express();
const port = 3000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/', homeRoute);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
