const projects = [
  {
    id: "tipofmytouge",
    title: "아, 그거 뭐라 그러더라",
    repo: "tipofmytouge",
    type: "game",
    status: "Featured",
    year: "2026",
    launchUrl: "https://tipofmytouge.onrender.com/",
    githubUrl: "https://github.com/jeoungan/tipofmytouge",
    screenshot: "assets/screenshots/tipofmytouge.png",
    videoSrc: "assets/media/tipofmytouge-opening.mp4",
    summary: "답답한 친구가 설명하는 단어를 맞히는 대화형 추리 게임.",
    tags: ["AI", "word game", "Render", "opening video"],
    note: "로컬 폴더: Makers 동아리 / 아, 그거 뭐라 그러더라"
  },
  {
    id: "flanker",
    title: "Flanker Task",
    repo: "flanker",
    type: "experiment",
    status: "Verified",
    year: "2026",
    launchUrl: "https://jeoungan.github.io/flanker/",
    githubUrl: "https://github.com/jeoungan/flanker",
    screenshot: "assets/screenshots/flanker.png",
    summary: "화살표 간섭 조건으로 반응시간과 정확도를 측정하는 인지 과제.",
    tags: ["cognitive task", "reaction time", "HTML"],
    note: "배포 페이지에서 실험 안내와 난이도 선택 UI를 확인했습니다."
  },
  {
    id: "span_word_ver2",
    title: "Word Span Ver.2",
    repo: "span_word_ver2",
    type: "experiment",
    status: "Verified",
    year: "2026",
    launchUrl: "https://jeoungan.github.io/span_word_ver2/",
    githubUrl: "https://github.com/jeoungan/span_word_ver2",
    screenshot: "assets/screenshots/span_word_ver2.png",
    summary: "단어 단기 기억 용량을 측정하는 웹 실험의 두 번째 버전.",
    tags: ["memory", "word span", "JavaScript"],
    note: "배포 페이지 제목: 단어 단기 기억 과제"
  },
  {
    id: "gas_rt",
    title: "10초 챌린지",
    repo: "gas_rt",
    type: "experiment",
    status: "Verified",
    year: "2026",
    launchUrl: "https://jeoungan.github.io/gas_rt/",
    githubUrl: "https://github.com/jeoungan/gas_rt",
    screenshot: "assets/screenshots/gas_rt.png",
    summary: "10초 감각과 반응 타이밍을 확인하는 간단한 실험.",
    tags: ["timing", "reaction", "HTML"],
    note: "배포 페이지가 HTTP 200으로 열렸습니다."
  },
  {
    id: "stairs_of_heaven",
    title: "천국의 계단",
    repo: "stairs_of_heaven",
    type: "game",
    status: "Verified",
    year: "2026",
    launchUrl: "https://jeoungan.github.io/stairs_of_heaven/",
    githubUrl: "https://github.com/jeoungan/stairs_of_heaven",
    screenshot: "assets/screenshots/stairs_of_heaven.png",
    summary: "계단을 오르며 진행하는 웹 게임 프로토타입.",
    tags: ["web game", "JavaScript", "arcade"],
    note: "배포 페이지 제목: 천국의 계단"
  },
  {
    id: "heart_rate_recorder",
    title: "Heart Rate Serial Recorder",
    repo: "heart_rate_recorder",
    type: "tool",
    status: "Verified",
    year: "2026",
    launchUrl: "https://jeoungan.github.io/heart_rate_recorder/",
    githubUrl: "https://github.com/jeoungan/heart_rate_recorder",
    screenshot: "assets/screenshots/heart_rate_recorder.png",
    summary: "심박 데이터를 기록하기 위한 브라우저 기반 시리얼 레코더.",
    tags: ["heart rate", "serial", "Arduino"],
    note: "로컬에도 아두이노 폴더와 과제 폴더 사본이 있습니다."
  },
  {
    id: "span_word",
    title: "Word Span Task",
    repo: "span_word",
    type: "experiment",
    status: "Verified",
    year: "2026",
    launchUrl: "https://jeoungan.github.io/span_word/",
    githubUrl: "https://github.com/jeoungan/span_word",
    screenshot: "assets/screenshots/span_word.png",
    summary: "단어 기억력 범위를 측정하는 초기 웹 실험.",
    tags: ["memory", "word span", "experiment"],
    note: "배포 페이지 제목: 단어 기억력 실험"
  },
  {
    id: "homepage001",
    title: "세포생물학 실험 기록",
    repo: "homepage001",
    type: "site",
    status: "Verified",
    year: "2026",
    launchUrl: "https://jeoungan.github.io/homepage001/",
    githubUrl: "https://github.com/jeoungan/homepage001",
    screenshot: "assets/screenshots/homepage001.png",
    summary: "세포생물학 실험 수업 내용을 정리한 첫 번째 홈페이지.",
    tags: ["homepage", "biology", "archive"],
    note: "배포 페이지 제목: 세포생물학 실험 수업 기록"
  },
  {
    id: "BaBarian",
    title: "Barbarian Mage Combat",
    repo: "BaBarian",
    type: "game",
    status: "Verified",
    year: "2026",
    launchUrl: "https://jeoungan.github.io/BaBarian/",
    githubUrl: "https://github.com/jeoungan/BaBarian",
    screenshot: "assets/screenshots/BaBarian.png",
    summary: "Godot로 만든 전투 게임 프로토타입.",
    tags: ["Godot", "combat", "GDScript"],
    note: "배포 페이지에서 Godot 로딩 화면까지 확인했습니다."
  },
  {
    id: "HSMU_Escape_3D",
    title: "Escape from Hwaseong 3D",
    repo: "HSMU_Escape_3D",
    type: "game",
    status: "Verified",
    year: "2026",
    launchUrl: "https://jeoungan.github.io/HSMU_Escape_3D/",
    githubUrl: "https://github.com/jeoungan/HSMU_Escape_3D",
    screenshot: "assets/screenshots/HSMU_Escape_3D.png",
    summary: "화성의과학대학교를 배경으로 한 3D 탈출 게임.",
    tags: ["Godot", "3D", "escape"],
    note: "로컬 후보 폴더: Makers 동아리 / Escape from Hwaseong_3D"
  },
  {
    id: "Lunch_in_cafe",
    title: "Lunch Time in Cafe",
    repo: "Lunch_in_cafe",
    type: "game",
    status: "Verified",
    year: "2026",
    launchUrl: "https://jeoungan.github.io/Lunch_in_cafe/",
    githubUrl: "https://github.com/jeoungan/Lunch_in_cafe",
    screenshot: "assets/screenshots/Lunch_in_cafe.png",
    summary: "카페 점심시간을 배경으로 한 Godot 게임.",
    tags: ["Godot", "cafe", "prototype"],
    note: "로컬 후보 폴더: 바탕 화면 / Lunch time in Cafe"
  },
  {
    id: "heartopia_guidebook",
    title: "Heartopia Guidebook",
    repo: "heartopia_guidebook",
    type: "site",
    status: "Verified",
    year: "2026",
    launchUrl: "https://jeoungan.github.io/heartopia_guidebook/",
    githubUrl: "https://github.com/jeoungan/heartopia_guidebook",
    screenshot: "assets/screenshots/heartopia_guidebook.png",
    summary: "Heartopia 캐릭터와 정보를 필터링해 보는 도감형 페이지.",
    tags: ["guidebook", "Heartopia", "filter"],
    note: "로컬 후보 폴더: 바탕 화면 / Heartopia 도감"
  },
  {
    id: "heart_rate_player",
    title: "Heart Rate Player",
    repo: "heart_rate_player",
    type: "tool",
    status: "Verified",
    year: "2026",
    launchUrl: "https://jeoungan.github.io/heart_rate_player/",
    githubUrl: "https://github.com/jeoungan/heart_rate_player",
    screenshot: "assets/screenshots/heart_rate_player.png",
    summary: "기록된 심박 데이터를 재생하고 확인하는 플레이어.",
    tags: ["heart rate", "player", "data"],
    note: "배포 페이지 제목: Heart Rate Player"
  },
  {
    id: "span_number",
    title: "Digit Span Task",
    repo: "span_number",
    type: "experiment",
    status: "Verified",
    year: "2026",
    launchUrl: "https://jeoungan.github.io/span_number/",
    githubUrl: "https://github.com/jeoungan/span_number",
    screenshot: "assets/screenshots/span_number.png",
    summary: "숫자 단기 기억 범위를 측정하는 Digit Span 실험.",
    tags: ["memory", "digit span", "experiment"],
    note: "배포 페이지 제목: 단순 기억력 실험"
  },
  {
    id: "game0505_2",
    title: "Campus Survival",
    repo: "game0505_2",
    type: "game",
    status: "Verified",
    year: "2026",
    launchUrl: "https://jeoungan.github.io/game0505_2/",
    githubUrl: "https://github.com/jeoungan/game0505_2",
    screenshot: "assets/screenshots/game0505_2.png",
    summary: "캠퍼스 생존 콘셉트의 웹 게임 확장 버전.",
    tags: ["campus", "survival", "JavaScript"],
    note: "로컬 후보 폴더: Makers 동아리 / game0505_2"
  },
  {
    id: "game0505",
    title: "HSMU Campus Explorer",
    repo: "game0505",
    type: "game",
    status: "Verified",
    year: "2026",
    launchUrl: "https://jeoungan.github.io/game0505/",
    githubUrl: "https://github.com/jeoungan/game0505",
    screenshot: "assets/screenshots/game0505.png",
    summary: "화성의과학대학교 캠퍼스를 탐험하는 2D 웹 게임.",
    tags: ["campus", "2D", "explorer"],
    note: "로컬 후보 폴더: Makers 동아리 / game0505"
  },
  {
    id: "homepage002",
    title: "인지실험 홈페이지",
    repo: "homepage002",
    type: "site",
    status: "Verified",
    year: "2026",
    launchUrl: "https://jeoungan.github.io/homepage002/",
    githubUrl: "https://github.com/jeoungan/homepage002",
    screenshot: "assets/screenshots/homepage002.png",
    summary: "인지실험 과제들을 모아 실행할 수 있는 수업용 실험 허브.",
    tags: ["homepage", "cognitive", "class"],
    note: "배포 페이지 제목: 인지실험 홈페이지"
  },
  {
    id: "gas_rt_2",
    title: "Neon Maze",
    repo: "gas_rt_2",
    type: "game",
    status: "Verified",
    year: "2026",
    launchUrl: "https://jeoungan.github.io/gas_rt_2/",
    githubUrl: "https://github.com/jeoungan/gas_rt_2",
    screenshot: "assets/screenshots/gas_rt_2.png",
    summary: "네온 스타일의 미로/반응 게임 실험.",
    tags: ["maze", "reaction", "neon"],
    note: "배포 페이지 제목: Neon Maze"
  }
];

