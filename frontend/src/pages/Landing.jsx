import {
  ArrowRight, BarChart3, BookOpen, Check, CheckCircle2, ChevronDown, GraduationCap,
  LayoutDashboard, LockKeyhole, MessageCircle, Play, ShieldCheck, Sparkles, Users,
  UserRoundCheck, Zap
} from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  { icon: Users, title: 'Student profiles', text: 'Every student detail, from enrollment to contact information, in one organized view.', tone: 'purple' },
  { icon: UserRoundCheck, title: 'Attendance tracking', text: 'Record attendance in seconds and spot patterns before they become problems.', tone: 'green' },
  { icon: BarChart3, title: 'Progress analytics', text: 'Turn marks and attendance into clear insights your team can act on.', tone: 'blue' },
  { icon: BookOpen, title: 'Results management', text: 'Keep examination records accurate, searchable and ready when you need them.', tone: 'orange' },
  { icon: ShieldCheck, title: 'Secure by design', text: 'Protected access and sensible permissions keep your institution’s data safe.', tone: 'rose' },
  { icon: Zap, title: 'Less busywork', text: 'Simple workflows help your team spend less time on spreadsheets and more with students.', tone: 'gold' }
];

const faqs = [
  ['Is EduTrack suitable for small institutions?', 'Yes. EduTrack is designed to feel useful from your first student record and scale as your institution grows.'],
  ['Can my team access it from anywhere?', 'Yes. The responsive workspace works across modern browsers on laptops, tablets and mobile devices.'],
  ['How quickly can we get started?', 'Create an account, invite your team and start organizing your student data in minutes.']
];

