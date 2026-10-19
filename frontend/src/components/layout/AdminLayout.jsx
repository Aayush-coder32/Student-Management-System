import { useState } from 'react';
import { Menu, Bell, Search } from 'lucide-react';
import Sidebar from './Sidebar';
import { useAuth } from '../../context/AuthContext';

export default function AdminLayout({ children }) {
  const [open, setOpen] = useState(false);
  const { user } = useAuth();
  return <div className="app-shell"><Sidebar open={open} onClose={() => setOpen(false)} /><div className="main-area">
    <header className="topbar"><button className="menu-button" onClick={() => setOpen(true)}><Menu /></button><div className="topbar-search"><Search size={18} /><input placeholder="Search anything..." /></div><div className="topbar-actions"><button className="icon-button"><Bell size={19} /><span className="notification-dot" /></button><div className="user-menu"><div className="avatar">{user?.name?.charAt(0).toUpperCase()}</div><div><strong>{user?.name}</strong><small>{user?.role}</small></div></div></div></header>
    <main className="content">{children}</main>
  </div></div>;
}

