# 팀 인터랙션 라이브러리

Spline 3D·인터랙션을 모아 미리보기하고, 사용 코드를 복사해 쓸 수 있는 사이트.

## 구조

| 페이지 | 파일 | 설명 |
|--------|------|------|
| 홈 | `index.html` | 갤러리 + 검색 |
| 디스커버 | `discover.html` | 탐색 |
| 마이파일 | `my-files.html` | 내가 등록한 항목 |
| 업로드 | `register.html` | 새 라이브러리 등록 |
| 상세 | `detail.html#id` | 미리보기 + 코드 복사 |
| 알림/아카이브 | `notifications.html`, `archive.html` | UI만 준비 |

## 실행

```bash
# 로컬 서버 (iframe/스크립트 제한 회피)
npx serve .
# 또는 python3 -m http.server 8080
```

브라우저에서 `index.html` 또는 `http://localhost:포트` 로 접속.

## 데이터

- 목업: `js/data.js` (LIBRARIES + 업로드)
- **업로드를 모든 사용자가 보게 하려면**: [SUPABASE-SETUP.md](SUPABASE-SETUP.md) 참고해 Supabase 프로젝트 생성 후 `js/supabase-config.js`에 URL·anon key를 넣으면, 업로드가 Supabase에 저장되어 공개됩니다.
- 설정하지 않으면 업로드는 브라우저 localStorage에만 저장됩니다 (본인 기기에서만 표시).

## 무료 배포 (정적 사이트)

이 프로젝트는 HTML/CSS/JS만 있어서 **무료**로 배포할 수 있다. 아래 중 하나만 골라 쓰면 된다.

### 1. GitHub Pages (추천)

- **비용**: 무료
- **URL**: `https://사용자명.github.io/interaction-library/`

1. GitHub에 저장소 만들고 코드 푸시
   ```bash
   git remote add origin https://github.com/사용자명/interaction-library.git
   git add .
   git commit -m "Deploy"
   git push -u origin main
   ```
2. 저장소 **Settings** → **Pages** → Source: **Deploy from a branch**
3. Branch: `main`, Folder: **/ (root)** → Save
4. 1–2분 후 위 URL로 접속

### 2. Netlify

- **비용**: 무료 (월 트래픽 등 제한 있음)
- [netlify.com](https://www.netlify.com) → **Add new site** → **Import an existing project** → GitHub 연동 후 이 저장소 선택 → Build 설정 없이 **Deploy** (정적이라 빌드 불필요)

### 3. Vercel

- **비용**: 무료
- [vercel.com](https://vercel.com) → **Add New** → **Project** → GitHub 연동 후 이 저장소 선택 → **Deploy** (기본 설정 그대로)

---

> GitHub Pages 사용 시 `.nojekyll` 파일이 있으면 Jekyll 없이 정적 파일만 서빙된다.

## 참고

- Spline 등록: [SPLINE-등록-가이드.md](SPLINE-등록-가이드.md)
- 롤백: [ROLLBACK.md](ROLLBACK.md)
