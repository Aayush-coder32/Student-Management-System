import { ArrowRight, BarChart3, CheckCircle2, GraduationCap, ShieldCheck, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  { icon: Users, title: 'One student hub', text: 'Keep profiles, courses and enrollment details organized in one calm workspace.' },
  { icon: BarChart3, title: 'Insights that matter', text: 'See attendance, results and progress at a glance with simple, useful dashboards.' },
  { icon: ShieldCheck, title: 'Built for your team', text: 'Secure access and role-based workflows help everyone work with confidence.' }
];

export default function Landing() {
  return <div className="landing-page">
    <header className="landing-nav">
      <Link to="/" className="landing-brand"><span className="brand-mark"><GraduationCap size={20} /></span> Edu<span>Track</span></Link>
      <nav className="landing-links"><a href="#features">Features</a><a href="#about">Why EduTrack</a></nav>
      <div className="landing-actions"><Link to="/login" className="landing-signin">Sign in</Link><Link to="/signup" className="primary-button">Get started <ArrowRight size={16} /></Link></div>
    </header>
    <main>
      <section className="landing-hero">
        <div className="hero-copy"><div className="eyebrow">SMARTER SCHOOL OPERATIONS</div><h1>Give every student a <em>clearer path</em> to success.</h1><p>EduTrack brings your student records, attendance and results together, so your institution can spend less time managing data and more time supporting learners.</p><div className="hero-actions"><Link to="/signup" className="primary-button hero-button">Start for free <ArrowRight size={17} /></Link><a href="#features" className="hero-link">Explore the platform <span>↓</span></a></div><div className="hero-proof"><div className="proof-avatars"><span>AK</span><span>RM</span><span>+8k</span></div><div><strong>Loved by modern educators</strong><small>Join teams making student success simpler.</small></div></div></div>
        <div className="hero-visual"><div className="visual-glow" /><div className="dashboard-preview"><div className="preview-top"><div className="preview-logo"><span className="brand-mark"><GraduationCap size={14} /></span> EduTrack</div><span className="preview-dot" /></div><div className="preview-welcome"><small>OVERVIEW</small><strong>Good morning, Admin ✦</strong><span>Here’s what’s happening today.</span></div><div className="preview-stats"><div><span>Students</span><strong>1,248</strong><b>↗ 12.5%</b></div><div><span>Attendance</span><strong>94.8%</strong><b>↗ 3.1%</b></div></div><div className="preview-chart"><div className="chart-lines"><i /><i /><i /></div>{[42,58,52,72,65,84,76].map((height, index) => <span key={index} style={{ height: `${height}%` }} />)}</div><div className="preview-bottom"><div><small>RECENT ACTIVITY</small><strong><i className="mini-avatar">JS</i> Jordan Smith</strong></div><span className="preview-pill">Active</span></div></div><div className="floating-card floating-attendance"><span className="float-icon">✓</span><div><strong>94.8%</strong><small>Average attendance</small></div></div><div className="floating-card floating-growth"><span className="float-icon gold">↗</span><div><strong>+18.2%</strong><small>Student growth</small></div></div></div>
      </section>
      <section className="feature-section" id="features"><div className="section-intro"><div className="eyebrow">EVERYTHING IN ONE PLACE</div><h2>Less admin work.<br /><span>More student impact.</span></h2><p>A focused toolkit for the people who keep your institution moving forward.</p></div><div className="feature-grid">{features.map(({ icon: Icon, title, text }) => <article className="feature-card" key={title}><div className="feature-icon"><Icon size={21} /></div><h3>{title}</h3><p>{text}</p><span className="feature-arrow">↗</span></article>)}</div></section>
      <section className="landing-cta" id="about"><div><div className="eyebrow">READY WHEN YOU ARE</div><h2>Make your next school day<br />your most organized one.</h2></div><Link to="/signup" className="primary-button">Create your workspace <ArrowRight size={17} /></Link></section>
    </main>
    <footer className="landing-footer"><span>© 2025 EduTrack</span><span>Built for better learning journeys.</span></footer>
  </div>;
}
