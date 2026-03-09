import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BarChart3, 
  Database, 
  LineChart, 
  PieChart, 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  ChevronDown,
  Code2,
  Terminal,
  Cpu,
  Globe,
  Briefcase,
  GraduationCap,
  User,
  FileText
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  LineChart as ReLineChart, 
  Line,
  AreaChart,
  Area
} from 'recharts';
import { cn } from './lib/utils';

// --- Types ---

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
  github: string;
}

interface Skill {
  name: string;
  level: number;
  icon: React.ReactNode;
}

// --- Mock Data ---

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Data Cleaning with Python",
    description: "A comprehensive data cleaning and preprocessing project performed in Google Colab. This project demonstrates advanced techniques for handling missing data, standardizing formats, and preparing raw datasets for analysis using Python and Pandas.",
    tags: ["Python", "Pandas", "Data Cleaning", "Google Colab"],
    image: "https://picsum.photos/seed/dataclean/800/600",
    link: "https://colab.research.google.com/drive/139noeSHxne37Jg-N-k9PBugVY6XacYvP?usp=sharing",
    github: "https://github.com/MphileMnisi"
  },
  {
    id: 2,
    title: "Data Visualization using Excel",
    description: "An in-depth revenue analysis project using Excel to compare actual vs. target performance. Features interactive charts and data modeling to identify performance gaps and revenue trends.",
    tags: ["Excel", "Data Visualization", "Revenue Analysis", "BI"],
    image: "https://picsum.photos/seed/excel-revenue/800/600",
    link: "https://capeitinitiative-my.sharepoint.com/:x:/g/personal/nkosimphile_mnisi_capaciti_org_za/IQBVZQWJ__YuTrght0eXo1aUAQFCkB6vRpq8COkdhKN--S4?e=2QeEpg",
    github: "https://github.com/MphileMnisi"
  }
];

const SKILLS: Skill[] = [
  { name: "Python (Pandas, NumPy)", level: 90, icon: <Code2 className="w-5 h-5" /> },
  { name: "SQL (PostgreSQL, BigQuery)", level: 95, icon: <Database className="w-5 h-5" /> },
  { name: "Tableau / Power BI", level: 85, icon: <BarChart3 className="w-5 h-5" /> },
  { name: "Statistical Analysis", level: 80, icon: <LineChart className="w-5 h-5" /> },
  { name: "Machine Learning", level: 75, icon: <Cpu className="w-5 h-5" /> },
  { name: "Excel (VBA, PowerQuery)", level: 90, icon: <FileText className="w-5 h-5" /> },
];

