/**
 * 공통: 모바일 사이드바 토글
 * .sidebar-toggle 클릭 시 body.sidebar-open 토글, .sidebar-overlay 클릭 시 닫기
 */
(function () {
  var toggle = document.querySelector('.sidebar-toggle');
  var overlay = document.querySelector('.sidebar-overlay');
  var body = document.body;

  if (toggle) {
    toggle.addEventListener('click', function () {
      body.classList.toggle('sidebar-open');
    });
  }
  if (overlay) {
    overlay.addEventListener('click', function () {
      body.classList.remove('sidebar-open');
    });
  }
  // 사이드바 내 링크 클릭 시에도 닫기 (모바일에서 페이지 이동 후 메뉴 자동 닫힘)
  document.querySelectorAll('.app-sidebar a').forEach(function (a) {
    a.addEventListener('click', function () {
      body.classList.remove('sidebar-open');
    });
  });
})();
