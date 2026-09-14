# Allpage

jeoungan의 배포 완료 프로젝트를 매거진형 디지털 아카이브로 모아보는 정적 홈페이지입니다.

## 보기

브라우저에서 `index.html`을 열거나, 로컬 서버를 켜서 봅니다.

```powershell
npm.cmd run serve
```

## 데이터 수정

프로젝트 목록은 `app.js`의 `projects` 배열에서 관리합니다.

- `launchUrl`: 실제 배포 페이지
- `githubUrl`: GitHub 저장소
- `screenshot`: `assets/screenshots` 안의 캡처 이미지
- `videoSrc`: 대표 프로젝트처럼 자동 재생할 로컬 비디오
- `imageLayout: "title"`: 타이틀 아트에 맞는 어두운 썸네일 배경
- `imageAspectRatio`: 원본 이미지 비율 메타데이터 (카드 외곽 비율은 공통 적용)
- `indexOnly: true`: 큰 아카이브 카드에서 제외하고 하단 프로젝트 목록 표에서만 표시 (검색·유형 필터와 전체 개수에는 포함)
- `type`: `game`, `experiment`, `tool`, `site`

## 캡처

배포 페이지 스크린샷은 Chrome headless로 만들었습니다.

```powershell
powershell -ExecutionPolicy Bypass -File scripts\capture-with-chrome.ps1
```

게임 스크린샷만 다시 만들 때는 `-OnlyGames`를, 특정 프로젝트 하나만 다시 만들 때는 `-Projects <repo>`를 추가합니다. 여러 프로젝트는 `-Projects repo-a,repo-b`처럼 쉼표로 구분할 수 있습니다. 캡처 스크립트는 게임 엔진이 실제로 렌더링된 뒤 이미지를 저장합니다.

`tipofmytouge` 대표 비디오는 로컬 폴더의 `assets/opening.mp4`를 `assets/media/tipofmytouge-opening.mp4`로 복사해 사용합니다.

대표 영역은 **화락제도 락이다 → 아, 그거 뭐라 그러더라** 순서의 두 장 캐러셀입니다. 화살표·작품 선택 버튼·가로 스와이프를 지원하며, 슬라이드 영역에 키보드 초점을 두면 좌우 방향키와 Home/End로 이동할 수 있습니다.

화락제 영상은 실제 게임의 최적화본을 `assets/media/hwarak-opening.mp4`로 복사했습니다. 두 영상은 현재 화면에 보이는 장만 음소거로 자동 재생하고, 화면 밖으로 이동하거나 다른 탭으로 전환하면 일시 정지합니다. 플레이어에서 재생·일시 정지·탐색·소리를 조작할 수 있고, 자동 재생이 제한되면 재생 버튼이 표시됩니다. 기존 `tipofmytouge` 오프닝은 원본에 오디오 트랙이 없는 세로 영상이며, 두 영상 모두 원래 비율을 유지합니다.

로컬 서버는 MP4 탐색을 위한 HTTP Range 및 HEAD 요청을 지원합니다.

전체 아카이브 카드는 동일한 16:10 이미지 영역에 원본 비율을 유지한 `contain` 방식으로 표시합니다. 위치별 세로 비율·엇갈린 위 여백·마우스 확대를 사용하지 않으며, 같은 줄의 시작 위치와 하단 링크가 정렬됩니다. 상태는 이미지 위 배지 대신 카드의 기존 메타 줄에 표시합니다.

Arrow Unbound, Neon Wave, Prism Foundry, Pulse Hoops, Spectrum Drill은 하단 목록 표에서만 표시합니다. 현재 큰 카드는 30개, 전체 목록은 35개입니다. 검색 결과가 목록 전용 작품만 포함하면 하단 목록으로 이동하는 링크를 표시합니다.

화락제 `hwarak.jpg`는 제목 전체와 수달이 보이는 대표 아트이며, `tipofmytouge-logo.png`는 원본 프로젝트 `Logo` 폴더의 완성된 네온 로고입니다.

고양이양이(`10cat`), 서바이벌 새벽선(`-`), 책 요정(`book_`)은 GitHub Pages 공개 앱으로 연결합니다. 세 커버는 2026-09-14에 실제 공개 화면을 1280×800으로 캡처했습니다. 책 요정의 공개본은 현재 브라우저 저장과 준비된 질문을 이용하는 체험 앱입니다.

## 검증

```powershell
npm.cmd test
```
