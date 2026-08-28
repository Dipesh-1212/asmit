import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  ArrowUpRight,
  Cpu,
  Wrench,
  Radio,
  Zap,
  Award,
  Users,
  Github,
  Linkedin,
  FileText,
  Printer,
} from "lucide-react";

const NAV = [
  { id: "about", label: "About" },
  { id: "resume", label: "Resume" },
  { id: "log", label: "Build Log" },
  { id: "components", label: "Components" },
  { id: "field", label: "Field Tests" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

function useScrolled() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return scrolled;
}

function Eyebrow({ children }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="h-px w-8 bg-copper-500" />
      <span className="font-mono text-[11px] tracking-[0.25em] text-copper-400 uppercase">
        {children}
      </span>
    </div>
  );
}

function Header() {
  const scrolled = useScrolled();
  const [open, setOpen] = useState(false);
  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-board-950/90 backdrop-blur border-b border-board-600/60"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 flex items-center justify-between h-16">
        <a href="#top" className="flex items-center gap-2.5 group">
          <svg width="26" height="26" viewBox="0 0 64 64" className="shrink-0">
            <rect width="64" height="64" rx="10" fill="#12271F" />
            <path
              d="M12 32h10M42 32h10M32 12v10M32 42v10"
              stroke="#CD7C4C"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <circle
              cx="32"
              cy="32"
              r="9"
              fill="none"
              stroke="#D4A343"
              strokeWidth="3"
            />
          </svg>
          <span className="font-mono text-sm tracking-wider text-silk-100">
            AS<span className="text-copper-400">/</span>01
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className="font-mono text-xs tracking-[0.15em] uppercase text-silk-400 hover:text-gold-400 transition-colors"
            >
              {n.label}
            </a>
          ))}
          <a
            href="#contact"
            className="font-mono text-xs tracking-[0.15em] uppercase border border-copper-500/60 text-copper-400 px-4 py-2 hover:bg-copper-500 hover:text-board-950 transition-colors"
          >
            Hire Me
          </a>
        </nav>

        <button
          className="md:hidden text-silk-100"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-board-950 border-t border-board-600/60 px-6 py-4 flex flex-col gap-4">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              onClick={() => setOpen(false)}
              className="font-mono text-xs tracking-[0.15em] uppercase text-silk-300"
            >
              {n.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

function HeroGraphic() {
  return (
    <svg
      viewBox="0 0 480 480"
      className="w-full h-auto max-w-md mx-auto"
      aria-hidden="true"
    >
      <circle
        cx="240"
        cy="240"
        r="150"
        fill="none"
        stroke="#265041"
        strokeWidth="1"
      />
      <circle
        cx="240"
        cy="240"
        r="110"
        fill="none"
        stroke="#265041"
        strokeWidth="1"
        strokeDasharray="2 6"
      />

      <g stroke="#CD7C4C" strokeWidth="2" fill="none" opacity="0.85">
        <path className="trace-pulse" d="M240 90 V150 M240 90 H180 V60" />
        <path className="trace-pulse" d="M390 240 H330 M390 240 V180 H420" />
        <path className="trace-pulse" d="M240 390 V330 M240 390 H300 V420" />
        <path className="trace-pulse" d="M90 240 H150 M90 240 V300 H60" />
      </g>

      <circle
        cx="240"
        cy="240"
        r="52"
        fill="#12271F"
        stroke="#D4A343"
        strokeWidth="2"
      />
      <text
        x="240"
        y="234"
        textAnchor="middle"
        fill="#E8E6DA"
        fontFamily="IBM Plex Mono"
        fontSize="11"
        letterSpacing="1"
      >
        ASMIT
      </text>
      <text
        x="240"
        y="252"
        textAnchor="middle"
        fill="#B0623A"
        fontFamily="IBM Plex Mono"
        fontSize="9"
        letterSpacing="2"
      >
        BUILDER
      </text>

      {[
        { x: 180, y: 60, label: "2018" },
        { x: 420, y: 180, label: "2022" },
        { x: 300, y: 420, label: "2024" },
        { x: 60, y: 300, label: "NOW" },
      ].map((n) => (
        <g key={n.label}>
          <circle
            className="node-pulse"
            cx={n.x}
            cy={n.y}
            r="5"
            fill="#D4A343"
          />
          <text
            x={n.x}
            y={n.y - 12}
            textAnchor="middle"
            fill="#7C8B82"
            fontFamily="IBM Plex Mono"
            fontSize="9"
            letterSpacing="1"
          >
            {n.label}
          </text>
        </g>
      ))}
    </svg>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="pcb-bg relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-14 items-center">
        <div>
          <Eyebrow>Spec Plate · Robotics Builder</Eyebrow>
          <h1 className="font-stencil text-6xl sm:text-7xl md:text-8xl leading-[0.9] text-silk-100 uppercase">
            Asmit
            <br />
            <span className="text-copper-400">Shrestha</span>
          </h1>
          <p className="mt-6 font-mono text-sm tracking-[0.2em] text-silk-400 uppercase">
            Robo-Football · Circuits · Field Repairs
          </p>
          <p className="mt-6 text-silk-200/90 text-base md:text-lg leading-relaxed max-w-md">
            I build robots that have to work in front of a crowd — wired on a
            deadline, driven by hand, and fixed mid-match when something shorts
            out. Based in Chitwan, Nepal, and looking for a shop with real tools
            and a reason to use them.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#log"
              className="inline-flex items-center gap-2 bg-copper-500 text-board-950 font-mono text-xs tracking-[0.15em] uppercase px-6 py-3.5 hover:bg-gold-400 transition-colors"
            >
              View Build Log <ArrowRight size={15} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-silk-400/40 text-silk-100 font-mono text-xs tracking-[0.15em] uppercase px-6 py-3.5 hover:border-gold-400 hover:text-gold-400 transition-colors"
            >
              Get In Touch
            </a>
          </div>

          <dl className="mt-12 grid grid-cols-3 max-w-sm border-t border-board-600/70 pt-5">
            <div>
              <dt className="font-mono text-[10px] tracking-widest text-silk-600 uppercase">
                Events
              </dt>
              <dd className="text-2xl font-stencil text-silk-100 mt-1">6+</dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] tracking-widest text-silk-600 uppercase">
                Awards
              </dt>
              <dd className="text-2xl font-stencil text-silk-100 mt-1">3</dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] tracking-widest text-silk-600 uppercase">
                Since
              </dt>
              <dd className="text-2xl font-stencil text-silk-100 mt-1">2018</dd>
            </div>
          </dl>
        </div>

        <HeroGraphic />
      </div>
    </section>
  );
}

