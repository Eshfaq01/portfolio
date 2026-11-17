/* ── PROFILE DATA — edit this block ── */
const me = {
  firstName: "Eshfaq Jahan",
  lastName: "Chhoya",
  about: "I'm a Computer Science & Engineering student at American International University-Bangladesh, recognised with a Dean's Award. I'm eager to apply my technical skills in a real-world environment and grow as part of a team.",
  quote: "Code is my creative edge.",
  stats: [
    { value: "3+", label: "Languages" },
    { value: "10+", label: "Tech Skills" },
    { value: "1", label: "Dean's Award" }
  ],
  skills: {
    "Languages":  ["C++", "C#", "Java"],
    "Frontend":   ["HTML", "CSS", "JavaScript", "Next.js", "Tailwind CSS"],
    "Backend":    ["PHP", ".NET", "NestJS"],
    "Databases":  ["PostgreSQL", "MySQL"],
    "Tools":      ["Git & GitHub"]
  },
  highlights: [
    { icon: "🎓", text: "BSc CSE — American International University-Bangladesh" },
    { icon: "🏆", text: "Dean's Award recipient" },
    { icon: "💻", text: "Competitive programmer on Codeforces" },
    { icon: "🔍", text: "Open to internship opportunities" }
  ],
  problemSolving: [
    { name: "Codeforces", text: "Regular contests and practice problems. Consistently improving ranking through daily problem solving.", url: "https://codeforces.com/profile/", handle: "Meraki_" }
  ],
  homes: { "Codeforces": "https://codeforces.com" },
  edu: {
    degree: "BSc in Computer Science & Engineering",
    school: "American International University-Bangladesh (AIUB)",
    years:  "Currently Studying",
    award:  "Dean's Award"
  },
  contact: {
    text:     "I'm currently open for internship opportunities. Let's build something great together.",
    email:    "eshfaqjahanchhoya123@gmail.com",
    github:   "https://github.com/Eshfaq01",
    linkedin: "https://www.linkedin.com/in/eshfaq-jahan-chhoya"
  }
};

/* ── HELPERS ── */
const $ = id => document.getElementById(id);
const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[c]);

/* ── POPULATE ── */
document.title = me.firstName + " " + me.lastName + " | Portfolio";

$("hero-name").innerHTML   = `${esc(me.firstName)}<br>${esc(me.lastName)}`;
$("hero-bio").textContent  = me.about;
if ($("hero-quote") && me.quote) $("hero-quote").textContent = me.quote;
if ($("hero-stats") && me.stats) {
  $("hero-stats").innerHTML = me.stats.map(s => {
    const val = s.value.includes("+") ? `${esc(s.value.replace("+", ""))}<sup>+</sup>` : esc(s.value);
    return `<div class="stat"><span class="stat-n">${val}</span><span class="stat-l">${esc(s.label)}</span></div>`;
  }).join("");
}
$("gh-link").href          = me.contact.github;
$("about-body").textContent = me.about;
$("contact-sub").textContent = me.contact.text;
$("email-btn").href        = "mailto:" + me.contact.email;

/* Highlights */
$("about-badges").innerHTML = me.highlights.map(h =>
  `<li><span class="badge-icon">${h.icon}</span>${esc(h.text)}</li>`
).join("");

/* Skills */
$("skill-cats").innerHTML = Object.entries(me.skills).map(([cat, tags]) =>
  `<div class="skill-cat">
    <div class="skill-cat-title">${esc(cat)}</div>
    <ul class="skill-tags">${tags.map(t => `<li>${esc(t)}</li>`).join("")}</ul>
  </div>`
).join("");

/* Ticker — skills scrolling strip */
const tickerItems = Object.values(me.skills).flat();
const tickerHTML  = tickerItems.map(t =>
  `<span class="ticker-item">${esc(t)}</span><span class="ticker-sep">✦</span>`
).join("");
// duplicate for seamless loop
$("ticker-track").innerHTML = tickerHTML + tickerHTML;

/* Education */
$("edu-box").innerHTML = `
  <div class="edu-block">
    <div class="edu-eyebrow">Degree</div>
    <div class="edu-degree">${esc(me.edu.degree)}</div>
    <p class="edu-school">${esc(me.edu.school)}</p>
    <span class="edu-tag">★ ${esc(me.edu.award)}</span>
  </div>
  <div class="edu-block">
    <div class="edu-eyebrow">Status</div>
    <div class="edu-degree">${esc(me.edu.years)}</div>
    <p class="edu-school">Open to internship opportunities — available now.</p>
    <span class="edu-tag">✓ Available Now</span>
  </div>`;

/* Problem Solving */
$("ps-list").innerHTML = me.problemSolving.map((p, i) => {
  const href = p.handle ? p.url + encodeURIComponent(p.handle) : me.homes[p.name];
  return `<div class="ps-card">
    <div class="ps-num">0${i + 1}</div>
    <div class="ps-name">${esc(p.name)}</div>
    <p class="ps-desc">${esc(p.text)}</p>
    <a class="ps-link" href="${esc(href)}" target="_blank" rel="noopener">View Profile ↗</a>
  </div>`;
}).join("");

/* Contact */
$("contact-list").innerHTML = `
  <li><a href="mailto:${esc(me.contact.email)}"><span class="ci">@</span>${esc(me.contact.email)}</a></li>
  <li><a href="${esc(me.contact.github)}" target="_blank" rel="noopener"><span class="ci">GH</span>github.com/Eshfaq01</a></li>
  <li><a href="${esc(me.contact.linkedin)}" target="_blank" rel="noopener"><span class="ci">in</span>linkedin.com/in/eshfaq-jahan-chhoya</a></li>`;

$("foot").textContent = "© " + new Date().getFullYear() + " " + me.firstName + " " + me.lastName + " — All rights reserved.";

/* ── THEME TOGGLE ── */
const MOON = `<svg viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
const SUN  = `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`;

const root = document.documentElement, btn = $("theme");
const isDark = () => root.dataset.theme !== "light";
const syncIcon = () => {
  btn.innerHTML = isDark() ? SUN : MOON;
  btn.setAttribute("aria-label", isDark() ? "Switch to light mode" : "Switch to dark mode");
};
try { const t = localStorage.getItem("theme"); if (t) root.dataset.theme = t; } catch(e) {}
syncIcon();
btn.addEventListener("click", () => {
  root.dataset.theme = isDark() ? "light" : "dark";
  try { localStorage.setItem("theme", root.dataset.theme); } catch(e) {}
  syncIcon();
});