const typeLabels = {
  all: "전체",
  game: "게임",
  experiment: "실험",
  tool: "도구",
  site: "홈페이지"
};

let activeType = "all";
let searchTerm = "";

function projectById(id) {
  return projects.find((project) => project.id === id);
}

function currentSearchTerm() {
  const input = document.querySelector("#searchInput");
  return input ? input.value : searchTerm;
}

function filteredProjects() {
  const normalizedTerm = currentSearchTerm().trim().toLowerCase();

  return projects.filter((project) => {
    const matchesType = activeType === "all" || project.type === activeType;
    const haystack = [
      project.title,
      project.repo,
      project.summary,
      project.status,
      project.year,
      project.type,
      ...project.tags
    ]
      .join(" ")
      .toLowerCase();

    return matchesType && (!normalizedTerm || haystack.includes(normalizedTerm));
  });
}

function externalLink(url, className, text) {
  const link = document.createElement("a");
  link.className = className;
  link.href = url;
  link.target = "_blank";
  link.rel = "noreferrer";
  link.textContent = text;
  return link;
}

function createMedia(project, featured = false) {
  const frame = document.createElement("span");
  frame.className = featured ? "media-frame featured-media" : "media-frame";

  if (featured && project.videoSrc) {
    const video = document.createElement("video");
    video.src = project.videoSrc;
    video.poster = project.screenshot;
    video.autoplay = true;
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.controls = false;
    frame.append(video);
  } else {
    const image = document.createElement("img");
    image.src = project.screenshot;
    image.alt = `${project.title} 스크린샷`;
    image.loading = featured ? "eager" : "lazy";
    frame.append(image);
  }

  const badge = document.createElement("span");
  badge.className = "media-badge";
  badge.textContent = featured && project.videoSrc ? "Playing" : project.status;
  frame.append(badge);

  return frame;
}

