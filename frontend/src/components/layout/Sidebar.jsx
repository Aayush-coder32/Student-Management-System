import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Users, ClipboardCheck, GraduationCap, Settings, LogOut, X } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const links = [
  { to: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/students', label: 'Students', icon: Users },
  { to: '/attendance', label: 'Attendance', icon: ClipboardCheck },
  { to: '/results', label: 'Examination Results', icon: GraduationCap },
  { to: '/settings', label: 'Settings', icon: Settings }
];
export default function Sidebar({ open, onClose }) {
  const { logout } = useAuth();
  return <aside className={`sidebar ${open ? 'sidebar-open' : ''}`}>
    <div className="brand"><div className="brand-mark"><GraduationCap size={22} /></div><span>Edu<span className="accent">Track</span></span><button className="mobile-close" onClick={onClose}><X size={20} /></button></div>
    <nav>{links.map(({ to, label, icon: Icon }) => <NavLink key={to} to={to} end={to === '/dashboard'} onClick={onClose}><Icon size={19} />{label}</NavLink>)}</nav>
    <button className="logout-button" onClick={logout}><LogOut size={19} />Sign out</button>
  </aside>;
}
