# Spline 미리보기

## URL 구분

| 용도 | URL | 사용처 |
|------|-----|--------|
| **런타임 (3D 재생)** | `https://prod.spline.design/.../scene.splinecode` | Export → Code → Vanilla JS 에서 복사. `Application#load()` 에 넣음. |
| **iframe 공유** | `https://app.spline.design/...` | Spline 공유 링크. iframe `src` 전용. |

실제 3D 미리보기 = **scene.splinecode** 를 미리보기 코드(HTML)에 넣어야 함.

## data.js 에서 예시 씬 바꾸기

```js
var SPLINE_SCENECODE_URL = 'https://prod.spline.design/본인_씬_ID/scene.splinecode';
```

CORE7 등 기존 Spline 항목은 위 URL만 본인 씬으로 바꾸면 됨.

## 안 될 때

- **콘솔(F12)**: iframe/CORS/스크립트 에러 확인
- **file://** 대신 로컬 서버 사용: `npx serve .` 후 `http://localhost:...` 로 접속
- 씬이 비공개면 로드 안 됨. Export 시 Public URL 확인.
- 예시 URL 만료 시 본인 씬 URL로 교체.
