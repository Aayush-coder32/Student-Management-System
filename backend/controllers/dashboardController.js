import Student from '../models/Student.js';
import Attendance from '../models/Attendance.js';
import Result from '../models/Result.js';

export async function dashboard(req, res) {
  const [totalStudents, activeStudents, attendance, results, recentStudents, recentResults, todayRecords, totalCourses] = await Promise.all([
    Student.countDocuments(),
    Student.countDocuments({ status: 'Active' }),
    Attendance.find().select('status'),
    Result.find().select('marks maxMarks'),
    Student.find().sort({ createdAt: -1 }).limit(5),
    Result.find().populate('student', 'fullName studentId').sort({ createdAt: -1 }).limit(5),
    Attendance.find({ date: { $gte: new Date(new Date().setHours(0, 0, 0, 0)), $lt: new Date(new Date().setHours(24, 0, 0, 0)) } }).select('status'),
    Student.distinct('course')
  ]);
  const present = attendance.filter((item) => item.status === 'Present').length;
  const averageAttendance = attendance.length ? Math.round((present / attendance.length) * 100) : 0;
  const averageResults = results.length ? Math.round(results.reduce((sum, item) => sum + (item.marks / item.maxMarks) * 100, 0) / results.length) : 0;
  const presentToday = todayRecords.filter((item) => item.status === 'Present').length;
  const todayAttendance = todayRecords.length ? Math.round((presentToday / todayRecords.length) * 100) : 0;
  const calendarDates = [...new Set(attendance.map((item) => new Date(item.date).toISOString().slice(0, 10)))];
  res.json({ stats: { totalStudents, activeStudents, averageAttendance, averageResults, totalResults: results.length, presentToday, todayAttendance, totalCourses: totalCourses.length }, recentStudents, recentResults, calendarDates });
}

