(function () {
  const wrapEl = document.querySelector(".wrap");
  const FULL_HEART = '<i class="fa-solid fa-heart full_heart"></i>';
  const EMPTY_HEART = '<i class="fa-regular fa-heart empty_heart"></i>';

  const heartHandelr = (e) => {
    const heartEl = e.target.parentNode;

    if (e.target.classList.contains("empty_heart")) {
      heartEl.innerHTML = FULL_HEART;
    } else if (e.target.classList.contains("full_heart")) {
      heartEl.innerHTML = EMPTY_HEART;
    }
  };

  wrapEl.addEventListener("click", heartHandelr);
})();
