// 레퍼런스 모음 라이브러리: 원본 사이트/출처만 참조. 로컬에 데모 파일 저장·복사하지 않음.
// previewUrl: 원본 데모/뷰어 URL (iframe으로 표시). previewEmbed: 원본에서 제공하는 embed HTML이 있을 때만 (예: Spline runtime).
// embedCode/embedCodes: 해당 출처에서 제공하는 코드 스니펫 그대로 사용.
// Spline: Export → Code로 나온 scene.splinecode URL·공식 런타임 embed만 사용. SPLINE-PREVIEW.md 참고.
var SPLINE_VIEWER_URL = 'https://app.spline.design/community/file/3af9ca89-a15a-4f04-bbcb-7a32a98ac495';
var SPLINE_SCENECODE_URL = 'https://prod.spline.design/MVUWyFQlqNelnSzx/scene.splinecode';
var SPLINE_RUNTIME_EMBED = '<!DOCTYPE html><html><head><meta charset="utf-8"><style>html,body{margin:0;padding:0;height:100%;width:100%;overflow:hidden;background:#0a0a0f}</style></head><body><canvas id="canvas3d"></canvas><script type="module">import{Application}from"https://cdn.jsdelivr.net/npm/@splinetool/runtime@1.12.61/build/runtime.js";const c=document.getElementById("canvas3d");const a=new Application(c);a.load("' + SPLINE_SCENECODE_URL + '").then(function(){a.setZoom(0.5);});<\/script></body></html>';
var SPLINE_IFRAME_EMBED = '<!DOCTYPE html><html><head><meta charset="utf-8"><style>html,body{margin:0;padding:0;height:100%;width:100%;overflow:hidden}</style></head><body><iframe src="' + SPLINE_VIEWER_URL + '" style="position:absolute;top:0;left:0;width:100%;height:100%;border:0" title="Spline 3D"></iframe></body></html>';
// 서버에서는 CSP로 srcdoc 인라인 스크립트가 막힐 수 있음 → previewUrl로 별도 HTML 로드 (인라인 없음)

const LIBRARIES = [
  {
    id: 'confetti',
    title: 'Confetti',
    author: 'designer1',
    authorAvatar: 'D',
    views: 3200,
    likes: 210,
    thumbnail: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=600&q=80',
    previewUrl: 'previews/confetti.html',
    previewEmbed: null,
    sourceUrl: 'https://magicui.design/docs/components/confetti',
    embedCode: `<script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.2/dist/confetti.browser.min.js"><\/script>
<button onclick="confetti({particleCount:100,spread:70,origin:{y:0.6}})">Confetti 🎉</button>`,
    embedCodes: {
      'React (Magic UI 데모)': `"use client"

import { useRef } from "react"
import { Confetti, type ConfettiRef } from "@/registry/magicui/confetti"

export function ConfettiDemo() {
  const confettiRef = useRef<ConfettiRef>(null)

  return (
    <div className="bg-background relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border">
      <span className="pointer-events-none bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl leading-none font-semibold whitespace-pre-wrap text-transparent dark:from-white dark:to-slate-900/10">
        Confetti
      </span>

      <Confetti
        ref={confettiRef}
        className="absolute top-0 left-0 z-0 size-full"
        onMouseEnter={() => {
          confettiRef.current?.fire({})
        }}
      />
    </div>
  )
}`,
      'HTML (canvas-confetti 공식)': '<script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.2/dist/confetti.browser.min.js"><\/script>\n<button onclick="confetti({particleCount:100,spread:70,origin:{y:0.6}})">Confetti 🎉</button>',
      'npm + HTML': 'npm i canvas-confetti\n\n<button id="btn">Confetti 🎉</button>\n<script type="module">import confetti from "https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.2/+esm"; document.getElementById("btn").onclick=()=>confetti({particleCount:100,spread:70,origin:{y:0.6}});<\/script>',
    },
    description: 'Magic UI Confetti 데모 코드(React)를 그대로 참조. 이 사이트는 정적 HTML이라 미리보기는 canvas-confetti CDN으로 동일 효과를 재현하며, React 프로젝트에서는 상단 탭의 "React (Magic UI 데모)" 코드를 복사해 사용하세요.',
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

// Supabase 사용 시 원격 업로드 캐시 (모든 사용자 공유)
var uploadedLibrariesCache = [];

function getUploadedLibraries() {
  var supabase = typeof window !== 'undefined' && window.__SUPABASE__;
  if (supabase && supabase.url && supabase.anonKey) {
    return uploadedLibrariesCache;
  }
  try {
    var raw = localStorage.getItem('interaction-library-uploads');
    return raw ? JSON.parse(raw) : [];
  } catch (e) { return []; }
}

function _rowToLib(row) {
  return {
    id: row.id,
    title: row.title,
    author: row.author || 'me',
    authorAvatar: row.author_avatar || 'H',
    views: row.views || 0,
    likes: row.likes || 0,
    thumbnail: row.thumbnail || null,
    previewUrl: row.preview_url || null,
    previewEmbed: row.preview_embed || null,
    embedCode: row.embed_code || '',
    embedCodes: row.embed_codes || undefined,
    description: row.description || '',
    tags: Array.isArray(row.tags) ? row.tags : [],
    createdAt: row.created_at || new Date().toISOString().slice(0, 10),
    isSpline: !!row.is_spline
  };
}

function fetchUploadsFromSupabase() {
  var supabase = typeof window !== 'undefined' && window.__SUPABASE__;
  if (!supabase || !supabase.url || !supabase.anonKey) return Promise.resolve();
  var url = supabase.url.replace(/\/$/, '') + '/rest/v1/library_uploads?order=created_at.desc';
  return fetch(url, {
    method: 'GET',
    headers: {
      apikey: supabase.anonKey,
      Authorization: 'Bearer ' + supabase.anonKey,
      'Content-Type': 'application/json'
    }
  })
    .then(function (res) { return res.ok ? res.json() : []; })
    .then(function (rows) {
      uploadedLibrariesCache = (rows || []).map(_rowToLib);
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new Event('interaction-library-loaded'));
      }
    })
    .catch(function () { uploadedLibrariesCache = []; });
}

