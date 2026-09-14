const projects = [
  {
    id: "Hwarack_is_rock",
    title: "화락제도 락이다",
    repo: "Hwarack_is_rock",
    type: "game",
    status: "Featured",
    year: "2026",
    launchUrl: "https://jeoungan.github.io/Hwarack_is_rock/",
    githubUrl: "https://github.com/jeoungan/Hwarack_is_rock",
    screenshot: "assets/screenshots/hwarak.jpg",
    imageLayout: "title",
    videoSrc: "assets/media/hwarak-opening.mp4",
    summary: "화락제의 무대와 음악을 즐기는 리듬 게임. 수달과 함께 축제의 박자를 맞춰 보세요.",
    tags: ["rhythm", "festival", "opening video"],
    note: "화락제 리듬 게임. 오프닝 영상의 소리는 플레이어에서 켤 수 있습니다."
  },
  {
    id: "tipofmytouge",
    title: "아, 그거 뭐라 그러더라",
    repo: "tipofmytouge",
    type: "game",
    status: "Featured",
    year: "2026",
    launchUrl: "https://tipofmytouge.onrender.com/",
    githubUrl: "https://github.com/jeoungan/tipofmytouge",
    screenshot: "assets/screenshots/tipofmytouge-logo.png",
    imageLayout: "title",
    videoSrc: "assets/media/tipofmytouge-opening.mp4",
    summary: "답답한 친구가 설명하는 단어를 맞히는 대화형 추리 게임.",
    tags: ["AI", "word game", "Render", "opening video"],
    note: "답답한 친구의 설명으로 단어를 추리해 보세요. 오프닝 원본은 소리가 없는 영상입니다."
  },
  {
    id: "10cat",
    title: "고양이양이 — 나른한 오후",
    repo: "10cat",
    type: "game",
    status: "New",
    year: "2026",
    launchUrl: "https://jeoungan.github.io/10cat/",
    githubUrl: "https://github.com/jeoungan/10cat",
    screenshot: "assets/screenshots/10cat-cover.png",
    imageLayout: "title",
    imageAspectRatio: "8 / 5",
    summary: "열 마리 고양이를 돌보고 꾸미며, 친밀도에 따라 작은 이야기와 추억을 모으는 일러스트 게임.",
    tags: ["cats", "care", "story"],
    note: "거실·침실·테라스를 오가며 고양이와 교감하고 옷장과 추억 앨범을 채워 보세요. 진행 상황은 현재 브라우저에 저장됩니다."
  },
  {
    id: "blue_hour",
    title: "서바이벌 — 새벽선",
    repo: "-",
    type: "game",
    status: "New",
    year: "2026",
    launchUrl: "https://jeoungan.github.io/-/",
    githubUrl: "https://github.com/jeoungan/-",
    screenshot: "assets/screenshots/blue-hour-cover.webp",
    imageLayout: "title",
    imageAspectRatio: "8 / 5",
    summary: "비 내리는 캠퍼스에서 동료와 단서를 모으고, 제한 시간 안에 탈출 경로를 선택하는 생존 어드벤처.",
    tags: ["survival", "choice", "BLUE HOUR"],
    note: "해무대학교를 탐험하며 세 동료와 세 갈래 탈출을 만납니다. 제한 시간은 게임 속 30분이며, 진행과 엔딩 기록은 현재 브라우저에 저장됩니다."
  },
  {
    id: "book_",
    title: "책 요정",
    repo: "book_",
    type: "tool",
    status: "New",
    year: "2026",
    launchUrl: "https://jeoungan.github.io/book_/",
    githubUrl: "https://github.com/jeoungan/book_",
    screenshot: "assets/screenshots/book-fairy-cover.webp",
    imageLayout: "title",
    imageAspectRatio: "8 / 5",
    summary: "독서 감상을 기록하고 요정과 서재를 꾸미며, 관심 주제에 맞는 책과 체험 대화를 만나는 개인 서재.",
    tags: ["reading", "journal", "customization"],
    note: "로그인 없이 이용하는 포트폴리오 체험 앱입니다. 감상과 꾸미기는 현재 브라우저에 저장되며, 대화는 감상과 책 주제에 맞춰 준비된 질문으로 진행됩니다."
  },
  {
    id: "over_the_rainbow",
    title: "Over the Rainbow",
    repo: "over_the_rainbow",
    type: "game",
    status: "Verified",
    year: "2026",
    launchUrl: "https://jeoungan.github.io/over_the_rainbow/",
    githubUrl: "https://github.com/jeoungan/over_the_rainbow",
    screenshot: "assets/screenshots/over_the_rainbow.png",
    summary: "무지개와 하늘 풍경을 배경으로 스테이지를 진행하는 레이싱/퍼즐형 웹 게임.",
    tags: ["racing", "stage", "web game"],
    note: "배포 페이지 제목: over the rainbow"
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
  },
  {
    id: "moa",
    title: "오늘여름 — 모아빛",
    repo: "moa",
    type: "site",
    status: "New",
    year: "2026",
    launchUrl: "https://oneul-summer-2607.hsmu-makers.chatgpt.site/",
    githubUrl: "https://github.com/jeoungan/moa",
    screenshot: "assets/screenshots/moa.png",
    summary: "도시의 여름 미션을 고르고 동네 피드를 둘러보며 나만의 여름 순간을 기록하는 공개 체험 웹앱.",
    tags: ["summer", "mission", "community"],
    note: "공개 체험에서는 위치 권한과 서버 저장을 사용하지 않으며, 기록은 현재 탭에서만 유지됩니다."
  },
  {
    id: "jaljatneag",
    title: "잘잤냉?",
    repo: "jaljatneag",
    type: "tool",
    status: "New",
    year: "2026",
    launchUrl: "https://jaljatnaeng-2607.hsmu-makers.chatgpt.site/",
    githubUrl: "https://github.com/jeoungan/jaljatneag",
    screenshot: "assets/screenshots/jaljatneag.png",
    summary: "냉방 계획과 아침 기록, 시·도별 날씨 추천으로 여름밤 수면 환경을 가볍게 설계하는 웹앱.",
    tags: ["sleep", "cooling", "weather"],
    note: "수면 기록은 현재 탭에서만 유지되고, GPS 요청과 외부 리포트 공유는 사용하지 않습니다."
  },
  {
    id: "money_noise",
    title: "짤랑짤랑",
    repo: "money_noise",
    type: "tool",
    status: "New",
    year: "2026",
    launchUrl: "https://jjalangjjalang-2607.hsmu-makers.chatgpt.site/",
    githubUrl: "https://github.com/jeoungan/money_noise",
    screenshot: "assets/screenshots/money_noise.png",
    summary: "저금한 금액을 동전 비즈와 지폐 깃털로 바꾸어 나만의 썬캐쳐를 꾸며 보는 체험형 웹앱.",
    tags: ["saving", "suncatcher", "interactive"],
    note: "실제 금융정보와 연결되지 않으며, 체험 기록은 서버에 전송되지 않고 현재 탭에서만 유지됩니다."
  },
  {
    id: "arrow_unbound",
    title: "Arrow Unbound",
    indexOnly: true,
    repo: "arrow_unbound",
    type: "game",
    status: "Published",
    year: "2026",
    launchUrl: "https://jeoungan.github.io/arrow_unbound/",
    githubUrl: "https://github.com/jeoungan/arrow_unbound",
    screenshot: "assets/screenshots/arrow_unbound.png",
    summary: "화살표를 올바른 순서로 제거하는 공간 퍼즐 게임.",
    tags: ["puzzle", "arrows", "web game"],
    note: "GitHub Pages가 main 브랜치 기준으로 빌드되어 공개 실행 중입니다."
  },
  {
    id: "Awakend_Board",
    title: "깨어난 판: 왕의 마지막 명령",
    repo: "Awakend_Board",
    type: "game",
    status: "Published",
    year: "2026",
    launchUrl: "https://jeoungan.github.io/Awakend_Board/",
    githubUrl: "https://github.com/jeoungan/Awakend_Board",
    screenshot: "assets/screenshots/Awakend_Board.png",
    summary: "3D 체스말과 이야기, 일반 체스 규칙, AI 대국을 결합한 스토리형 체스 프로젝트.",
    tags: ["chess", "Godot", "Stockfish"],
    note: "GitHub Pages 공개본은 현재 기능·설치 안내를 제공하며, 웹 플레이 빌드는 저장소에 별도로 보관되어 있습니다."
  },
  {
    id: "neon_wave",
    title: "Neon Wave",
    indexOnly: true,
    repo: "neon_wave",
    type: "game",
    status: "Published",
    year: "2026",
    launchUrl: "https://jeoungan.github.io/neon_wave/",
    githubUrl: "https://github.com/jeoungan/neon_wave",
    screenshot: "assets/screenshots/neon_wave.png",
    summary: "상승과 하강을 조절하며 코스를 통과하는 원버튼 네온 아케이드 게임.",
    tags: ["arcade", "one button", "neon"],
    note: "GitHub Pages가 main 브랜치 기준으로 빌드되어 공개 실행 중입니다."
  },
  {
    id: "prisom_foundry",
    title: "Prism Foundry",
    indexOnly: true,
    repo: "prisom_foundry",
    type: "game",
    status: "Published",
    year: "2026",
    launchUrl: "https://jeoungan.github.io/prisom_foundry/",
    githubUrl: "https://github.com/jeoungan/prisom_foundry",
    screenshot: "assets/screenshots/prisom_foundry.png",
    summary: "프리즘 블록을 8×8 보드에 배치해 줄과 칸을 지우는 퍼즐 게임.",
    tags: ["block puzzle", "strategy", "web game"],
    note: "GitHub Pages가 main 브랜치 기준으로 빌드되어 공개 실행 중입니다."
  },
  {
    id: "purlse_hopes",
    title: "Pulse Hoops",
    indexOnly: true,
    repo: "purlse_hopes",
    type: "game",
    status: "Published",
    year: "2026",
    launchUrl: "https://jeoungan.github.io/purlse_hopes/",
    githubUrl: "https://github.com/jeoungan/purlse_hopes",
    screenshot: "assets/screenshots/purlse_hopes.png",
    summary: "공을 띄우고 시간을 이겨 연속 득점을 이어 가는 원터치 농구 아케이드 게임.",
    tags: ["basketball", "arcade", "one touch"],
    note: "GitHub Pages가 main 브랜치 기준으로 빌드되어 공개 실행 중입니다."
  },
  {
    id: "spectrum_drill",
    title: "Spectrum Drill",
    indexOnly: true,
    repo: "spectrum_drill",
    type: "game",
    status: "Published",
    year: "2026",
    launchUrl: "https://jeoungan.github.io/spectrum_drill/",
    githubUrl: "https://github.com/jeoungan/spectrum_drill",
    screenshot: "assets/screenshots/spectrum_drill.png",
    summary: "밝은 고리를 통과하고 어두운 구역을 피해 내려가는 원버튼 타워 러시 게임.",
    tags: ["tower rush", "reaction", "one button"],
    note: "GitHub Pages가 main 브랜치 기준으로 빌드되어 공개 실행 중입니다."
  },
  {
    id: "star_library",
    title: "별빛 기록원의 밤",
    repo: "star_library",
    type: "game",
    status: "Published",
    year: "2026",
    launchUrl: "https://jeoungan.github.io/star_library/",
    githubUrl: "https://github.com/jeoungan/star_library",
    screenshot: "assets/screenshots/star_library.png",
    summary: "흩어진 책을 문양과 권수에 맞춰 되돌려 놓는 판타지 도서관 정리 게임.",
    tags: ["library", "fantasy", "sorting"],
    note: "별빛 도전과 느긋한 순환 모드를 포함한 GitHub Pages 공개 게임입니다."
  },
  {
    id: "together",
    title: "Crayon Territory Multiplayer",
    repo: "together",
    type: "game",
    status: "Published",
    year: "2026",
    launchUrl: "https://jeoungan.github.io/together/",
    githubUrl: "https://github.com/jeoungan/together",
    screenshot: "assets/screenshots/together.png",
    summary: "최대 4명이 한 방에서 크레용으로 영역을 넓히는 실시간 멀티플레이 게임 프로젝트.",
    tags: ["multiplayer", "WebSocket", "territory"],
    note: "GitHub Pages 공개본은 프로젝트·실행 안내를 제공하며, 실시간 대전은 별도의 Node.js 서버 실행이 필요합니다."
  },
  {
    id: "library_inventory_check",
    title: "바코드 장서 점검",
    repo: "library_inventory_check",
    type: "tool",
    status: "Published",
    year: "2026",
    launchUrl: "https://jeoungan.github.io/library_inventory_check/",
    githubUrl: "https://github.com/jeoungan/library_inventory_check",
    screenshot: "assets/screenshots/library_inventory_check.png",
    summary: "카메라로 바코드를 연속 스캔하고, 카테고리별 목록을 관리해 TXT로 바로 저장하는 장서 점검 웹앱.",
    tags: ["barcode", "library", "PWA"],
    note: "GitHub Pages가 main 브랜치 기준으로 빌드되어 공개 실행 중이며, 카메라 스캔·수동 입력·TXT 저장을 지원합니다."
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

const mediaControllers = new WeakMap();

function createMedia(project, featured = false, active = true) {
  const frame = document.createElement("span");
  frame.className = featured ? "media-frame featured-media" : "media-frame";
  if (!featured && project.imageLayout === "title") {
    frame.classList.add("title-cover");
    if (project.imageAspectRatio) frame.style.setProperty("--cover-aspect-ratio", project.imageAspectRatio);
  }
  const badge = document.createElement("span");
  badge.className = "media-badge";
  badge.textContent = project.status;

  if (featured && project.videoSrc) {
    const video = document.createElement("video");
    video.poster = project.screenshot;
    video.muted = true;
    video.defaultMuted = true;
    video.loop = true;
    video.playsInline = true;
    video.controls = true;
    video.preload = "metadata";
    video.setAttribute("playsinline", "");
    video.setAttribute("aria-label", `${project.title} 오프닝 영상`);
    const playButton = document.createElement("button");
    playButton.type = "button";
    playButton.className = "video-play-prompt";
    playButton.textContent = "오프닝 재생";
    playButton.hidden = true;
    frame.append(video, playButton);

    let isActive = active;
    let isVisible = false;
    let playbackAllowed = false;
    let userPaused = false;
    const updatePlayback = () => {
      playbackAllowed = isActive && isVisible && !document.hidden;
      if (!playbackAllowed) {
        video.pause();
        return;
      }
      if (!video.hasAttribute("src")) video.src = project.videoSrc;
      if (userPaused) return;
      video.play().catch(() => {
        if (playbackAllowed && video.paused) {
          playButton.hidden = false;
          badge.textContent = "오프닝";
        }
      });
    };
    mediaControllers.set(frame, {
      setActive(value) {
        if (value && !isActive) {
          userPaused = false;
          video.muted = true;
          if (video.readyState > 0) video.currentTime = 0;
        }
        isActive = value;
        updatePlayback();
      }
    });
    video.addEventListener("playing", () => {
      if (!playbackAllowed) {
        video.pause();
        return;
      }
      userPaused = false;
      playButton.hidden = true;
      badge.textContent = "재생 중";
    });
    video.addEventListener("pause", () => {
      if (playbackAllowed) userPaused = true;
      badge.textContent = "일시 정지";
    });
    video.addEventListener("waiting", () => { badge.textContent = "불러오는 중"; });
    video.addEventListener("error", () => {
      badge.textContent = "영상을 다시 불러와 주세요";
      playButton.textContent = "오프닝 다시 재생";
      playButton.hidden = false;
    });
    playButton.addEventListener("click", () => {
      userPaused = false;
      if (video.error) video.load();
      updatePlayback();
    });
    new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
      updatePlayback();
    }, { threshold: 0.15 }).observe(frame);
    document.addEventListener("visibilitychange", updatePlayback);
    badge.textContent = "오프닝";
  } else {
    const image = document.createElement("img");
    image.src = project.screenshot;
    image.alt = `${project.title} 스크린샷`;
    image.loading = featured ? "eager" : "lazy";
    frame.append(image);
  }

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
  const navigation = document.querySelector("#featuredNavigation");
  const status = document.querySelector("#featuredStatus");
  if (!root || !navigation) return;

  const selected = ["Hwarack_is_rock", "tipofmytouge"].map(projectById);
  let currentIndex = 0;
  let carouselWidth = root.clientWidth;
  const slides = selected.map((featured, index) => {
    const slide = document.createElement("article");
    slide.className = "featured-panel";
    slide.id = `featured-${featured.id}`;
    slide.setAttribute("aria-roledescription", "슬라이드");
    slide.setAttribute("aria-label", `${index + 1} / ${selected.length}: ${featured.title}`);
    const media = createMedia(featured, true, index === 0);
    const content = document.createElement("div");
    content.className = "featured-content";
    const heading = document.createElement("div");
    const meta = document.createElement("p");
    meta.className = "project-meta";
    meta.textContent = `SELECTED 0${index + 1} / OPENING FILM`;
    const title = document.createElement("h2");
    title.textContent = featured.title;
    heading.append(meta, title);
    const description = document.createElement("div");
    const summary = document.createElement("p");
    summary.className = "featured-summary";
    summary.textContent = featured.summary;
    const actions = document.createElement("div");
    actions.className = "featured-actions";
    actions.append(
      externalLink(featured.launchUrl, "primary-link", "게임 플레이 ↗"),
      Object.assign(document.createElement("a"), {
        className: "secondary-link",
        href: `project.html?id=${encodeURIComponent(featured.id)}`,
        textContent: "작품 소개"
      })
    );
    description.append(summary, createTags(featured.tags), actions);
    content.append(heading, description);
    slide.append(media, content);
    return slide;
  });
  root.replaceChildren(...slides);

  const selectSlide = (index, smooth = true) => {
    const nextIndex = (index + slides.length) % slides.length;
    root.scrollTo({
      left: nextIndex * root.clientWidth,
      behavior: smooth && !window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "smooth" : "instant"
    });
  };
  const previous = document.createElement("button");
  previous.type = "button";
  previous.className = "carousel-arrow";
  previous.textContent = "←";
  previous.setAttribute("aria-label", "이전 대표 작품");
  previous.setAttribute("aria-controls", root.id);
  previous.addEventListener("click", () => selectSlide(currentIndex - 1));
  const next = document.createElement("button");
  next.type = "button";
  next.className = "carousel-arrow";
  next.textContent = "→";
  next.setAttribute("aria-label", "다음 대표 작품");
  next.setAttribute("aria-controls", root.id);
  next.addEventListener("click", () => selectSlide(currentIndex + 1));
  const choices = document.createElement("div");
  choices.className = "carousel-choices";
  const buttons = selected.map((project, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "carousel-choice";
    button.setAttribute("aria-label", `${index + 1}번 작품: ${project.title}`);
    button.setAttribute("aria-controls", slides[index].id);
    const number = document.createElement("span");
    number.textContent = `0${index + 1}`;
    const label = document.createElement("span");
    label.textContent = project.title;
    button.append(number, label);
    button.addEventListener("click", () => selectSlide(index));
    return button;
  });
  choices.append(...buttons);
  navigation.replaceChildren(previous, choices, next);

  const updateSelection = (index) => {
    currentIndex = index;
    slides.forEach((slide, slideIndex) => {
      const active = slideIndex === index;
      slide.inert = !active;
      slide.setAttribute("aria-hidden", String(!active));
      buttons[slideIndex].setAttribute("aria-current", String(active));
      mediaControllers.get(slide.querySelector(".media-frame"))?.setActive(active);
    });
    status.textContent = `${index + 1} / ${selected.length}, ${selected[index].title}`;
  };
  root.addEventListener("scroll", () => {
    if (root.clientWidth !== carouselWidth) return;
    const index = Math.min(slides.length - 1, Math.max(0, Math.round(root.scrollLeft / root.clientWidth)));
    if (index !== currentIndex) updateSelection(index);
  }, { passive: true });
  root.addEventListener("keydown", (event) => {
    if (event.target !== root) return;
    const keyIndex = { ArrowLeft: currentIndex - 1, ArrowRight: currentIndex + 1, Home: 0, End: slides.length - 1 };
    if (event.key in keyIndex) {
      event.preventDefault();
      selectSlide(keyIndex[event.key]);
    }
  });
  new ResizeObserver(() => {
    carouselWidth = root.clientWidth;
    selectSlide(currentIndex, false);
  }).observe(root);
  updateSelection(0);
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

  const matchingProjects = filteredProjects();
  const visibleProjects = matchingProjects.filter((project) => !project.indexOnly);
  grid.replaceChildren(...visibleProjects.map(createProjectCard));
  emptyState.hidden = visibleProjects.length > 0;
  if (matchingProjects.length > 0 && visibleProjects.length === 0) {
    const indexLink = document.createElement("a");
    indexLink.href = "#releases";
    indexLink.textContent = `조건에 맞는 작품 ${matchingProjects.length}개를 아래 프로젝트 목록에서 보기 ↓`;
    emptyState.replaceChildren(indexLink);
  } else {
    emptyState.textContent = "조건에 맞는 프로젝트가 없습니다.";
  }
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
    externalLink(project.launchUrl, "open-link", "Open ↗"),
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
      if (project.imageLayout === "title") row.classList.add("title-cover-row");
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

  const media = selectedProject.videoSrc
    ? createMedia(selectedProject, true)
    : externalLink(selectedProject.launchUrl, "detail-media-link", "");
  if (!selectedProject.videoSrc) media.append(createMedia(selectedProject));

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
    externalLink(selectedProject.launchUrl, "primary-link", "Open project ↗"),
    externalLink(selectedProject.githubUrl, "secondary-link", "Source ↗"),
    Object.assign(document.createElement("a"), {
      className: "secondary-link",
      href: "index.html#projects",
      textContent: "Back to archive"
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