function renderMetrics() {
  const totalCount = document.querySelector("#totalCount");
  const gameCount = document.querySelector("#gameCount");
  const experimentCount = document.querySelector("#experimentCount");
  const toolCount = document.querySelector("#toolCount");

  if (!totalCount || !gameCount || !experimentCount || !toolCount) {
    return;
  }

  totalCount.textContent = String(projects.length);
  gameCount.textContent = String(projects.filter((project) => project.type === "game").length);
  experimentCount.textContent = String(
    projects.filter((project) => project.type === "experiment").length
  );
  toolCount.textContent = String(projects.filter((project) => ["tool", "site"].includes(project.type)).length);
}

function renderFilters() {
  const filterRoot = document.querySelector("#typeFilters");

  if (!filterRoot) {
    return;
  }

  filterRoot.replaceChildren();

  Object.entries(typeLabels).forEach(([type, label]) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = label;
    button.dataset.type = type;
    button.setAttribute("aria-pressed", String(type === activeType));
    button.addEventListener("click", () => {
      activeType = type;
      renderFilters();
      renderProjects();
      renderReleaseRows();
    });
    filterRoot.append(button);
  });
}

function renderFeaturedProject() {
  const root = document.querySelector("#featuredProject");
  const featured = projectById("tipofmytouge");

  if (!root || !featured) {
    return;
  }

  const mediaLink = externalLink(featured.launchUrl, "featured-media-link", "");
  mediaLink.append(createMedia(featured, true));

  const content = document.createElement("div");
  content.className = "featured-content";

  const meta = document.createElement("p");
  meta.className = "project-meta";
  meta.textContent = "대표 프로젝트 / Render 배포 / 로딩 비디오 재생";

  const title = document.createElement("h2");
  title.textContent = featured.title;

  const summary = document.createElement("p");
  summary.className = "featured-summary";
  summary.textContent = featured.summary;

  const tags = createTags(featured.tags);
  const actions = document.createElement("div");
  actions.className = "featured-actions";
  actions.append(
    externalLink(featured.launchUrl, "primary-link", "Play"),
    externalLink(featured.githubUrl, "secondary-link", "GitHub")
  );

  const side = document.createElement("div");
  side.className = "featured-side-shots";
  projects
    .filter((project) => project.id !== featured.id)
    .slice(0, 4)
    .forEach((project) => {
      const link = externalLink(project.launchUrl, "side-shot", project.title);
      const image = document.createElement("img");
      image.src = project.screenshot;
      image.alt = `${project.title} 스크린샷`;
      link.replaceChildren(image);
      side.append(link);
    });

  content.append(meta, title, summary, tags, actions);
  root.replaceChildren(mediaLink, content, side);
}

