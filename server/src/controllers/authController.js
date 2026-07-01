import User from '../models/User.js';
import { signToken } from '../utils/token.js';

function authPayload(user) {
  return { token: signToken(user._id), user: { id: user._id, name: user.name, email: user.email, role: user.role } };
}

export async function register(req, res) {
  const { name, email, password } = req.body;
  if (!name || !email || !password) return res.status(400).json({ message: 'Name, email, and password are required' });
  const exists = await User.findOne({ email });
  if (exists) return res.status(409).json({ message: 'Email is already registered' });
  const user = await User.create({ name, email, password });
  res.status(201).json(authPayload(user));
}

export async function login(req, res) {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || !(await user.matchPassword(password))) return res.status(401).json({ message: 'Invalid credentials' });
  res.json(authPayload(user));
}

export async function me(req, res) {
  res.json({ user: req.user });
}