function About() {
  return (
    <section
      id="about"
      className="bg-board-900 py-24 border-t border-board-700/60"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-5 gap-12 items-start">
        <div className="md:col-span-2">
          <div className="border border-board-600/70 p-2 bg-board-950">
            <img
              src="/images/robot-portrait.jpeg"
              alt="Asmit Shrestha holding a robo-football robot at United Tech Fusion 2080"
              className="w-full h-auto grayscale-[15%] contrast-[1.05]"
            />
          </div>
          <p className="font-mono text-[11px] text-silk-600 mt-2 tracking-wide">
            United Tech Fusion 2080 — Robo-Football
          </p>
        </div>

        <div className="md:col-span-3">
          <Eyebrow>About</Eyebrow>
          <h2 className="font-stencil text-4xl md:text-5xl text-silk-100 uppercase mb-6">
            What's on the bench
          </h2>
          <div className="space-y-4 text-silk-200/90 leading-relaxed">
            <p>
              Most of what I know about electronics, I learned by taking a robot
              apart in front of people who were timing me. Starting with school
              science exhibitions in Chitwan and moving through STEM Aroma, I've
              built and fielded RC robots for robo-football and obstacle-course
              competitions — the kind where the chassis cracks an hour before
              your match and you fix it with what's in your pocket.
            </p>
            <p>
              As Vice-President of STEM Aroma (2022–2024), I helped run the club
              side of things too: organizing builds, coordinating teammates, and
              getting robots and people to the right place on competition day.
              I'm comfortable wiring a motor driver, reading a schematic, or
              explaining to a judge exactly why a signal wire came loose —
              mid-match.
            </p>
            <p className="text-silk-100">
              I'm looking for makerspace work because that's where the actual
              tools live — and I'd rather learn by building than by watching.
            </p>
          </div>

          <div className="mt-8 flex items-center gap-2 text-silk-400 font-mono text-xs tracking-wider">
            <MapPin size={14} className="text-copper-400" />
            Bharatpur, Chitwan, Nepal
          </div>
        </div>
      </div>
    </section>
  );
}