function createTags(tags) {
  const list = document.createElement("ul");
  list.className = "tag-list";
  tags.forEach((tag) => {
    const item = document.createElement("li");
    item.textContent = tag;
    list.append(item);
  });
  return list;
}

function renderProjects() {
  const grid = document.querySelector("#projectGrid");
  const emptyState = document.querySelector("#emptyState");

  if (!grid || !emptyState) {
    return;
  }

  const visibleProjects = filteredProjects();
  grid.replaceChildren(...visibleProjects.map(createProjectCard));
  emptyState.hidden = visibleProjects.length > 0;
}

function createProjectCard(project) {
  const article = document.createElement("article");
  article.className = "project-card";

  const mediaLink = externalLink(project.launchUrl, "media-link", "");
  mediaLink.append(createMedia(project));

  const body = document.createElement("div");
  body.className = "project-card-body";

  const meta = document.createElement("div");
  meta.className = "project-meta";
  meta.textContent = `${typeLabels[project.type]} / ${project.status} / ${project.year}`;

  const title = document.createElement("h3");
  const detailLink = document.createElement("a");
  detailLink.href = `project.html?id=${encodeURIComponent(project.id)}`;
  detailLink.textContent = project.title;
  title.append(detailLink);

  const summary = externalLink(project.launchUrl, "project-summary-link", project.summary);
  const tags = createTags(project.tags.slice(0, 3));

  const footer = document.createElement("div");
  footer.className = "project-footer";
  footer.append(
    externalLink(project.launchUrl, "open-link", "Open"),
    externalLink(project.githubUrl, "repo-link", project.repo)
  );

  body.append(meta, title, summary, tags, footer);
  article.append(mediaLink, body);
  return article;
}

