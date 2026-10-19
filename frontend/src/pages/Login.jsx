import { useState } from 'react';
import { Navigate, Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, LockKeyhole, Mail, UserRound, GraduationCap, ArrowRight } from 'lucide-react';
import toast from 'react-hot-toast';
import { useAuth } from '../context/AuthContext';

export default function Login({ mode = 'login' }) {
  const isSignup = mode === 'signup';
  const { user, login, register } = useAuth();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', password: '', confirmPassword: '' });
  const [busy, setBusy] = useState(false);
  if (user) return <Navigate to="/dashboard" replace />;
  const update = (key) => (event) => setForm({ ...form, [key]: event.target.value });
  const submit = async (event) => {
    event.preventDefault();
    if (isSignup && form.password !== form.confirmPassword) { toast.error('Passwords do not match'); return; }
    setBusy(true);
    try {
      if (isSignup) { await register({ name: form.name, email: form.email, password: form.password }); toast.success('Account created! Welcome to EduTrack.'); }
      else { await login({ email: form.email, password: form.password }); toast.success('Welcome back!'); }
      navigate('/dashboard');
    } catch (error) { toast.error(error.response?.data?.message || `Unable to ${isSignup ? 'create account' : 'sign in'}`); } finally { setBusy(false); }
  };
  return <div className="login-page"><div className="login-decoration"><Link to="/" className="auth-brand"><span className="brand-mark"><GraduationCap size={20} /></span> Edu<span>Track</span></Link><div className="login-orb orb-one" /><div className="login-orb orb-two" /><div className="login-quote"><GraduationCap size={40} /><h1>Empower every<br /><span>student journey.</span></h1><p>One clear view of your institution. Manage, measure and make a difference.</p><div className="login-checks"><span><span>✓</span> Simple, focused workflows</span><span><span>✓</span> Insights for better decisions</span></div></div></div><div className="login-panel"><div className="login-form-wrap"><Link to="/" className="mobile-brand"><GraduationCap /> Edu<span>Track</span></Link><div className="auth-tabs"><Link className={!isSignup ? 'active' : ''} to="/login">Sign in</Link><Link className={isSignup ? 'active' : ''} to="/signup">Create account</Link></div><div className="eyebrow">{isSignup ? 'GET STARTED' : 'WELCOME BACK'}</div><h2>{isSignup ? 'Create your workspace' : 'Welcome back'}</h2><p className="muted">{isSignup ? 'Set up your account and bring your institution into focus.' : 'Sign in to continue to your dashboard.'}</p><form onSubmit={submit}>{isSignup && <label>Full name<div className="input-wrap"><UserRound size={18} /><input type="text" required value={form.name} onChange={update('name')} placeholder="Your name" /></div></label>}<label>Email address<div className="input-wrap"><Mail size={18} /><input type="email" required value={form.email} onChange={update('email')} placeholder="admin@school.edu" /></div></label><label>Password<div className="input-wrap"><LockKeyhole size={18} /><input type={show ? 'text' : 'password'} required minLength="8" value={form.password} onChange={update('password')} placeholder="At least 8 characters" /><button type="button" className="input-action" onClick={() => setShow(!show)}>{show ? <EyeOff size={18} /> : <Eye size={18} />}</button></div></label>{isSignup && <label>Confirm password<div className="input-wrap"><LockKeyhole size={18} /><input type={show ? 'text' : 'password'} required minLength="8" value={form.confirmPassword} onChange={update('confirmPassword')} placeholder="Repeat your password" /></div></label>}{!isSignup && <div className="form-row"><label className="checkbox"><input type="checkbox" /> Remember me</label><a href="#forgot">Forgot password?</a></div>}<button className="primary-button full" disabled={busy}>{busy ? 'Please wait...' : isSignup ? 'Create account' : 'Sign in to dashboard'} <ArrowRight size={16} /></button></form><p className="login-footer">{isSignup ? 'Already have an account? ' : 'New to EduTrack? '}<Link to={isSignup ? '/login' : '/signup'}>{isSignup ? 'Sign in' : 'Create an account'}</Link></p></div></div></div>;
}
