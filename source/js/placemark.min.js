ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
          center: [59.938631, 30.323055],
          zoom: 18
      }, {
          searchControlProvider: 'yandex#search'
      }),

      // Создаём макет содержимого.
      // MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
      //     '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
      // ),

      myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
          hintContent: 'Погнали',
          balloonContent: 'Санкт-Петербург, ул. Большая Конюшенная, 19/8'
      }, {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: 'default#image',
          // Своё изображение иконки метки.
          iconImageHref: '../img/map-marker.svg',
          // Размеры метки.
          iconImageSize: [54, 54],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [0, 0]
      });

  myMap.geoObjects
      .add(myPlacemark);
});
