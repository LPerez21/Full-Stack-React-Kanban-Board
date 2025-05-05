import { Router, Request, Response } from 'express';
import { User } from '../models/user.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const router = Router();

// POST /login - Login a user
router.post('/login', async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;

    // Check if username and password are provided
    if (!username || !password) {
      return res.status(400).json({ message: 'Username and password are required' });
    }

    // Find user by username
    const user = await User.findOne({ where: { username } });

    if (!user) {
      return res.status(401).json({ message: 'Authentication failed' });
    }

    // Compare hashed password
    const passwordIsValid = await bcrypt.compare(password, user.password);
    if (!passwordIsValid) {
      return res.status(401).json({ message: 'Authentication failed' });
    }

    // Generate JWT
    const secretKey = process.env.JWT_SECRET_KEY || '';
    const token = jwt.sign(
      { id: user.id, username: user.username },
      secretKey,
      { expiresIn: '1h' }
    );

    // Send response with token and user info
    return res.json({
      token,
      user: {
        id: user.id,
        username: user.username,
        email: user.email, // Optional: include email if needed
      },
    });
  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({ message: 'Server error during login' });
  }
});

export default router;
