import User from '../models/User.js';
import { issueToken, cookieOptions } from '../utils/auth.js';

export async function login(req, res) {
  const user = await User.findOne({ email: req.body.email }).select('+password');
  if (!user || !(await user.comparePassword(req.body.password))) return res.status(401).json({ message: 'Invalid email or password' });
  res.cookie('token', issueToken(user), cookieOptions()).json({ user: { id: user._id, name: user.name, email: user.email, role: user.role } });
}

export function logout(req, res) {
  res.clearCookie('token', { httpOnly: true, sameSite: 'lax', secure: process.env.COOKIE_SECURE === 'true' }).json({ message: 'Logged out successfully' });
}

export function me(req, res) {
  res.json({ user: req.user });
}

