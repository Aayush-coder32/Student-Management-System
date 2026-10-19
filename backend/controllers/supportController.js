import SupportMessage from '../models/SupportMessage.js';

export async function submitSupportMessage(req, res) {
  const message = await SupportMessage.create(req.body);
  res.status(201).json({ message: 'Your message has been received. Our team will be in touch.', id: message._id });
}
