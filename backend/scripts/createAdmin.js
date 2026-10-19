import 'dotenv/config';
import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { connectDatabase } from '../config/db.js';
import User from '../models/User.js';

const rl = readline.createInterface({ input, output });
try {
  await connectDatabase();
  const name = await rl.question('Admin name: ');
  const email = await rl.question('Admin email: ');
  const password = await rl.question('Admin password (8+ chars): ');
  if (password.length < 8) throw new Error('Password must be at least 8 characters');
  await User.create({ name, email, password, role: 'admin' });
  console.log('Administrator created successfully.');
} catch (error) {
  console.error(error.message);
  process.exitCode = 1;
} finally {
  rl.close();
  process.exit();
}

