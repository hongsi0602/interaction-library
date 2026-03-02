# Spline 업로드 가이드

Export 화면에서 나온 값을 업로드 폼에 어떻게 넣는지 정리.

## 1. Spline에서 가져올 것

1. **Export** → **Code Export** → **Vanilla js (Web Content)**
2. `app.load('https://prod.spline.design/.../scene.splinecode')` 안의 **scene.splinecode URL** 복사
3. (선택) **Web → Public URL** 의 `https://app.spline.design/...` 복사

## 2. 폼 필드 매핑

| 폼 필드 | 넣을 값 |
|---------|---------|
| 제목 | 원하는 이름 |
| 미리보기 코드 | 아래 HTML 전체, `app.load('...')` 안만 본인 scene.splinecode URL로 교체 |
| 또는 미리보기 URL | 미리보기 코드 안 쓸 때만. Public URL (`app.spline.design/...`) |
| 사용할 코드 | Code Export에서 복사한 Vanilla/React/Next.js 코드 |
| 썸네일 (선택) | 이미지 URL |

## 3. 미리보기 코드용 HTML

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
    app.load('https://prod.spline.design/여기만_본인URL로_교체/scene.splinecode').then(function(){ app.setZoom(0.5); });
  </script>
</body>
</html>
```

- 썸네일은 `setZoom(0.5)`로 줌아웃. 상세 페이지는 1(기본).
- **방식 A (권장)**: 미리보기 코드에 위 HTML, URL만 교체. 미리보기 URL 비움.
- **방식 B**: 미리보기 코드 비우고, 미리보기 URL에 Public URL만 넣기.
