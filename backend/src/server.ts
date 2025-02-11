import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import pool from './config/db';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

const testDBConnection = async () => {
  try {
    const client = await pool.connect();
    console.log('✅ PostgreSQL Connected Successfully!');
    client.release();
  } catch (error) {
    console.error('❌ PostgreSQL Connection Error:', error);
    process.exit(1); 
  }
};


testDBConnection().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
});