function Resume() {
  return (
    <section
      id="resume"
      className="bg-board-950 py-24 border-t border-board-700/60"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <Eyebrow>One-page brief</Eyebrow>
            <h2 className="font-stencil text-4xl md:text-5xl text-silk-100 uppercase">
              Resume
            </h2>
          </div>
          <button
            type="button"
            onClick={() => window.print()}
            className="inline-flex items-center justify-center gap-2 border border-copper-500/60 text-copper-400 font-mono text-xs tracking-[0.15em] uppercase px-5 py-3 hover:bg-copper-500 hover:text-board-950 transition-colors"
          >
            <Printer size={15} /> Print Resume
          </button>
        </div>

        <article className="border border-board-600/70 bg-board-900 p-6 md:p-10">
          <header className="border-b border-board-600/70 pb-7">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-5">
              <div>
                <h3 className="font-stencil text-4xl md:text-5xl text-silk-100 uppercase">
                  Asmit Shrestha
                </h3>
                <p className="font-mono text-sm tracking-[0.35em] text-copper-400 uppercase mt-2">
                  Mechanical Engineering Student
                </p>
              </div>
              <div className="font-mono text-xs text-silk-400 space-y-1 md:text-right">
                <a
                  className="block hover:text-gold-400"
                  href="mailto:ashmitsth0823@gmail.com"
                >
                  asmitsth0823@gmail.com
                </a>
                <a
                  className="block hover:text-gold-400"
                  href="tel:+15126657126"
                >
                  512-665-7126
                </a>
                <span className="block">San Marcos, TX 78666</span>
              </div>
            </div>
          </header>

          <div className="grid lg:grid-cols-[1.35fr_0.65fr] gap-10 pt-8">
            <div className="space-y-10">
              <div>
                <h4 className="font-mono text-xs tracking-[0.2em] text-copper-400 uppercase mb-4">
                  Profile
                </h4>
                <p className="text-silk-200/90 leading-relaxed">
                  Enthusiastic and dedicated Mechanical Engineering student with
                  a strong foundation in technical problem-solving and project
                  execution. Recognized for exemplary leadership as Vice
                  President of the STEM Club in school and high school,
                  successfully orchestrating multiple technological events. A
                  passionate advocate for engineering and technology, skilled in
                  collaboration, design, and project management, with a track
                  record of achievements in both academic and extracurricular
                  domains.
                </p>
              </div>

              <div>
                <h4 className="font-mono text-xs tracking-[0.2em] text-copper-400 uppercase mb-4">
                  Education
                </h4>
                <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
                  <div>
                    <h5 className="text-lg font-semibold text-silk-100">
                      Texas State University
                    </h5>
                    <p className="text-silk-300 mt-1">
                      B.S. Mechanical Engineering
                    </p>
                  </div>
                  <p className="font-mono text-xs text-silk-400 sm:text-right">
                    Expected Graduation
                    <br />
                    08/2030
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-mono text-xs tracking-[0.2em] text-copper-400 uppercase mb-5">
                  Experience
                </h4>
                <div className="space-y-7">
                  <div>
                    <h5 className="text-lg font-semibold text-silk-100">
                      Robot Battle Tournament and Robot Race Tournament
                    </h5>
                    <p className="font-mono text-xs text-gold-500 mt-1">
                      Team Leader
                    </p>
                    <ul className="list-disc pl-5 mt-3 space-y-2 text-silk-300 leading-relaxed">
                      <li>
                        Organized and executed a competition that fostered
                        innovation and teamwork.
                      </li>
                      <li>
                        Used event planning, team leadership, and technical
                        knowledge to run the tournament.
                      </li>
                      <li>
                        Enhanced participant skills in robotics and encouraged
                        inter-school collaboration.
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-lg font-semibold text-silk-100">
                      Science Exhibition and Technology Programs
                    </h5>
                    <p className="font-mono text-xs text-gold-500 mt-1">
                      Lead Organizer
                    </p>
                    <ul className="list-disc pl-5 mt-3 space-y-2 text-silk-300 leading-relaxed">
                      <li>
                        Showcased student projects and innovations in science
                        and technology.
                      </li>
                      <li>
                        Used project management, communication, and innovation
                        to coordinate the program.
                      </li>
                      <li>
                        Recognized as the best leader among participants for
                        effective coordination and promotion of innovative
                        ideas.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <aside className="space-y-10 lg:border-l lg:border-board-600/60 lg:pl-8">
              <div>
                <h4 className="font-mono text-xs tracking-[0.2em] text-copper-400 uppercase mb-4">
                  Awards & Certifications
                </h4>
                <ul className="space-y-3 text-silk-200">
                  <li className="flex gap-2">
                    <Award size={15} className="text-gold-500 mt-1 shrink-0" />
                    Robotics and Technology Certification
                  </li>
                  <li className="flex gap-2">
                    <Award size={15} className="text-gold-500 mt-1 shrink-0" />
                    Leadership Excellence Award
                  </li>
                  <li className="flex gap-2">
                    <Award size={15} className="text-gold-500 mt-1 shrink-0" />
                    Recognized Best Leader
                  </li>
                  <li className="flex gap-2">
                    <Award size={15} className="text-gold-500 mt-1 shrink-0" />
                    Dean's List Certificate
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-mono text-xs tracking-[0.2em] text-copper-400 uppercase mb-4">
                  Skills
                </h4>
                <ul className="space-y-2 text-silk-300">
                  <li>Leadership and Team Management</li>
                  <li>Event Coordination and Management</li>
                  <li>Robotics and Technology Understanding</li>
                  <li>Effective Communication Skills</li>
                  <li>Innovation and Problem-Solving</li>
                  <li>Collaborative Team Player</li>
                  <li>Strong Academic Performance</li>
                </ul>
              </div>
              <div>
                <h4 className="font-mono text-xs tracking-[0.2em] text-copper-400 uppercase mb-4">
                  Technical Skills
                </h4>
                <p className="text-silk-300">
                  <span className="text-silk-100">Software:</span> SolidWorks
                </p>
                <p className="text-silk-300 mt-2">
                  <span className="text-silk-100">Manufacturing:</span> 3D
                  Printing
                </p>
              </div>
            </aside>
          </div>
        </article>
      </div>
    </section>
  );
}

