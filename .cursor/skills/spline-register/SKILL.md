---
name: spline-register
description: Spline 씬을 팀 인터랙션 라이브러리에 등록·미리보기 넣는 절차. Spline Export, 미리보기 코드, setZoom, 썸네일/상세 구분 시 사용.
---

# Spline 등록·미리보기

Spline 씬을 이 프로젝트에 등록하거나 미리보기/썸네일을 수정할 때 따를 절차.

## 필요한 URL

| 용도 | URL | 어디서 |
|------|-----|--------|
| **런타임 (3D 재생)** | `https://prod.spline.design/.../scene.splinecode` | Spline Export → Code → Vanilla JS 에서 `app.load('...')` 안 주소 |
| **iframe 공유** | `https://app.spline.design/...` | Spline 공유/Public URL (미리보기 코드 안 쓸 때만) |

## 미리보기 코드 템플릿

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>html,body{margin:0;padding:0;height:100%;width:100%;overflow:hidden;background:#0a0a0f}</style>
</head>
<body>
  <canvas id="canvas3d"></canvas>
  <script type="module">
    import { Application } from 'https://cdn.jsdelivr.net/npm/@splinetool/runtime@1.12.61/build/runtime.js';
    const canvas = document.getElementById('canvas3d');
    const app = new Application(canvas);
    app.load('https://prod.spline.design/본인_씬_ID/scene.splinecode').then(function(){ app.setZoom(0.5); });
  </script>
</body>
</html>
```

- 썸네일/목록: `setZoom(0.5)`. 상세 페이지: `setZoom(1)` (프로젝트에서 상세만 1로 치환).
- Application 인스턴스 변수명은 `a` 또는 `app` 유지 (기존 패치가 `a.setZoom` 기준).

## 등록 폼에 넣기

1. **제목** · **설명** · (선택) **썸네일 URL** 입력.
2. **미리보기 코드**: 위 HTML 전체, `app.load('...')` 안만 scene.splinecode URL로 교체.
3. **사용할 코드**: Export에서 복사한 Vanilla/React/Next.js 코드.
4. Spline 탭이면 `isSpline: true` 저장. 업로드 id는 `upload-` 접두어.

## 코드에서 수정할 때

- **data.js**: `SPLINE_RUNTIME_EMBED` 에 `app.load(...).then(function(){a.setZoom(0.5);});` 포함.
- **register.html**: `SPLINE_PREVIEW_TEMPLATE` 동일.
- **목록( index/discover/my-files )**: previewEmbed에 `setZoom(0.5)` 없으면 `.load("...").then(function(){a.setZoom(0.5);});` 로 패치 후 srcdoc 설정.
- **상세( detail.html )**: srcdoc 넣을 때 `setZoom(0.5)` → `setZoom(1)` 로 치환.

## 참고

- 상세 가이드: 프로젝트 루트 `SPLINE-등록-가이드.md`, `SPLINE-PREVIEW.md`.
