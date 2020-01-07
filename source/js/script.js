var closeBusinessBtn = document.querySelector(".tarifs-business__close"),
    tarifBusiness = document.querySelector(".tarifs-business"),
    showBusinessBtn = document.querySelector(".tarifs__show-business"),
    mainnavBtn = document.querySelector(".main-nav__button"),
    mainnavContent = document.querySelector(".main-nav__content"),
    countryChoose = document.querySelector("#country-3"),
    countryCloseBtn = document.querySelector(".country-select--choose .country-select__button-delete"),
    countryBtnWrapper = document.querySelector(".country-select--choose"),
    countryDropdown = document.querySelector(".step__countries-wrapper"),
    mainNavBtn = document.querySelector(".main-nav__button"),
    logoWrapper = document.querySelectorAll(".logo__wrapper"),
    mainVavBtnIcon = document.querySelectorAll(".main-nav__button-icon");
    pageHeader = document.querySelector(".page-header"),
    countryFilterCloseBtn = document.querySelector(".country-filter__close-btn"),
    countryFilterOpenBtn = document.querySelector(".country-filter__open-btn"),
    filterWrapper = document.querySelector(".page-main__filter-counter-wrapper"),
    yellowFormBtn = document.querySelectorAll(".companion-select__field-button"),
    stepCountryLetter = document.querySelectorAll(".step__country-letter"),
    countryFilterBtn = document.querySelector(".country-filter__button");

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

if(countryChoose) {
  countryChoose.addEventListener('click', function(evt) {
    evt.preventDefault();
    countryCloseBtn.classList.toggle("country-select__button-delete--closed");
    countryChoose.classList.toggle("country-select__input--darkblue");
    countryBtnWrapper.classList.toggle("country-select--opened");
    countryDropdown.classList.toggle("step__countries-wrapper--opened");
  });
}

if(mainNavBtn)
{
  mainNavBtn.addEventListener('click', function(evt) {
    evt.preventDefault();
    if(logoWrapper) {
      for(var a=0; a<logoWrapper.length; a++) {
        logoWrapper[a].classList.toggle("logo__wrapper--closed"); //меняем лого синее/белое
      }
    }
    if(mainVavBtnIcon) {
      for(var b=0; b<mainVavBtnIcon.length; b++) {
        mainVavBtnIcon[b].classList.toggle("main-nav__button-icon--closed"); //меняем бургер/крестик
      }
    }
    pageHeader.classList.toggle("page-header--closed"); // меняем бг синий/белый
  });
}

if(countryFilterCloseBtn) { // показываем расширенное меню каталога
  countryFilterCloseBtn.addEventListener('click', function(evt) {
    evt.preventDefault();
    filterWrapper.classList.toggle("page-main__filter-counter-wrapper--closed");
  });
}

if(countryFilterOpenBtn) { // показываем расширенное меню каталога
  countryFilterOpenBtn.addEventListener('click', function(evt) {
    evt.preventDefault();
    filterWrapper.classList.toggle("page-main__filter-counter-wrapper--closed");
  });
}

if(yellowFormBtn) { // закрываем/открываем пункты жёлтого меню
  for(var a=0; a<yellowFormBtn.length; a++) {
    yellowFormBtn[a].addEventListener('click', function(evt) {
      evt.preventDefault();
      this.parentElement.classList.toggle("companion-select__field--closed");
    });
  }
}

if(stepCountryLetter) { // делаем кнопку выбора букв стран активной при нажатии
  for(var a=0; a<stepCountryLetter.length; a++) {
    stepCountryLetter[a].addEventListener("click", function(evt) {
      evt.preventDefault();
      document.querySelector(".country-alphabet__item--current").classList.remove("country-alphabet__item--current");
      this.parentElement.classList.toggle("country-alphabet__item--current");
    })
  }
}

if(countryFilterBtn) {
  countryFilterBtn.addEventListener("click", function(evt) {
    evt.preventDefault();
    filterWrapper.classList.add("page-main__filter-counter-wrapper--closed");
  });
}

window.addEventListener('scroll', function() { //scroll
  if(pageYOffset > 0) {
    pageHeader.classList.add("page-header--fixed");
  }
  else {
    pageHeader.classList.remove("page-header--fixed");
  }
});
