import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, CalendarDays, GraduationCap, HeartHandshake, ShieldCheck } from 'lucide-react';
import Login from './Login';

export default function Landing() {
  return <div className="school-portal">
    <header className="portal-header">
      <Link to="/" className="portal-school-brand"><span className="portal-crest"><GraduationCap size={25} /></span><span><strong>EDUTRACK SCHOOL</strong><small>Learning together, growing every day</small></span></Link>
      <nav><a href="#home">Home</a><a href="#discover">Discover</a><a href="#admissions">Admissions</a><a href="#contact">Contact Us</a></nav>
    </header>
    <main className="portal-main" id="home"><div className="portal-shade" /><div className="portal-welcome" id="discover"><span>WELCOME TO</span><h1>A place to learn,<br />grow and belong.</h1><p>Supporting every student on the journey to a brighter future.</p></div><section className="portal-login-card"><Login portal /></section></main>
    <section className="portal-discover-section" aria-label="About the school">
      <div className="portal-section-heading"><span>OUR SCHOOL</span><h2>A strong foundation<br />for every student.</h2><p>We bring students, families and educators together to make learning purposeful and every day count.</p></div>
      <div className="portal-value-grid">
        <article><span><BookOpen size={21} /></span><h3>Learning with purpose</h3><p>Build knowledge, curiosity and confidence through a supportive learning community.</p></article>
        <article><span><HeartHandshake size={21} /></span><h3>Growing together</h3><p>Students are encouraged to discover their strengths and care for one another.</p></article>
        <article><span><ShieldCheck size={21} /></span><h3>A safe community</h3><p>A welcoming environment helps every learner feel respected, included and ready to thrive.</p></article>
      </div>
    </section>
    <section className="portal-admissions-section" id="admissions"><div><span>ADMISSIONS</span><h2>Your next chapter<br />starts here.</h2><p>Join our school community. Create an account to get started with the student portal.</p></div><Link to="/signup" className="portal-admissions-button">Get started <ArrowRight size={17} /></Link><CalendarDays className="portal-admissions-icon" size={82} /></section>
    <footer className="portal-footer" id="contact"><div className="portal-footer-main"><Link to="/" className="portal-footer-brand"><span className="portal-crest"><GraduationCap size={22} /></span><span><strong>EDUTRACK SCHOOL</strong><small>Learning together, growing every day</small></span></Link><div><strong>Explore</strong><a href="#home">Home</a><a href="#discover">Discover</a><a href="#admissions">Admissions</a></div><div><strong>Get in touch</strong><a href="mailto:school@example.com">Contact the school</a><Link to="/login">Student portal</Link><Link to="/signup">Create an account</Link></div></div><div className="portal-footer-bottom"><span>© {new Date().getFullYear()} EduTrack School. All rights reserved.</span><span>Made for learning, built for community.</span></div></footer>
  </div>;
}
