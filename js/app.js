(function () {
  const projects = window.PORTFOLIO_PROJECTS || [];
  const categories = ["All", ...new Set(projects.map((p) => p.category))];

  let activeFilter = "All";
  let selectedId = projects[0]?.id || null;

  const filtersEl = document.getElementById("filters");
  const pickerEl = document.getElementById("project-picker");
  const viewerEl = document.getElementById("project-viewer");

  function filteredProjects() {
    if (activeFilter === "All") return projects;
    return projects.filter((p) => p.category === activeFilter);
  }

  function renderSections(p) {
    if (!p.sections?.length) return "";
    return p.sections
      .map((s) => {
        const body = s.body ? `<p>${s.body}</p>` : "";
        const items = s.items
          ? `<ul>${s.items.map((i) => `<li>${i}</li>`).join("")}</ul>`
          : "";
        return `<div class="content-block"><h4>${s.title}</h4>${body}${items}</div>`;
      })
      .join("");
  }

  function renderEmbed(p) {
    if (!p.embed) return "";
    if (p.embed.type === "pdf") {
      return `
        <div class="embed-panel">
          <p class="embed-label">${p.embed.label}</p>
          <iframe src="${p.embed.src}" title="${p.title} deck" class="embed-pdf"></iframe>
        </div>`;
    }
    if (p.embed.type === "html") {
      return `
        <div class="embed-panel embed-html">
          <p class="embed-label">${p.embed.label}</p>
          <div class="embed-html-body">${p.embed.html}</div>
        </div>`;
    }
    return "";
  }

  function renderViewer(p) {
    if (!p) {
      viewerEl.innerHTML = `<p class="viewer-empty">Select a project to preview.</p>`;
      return;
    }

    viewerEl.innerHTML = `
      <div class="viewer-hero">
        <img src="${p.image}" alt="" class="viewer-img" />
        <div class="viewer-head">
          <p class="period">${p.period}</p>
          <h3>${p.title}</h3>
          <p class="sub">${p.subtitle}</p>
          ${p.team ? `<p class="team">${p.team}</p>` : ""}
          <p class="viewer-summary">${p.summary}</p>
          ${
            p.metrics
              ? `<div class="metrics">${p.metrics
                  .map((m) => `<span class="metric"><strong>${m.label}</strong>${m.value}</span>`)
                  .join("")}</div>`
              : ""
          }
        </div>
      </div>
      <div class="viewer-body">
        ${renderSections(p)}
        ${renderEmbed(p)}
        <div class="tags">${p.tags.map((t) => `<span class="tag">${t}</span>`).join("")}</div>
      </div>`;
  }

  function renderPicker() {
    const list = filteredProjects();
    if (!list.find((p) => p.id === selectedId)) {
      selectedId = list[0]?.id || null;
    }

    pickerEl.innerHTML = list
      .map(
        (p) => `
      <button type="button" class="picker-card${p.id === selectedId ? " active" : ""}" data-id="${p.id}">
        <img src="${p.image}" alt="" />
        <div class="picker-text">
          <span class="picker-cat">${p.category}</span>
          <strong>${p.title}</strong>
          <span class="picker-sub">${p.subtitle}</span>
        </div>
      </button>`
      )
      .join("");

    pickerEl.querySelectorAll(".picker-card").forEach((btn) => {
      btn.addEventListener("click", () => selectProject(btn.dataset.id));
    });

    renderViewer(projects.find((p) => p.id === selectedId));
  }

  function selectProject(id) {
    selectedId = id;
    renderPicker();
    const card = pickerEl.querySelector(`[data-id="${id}"]`);
    if (card) card.scrollIntoView({ block: "nearest", behavior: "smooth" });
  }

  function renderFilters() {
    filtersEl.innerHTML = categories
      .map(
        (c) =>
          `<button type="button" class="filter-btn${c === activeFilter ? " active" : ""}" data-filter="${c}">${c}</button>`
      )
      .join("");

    filtersEl.querySelectorAll(".filter-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        activeFilter = btn.dataset.filter;
        renderFilters();
        renderPicker();
      });
    });
  }

  // Experience & skills (unchanged data inline in HTML or move later)
  const experience = [
    {
      role: "ME Research Rotator",
      org: "Stanford CHARM Lab · Prof. Allison Okamura",
      period: "Jan 2026 – Present",
      bullets: [
        "Magic Chair — precision fabrication of soft pneumatic hardware; repeatable pressure characterization (with Thu Shun Lei).",
        "TouchWorld (ME327) — dual-mesh haptic systems integration for stable 1 kHz human–robot interaction.",
      ],
    },
    {
      role: "QC Lead Engineer & Project Manager",
      org: "TBrain AI",
      period: "Jun 2025 – Present",
      bullets: [
        "GD&T inspection pipeline for 550+ drawings — detail-driven process design; 40% fewer misclassifications.",
        "Led 5-person team; delivered measurable quality outcomes on a 10,000+ unit contract.",
      ],
    },
    {
      role: "ME Research Intern",
      org: "Institut Supérieur d'Électronique de Paris",
      period: "Sep 2024 – Jan 2025",
      bullets: ["GaN MEMS process characterization — controlled experiments and careful documentation."],
    },
  ];

  const skills = [
    {
      name: "Robotics & Aerospace",
      items: [
        "State estimation",
        "UKF / EKF",
        "Autonomous systems",
        "Soft robotics",
        "Haptics & HRI",
        "Sensor integration",
      ],
    },
    {
      name: "Mechanisms & Precision",
      items: [
        "GD&T",
        "Tolerance analysis",
        "FEA",
        "Machine shop",
        "SolidWorks",
        "Onshape",
        "Fusion 360",
      ],
    },
    {
      name: "Software & Analysis",
      items: ["Python", "MATLAB", "C++", "Unity", "NumPy", "Test automation", "Data pipelines"],
    },
  ];

  const timeline = document.getElementById("timeline");
  if (timeline) {
    timeline.innerHTML = experience
      .map(
        (e) => `
      <div class="timeline-item">
        <h3>${e.role}</h3>
        <p class="org">${e.org}</p>
        <p class="period">${e.period}</p>
        <ul>${e.bullets.map((b) => `<li>${b}</li>`).join("")}</ul>
      </div>`
      )
      .join("");
  }

  const skillsEl = document.getElementById("skill-groups");
  if (skillsEl) {
    skillsEl.innerHTML = skills
      .map(
        (g) => `
      <div class="skill-group">
        <h3>${g.name}</h3>
        <div class="skill-pills">${g.items.map((i) => `<span class="skill-pill">${i}</span>`).join("")}</div>
      </div>`
      )
      .join("");
  }

  const nav = document.getElementById("nav");
  window.addEventListener("scroll", () => {
    nav?.classList.toggle("scrolled", window.scrollY > 40);
  });

  document.querySelectorAll(".reveal").forEach((el) => {
    new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    ).observe(el);
  });

  // Deep-link: #project=magic-chair
  const hash = location.hash.match(/^#project=(.+)$/);
  if (hash && projects.some((p) => p.id === hash[1])) {
    selectedId = hash[1];
  }

  renderFilters();
  renderPicker();

  window.selectProject = function (id) {
    selectProject(id);
    location.hash = `project=${id}`;
  };
})();
