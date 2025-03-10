import express from 'express';
import fs from 'fs/promises';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = 5000;

// Get __dirname equivalent in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const usersFilePath = path.join(__dirname, 'data', 'user.json');

app.use(cors());
app.use(express.json());

// GET users
app.get('/api/users/login', async (req, res) => {
  try {
    const data = await fs.readFile(usersFilePath, 'utf8');
    res.json(JSON.parse(data));
  } catch (error) {
    console.error('Error reading user.json:', error);
    res.status(500).json({ message: 'Failed to load users' });
  }
});

// POST users (Signup)
app.post('/api/users/signup', async (req, res) => {
  try {
    console.log('Request body:', req.body);

    // Extract user data from `users` object
    const { email, username, password } = req.body.users;

    // Validate input
    if (!email || !password || !username) {
      return res.status(400).json({ message: 'Email, username, and password are required' });
    }

    const data = await fs.readFile(usersFilePath, 'utf8');
    const users = JSON.parse(data);

    // Ensure users.users is an array
    if (!Array.isArray(users.users)) {
      users.users = [];
    }

    // Check if user already exists
    if (users.users.some(user => user.email === email)) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Add new user
    users.users.push({ email, username, password });

    await fs.writeFile(usersFilePath, JSON.stringify(users, null, 2), 'utf8');
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error writing to user.json:', error);
    res.status(500).json({ message: 'Failed to save user' });
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