export default function Landing() {
  return <div className="landing-page">
    <header className="landing-nav">
      <Link to="/" className="landing-brand"><span className="brand-mark"><GraduationCap size={20} /></span> Edu<span>Track</span></Link>
      <nav className="landing-links"><a href="#platform">Platform</a><a href="#features">Features</a><a href="#stories">Stories</a><a href="#faq">FAQ</a></nav>
      <div className="landing-actions"><Link to="/login" className="landing-signin">Sign in</Link><Link to="/signup" className="primary-button">Get started <ArrowRight size={16} /></Link></div>
    </header>

    <main>
      <section className="landing-hero" id="platform">
        <div className="hero-copy"><div className="eyebrow"><Sparkles size={13} /> SMARTER SCHOOL OPERATIONS</div><h1>Make every student journey <em>count.</em></h1><p>EduTrack gives your institution one beautiful, focused place to manage students, understand progress and create better outcomes.</p><div className="hero-actions"><Link to="/signup" className="primary-button hero-button">Start for free <ArrowRight size={17} /></Link><a href="#features" className="hero-link"><span className="play-icon"><Play size={12} fill="currentColor" /></span> See what’s inside</a></div><div className="hero-proof"><div className="proof-avatars"><span>AK</span><span>RM</span><span>+8k</span></div><div><strong>Trusted by education teams</strong><small>Helping schools stay in sync every day.</small></div></div></div>
        <div className="hero-visual"><div className="hero-photo"><div className="photo-overlay" /><div className="photo-caption"><span className="live-dot" /> Your institution, in focus</div></div></div>
      </section>

      <section className="trust-strip"><span>POWERING BETTER LEARNING OPERATIONS</span><strong>Northstar Academy</strong><strong>Learn<span>wise</span></strong><strong>EDU<span>CORE</span></strong><strong>Horizon<span>school</span></strong></section>

      <section className="feature-section feature-section-wide" id="features"><div className="section-intro"><div className="eyebrow">ONE CALM WORKSPACE</div><h2>Everything your team needs to <span>move forward.</span></h2><p>From the first enrollment to the final result, bring your most important workflows into focus.</p><Link to="/signup" className="text-link">Explore all features <ArrowRight size={15} /></Link></div><div className="feature-grid">{features.map(({ icon: Icon, title, text, tone }) => <article className="feature-card" key={title}><div className={`feature-icon ${tone}`}><Icon size={21} /></div><h3>{title}</h3><p>{text}</p><span className="feature-arrow">↗</span></article>)}</div></section>

      <section className="workflow-section"><div className="workflow-visual"><div className="workflow-orb" /><div className="workflow-card workflow-main"><div className="workflow-card-head"><span><LayoutDashboard size={15} /> Weekly overview</span><small>Today</small></div><div className="workflow-number">94.8% <small>+3.1%</small></div><div className="workflow-bars">{[45,60,52,77,68,88,72].map((height, i) => <i key={i} style={{ height: `${height}%` }} />)}</div><div className="workflow-labels"><span>Mon</span><span>Wed</span><span>Fri</span><span>Sun</span></div></div><div className="workflow-card workflow-notice"><CheckCircle2 size={19} /><div><strong>Great progress!</strong><small>Attendance is up this week.</small></div></div><div className="workflow-card workflow-task"><span className="task-check"><Check size={13} /></span><div><strong>Review Grade 10 results</strong><small>Due today · 24 records</small></div></div></div><div className="workflow-copy"><div className="eyebrow">DESIGNED FOR MOMENTUM</div><h2>Clarity for admins.<br /><span>Confidence for educators.</span></h2><p>EduTrack turns scattered information into a shared source of truth. Your team gets the context they need without the complexity they don’t.</p><div className="check-list"><span><Check size={15} /> See the whole picture at a glance</span><span><Check size={15} /> Make decisions with real-time data</span><span><Check size={15} /> Give every learner more attention</span></div><Link to="/signup" className="primary-button">Build your workspace <ArrowRight size={16} /></Link></div></section>

      <section className="stats-section"><div><strong>8k<span>+</span></strong><small>students organized</small></div><div><strong>96<span>%</span></strong><small>team satisfaction</small></div><div><strong>24<span>/7</span></strong><small>access to insights</small></div><div><strong>3<span>×</span></strong><small>faster daily workflows</small></div></section>

      <section className="stories-section" id="stories"><div className="section-heading"><div><div className="eyebrow">REAL PEOPLE, REAL PROGRESS</div><h2>Good systems make room<br />for <span>great teaching.</span></h2></div><div className="story-arrows"><button>←</button><button>→</button></div></div><div className="story-grid"><article className="story-card story-featured"><div className="quote-mark">“</div><p>EduTrack has helped us replace six different spreadsheets with one shared view. Our team finally spends more time discussing students and less time chasing information.</p><div className="story-person"><span>PS</span><div><strong>Priya Sharma</strong><small>Principal, Northstar Academy</small></div></div></article><article className="story-card"><div className="quote-mark">“</div><p>The dashboard makes our weekly reviews genuinely useful. I can see what needs attention before our team meeting even starts.</p><div className="story-person"><span className="teal">DM</span><div><strong>Daniel Mehta</strong><small>Academic coordinator</small></div></div></article><article className="story-card story-dark"><LockKeyhole size={19} /><p>“A thoughtful, secure foundation for the way modern schools work.”</p><span>— EduTrack community</span></article></div></section>

      <section className="faq-section" id="faq"><div className="section-intro"><div className="eyebrow">QUESTIONS, ANSWERED</div><h2>Simple by design.<br /><span>Ready for more.</span></h2><p>Everything you need to feel confident getting started.</p></div><div className="faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<ChevronDown size={17} /></summary><p>{answer}</p></details>)}</div></section>

      <section className="landing-cta"><div><div className="eyebrow">READY WHEN YOU ARE</div><h2>Make your next school day<br />your most organized one.</h2><p>Start building a clearer student experience today.</p></div><Link to="/signup" className="primary-button">Create your workspace <ArrowRight size={17} /></Link></section>
    </main>

    <footer className="landing-footer"><div className="footer-main"><div><Link to="/" className="landing-brand"><span className="brand-mark"><GraduationCap size={18} /></span> Edu<span>Track</span></Link><p>Tools for institutions that put<br />students first.</p></div><div className="footer-column"><strong>Product</strong><a href="#features">Features</a><a href="#platform">Platform</a><a href="#stories">Customer stories</a></div><div className="footer-column"><strong>Company</strong><a href="#about">About us</a><a href="#faq">Help center</a><Link to="/login">Sign in</Link></div><div className="footer-column"><strong>Get started</strong><span>Ready to bring clarity<br />to your classroom?</span><Link to="/signup" className="footer-cta">Create account <ArrowRight size={14} /></Link></div></div><div className="footer-bottom"><span>© 2025 EduTrack. Built for better learning journeys.</span><span>Privacy · Terms · Security</span></div></footer>
  </div>;
}
