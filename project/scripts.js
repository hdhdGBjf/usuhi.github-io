// Переход на страницу теста
function startTest() {
  // Плавный переход (бесшовно) на другую страницу
  window.location.href = "test.html";
}

// Скрипт для карусели статей
document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector(".carousel");
  const articles = document.querySelectorAll(".article");

  // Центрирование статьи при клике
  articles.forEach(article => {
      article.addEventListener("click", () => {
          // Сброс активного состояния у всех статей
          articles.forEach(a => a.classList.remove("open"));

          // Добавление класса 'open' для раскрытия статьи
          article.classList.add("open");

          // Проверка, существует ли уже оверлей
          let existingOverlay = document.querySelector(".overlay");
          if (!existingOverlay) {
              // Создание и добавление затемняющего фона
              const overlay = document.createElement("div");
              overlay.classList.add("overlay");
              document.body.appendChild(overlay);

              // Закрытие статьи при клике на затемнённый фон
              overlay.addEventListener("click", () => {
                  article.classList.remove("open");
                  overlay.remove();
              });
          }
      });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector(".carousel");
  const articles = document.querySelectorAll(".article");

  // Центрирование статьи при клике
  articles.forEach(article => {
    article.addEventListener("click", () => {
      // Сброс активного состояния у всех статей
      articles.forEach(a => a.classList.remove("open"));

      // Добавление класса 'open' для раскрытия статьи
      article.classList.add("open");

      // Проверка, существует ли уже оверлей
      let existingOverlay = document.querySelector(".overlay");
      if (!existingOverlay) {
        // Создание и добавление затемняющего фона
        const overlay = document.createElement("div");
        overlay.classList.add("overlay");
        document.body.appendChild(overlay);

        // Закрытие статьи при клике на затемнённый фон
        overlay.addEventListener("click", () => {
          article.classList.remove("open");
          overlay.remove();
        });
      }
    });
  });
});
