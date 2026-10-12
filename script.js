/* Edit this block. Put your usernames in handle to link straight to your profiles. */
const me = {
  firstName: "Eshfaq Jahan",
  lastName: "Chhoya",
  tagline: "A CSE student who loves competitive programming on Codeforces and is ready to start a first internship.",
  about: "I'm a Computer Science & Engineering student at American International University-Bangladesh. I practice competitive programming to sharpen my problem solving, and I received a Dean's Award for my academic performance. I'm looking for an internship where I can learn from a team and build real features.",
  skills: {
    "Languages": ["C++","C#","Java"],
    "Frontend": ["HTML","CSS","JavaScript","Next.js","Tailwind CSS"],
    "Backend": ["PHP",".NET","NestJS"],
    "Databases": ["PostgreSQL","MySQL"],
    "Tools": ["Git & GitHub"]
  },
  experience: [
    { title: "Academic coursework and projects", meta: "American International University-Bangladesh", text: "Currently focusing on academic coursework and projects." }
  ],
  problemSolving: [
    { name: "Codeforces", text: "Regular contests and practice problems.", url: "https://codeforces.com/profile/", handle: "Meraki_" }
  ],
  homes: { "Codeforces":"https://codeforces.com" },
  edu: { degree: "BSc in Computer Science & Engineering", school: "American International University-Bangladesh (AIUB)", years: "Currently studying", award: "Dean's Award" },
  contact: { text: "Want to talk about an internship? Send me a message.", email: "eshfaqjahanchhoya123@gmail.com", github: "https://github.com/Eshfaq01", linkedin: "https://www.linkedin.com/in/eshfaq-jahan-chhoya" }
};
const $ = id => document.getElementById(id);
const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
document.title = me.firstName + " " + me.lastName + " | CSE Portfolio";
$("fn").textContent = me.firstName; $("ln").textContent = me.lastName;

$("gh").href = me.contact.github;
$("skill-cats").innerHTML = Object.entries(me.skills).map(([c,l]) => `<div class="cat"><h3>${esc(c)}</h3><ul class="chips">${l.map(s=>`<li>${esc(s)}</li>`).join("")}</ul></div>`).join("");
$("exp-list").innerHTML = me.experience.map(e => `<article class="item"><h3>${esc(e.title)}</h3><div class="meta">${esc(e.meta)}</div><p>${esc(e.text)}</p></article>`).join("");
$("ps-list").innerHTML = me.problemSolving.map(p => { const href = p.handle ? p.url + encodeURIComponent(p.handle) : me.homes[p.name]; return `<div class="cat"><h3>${esc(p.name)}</h3><p>${esc(p.text)}</p><a class="btn" href="${esc(href)}" target="_blank" rel="noopener">Visit ${esc(p.name)}</a></div>`; }).join("");
$("edu-box").innerHTML = `<h3>${esc(me.edu.degree)}</h3><p><strong>${esc(me.edu.school)}</strong></p><p>${esc(me.edu.years)}</p><span class="award">${esc(me.edu.award)}</span>`;

$("contact-list").innerHTML = `<li><a class="btn" href="mailto:${esc(me.contact.email)}">Email me</a></li><li><a class="btn alt" href="${esc(me.contact.github)}" target="_blank" rel="noopener">GitHub</a></li><li><a class="btn alt" href="${esc(me.contact.linkedin)}" target="_blank" rel="noopener">LinkedIn</a></li>`;
$("foot").textContent = "© " + new Date().getFullYear() + " " + me.firstName + " " + me.lastName;

/* Light / dark toggle */
const root = document.documentElement, btn = $("theme");
const isDark = () => root.dataset.theme ? root.dataset.theme === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
const label = () => btn.textContent = isDark() ? "Light mode" : "Dark mode";
try { const t = localStorage.getItem("theme"); if (t) root.dataset.theme = t; } catch (e) {}
label();
btn.addEventListener("click", () => {
  const next = isDark() ? "light" : "dark";
  root.dataset.theme = next;
  try { localStorage.setItem("theme", next); } catch (e) {}
  label();
});
