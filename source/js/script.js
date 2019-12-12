var closeBusinessBtn = document.querySelector(".tarifs-business__close"),
    tarifBusiness = document.querySelector(".tarifs-business"),
    showBusinessBtn = document.querySelector(".tarifs__show-business"),
    mainnavBtn = document.querySelector(".main-nav__button"),
    mainnavContent = document.querySelector(".main-nav__content");

showBusinessBtn.addEventListener('click', function(evt) {
  evt.preventDefault();
  tarifBusiness.classList.add("tarifs-business--opened");
});

closeBusinessBtn.addEventListener('click', function(evt) {
  evt.preventDefault();
  tarifBusiness.classList.remove("tarifs-business--opened");
});

mainnavBtn.addEventListener('click', function(evt) {
  evt.preventDefault();
  mainnavContent.classList.toggle("main-nav__content--closed");
});