function saveUploadToSupabase(item) {
  var supabase = typeof window !== 'undefined' && window.__SUPABASE__;
  if (!supabase || !supabase.url || !supabase.anonKey) return Promise.reject(new Error('Supabase not configured'));
  var row = {
    id: item.id,
    title: item.title,
    author: item.author || 'me',
    author_avatar: item.authorAvatar || 'H',
    views: item.views || 0,
    likes: item.likes || 0,
    thumbnail: item.thumbnail || null,
    preview_url: item.previewUrl || null,
    preview_embed: item.previewEmbed || null,
    embed_code: item.embedCode || '',
    embed_codes: item.embedCodes || null,
    description: item.description || '',
    tags: item.tags && item.tags.length ? item.tags : [],
    created_at: (item.createdAt || '').slice(0, 10) || new Date().toISOString().slice(0, 10),
    is_spline: !!item.isSpline
  };
  var url = supabase.url.replace(/\/$/, '') + '/rest/v1/library_uploads';
  return fetch(url, {
    method: 'POST',
    headers: {
      apikey: supabase.anonKey,
      Authorization: 'Bearer ' + supabase.anonKey,
      'Content-Type': 'application/json',
      Prefer: 'return=minimal'
    },
    body: JSON.stringify(row)
  }).then(function (res) {
    if (!res.ok) return res.text().then(function (t) { throw new Error(t || res.statusText); });
  });
}

if (typeof window !== 'undefined') {
  window.saveUploadToSupabase = saveUploadToSupabase;
  if (window.__SUPABASE__ && window.__SUPABASE__.url && window.__SUPABASE__.anonKey) {
    fetchUploadsFromSupabase();
  }
}

function getAllLibraries() {
  return LIBRARIES.concat(getUploadedLibraries());
}

function getLibraryById(id) {
  return getAllLibraries().find((lib) => String(lib.id) === String(id)) || null;
}

function getLibrariesForUser(author) {
  return getAllLibraries().filter((lib) => lib.author === author);
}

// 프로젝트: localStorage에 저장 (프로젝트 목록 + 프로젝트별 레퍼런스 ID 목록)
var PROJECTS_KEY = 'interaction-library-projects';
var PROJECT_REFS_KEY = 'interaction-library-project-refs';

function getProjects() {
  try {
    var raw = localStorage.getItem(PROJECTS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) { return []; }
}

function saveProjects(projects) {
  try {
    localStorage.setItem(PROJECTS_KEY, JSON.stringify(projects));
  } catch (e) {}
}

function getProjectRefsMap() {
  try {
    var raw = localStorage.getItem(PROJECT_REFS_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (e) { return {}; }
}

function saveProjectRefsMap(map) {
  try {
    localStorage.setItem(PROJECT_REFS_KEY, JSON.stringify(map));
  } catch (e) {}
}

function getProjectRefs(projectId) {
  var map = getProjectRefsMap();
  var list = map[projectId];
  return Array.isArray(list) ? list : [];
}

function addRefToProject(projectId, libId) {
  var map = getProjectRefsMap();
  var list = map[projectId] ? map[projectId].slice() : [];
  if (list.indexOf(String(libId)) === -1) list.push(String(libId));
  map[projectId] = list;
  saveProjectRefsMap(map);
}

function removeRefFromProject(projectId, libId) {
  var map = getProjectRefsMap();
  var list = map[projectId] ? map[projectId].slice() : [];
  list = list.filter(function (id) { return id !== String(libId); });
  map[projectId] = list;
  saveProjectRefsMap(map);
}

function createProject(name) {
  var projects = getProjects();
  var id = 'project-' + Date.now();
  projects.push({ id: id, name: String(name || '새 프로젝트').trim() || '새 프로젝트', createdAt: new Date().toISOString() });
  saveProjects(projects);
  return id;
}

function getProjectById(id) {
  return getProjects().find(function (p) { return p.id === id; }) || null;
}

function updateProjectName(projectId, name) {
  var projects = getProjects();
  var i = projects.findIndex(function (p) { return p.id === projectId; });
  if (i !== -1) {
    projects[i].name = String(name || '').trim() || projects[i].name;
    saveProjects(projects);
  }
}

function deleteProject(projectId) {
  saveProjects(getProjects().filter(function (p) { return p.id !== projectId; }));
  var map = getProjectRefsMap();
  delete map[projectId];
  saveProjectRefsMap(map);
}
