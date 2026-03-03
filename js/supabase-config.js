/**
 * Supabase 설정 — 업로드를 모든 사용자가 볼 수 있게 하려면 아래 값을 채우세요.
 * url: Settings → General 에서 Project URL
 * anonKey: Settings → API Keys → "Legacy anon, service_role API keys" 탭에서 anon 키 (eyJ... 로 시작) 전체 복사
 */
(function () {
  window.__SUPABASE__ = {
    url: 'https://scmpnitloogpjfpgghfr.supabase.co',
    anonKey: 'sb_publishable_W_zsEsdM2H5_uHlqB4x-yA_eApjx6p3'  // 다른 브라우저에서 안 보이면 → Legacy anon(eyJ...)으로 교체 (SUPABASE-SETUP.md 참고)
  };
})();