const COMPONENTS = [
  {
    qty: "01",
    ref: "MCU",
    name: "Arduino / microcontroller programming",
    note: "C/C++, motor & sensor control loops",
  },
  {
    qty: "02",
    ref: "DRV",
    name: "DC motor driver wiring",
    note: "L298N-class dual H-bridge drivers",
  },
  {
    qty: "03",
    ref: "RC",
    name: "RC transmitter / receiver systems",
    note: "Manual driving under match conditions",
  },
  {
    qty: "04",
    ref: "SNS",
    name: "Sensor integration",
    note: "Ultrasonic & IR obstacle detection",
  },
  {
    qty: "05",
    ref: "CHS",
    name: "Chassis assembly & fitting",
    note: "4WD platforms, mechanical fixes on the fly",
  },
  {
    qty: "06",
    ref: "PCB",
    name: "Breadboard prototyping & soldering",
    note: "Field repairs between heats",
  },
  {
    qty: "07",
    ref: "OPS",
    name: "Live troubleshooting",
    note: "Under time pressure, in front of judges",
  },
  {
    qty: "08",
    ref: "LED",
    name: "Team coordination",
    note: "VP, STEM Aroma — builds & event logistics",
  },
];

function Components() {
  return (
    <section
      id="components"
      className="bg-board-950 py-24 border-t border-board-700/60"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <Eyebrow>Bill of Materials</Eyebrow>
        <h2 className="font-stencil text-4xl md:text-5xl text-silk-100 uppercase mb-10">
          Components
        </h2>

        <div className="border border-board-600/60 overflow-hidden">
          <div className="hidden sm:grid grid-cols-[60px_70px_1fr_1.3fr] bg-board-700/50 font-mono text-[10px] tracking-widest uppercase text-silk-400">
            <div className="px-4 py-3">Qty</div>
            <div className="px-4 py-3">Ref</div>
            <div className="px-4 py-3">Component</div>
            <div className="px-4 py-3">Notes</div>
          </div>
          {COMPONENTS.map((c, i) => (
            <div
              key={c.ref}
              className={`grid sm:grid-cols-[60px_70px_1fr_1.3fr] gap-1 sm:gap-0 px-4 sm:px-0 py-3.5 text-sm ${
                i % 2 === 0 ? "bg-board-900/40" : "bg-transparent"
              } border-t border-board-600/40 first:border-t-0`}
            >
              <div className="hidden sm:block px-4 font-mono text-copper-400">
                {c.qty}
              </div>
              <div className="hidden sm:block px-4 font-mono text-gold-500">
                {c.ref}
              </div>
              <div className="px-0 sm:px-4 text-silk-100 font-medium">
                <span className="sm:hidden font-mono text-copper-400 mr-2">
                  {c.ref}
                </span>
                {c.name}
              </div>
              <div className="px-0 sm:px-4 text-silk-400 text-[13px] mt-0.5 sm:mt-0">
                {c.note}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const LOG = [
  {
    date: "2074 BS · c. 2018",
    title: "3rd Place — Inter-School Science Exhibition",
    org: "Greenland Public School, Bharatpur",
    detail:
      "Placed third representing Greenland Public School at the 23rd Anniversary / Parent Day science exhibition.",
    img: "/images/cert-greenland-3rd.jpeg",
  },
  {
    date: "2074 BS · c. 2018",
    title: "1st Place — District Level 7th Science Exhibition",
    org: "Narayani Eng. Public Secondary School",
    detail:
      "Took first position at the District Level Inter-School 7th Science Exhibition, competing on behalf of Greenland Public School.",
    img: "/images/cert-narayani-1st.jpeg",
  },
  {
    date: "Nov 2022",
    title: "1st Runner-Up — Aroma Tech Expo",
    org: "STEAM Club, Aroma English Secondary School",
    detail:
      "Intra-school science exhibition. Placed 1st Runner-Up presenting a hardware project to the STEAM Aroma panel.",
    img: "/images/cert-aroma-runnerup.jpeg",
  },
  {
    date: "2022 – 2024",
    title: "Vice-President, STEM Aroma",
    org: "Aroma English Secondary School",
    detail:
      "Elected Vice-President of the school STEM club. Helped organize builds, manage teams, and run STEAM events end-to-end.",
    img: "/images/cert-stem-vp.jpeg",
  },
  {
    date: "United Tech Fusion 2080",
    title: "Robo-Football Tournament — Participant",
    org: "United Technical College",
    detail:
      "Built and drove a 4-wheel RC robot with onboard sensors in a live robo-football bracket, representing Team AROMA.",
    img: "/images/cert-utf-robofootball.jpeg",
  },
  {
    date: "17 Falgun 2080",
    title: "District Level Robot Race — Participant",
    org: "NPC Science and Tech Club, Cyber Robot Showdown & Quiz",
    detail:
      "Raced a self-built robot through a scored obstacle course at NPC Futsal Hall against district-level competition.",
    img: "/images/cert-npc-robotrace.jpeg",
  },
];

function BuildLog() {
  return (
    <section
      id="log"
      className="bg-board-900 py-24 border-t border-board-700/60"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <Eyebrow>Chronological</Eyebrow>
        <h2 className="font-stencil text-4xl md:text-5xl text-silk-100 uppercase mb-14">
          Build Log
        </h2>

        <div className="relative">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-board-600/70 md:left-1/2" />
          <div className="space-y-14">
            {LOG.map((entry, i) => {
              const leftSide = i % 2 === 0;
              return (
                <div
                  key={entry.title}
                  className="relative md:grid md:grid-cols-2 md:gap-16"
                >
                  <span className="absolute left-0 md:left-1/2 top-1.5 -translate-x-1/2 h-3.5 w-3.5 rounded-full bg-gold-500 ring-4 ring-board-900 node-pulse" />
                  <div
                    className={`pl-8 md:pl-0 ${leftSide ? "md:col-start-1 md:text-right md:pr-4" : "md:col-start-2 md:pl-4"}`}
                  >
                    <span className="font-mono text-[11px] tracking-widest text-copper-400 uppercase">
                      {entry.date}
                    </span>
                    <h3 className="text-xl font-semibold text-silk-100 mt-2">
                      {entry.title}
                    </h3>
                    <p className="text-sm text-silk-400 mt-1">{entry.org}</p>
                    <p className="text-sm text-silk-300/90 mt-3 leading-relaxed">
                      {entry.detail}
                    </p>
                  </div>
                  <div
                    className={`pl-8 md:pl-0 mt-4 md:mt-0 ${leftSide ? "md:col-start-2" : "md:col-start-1 md:row-start-1"}`}
                  >
                    <div className="border border-board-600/60 bg-board-950 p-1.5 max-w-xs">
                      <img
                        src={entry.img}
                        alt={`${entry.title} certificate`}
                        loading="lazy"
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

const FIELD = [
  {
    img: "/images/team-award.jpeg",
    caption: "Team AROMA with the robo-football bot, United Tech Fusion 2080",
  },
  {
    img: "/images/robot-arena.jpeg",
    caption: "On the robo-football pitch, arena view",
  },
  {
    img: "/images/crowd-testing.jpeg",
    caption: "Pre-match controller checks with the team",
  },
  {
    img: "/images/certificate-stage.jpeg",
    caption: "Receiving the participation certificate on stage",
  },
  {
    img: "/images/npc-track.jpeg",
    caption: "Scored obstacle course, Cyber Robot Showdown 2080",
  },
  {
    img: "/images/aroma-team-demo.jpeg",
    caption: "Demoing the build at Aroma Tech Expo",
  },
];

function FieldTests() {
  return (
    <section
      id="field"
      className="bg-board-950 py-24 border-t border-board-700/60"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <Eyebrow>Photo Log</Eyebrow>
        <h2 className="font-stencil text-4xl md:text-5xl text-silk-100 uppercase mb-10">
          Field Tests
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FIELD.map((f) => (
            <figure
              key={f.img}
              className="group border border-board-600/60 bg-board-900 p-1.5"
            >
              <div className="overflow-hidden">
                <img
                  src={f.img}
                  alt={f.caption}
                  loading="lazy"
                  className="w-full h-56 object-cover grayscale-[10%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
              </div>
              <figcaption className="font-mono text-[11px] text-silk-400 px-2 py-3 leading-snug">
                {f.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

const SOCIAL_PROJECTS = [
  {
    title: "Robo-Football Build",
    detail: "Competition robot project and match-day testing",
    img: "/images/robot-arena.jpeg",
    url: "https://www.facebook.com/100047057213229/posts/1537189706752400/?mibextid=wwXIfr&rdid=PIGof84p8Feva0fS#",
  },
  {
    title: "Project Showcase",
    detail: "Hardware project presentation and build documentation",
    img: "/images/aroma-expo-banner.jpeg",
    url: "https://www.facebook.com/photo.php?fbid=916617543799580&type=3&mibextid=wwXIfr&rdid=Cx1K6m7sj6p2QrmI&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F18KRiTj55S%2F%3Fmibextid%3DwwXIfr#",
  },
  {
    title: "Robot Race Project",
    detail: "Self-built robot prepared for a timed obstacle course",
    img: "/images/npc-track.jpeg",
    url: "https://www.facebook.com/61551385760633/posts/122130113774046192/?mibextid=wwXIfr&rdid=eUBAK8womYzvuZYu#",
  },
  {
    title: "Cyber Robot Showdown",
    detail: "Field-tested robotics project from the competition floor",
    img: "/images/cyber-robot-banner.jpeg",
    url: "https://www.facebook.com/100068733234493/posts/670174685283633/?fs=e&mibextid=wwXIfr&rdid=phmsPtypn8kwjCW7#",
  },
  {
    title: "Team Robotics Demo",
    detail: "Collaborative build demo and project presentation",
    img: "/images/aroma-team-demo.jpeg",
    url: "https://www.facebook.com/photo.php?fbid=916619373799397&type=3&rdid=aPXqS0XRky00EZIY&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1GihQuKpnW%2F#",
  },
];

function SocialProjects() {
  return (
    <section
      id="projects"
      className="bg-board-900 py-24 border-t border-board-700/60"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <Eyebrow>External Project Archive</Eyebrow>
        <h2 className="font-stencil text-4xl md:text-5xl text-silk-100 uppercase mb-10">
          Social Projects
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SOCIAL_PROJECTS.map((project, index) => (
            <a
              key={project.url}
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="group border border-board-600/60 bg-board-950 p-1.5 focus-visible:border-gold-400 transition-colors"
              aria-label={`Open ${project.title} on Facebook`}
            >
              <div className="overflow-hidden relative">
                <img
                  src={project.img}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-56 object-cover grayscale-[10%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
                <span className="absolute top-3 left-3 bg-board-950/90 border border-copper-500/70 px-2 py-1 font-mono text-[10px] tracking-widest text-copper-400">
                  0{index + 1}
                </span>
              </div>
              <div className="flex items-start justify-between gap-3 px-2 py-3">
                <div>
                  <h3 className="font-mono text-sm text-silk-100 uppercase tracking-wide">
                    {project.title}
                  </h3>
                  <p className="font-mono text-[11px] text-silk-400 mt-2 leading-snug">
                    {project.detail}
                  </p>
                </div>
                <ArrowUpRight
                  size={16}
                  className="shrink-0 text-copper-400 mt-0.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section
      id="contact"
      className="bg-board-900 py-24 border-t border-board-700/60"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-14 items-start">
          <div>
            <Eyebrow>Connector</Eyebrow>
            <h2 className="font-stencil text-4xl md:text-5xl text-silk-100 uppercase mb-6">
              Let's Build Something
            </h2>
            <p className="text-silk-200/90 leading-relaxed max-w-md">
              Reach out about the Ingram Hall Makerspace role, a project, or
              just to talk robotics. I check email daily and I'm quick to
              respond.
            </p>

            <div className="mt-10 space-y-5">
              <a
                href="mailto:ashmitsth0823@gmail.com"
                className="flex items-center gap-3 text-silk-100 hover:text-gold-400 transition-colors group"
              >
                <span className="h-10 w-10 flex items-center justify-center border border-board-600/70 group-hover:border-gold-400 transition-colors">
                  <Mail size={16} />
                </span>
                <span className="font-mono text-sm">
                  asmitsth0823@gmail.com
                </span>
              </a>
              <a
                href="tel:+15126657126"
                className="flex items-center gap-3 text-silk-100 hover:text-gold-400 transition-colors group"
              >
                <span className="h-10 w-10 flex items-center justify-center border border-board-600/70 group-hover:border-gold-400 transition-colors">
                  <Phone size={16} />
                </span>
                <span className="font-mono text-sm">512-665-7126</span>
              </a>
              <div className="flex items-center gap-3 text-silk-100">
                <span className="h-10 w-10 flex items-center justify-center border border-board-600/70">
                  <MapPin size={16} />
                </span>
                <span className="font-mono text-sm">
                  1805 Aquarena Springs Dr, San Marcos, TX 78666
                </span>
              </div>
            </div>

            <div className="mt-10 flex gap-4">
              <a
                href="#"
                className="h-11 w-11 flex items-center justify-center border border-board-600/70 text-silk-300 hover:border-gold-400 hover:text-gold-400 transition-colors"
                aria-label="GitHub"
              >
                <Github size={17} />
              </a>
              <a
                href="https://www.linkedin.com/in/asmit-shrestha-511616377"
                className="h-11 w-11 flex items-center justify-center border border-board-600/70 text-silk-300 hover:border-gold-400 hover:text-gold-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={17} />
              </a>
            </div>
          </div>

          {/* <form
            className="border border-board-600/60 bg-board-950 p-6 md:p-8 space-y-5"
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <label
                className="font-mono text-[11px] tracking-widest text-silk-400 uppercase"
                htmlFor="name"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your name"
                className="mt-2 w-full bg-transparent border border-board-600/70 px-4 py-3 text-sm text-silk-100 placeholder:text-silk-600 focus:border-gold-400 outline-none transition-colors"
              />
            </div>
            <div>
              <label
                className="font-mono text-[11px] tracking-widest text-silk-400 uppercase"
                htmlFor="email"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="mt-2 w-full bg-transparent border border-board-600/70 px-4 py-3 text-sm text-silk-100 placeholder:text-silk-600 focus:border-gold-400 outline-none transition-colors"
              />
            </div>
            <div>
              <label
                className="font-mono text-[11px] tracking-widest text-silk-400 uppercase"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="What are you building?"
                className="mt-2 w-full bg-transparent border border-board-600/70 px-4 py-3 text-sm text-silk-100 placeholder:text-silk-600 focus:border-gold-400 outline-none transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 bg-copper-500 text-board-950 font-mono text-xs tracking-[0.15em] uppercase px-6 py-3.5 hover:bg-gold-400 transition-colors"
            >
              Send Message <ArrowUpRight size={15} />
            </button>
            <p className="font-mono text-[10px] text-silk-600 leading-relaxed">
              Note: this form is a static template — connect it to a form
              service (e.g. Formspree) or a backend before deploying to actually
              receive messages.
            </p>
          </form> */}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-board-950 border-t border-board-700/60 py-8">
      <div className="max-w-6xl mx-auto px-6 md:px-10 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="font-mono text-[11px] tracking-widest text-silk-600 uppercase">
          Asmit Shrestha — Rev. A — Built 2026
        </p>
        <p className="font-mono text-[11px] tracking-widest text-silk-600 uppercase">
          Bharatpur, Chitwan, Nepal
        </p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-board-950 selection:bg-copper-500">
      <Header />
      <main>
        <Hero />
        <About />
        <Resume />
        <BuildLog />
        <Components />
        <FieldTests />
        <SocialProjects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
