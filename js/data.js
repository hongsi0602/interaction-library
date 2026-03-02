// 목업: 팀 인터랙션 라이브러리 데이터 (실제로는 API/백엔드 연동)
// previewEmbed: 상세 페이지에서 실제 실행되는 HTML/JS (iframe srcdoc). 있으면 URL 대신 사용.
// previewUrl: Spline 등 외부 URL일 때만 사용 (previewEmbed 없을 때)
// Spline Code Export: .splinecode URL로 런타임에서 직접 로드 (Confetti처럼 미리보기+코드 동일 경로)
// 미리보기가 안 나오면 Spline에서 Export → Code → Vanilla JS 후 나오는 scene.splinecode URL로 교체하세요. 자세한 건 SPLINE-PREVIEW.md 참고.
var SPLINE_VIEWER_URL = 'https://app.spline.design/community/file/3af9ca89-a15a-4f04-bbcb-7a32a98ac495';
var SPLINE_SCENECODE_URL = 'https://prod.spline.design/MVUWyFQlqNelnSzx/scene.splinecode';
var SPLINE_RUNTIME_EMBED = '<!DOCTYPE html><html><head><meta charset="utf-8"><style>html,body{margin:0;padding:0;height:100%;width:100%;overflow:hidden;background:#0a0a0f}</style></head><body><canvas id="canvas3d"></canvas><script type="module">import{Application}from"https://cdn.jsdelivr.net/npm/@splinetool/runtime@1.12.61/build/runtime.js";const c=document.getElementById("canvas3d");const a=new Application(c);a.load("' + SPLINE_SCENECODE_URL + '");<\/script></body></html>';
var SPLINE_IFRAME_EMBED = '<!DOCTYPE html><html><head><meta charset="utf-8"><style>html,body{margin:0;padding:0;height:100%;width:100%;overflow:hidden}</style></head><body><iframe src="' + SPLINE_VIEWER_URL + '" style="position:absolute;top:0;left:0;width:100%;height:100%;border:0" title="Spline 3D"></iframe></body></html>';

const LIBRARIES = [
  {
    id: 'confetti',
    title: 'Confetti',
    author: 'designer1',
    authorAvatar: 'D',
    views: 3200,
    likes: 210,
    thumbnail: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=600&q=80',
    previewUrl: null,
    previewEmbed: `<!DOCTYPE html><html><head><meta charset="utf-8"><style>body{margin:0;display:flex;align-items:center;justify-content:center;min-height:100vh;background:linear-gradient(180deg,#0f0f23 0%,#1a1a2e 100%);font-family:system-ui,sans-serif}.wrap{text-align:center}h1{background:linear-gradient(to bottom,#fff 30%,rgba(255,255,255,.6));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;font-size:clamp(2rem,5vw,3.5rem);font-weight:700}</style></head><body><div class="wrap"><h1>Confetti</h1></div><script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.2/dist/confetti.browser.min.js"><\/script><script>function fire(){confetti({particleCount:80,spread:70,origin:{y:0.6}})}fire();setInterval(fire,2200);<\/script></body></html>`,
    embedCode: `<script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.2/dist/confetti.browser.min.js"><\/script>
<button onclick="confetti({particleCount:100,spread:70,origin:{y:0.6}})">Confetti 🎉</button>`,
    embedCodes: {
      'HTML (스크립트)': '<script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.2/dist/confetti.browser.min.js"><\/script>\n<button onclick="confetti({particleCount:100,spread:70,origin:{y:0.6}})">Confetti 🎉</button>',
      'npm + HTML': 'npm i canvas-confetti\n\n<button id="btn">Confetti 🎉</button>\n<script type="module">import confetti from "https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.2/+esm"; document.getElementById("btn").onclick=()=>confetti({particleCount:100,spread:70,origin:{y:0.6}});<\/script>',
    },
    description: 'canvas-confetti 기반 컨페티 애니메이션. 이벤트·완료 화면 등에 바로 쓸 수 있습니다. Magic UI 스타일 참고.',
    tags: ['애니메이션', '이벤트', 'vanilla'],
    createdAt: '2025-03-01',
  },
  {
    id: '1',
    title: 'CORE7',
    author: 'hongsi',
    authorAvatar: 'H',
    views: 1240,
    likes: 89,
    thumbnail: 'https://cdn.spline.design/3af9ca89-a15a-4f04-bbcb-7a32a98ac495/thumbnail.png',
    previewUrl: SPLINE_VIEWER_URL,
    previewEmbed: SPLINE_RUNTIME_EMBED,
    embedCode: 'https://prod.spline.design/MVUWyFQlqNelnSzx/scene.splinecode',
    embedCodes: {
      'Vanilla JS': '<!-- HTML -->\n<canvas id="canvas3d"></canvas>\n\n<!-- script type="module" -->\nimport { Application } from \'@splinetool/runtime\';\n\nconst canvas = document.getElementById(\'canvas3d\');\nconst app = new Application(canvas);\napp.load(\'https://prod.spline.design/MVUWyFQlqNelnSzx/scene.splinecode\');',
      'React': 'import Spline from \'@splinetool/react-spline\';\n\nexport default function Scene() {\n  return (\n    <Spline scene="https://prod.spline.design/MVUWyFQlqNelnSzx/scene.splinecode" />\n  );\n}',
      'Next.js': 'import Spline from \'@splinetool/react-spline/next\';\n\nexport default function Home() {\n  return (\n    <main>\n      <Spline scene="https://prod.spline.design/MVUWyFQlqNelnSzx/scene.splinecode" />\n    </main>\n  );\n}',
      'iframe': '<iframe\n  src="https://app.spline.design/community/file/3af9ca89-a15a-4f04-bbcb-7a32a98ac495"\n  frameborder="0"\n  width="100%"\n  height="100%"\n  style="min-height: 400px; border-radius: 12px;"\n></iframe>',
    },
    description: 'Spline 3D 모션 CORE7. 위 미리보기는 Spline 런타임으로 실행 중입니다. 에디터에서 Export > Code로 가져온 Next.js/React 또는 Vanilla JS 코드를 그대로 사용하면 됩니다.',
    tags: ['Spline', '3D', 'React', 'Next.js'],
    createdAt: '2025-02-28',
  },
];

function getLibraryById(id) {
  return LIBRARIES.find((lib) => String(lib.id) === String(id)) || null;
}

function getLibrariesForUser(author) {
  return LIBRARIES.filter((lib) => lib.author === author);
}
