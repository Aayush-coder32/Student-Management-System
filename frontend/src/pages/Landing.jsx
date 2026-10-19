import { Link } from 'react-router-dom';
import { GraduationCap } from 'lucide-react';
import Login from './Login';

export default function Landing() {
  return <div className="school-portal">
    <header className="portal-header">
      <Link to="/" className="portal-school-brand"><span className="portal-crest"><GraduationCap size={25} /></span><span><strong>EDUTRACK SCHOOL</strong><small>Learning together, growing every day</small></span></Link>
      <nav><a href="#home">Home</a><a href="#discover">Discover</a><a href="#admissions">Admissions</a><a href="mailto:school@example.com">Contact Us</a></nav>
    </header>
    <main className="portal-main" id="home"><div className="portal-shade" /><div className="portal-welcome" id="discover"><span>WELCOME TO</span><h1>A place to learn,<br />grow and belong.</h1><p>Supporting every student on the journey to a brighter future.</p></div><section className="portal-login-card"><Login portal /></section></main>
    <footer className="portal-footer" id="admissions">A community built around every learner <span>·</span> Admissions are open <Link to="/signup">Create an account</Link></footer>
  </div>;
}
