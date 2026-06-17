# Allpage

jeoungan의 배포 완료 프로젝트를 Steam Store 분위기로 모아보는 정적 홈페이지입니다.

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
- `type`: `game`, `experiment`, `tool`, `site`

## 캡처

배포 페이지 스크린샷은 Chrome headless로 만들었습니다.

```powershell
powershell -ExecutionPolicy Bypass -File scripts\capture-with-chrome.ps1
```

`tipofmytouge` 대표 비디오는 로컬 폴더의 `assets/opening.mp4`를 `assets/media/tipofmytouge-opening.mp4`로 복사해 사용합니다.

## 검증

```powershell
npm.cmd test
```
