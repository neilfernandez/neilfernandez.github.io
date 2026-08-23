import "./styles.css";
import { resume } from "./data.js";

const app = document.querySelector("#app");

if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
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
    <ul class="experience-details">
      ${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
    </ul>
  `;
}

function renderPage() {
  const activeLayer = resume.layers[0];
  const currentRole = resume.experiences[0];
  const previousRoles = resume.experiences.slice(1);

  app.innerHTML = `
    <header class="site-header">
      <a class="wordmark" href="#top" aria-label="Neil Fernandez, home">NF</a>
      <nav class="site-nav" aria-label="Primary">
        <a href="#stack">Stack</a>
        <a href="#timeline">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>

    <main id="top">
      <section class="hero" aria-labelledby="hero-title">
        <div class="hero-copy">
          <p class="eyebrow">${escapeHtml(resume.profile.title)}</p>
          <h1 id="hero-title">${escapeHtml(resume.profile.name)}</h1>
          <p class="hero-statement">I connect product ideas, AI systems, databases, and delivery infrastructure into reliable software that teams can ship.</p>
          <div class="hero-actions" aria-label="Profile links">
            <a class="button button-primary" href="#timeline">Experience</a>
            <a class="button button-secondary" href="https://github.com/${escapeHtml(resume.profile.github)}" target="_blank" rel="noopener">GitHub</a>
          </div>
        </div>

        <figure class="hero-portrait">
          <img src="/assets/images/profile.jpg" alt="Illustrated portrait of Neil Fernandez wearing an Oracle APEX shirt" width="3000" height="3000">
        </figure>
      </section>

      <section class="proof-strip" aria-label="Current professional focus">
        <p><span>Current role</span><strong>${escapeHtml(currentRole.role)}</strong></p>
        <p><span>Product</span><strong>Oracle APEX</strong></p>
        <p><span>Recent focus</span><strong>AI agents and interfaces</strong></p>
      </section>

      <section class="systems-section" id="stack">
        <header class="section-intro reveal">
          <h2>One engineer, several layers.</h2>
          <p>I work where product, data, automation, and delivery meet. The value is in making those boundaries feel like one system.</p>
        </header>

        <div class="systems-visual reveal">
          <img src="/assets/images/systems-editorial.jpg" alt="Abstract connected layers representing software systems, databases, and delivery infrastructure" width="1672" height="941" loading="lazy">
        </div>

        <div class="query-block reveal" aria-label="Career layer query">
          <p>career_query.sql</p>
          <pre><code>SELECT layer, contribution
FROM neil.control_plane
WHERE system IN ('product', 'ai', 'database', 'delivery')
ORDER BY connective_value DESC;</code></pre>
        </div>

        <div class="systems-interface">
          <div class="layer-list" aria-label="Career layers">
            ${resume.layers
              .map(
                (layer, index) => `
                  <button class="layer-button${index === 0 ? " active" : ""}" data-layer="${escapeHtml(layer.key)}" aria-pressed="${index === 0 ? "true" : "false"}">
                    <strong>${escapeHtml(layer.title)}</strong>
                    <span>${escapeHtml(layer.summary)}</span>
                  </button>
                `
              )
              .join("")}
          </div>

          <article class="layer-detail reveal" id="layer-detail" aria-live="polite">
            <p class="detail-label">Query result</p>
            <h3>${escapeHtml(activeLayer.title)}</h3>
            <p>${escapeHtml(activeLayer.body)}</p>
          </article>
        </div>
      </section>

      <section class="experience-section" id="timeline">
        <header class="experience-heading reveal">
          <p class="section-label">Experience</p>
          <h2>Built across the stack. Trusted across the seams.</h2>
          <p>${escapeHtml(resume.careerProfile)}</p>
        </header>

        <div class="current-role reveal">
          <div class="role-meta">
            <p>${escapeHtml(currentRole.time)}</p>
            <p>${escapeHtml(currentRole.company)}</p>
          </div>
          <div class="role-content">
            <h3>${escapeHtml(currentRole.role)}</h3>
            ${renderDetails(currentRole.details)}
          </div>
        </div>

        <div class="previous-roles" aria-label="Previous experience">
          ${previousRoles
            .map(
              (experience) => `
                <article class="previous-role reveal">
                  <div>
                    <p class="role-time">${escapeHtml(experience.time)}</p>
                    <h3>${escapeHtml(experience.role)}</h3>
                    <p class="role-company">${escapeHtml(experience.company)}</p>
                  </div>
                  ${renderDetails(experience.details)}
                </article>
              `
            )
            .join("")}
        </div>
      </section>

      <section class="projects-section" id="projects">
        <header class="section-intro reveal">
          <h2>Selected work</h2>
          <p>Open-source product work and community projects built for real users.</p>
        </header>

        <div class="project-layout">
          ${resume.projects
            .map(
              (project, index) => `
                <a class="project-link project-link-${index + 1} reveal" href="${escapeHtml(project.link)}" target="_blank" rel="noopener">
                  <span class="project-type">${escapeHtml(project.type)}</span>
                  <h3>${escapeHtml(project.title)}</h3>
                  <p>${escapeHtml(project.tagline)}</p>
                  <span class="project-action">Visit project</span>
                </a>
              `
            )
            .join("")}
        </div>
      </section>

      <section class="capabilities-section" aria-labelledby="capabilities-title">
        <div class="capabilities-title reveal">
          <h2 id="capabilities-title">Capabilities, grouped by use.</h2>
          <p>Tools matter most in the context of the systems they help deliver.</p>
        </div>
        <div class="capability-groups">
          ${resume.capabilities
            .map(
              (group) => `
                <article class="capability-group reveal">
                  <h3>${escapeHtml(group.title)}</h3>
                  <p>${escapeHtml(group.items.join(", "))}</p>
                </article>
              `
            )
            .join("")}
        </div>
      </section>

      <section class="contact-section" id="contact">
        <div>
          <p class="eyebrow">Contact</p>
          <h2>Let’s build the connective tissue.</h2>
        </div>
        <div class="contact-links" aria-label="Contact links">
          <a href="mailto:${escapeHtml(resume.profile.email)}">Email</a>
          <a href="https://www.linkedin.com/in/${escapeHtml(resume.profile.linkedin)}" target="_blank" rel="noopener">LinkedIn</a>
          <a href="https://github.com/${escapeHtml(resume.profile.github)}" target="_blank" rel="noopener">GitHub</a>
          <a href="https://${escapeHtml(resume.profile.website)}" target="_blank" rel="noopener">Blog</a>
        </div>
      </section>
    </main>
  `;
}

function setLayer(layerKey) {
  const detail = document.querySelector("#layer-detail");
  const content = resume.layers.find((layer) => layer.key === layerKey);

  if (!detail || !content) return;

  detail.querySelector("h3").textContent = content.title;
  detail.querySelector("p:not(.detail-label)").textContent = content.body;

  document.querySelectorAll(".layer-button").forEach((button) => {
    const isActive = button.dataset.layer === layerKey;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function wireInteractions() {
  document.querySelectorAll(".layer-button").forEach((button) => {
    button.addEventListener("click", () => setLayer(button.dataset.layer));
  });

  if (!("IntersectionObserver" in window)) {
    document.querySelectorAll(".reveal").forEach((item) => item.classList.add("visible"));
    return;
  }

  document.documentElement.classList.add("motion-ready");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px -32px" }
  );

  document.querySelectorAll(".reveal").forEach((item) => observer.observe(item));
}

renderPage();
wireInteractions();

if (!window.location.hash) {
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
}
