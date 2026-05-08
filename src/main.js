import "./styles.css";
import { resume } from "./data.js";

const app = document.querySelector("#app");

if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

function resetScrollPosition() {
  if (!window.location.hash) {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function renderDetails(items) {
  return `
    <ul>
      ${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
    </ul>
  `;
}

function renderPage() {
  const activeLayer = resume.layers[0];

  app.innerHTML = `
    <section class="hero-panel" aria-labelledby="hero-title">
      <div class="signal-grid" aria-hidden="true"></div>
      <nav class="system-nav" aria-label="Primary">
        <a href="#stack">Stack</a>
        <a href="#timeline">Timeline</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>

      <div class="hero-copy reveal">
        <p class="eyebrow">${escapeHtml(resume.profile.title)}</p>
        <h1 id="hero-title">${escapeHtml(resume.profile.name)}</h1>
        <p class="hero-statement">
          I build the connective tissue between product ideas, databases, AI systems,
          and delivery infrastructure.
        </p>
      </div>

      <div class="terminal-card reveal" aria-label="Career query console">
        <div class="terminal-bar">
          <span></span><span></span><span></span>
          <strong>career-query.sql</strong>
        </div>
        <pre><code>SELECT focus_area, impact
FROM neil.control_plane
WHERE layer IN ('ai_agents', 'database', 'delivery')
ORDER BY systems_thinking DESC;</code></pre>
        <div class="query-result">
          <div class="query-header"><span>focus_area</span><span>impact</span></div>
          <div><span>APEX platform</span><span>features, bugs, product surface</span></div>
          <div><span>AI agents + skills</span><span>agentic interfaces and demos</span></div>
          <div><span>CI/CD + schema evolution</span><span>repeatable database delivery</span></div>
          <div><span>Architecture + integration</span><span>systems that connect cleanly</span></div>
        </div>
      </div>
    </section>

    <section class="intro-band reveal" aria-label="Career Profile">
      <div>
        <p class="eyebrow">Career Profile</p>
        <p>${escapeHtml(resume.careerProfile)}</p>
      </div>
      <aside class="status-board" aria-label="Current operating modes">
        <div><span>Current role</span><strong>${escapeHtml(resume.experiences[0].role)}</strong></div>
        <div><span>Team mode</span><strong>Generalist</strong></div>
        <div><span>Recent focus</span><strong>AI interfaces</strong></div>
      </aside>
    </section>

    <section class="section-shell" id="stack">
      <div class="section-heading reveal">
        <p class="eyebrow">System Map</p>
        <h2>One engineer, several layers.</h2>
      </div>

      <div class="stack-map" aria-label="Interactive career layers">
        ${resume.layers
          .map(
            (layer, index) => `
              <button class="layer-node${index === 0 ? " active" : ""}" data-layer="${escapeHtml(layer.key)}">
                <span>${escapeHtml(layer.number)}</span>
                <strong>${escapeHtml(layer.title)}</strong>
                <small>${escapeHtml(layer.summary)}</small>
              </button>
            `
          )
          .join("")}
      </div>

      <div class="layer-output reveal" id="layer-output" aria-live="polite">
        <p class="eyebrow">Active Layer</p>
        <h3>${escapeHtml(activeLayer.title)}</h3>
        <p>${escapeHtml(activeLayer.body)}</p>
        <code>${escapeHtml(activeLayer.code)}</code>
      </div>
    </section>

    <section class="section-shell timeline-shell" id="timeline">
      <div class="section-heading reveal">
        <p class="eyebrow">Execution Plan</p>
        <h2>A career that kept adding layers.</h2>
      </div>

      <div class="execution-plan">
        ${resume.experiences
          .map(
            (experience, index) => `
              <article class="plan-step reveal">
                <div class="step-index">${String(index + 1).padStart(2, "0")}</div>
                <div class="step-body">
                  <p class="time">${escapeHtml(experience.time)}</p>
                  <h3>${escapeHtml(experience.role)}</h3>
                  <p class="company">${escapeHtml(experience.company)}</p>
                  <div class="details">${renderDetails(experience.details)}</div>
                </div>
              </article>
            `
          )
          .join("")}
      </div>
    </section>

    <section class="section-shell" id="projects">
      <div class="section-heading reveal">
        <p class="eyebrow">Projects</p>
        <h2>Shipped things, useful things, local things.</h2>
        <p>Selected projects and community work with a bias toward practical, useful surfaces.</p>
      </div>

      <div class="project-grid">
        ${resume.projects
          .map(
            (project, index) => `
              <a class="project-card reveal" href="${escapeHtml(project.link)}" target="_blank" rel="noopener">
                <span>project.${String(index + 1).padStart(2, "0")}</span>
                <h3>${escapeHtml(project.title)}</h3>
                <p>${escapeHtml(project.tagline)}</p>
              </a>
            `
          )
          .join("")}
      </div>
    </section>

    <section class="section-shell skills-shell" aria-label="Skills and proficiency">
      <div class="section-heading reveal">
        <p class="eyebrow">Skill Index</p>
        <h2>Tools I reach for across the system.</h2>
      </div>

      <div class="skill-index">
        ${resume.skills
          .map(
            (skill) => `
              <div class="skill-record reveal">
                <span>${escapeHtml(skill.name)}</span>
                <div class="skill-meter"><i style="width: ${Number(skill.level)}%"></i></div>
                <strong>${Number(skill.level)}%</strong>
              </div>
            `
          )
          .join("")}
      </div>
    </section>

    <section class="contact-console" id="contact">
      <div class="reveal">
        <p class="eyebrow">Open Channel</p>
        <h2>Find the human behind the system.</h2>
      </div>
      <div class="contact-actions reveal">
        <a href="mailto:${escapeHtml(resume.profile.email)}">Email</a>
        <a href="https://www.linkedin.com/in/${escapeHtml(resume.profile.linkedin)}" target="_blank" rel="noopener">LinkedIn</a>
        <a href="https://github.com/${escapeHtml(resume.profile.github)}" target="_blank" rel="noopener">GitHub</a>
        <a href="https://${escapeHtml(resume.profile.website)}" target="_blank" rel="noopener">Blog</a>
      </div>
    </section>
  `;
}

function setLayer(layerKey) {
  const output = document.querySelector("#layer-output");
  const content = resume.layers.find((layer) => layer.key === layerKey);

  if (!output || !content) {
    return;
  }

  output.querySelector("h3").textContent = content.title;
  output.querySelector("p:not(.eyebrow)").textContent = content.body;
  output.querySelector("code").textContent = content.code;

  document.querySelectorAll(".layer-node").forEach((node) => {
    node.classList.toggle("active", node.getAttribute("data-layer") === layerKey);
  });
}

function wireInteractions() {
  document.querySelectorAll(".layer-node").forEach((node) => {
    node.addEventListener("click", () => {
      setLayer(node.getAttribute("data-layer"));
    });
  });

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.16 }
    );

    document.querySelectorAll(".reveal, .skill-record").forEach((item) => {
      observer.observe(item);
    });
  } else {
    document.querySelectorAll(".reveal, .skill-record").forEach((item) => {
      item.classList.add("visible");
    });
  }
}

renderPage();
wireInteractions();
resetScrollPosition();
