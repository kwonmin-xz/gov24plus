document.addEventListener("DOMContentLoaded", function () {
  const favoriteService = document.querySelector(".mo-main-favorite-service");
  const btnMore = document.querySelector(".mo-main-favorite-service .btn-more");
  const txt = document.querySelector(".mo-main-favorite-service .btn-more .txt");

  if (btnMore) {
    btnMore.addEventListener("click", function () {
      if (favoriteService) {
        if (favoriteService.classList.contains("on")) {
          favoriteService.classList.remove("on");
          if (txt) txt.textContent = "더보기";
        } else {
          favoriteService.classList.add("on");
          if (txt) txt.textContent = "접기";
        }
      }
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('button.toggle').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var parentLi = btn.closest('li');
      if (parentLi) {
        parentLi.classList.toggle('on');
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // 주민등록증 모바일 확인 서비스 클릭 시 모달 열기
  const link = document.querySelector('a[title="주민등록증 모바일 확인 서비스"]');
  // id에 minsung-modal-01이 포함된 모든 모달 선택
  const modals = document.querySelectorAll('[id*="minsung-modal-01"]');
  if (link && modals.length > 0) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      modals.forEach(function(modal) {
        modal.classList.add('on');
      });
    });
    // 닫기 버튼 이벤트 등록
    modals.forEach(function(modal) {
      modal.querySelectorAll('.close-modal').forEach(function(btn) {
        btn.addEventListener('click', function () {
          modal.classList.remove('on');
        });
      });
    });
  }
});