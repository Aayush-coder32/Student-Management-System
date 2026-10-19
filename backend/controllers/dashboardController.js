import Student from '../models/Student.js';
import Attendance from '../models/Attendance.js';
import Result from '../models/Result.js';

export async function dashboard(req, res) {
  const [totalStudents, activeStudents, attendance, results, recentStudents, recentResults] = await Promise.all([
    Student.countDocuments(),
    Student.countDocuments({ status: 'Active' }),
    Attendance.find().select('status'),
    Result.find().select('marks maxMarks'),
    Student.find().sort({ createdAt: -1 }).limit(5),
    Result.find().populate('student', 'fullName studentId').sort({ createdAt: -1 }).limit(5)
  ]);
  const present = attendance.filter((item) => item.status === 'Present').length;
  const averageAttendance = attendance.length ? Math.round((present / attendance.length) * 100) : 0;
  const averageResults = results.length ? Math.round(results.reduce((sum, item) => sum + (item.marks / item.maxMarks) * 100, 0) / results.length) : 0;
  res.json({ stats: { totalStudents, activeStudents, averageAttendance, averageResults, lowAttendance: 0 }, recentStudents, recentResults });
}

