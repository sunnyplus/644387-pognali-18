var closeBusinessBtn = document.querySelector(".tarifs-business__close"),
    tarifBusiness = document.querySelector(".tarifs-business"),
    showBusinessBtn = document.querySelector(".tarifs__show-business");

showBusinessBtn.addEventListener('click', function(evt) {
  evt.preventDefault();
  tarifBusiness.classList.add("tarifs-business--opened");
});

closeBusinessBtn.addEventListener('click', function(evt) {
  evt.preventDefault();
  tarifBusiness.classList.remove("tarifs-business--opened");
});
