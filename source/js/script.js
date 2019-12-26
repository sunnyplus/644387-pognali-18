var closeBusinessBtn = document.querySelector(".tarifs-business__close"),
    tarifBusiness = document.querySelector(".tarifs-business"),
    showBusinessBtn = document.querySelector(".tarifs__show-business"),
    mainnavBtn = document.querySelector(".main-nav__button"),
    mainnavContent = document.querySelector(".main-nav__content"),
    countryChoose = document.querySelector("#country-3"),
    countryCloseBtn = document.querySelector(".country-select--choose .country-select__button-delete"),
    countryBtnWrapper = document.querySelector(".country-select--choose"),
    countryDropdown = document.querySelector(".step__countries-wrapper");

if(showBusinessBtn) {
  showBusinessBtn.addEventListener('click', function(evt) {
  evt.preventDefault();
  tarifBusiness.classList.add("tarifs-business--opened");
  });
}

if(closeBusinessBtn) {
  closeBusinessBtn.addEventListener('click', function(evt) {
    evt.preventDefault();
    tarifBusiness.classList.remove("tarifs-business--opened");
  });
}

mainnavBtn.addEventListener('click', function(evt) {
  evt.preventDefault();
  mainnavContent.classList.toggle("main-nav__content--closed");
});

countryChoose.addEventListener('click', function(evt) {
  evt.preventDefault();
  countryCloseBtn.classList.toggle("country-select__button-delete--closed");
  countryChoose.classList.toggle("country-select__input--darkblue");
  countryBtnWrapper.classList.toggle("country-select--opened");
  countryDropdown.classList.toggle("step__countries-wrapper--opened");
});
