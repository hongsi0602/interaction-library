# 팀 인터랙션 라이브러리

팀원이 만든 Spline 3D 모션·인터랙션을 한곳에 모아 미리보기하고, 바로 사용 가능한 코드를 복사해 쓸 수 있는 사이트입니다.

## 구조

- **홈** (`index.html`) — 전체 라이브러리 갤러리 + 검색
- **디스커버** (`discover.html`) — 라이브러리 탐색
- **마이파일** (`my-files.html`) — 내가 등록한 라이브러리
- **알림** (`notifications.html`) — 알림 (UI만 준비)
- **아카이브** (`archive.html`) — 보관 목록 (UI만 준비)
- **라이브러리 등록** (`register.html`) — 새 라이브러리 등록 폼
- **상세** (`detail.html?id=1`) — 미리보기 + 코드 복사

## 사용 방법

1. `index.html`을 브라우저에서 열어 홈(갤러리)을 확인합니다.
2. 카드를 클릭하면 상세 페이지로 이동해 **미리보기**와 **바로 사용 가능한 코드**를 볼 수 있습니다.
3. 상단 **라이브러리 등록**으로 Spline 공유 URL과 iframe/코드를 등록합니다.

## Spline 연동

- Spline에서 Publish 후 **Share** 링크(예: `https://my.spline.design/...` 또는 `https://app.spline.design/community/file/...`)를 복사합니다.
- 등록 시 **미리보기 URL**에 해당 링크를 넣으면 상세 페이지에서 iframe 미리보기가 재생됩니다.
- **사용할 코드**에는 팀원이 그대로 붙여 넣을 iframe 예시를 넣으면 됩니다.

```html
<iframe src='https://my.spline.design/your-scene/' frameborder='0' width='100%' height='100%'></iframe>
```

## 로컬 실행

별도 빌드 없이 HTML 파일을 직접 열면 됩니다. 로컬 파일로 열 때 일부 브라우저는 iframe/보안 제한으로 Spline 미리보기가 막힐 수 있으므로, 필요하면 로컬 서버를 띄워 사용하세요.

```bash
cd interaction-library
npx serve .
# 또는 python3 -m http.server 8080
```

## 계정·데이터

현재는 **목업 데이터**(`js/data.js`)만 사용합니다. 계정 로그인·실제 등록 저장을 쓰려면 백엔드(예: Supabase, Firebase) 또는 정적 JSON/API와 연동해 구현하면 됩니다.
