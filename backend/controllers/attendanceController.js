import Attendance from '../models/Attendance.js';

export async function listAttendance(req, res) {
  const filter = {};
  if (req.query.date) {
    const start = new Date(req.query.date); const end = new Date(start); end.setDate(end.getDate() + 1);
    filter.date = { $gte: start, $lt: end };
  }
  if (req.query.student) filter.student = req.query.student;
  const records = await Attendance.find(filter).populate('student', 'fullName studentId course').sort({ date: -1 });
  res.json({ records });
}

export async function upsertAttendance(req, res) {
  const record = await Attendance.findOneAndUpdate({ student: req.body.student, date: req.body.date }, req.body, { new: true, upsert: true, runValidators: true, setDefaultsOnInsert: true }).populate('student', 'fullName studentId');
  res.status(200).json({ record });
}

