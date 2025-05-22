// script.js
function checkStatus() {
  const statusEl = document.getElementById('status');
  statusEl.textContent = 'Checking...';

  // 가짜 상태 체크
  setTimeout(() => {
    statusEl.textContent = '✅ All Systems Operational';
  }, 1000);
}

// 기본 로드 시 실행
checkStatus();