function renderReleaseRows() {
  const root = document.querySelector("#releaseRows");

  if (!root) {
    return;
  }

  root.replaceChildren(
    ...filteredProjects().map((project) => {
      const row = externalLink(project.launchUrl, "release-row", "");
      row.innerHTML = `
        <img src="${project.screenshot}" alt="${project.title} 스크린샷">
        <span class="release-title">${project.title}</span>
        <span class="release-tags">${project.tags.slice(0, 3).join(" / ")}</span>
        <span class="release-type">${typeLabels[project.type]}</span>
        <span class="release-status">${project.status}</span>
      `;
      return row;
    })
  );
}

function bindSearch() {
  const input = document.querySelector("#searchInput");

  if (!input) {
    return;
  }

  const updateSearch = (event) => {
    searchTerm = event.target.value;
    renderProjects();
    renderReleaseRows();
  };

  input.addEventListener("input", updateSearch);
  input.addEventListener("search", updateSearch);
}

function renderProjectDetail() {
  const detailRoot = document.querySelector("#projectDetail");

  if (!detailRoot) {
    return;
  }

  const params = new URLSearchParams(window.location.search);
  const selectedProject = projectById(params.get("id")) || projects[0];

  document.title = `${selectedProject.title} | Allpage`;

  const media = externalLink(selectedProject.launchUrl, "detail-media-link", "");
  media.append(createMedia(selectedProject, Boolean(selectedProject.videoSrc)));

  const content = document.createElement("div");
  content.className = "detail-content";

  const meta = document.createElement("p");
  meta.className = "project-meta";
  meta.textContent = `${typeLabels[selectedProject.type]} / ${selectedProject.status} / ${selectedProject.year}`;

  const title = document.createElement("h1");
  title.textContent = selectedProject.title;

  const summary = document.createElement("p");
  summary.className = "detail-summary";
  summary.textContent = selectedProject.summary;

  const note = document.createElement("p");
  note.className = "detail-note";
  note.textContent = selectedProject.note;

  const actions = document.createElement("div");
  actions.className = "detail-actions";
  actions.append(
    externalLink(selectedProject.launchUrl, "primary-link", "Open Project"),
    externalLink(selectedProject.githubUrl, "secondary-link", "GitHub"),
    Object.assign(document.createElement("a"), {
      className: "secondary-link",
      href: "index.html#projects",
      textContent: "Back"
    })
  );

  content.append(meta, title, summary, createTags(selectedProject.tags), note, actions);
  detailRoot.replaceChildren(media, content);
}

function init() {
  renderMetrics();
  renderFilters();
  renderFeaturedProject();
  renderProjects();
  renderReleaseRows();
  renderProjectDetail();
  bindSearch();
}

init();