const CHART_DATA = [
  { name: 'Jan', sales: 4000, users: 2400 },
  { name: 'Feb', sales: 3000, users: 1398 },
  { name: 'Mar', sales: 2000, users: 9800 },
  { name: 'Apr', sales: 2780, users: 3908 },
  { name: 'May', sales: 1890, users: 4800 },
  { name: 'Jun', sales: 2390, users: 3800 },
  { name: 'Jul', sales: 3490, users: 4300 },
];

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [displayName, setDisplayName] = useState("DATA.ANALYST");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayName(prev => prev === "DATA.ANALYST" ? "NKOSIMPHILE MNISI" : "DATA.ANALYST");
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
      isScrolled ? "bg-white/80 backdrop-blur-md border-bottom border-zinc-200 shadow-sm" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-600">
          <a href="#about" className="hover:text-zinc-900 transition-colors">About</a>
          <a href="#skills" className="hover:text-zinc-900 transition-colors">Skills</a>
          <a href="#projects" className="hover:text-zinc-900 transition-colors">Projects</a>
          <a href="#contact" className="px-4 py-2 bg-zinc-900 text-white rounded-full hover:bg-zinc-800 transition-colors">Get in touch</a>
        </div>
        <div className="text-xl font-bold tracking-tighter flex items-center h-8">
          <AnimatePresence mode="wait">
            <motion.span
              key={displayName}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="uppercase block"
            >
              {displayName}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center pt-20 px-6 bg-[#F9F9F9]">
      <div className="max-w-4xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-bold tracking-wider uppercase mb-6">
            Available for new opportunities
          </span>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-zinc-900 mb-8 leading-[0.9]">
            Turning raw data into <span className="text-zinc-400 italic">actionable</span> insights.
          </h1>
          <p className="text-xl text-zinc-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            I'm a Data Analyst specializing in statistical modeling, visualization, and business intelligence. I help companies make better decisions through evidence-based analysis.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#projects" className="px-8 py-4 bg-zinc-900 text-white rounded-xl font-semibold hover:bg-zinc-800 transition-all flex items-center gap-2">
              View My Work <ChevronDown className="w-4 h-4" />
            </a>
            <div className="flex items-center gap-4 px-4">
              <a href="https://github.com/MphileMnisi" target="_blank" rel="noopener noreferrer" className="p-3 text-zinc-400 hover:text-zinc-900 transition-colors"><Github className="w-6 h-6" /></a>
              <a href="https://www.linkedin.com/in/nkosimphile-siyabonga-mnisi-0a9a33389" target="_blank" rel="noopener noreferrer" className="p-3 text-zinc-400 hover:text-zinc-900 transition-colors"><Linkedin className="w-6 h-6" /></a>
              <a href="mailto:nkosimphilem37@gmail.com" className="p-3 text-zinc-400 hover:text-zinc-900 transition-colors"><Mail className="w-6 h-6" /></a>
            </div>
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        className="mt-20 w-full max-w-5xl h-[300px] bg-white rounded-3xl shadow-2xl border border-zinc-100 p-8 overflow-hidden"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
            <span className="ml-4 text-xs font-mono text-zinc-400 uppercase tracking-widest">Performance Metrics 2024</span>
          </div>
          <div className="flex gap-4">
            <div className="flex items-center gap-2 text-xs font-medium text-zinc-500">
              <div className="w-2 h-2 rounded-full bg-zinc-900" /> Sales
            </div>
            <div className="flex items-center gap-2 text-xs font-medium text-zinc-500">
              <div className="w-2 h-2 rounded-full bg-zinc-300" /> Users
            </div>
          </div>
        </div>
        <div className="w-full h-full pb-12">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={CHART_DATA}>
              <defs>
                <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#18181b" stopOpacity={0.1}/>
                  <stop offset="95%" stopColor="#18181b" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#a1a1aa'}} dy={10} />
              <YAxis hide />
              <Tooltip 
                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
              />
              <Area type="monotone" dataKey="sales" stroke="#18181b" strokeWidth={3} fillOpacity={1} fill="url(#colorSales)" />
              <Area type="monotone" dataKey="users" stroke="#d4d4d8" strokeWidth={2} fillOpacity={0} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </motion.div>
    </section>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold tracking-tight text-zinc-900 mb-6">Technical Arsenal</h2>
            <p className="text-lg text-zinc-600 mb-12">
              I leverage a modern data stack to extract, transform, and visualize data. My approach combines statistical rigor with business intuition.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {SKILLS.map((skill, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-4 rounded-2xl border border-zinc-100 hover:border-zinc-200 transition-all group"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-zinc-50 rounded-lg text-zinc-600 group-hover:bg-zinc-900 group-hover:text-white transition-colors">
                      {skill.icon}
                    </div>
                    <span className="font-semibold text-zinc-900">{skill.name}</span>
                  </div>
                  <div className="w-full h-1.5 bg-zinc-100 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-zinc-900"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="h-64 bg-zinc-900 rounded-3xl p-6 text-white flex flex-col justify-between">
                <PieChart className="w-8 h-8 opacity-50" />
                <div>
                  <div className="text-3xl font-bold mb-1">98%</div>
                  <div className="text-xs text-zinc-400 uppercase tracking-widest">Data Accuracy</div>
                </div>
              </div>
              <div className="h-48 bg-emerald-500 rounded-3xl p-6 text-white flex flex-col justify-between">
                <Globe className="w-8 h-8 opacity-50" />
                <div>
                  <div className="text-3xl font-bold mb-1">12+</div>
                  <div className="text-xs text-emerald-100 uppercase tracking-widest">Global Projects</div>
                </div>
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="h-64 bg-zinc-200 rounded-3xl p-6 text-zinc-900 flex flex-col justify-between">
                <LineChart className="w-8 h-8 opacity-50" />
                <div>
                  <div className="text-3xl font-bold mb-1">40%</div>
                  <div className="text-xs text-zinc-500 uppercase tracking-widest">Efficiency Gain</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-[#F9F9F9]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold tracking-tight text-zinc-900 mb-4">Selected Case Studies</h2>
            <p className="text-lg text-zinc-600">
              A collection of projects where I've applied data science and analytics to solve real-world business problems.
            </p>
          </div>
          <a href="#" className="flex items-center gap-2 font-semibold text-zinc-900 hover:underline">
            View all projects <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, i) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group bg-white rounded-[32px] overflow-hidden border border-zinc-100 hover:shadow-xl transition-all"
            >
              <div className="aspect-[4/3] overflow-hidden relative cursor-pointer" onClick={() => window.open(project.link, '_blank')}>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[10px] font-bold uppercase tracking-wider rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-8">
                <h3 
                  className="text-xl font-bold text-zinc-900 mb-3 cursor-pointer hover:text-emerald-600 transition-colors"
                  onClick={() => window.open(project.link, '_blank')}
                >
                  {project.title}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
                <div className="flex items-center justify-between pt-6 border-t border-zinc-50">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-zinc-900 font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all"
                  >
                    View Project <ExternalLink className="w-4 h-4" />
                  </a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-zinc-900 transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-zinc-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/20 blur-[120px] rounded-full -mr-64 -mt-64" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-zinc-500/10 blur-[120px] rounded-full -ml-64 -mb-64" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight">
              Let's build something <span className="text-zinc-500 italic">meaningful</span> together.
            </h2>
            <p className="text-xl text-zinc-400 mb-12 max-w-lg">
              Currently open to full-time roles and freelance consulting projects. Let's discuss how I can help your team.
            </p>
            <div className="space-y-6">
              <a href="mailto:nkosimphilem37@gmail.com" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center group-hover:bg-zinc-700 transition-colors">
                  <Mail className="w-5 h-5 text-zinc-400" />
                </div>
                <div>
                  <div className="text-xs text-zinc-500 uppercase tracking-widest mb-1">Email Me</div>
                  <div className="text-lg font-semibold">nkosimphilem37@gmail.com</div>
                </div>
              </a>
              <a href="https://www.linkedin.com/in/nkosimphile-siyabonga-mnisi-0a9a33389" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center group-hover:bg-zinc-700 transition-colors">
                  <Linkedin className="w-5 h-5 text-zinc-400" />
                </div>
                <div>
                  <div className="text-xs text-zinc-500 uppercase tracking-widest mb-1">LinkedIn</div>
                  <div className="text-lg font-semibold">nkosimphile-siyabonga-mnisi</div>
                </div>
              </a>
            </div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-xl p-8 md:p-12 rounded-[40px] border border-white/10">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Name</label>
                  <input type="text" className="w-full bg-zinc-800/50 border border-zinc-700 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500 transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Email</label>
                  <input type="email" className="w-full bg-zinc-800/50 border border-zinc-700 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500 transition-colors" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Message</label>
                <textarea rows={4} className="w-full bg-zinc-800/50 border border-zinc-700 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500 transition-colors" placeholder="How can I help you?" />
              </div>
              <button className="w-full py-4 bg-white text-zinc-900 rounded-xl font-bold hover:bg-zinc-200 transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
        
        <footer className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-zinc-500 text-sm">
          <div>© 2024 Data Insight Portfolio. Built with precision.</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="https://github.com/MphileMnisi" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
            <a href="#" className="hover:text-white transition-colors">Dribbble</a>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-zinc-900 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
