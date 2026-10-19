import jwt from 'jsonwebtoken';

export function issueToken(user) {
  return jwt.sign({ id: user._id.toString(), role: user.role, name: user.name, email: user.email }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN || '8h' });
}

export function cookieOptions() {
  return { httpOnly: true, sameSite: 'lax', secure: process.env.COOKIE_SECURE === 'true', maxAge: 8 * 60 * 60 * 1000 };
}

