# Spline 3D 미리보기 설정 가이드

상세 페이지에서 Spline 3D가 재생되려면 **Spline에서 Export한 씬 URL**을 프로젝트에 넣어야 합니다.

## 필요한 것 (한 가지)

Spline 에디터에서 **Export → Code → Vanilla JS**로 내보내면 생성되는 **씬 URL** 하나면 됩니다.

- 형식: `https://prod.spline.design/XXXXXXXX/scene.splinecode`
- 이 주소가 “미리보기에 쓸 코드”입니다. (iframe 공유 링크 `app.spline.design/...` 와는 다릅니다.)

---

## 1. Spline에서 URL 받기

1. [Spline](https://spline.design)에서 씬을 연다.
2. 상단 툴바에서 **Export** 클릭.
3. 왼쪽에서 **Code** 선택.
4. 상단 드롭다운에서 **Vanilla JS** 선택.
5. **URL이 생성될 때까지 대기** (토스트 알림으로 “URL이 준비되었습니다” 표시).
6. 표시된 **Public URL** 또는 **scene.splinecode** 링크를 복사한다.  
   예: `https://prod.spline.design/MVUWyFQlqNelnSzx/scene.splinecode`

이 URL이 **미리보기에 필요한 전부**입니다. 이걸 프로젝트에 넣으면 됩니다.

---

## 2. 이 프로젝트에 반영하기

### 방법 A: `js/data.js`에서 기존 Spline 예시 수정 (CORE7 등)

- **SPLINE_SCENECODE_URL**을 본인 씬 URL로 바꾼다.

```js
// js/data.js 상단
var SPLINE_SCENECODE_URL = 'https://prod.spline.design/여기에_본인_씬_ID/scene.splinecode';
```

- **SPLINE_VIEWER_URL**은 “iframe으로 보기”용 공유 링크일 때만 사용한다.  
  미리보기는 **SPLINE_RUNTIME_EMBED**가 **SPLINE_SCENECODE_URL**로 씬을 로드하므로, **SPLINE_SCENECODE_URL만 올바르면** 3D 미리보기가 동작한다.

### 방법 B: 새 라이브러리로 등록

- **미리보기 코드(previewEmbed)** 에는 아래 템플릿을 쓰고, `YOUR_SCENE.splinecode` 부분만 Spline에서 복사한 URL로 교체한다.

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
    app.load('https://prod.spline.design/YOUR_SCENE_ID/scene.splinecode');
  </script>
</body>
</html>
```

- 등록 화면의 **미리보기 코드**란에 위 HTML 전체를 붙여넣고, `app.load('...')` 안의 URL만 본인 **scene.splinecode** 주소로 바꾸면 된다.

---

## 3. 두 종류의 Spline URL 정리

| 용도 | URL 예시 | 어디서 쓰나 |
|------|----------|-------------|
| **미리보기/런타임 (필요한 것)** | `https://prod.spline.design/.../scene.splinecode` | Export → Code → Vanilla JS 후 표시되는 주소. `Application#load()` 에 넣는 값. |
| **iframe 공유 링크** | `https://app.spline.design/community/file/...` | Spline에서 “공유”로 복사한 링크. iframe `src`로만 사용. |

- **미리보기가 “실제 3D 재생”**이 되게 하려면 반드시 **scene.splinecode** 주소를 쓰고, 위 미리보기 코드(또는 `SPLINE_RUNTIME_EMBED`)에 넣어야 한다.
- `app.spline.design/...` 링크만 넣으면 “iframe으로 Spline 웹 플레이어”를 띄우는 방식이라, 현재 이 사이트의 “실행형 미리보기” 구조와는 다르다. 둘 다 지원하려면 데이터에 **previewEmbed**(scene.splinecode 기반)와 **previewUrl**(app.spline 링크)를 구분해서 넣으면 된다.

---

## 4. 그래도 안 될 때

- **브라우저 콘솔(F12)** 에서 iframe/스크립트·CORS 에러가 나는지 확인.
- **로컬에서 file:// 로 열면** 스크립트/보안 제한으로 실패할 수 있음.  
  `npx serve .` 또는 `python -m http.server` 로 로컬 서버를 띄운 뒤 `http://localhost:...` 로 접속해 본다.
- Spline 씬이 **비공개**이면 외부에서 로드되지 않을 수 있음. Export 시 공개(Public) URL이 생성되는지 확인.
- **예시 URL**(예: `MVUWyFQlqNelnSzx`)은 만료되었을 수 있음. **본인 씬으로 Export한 URL**로 교체해야 미리보기가 보인다.

요약: **Spline에서 Export → Code → Vanilla JS 로 받은 `scene.splinecode` URL을 가져와서 미리보기 코드(또는 SPLINE_SCENECODE_URL)에 넣으면** 3D 미리보기가 가능하다.
