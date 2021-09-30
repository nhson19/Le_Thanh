const btnHeader = document.querySelector(".btn-header");
const container = document.querySelector(".container");
const ringImg = document.querySelector(".ring-img");
const loveBtns = document.querySelectorAll(".btn-love");
const loveText = document.querySelector(".love-text");
const btnOK = document.querySelector(".btn-ok");
const sonImg = document.querySelector(".son-img");
const daughterImg = document.querySelector(".daughter-img");
const dalatImg = document.querySelector(".dalat-img");
const body = document.querySelector("body");
const song = document.querySelector(".song");

btnHeader.addEventListener("click", () => {
  btnHeader.classList.add("hidden");
  loveText.innerText = "Anh yêu em";

  setTimeout(() => {
    loveText.innerText = "Em có yêu anh khum ???";

    loveBtns.forEach((btn) => {
      btn.classList.remove("hidden");
    });
  }, 3000);
});

loveBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    loveBtns.forEach((btn) => {
      btn.classList.add("hidden");
    });
    loveText.innerText = "Vậy thì cưới anh";
    ringImg.classList.remove("hidden");
    btnOK.classList.remove("hidden");
  });
});

btnOK.addEventListener("click", () => {
  song.currentTime = 100;
  song.play();
  loveText.innerText = "Rồi mình có một đứa con trai";
  ringImg.classList.add("hidden");
  btnOK.classList.add("hidden");
  sonImg.classList.remove("hidden");

  setTimeout(() => {
    loveText.innerText = "Với một đứa con gái nữa";
    daughterImg.classList.remove("hidden");
    sonImg.classList.add("hidden");
  }, 3000);

  setTimeout(() => {
    loveText.innerText = "Rồi mình lên Đà Lạt tới cuối đời";
    daughterImg.classList.add("hidden");
    // dalatImg.classList.remove("hidden")
    body.style.backgroundImage = "url('./img/dalat.jpg')";
    // body.style.backgroundPosition = "center"
    body.style.backgroundRepeat = "no-repeat";
    body.style.backgroundSize = "cover";
  }, 6000);
});
