import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, LockKeyhole, Mail, GraduationCap } from 'lucide-react';
import toast from 'react-hot-toast';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const { user, login } = useAuth(); const navigate = useNavigate(); const [show, setShow] = useState(false); const [form, setForm] = useState({ email: '', password: '' }); const [busy, setBusy] = useState(false);
  if (user) return <Navigate to="/" replace />;
  const submit = async (event) => { event.preventDefault(); setBusy(true); try { await login(form); toast.success('Welcome back!'); navigate('/'); } catch (error) { toast.error(error.response?.data?.message || 'Unable to sign in'); } finally { setBusy(false); } };
  return <div className="login-page"><div className="login-decoration"><div className="login-orb orb-one" /><div className="login-orb orb-two" /><div className="login-quote"><GraduationCap size={40} /><h1>Empower every<br /><span>student journey.</span></h1><p>One clear view of your institution. Manage, measure and make a difference.</p></div></div><div className="login-panel"><div className="login-form-wrap"><div className="mobile-brand"><GraduationCap /> Edu<span>Track</span></div><div className="eyebrow">ADMIN PORTAL</div><h2>Welcome back</h2><p className="muted">Sign in to continue to your dashboard.</p><form onSubmit={submit}><label>Email address<div className="input-wrap"><Mail size={18} /><input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="admin@school.edu" /></div></label><label>Password<div className="input-wrap"><LockKeyhole size={18} /><input type={show ? 'text' : 'password'} required minLength="8" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} placeholder="Enter your password" /><button type="button" className="input-action" onClick={() => setShow(!show)}>{show ? <EyeOff size={18} /> : <Eye size={18} />}</button></div></label><div className="form-row"><label className="checkbox"><input type="checkbox" /> Remember me</label><a href="#forgot">Forgot password?</a></div><button className="primary-button full" disabled={busy}>{busy ? 'Signing in...' : 'Sign in to dashboard'} <span>→</span></button></form><p className="login-footer">Need help? <a href="mailto:support@edutrack.local">Contact support</a></p></div></div></div>;
}

