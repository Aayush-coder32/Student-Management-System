import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/layout/ProtectedRoute';
import AdminLayout from './components/layout/AdminLayout';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Students from './pages/Students';
import StudentForm from './pages/StudentForm';
import Attendance from './pages/Attendance';
import Results from './pages/Results';
import { Settings, NotFound } from './pages/SimplePages';
import './index.css';

export default function App() {
  return <BrowserRouter><AuthProvider><Toaster position="top-right" /><Routes><Route path="/login" element={<Login />} /><Route element={<ProtectedRoute />}><Route element={<AdminLayout><></></>} /><Route path="/" element={<AdminLayout><Dashboard /></AdminLayout>} /><Route path="/students" element={<AdminLayout><Students /></AdminLayout>} /><Route path="/students/new" element={<AdminLayout><StudentForm /></AdminLayout>} /><Route path="/students/:id/edit" element={<AdminLayout><StudentForm /></AdminLayout>} /><Route path="/attendance" element={<AdminLayout><Attendance /></AdminLayout>} /><Route path="/results" element={<AdminLayout><Results /></AdminLayout>} /><Route path="/settings" element={<AdminLayout><Settings /></AdminLayout>} /></Route><Route path="*" element={<NotFound />} /></Routes></AuthProvider></BrowserRouter>;
}

