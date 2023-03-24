// header dropdown
document.querySelectorAll(".dropdown__simplebar").forEach(dropdown => {
  new SimpleBar(dropdown, {
    autoHide: false,
    scrollbarMaxSize: 40,
  });
})

const btns = document.querySelectorAll(".header__bottom-btn");
const dropdowns = document.querySelectorAll(".dropdown");
const activeClassdropdowns = "dropdown__active";
const activeClassbtns = "btn__active";

btns.forEach(item => {
  item.addEventListener("click", function () {
    let DropThis = this.parentElement.querySelector(".dropdown");
    dropdowns.forEach(el => {
      if (el != DropThis) {
        el.classList.remove(activeClassdropdowns)
      }
    });
    btns.forEach(el => {
      if (el != this) {
        el.classList.remove(activeClassbtns)
      }
    });
    DropThis.classList.toggle(activeClassdropdowns);
    this.classList.toggle(activeClassbtns);
  })
})

// click dropdown
window.addEventListener('click', e => {
  const target = e.target
  if (!target.closest('.header__bottom-list')) {
    document.querySelector(".header__bottom-list").querySelectorAll(".dropdown").forEach(el => {
      el.classList.remove("dropdown__active");
    })
  }
})

// header search
document.addEventListener('DOMContentLoaded', (e) => {
  document.getElementById('open-search-form').addEventListener('click', (e) => {
    document.getElementById('search-form').classList.add('search-form_show')
  })

  document.getElementById('search-form-close').addEventListener('click', (e) => {
    document.getElementById('search-form').classList.remove('search-form_show')
  })

  document.getElementById('search-form').addEventListener('submit', (e) => {
    e.preventDefault()
  })
})

// gallery select
const element = document.querySelector('.gallery__select');
const choices = new Choices(element, {
  searchEnabled: false,
  shouldSort: false,
  placeholder: true,
  duplicateItemsAllowed: false,
});


// hero swiper
var swiper = new Swiper('.hero__swiper', {
  loop: true,
  slidesPerView: 1,
  speed: 7000,
  spaceBetween: 0,
  effect: 'fade',
  autoplay: {
    delay: 8000,
    disableOnInteraction: false,
  },
});

// gallery swiper
var swiper = new Swiper('.gallery__swiper', {

  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    clickable: true,
  },
  a11y: false,
  keyboard: {
    enabled: true,
    onlyInViewport: true
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    680: {
      slidesPerView: 2,
      spaceBetween: 35,
      slidesPerGroup: 2,
    },
    840: {
      slidesPerView: 3,
      spaceBetween: 32,
      slidesPerGroup: 2,
    },
    992: {
      slidesPerView: 2,
      spaceBetween: 35,
      slidesPerGroup: 2,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 20,
      slidesPerGroup: 3,
    },
    1400: {
      slidesPerView: 3,
      spaceBetween: 34,
      slidesPerGroup: 3,
    },
    1600: {
      slidesPerView: 3,
      spaceBetween: 43,
      slidesPerGroup: 3,
    },
    1920: {
      slidesPerView: 3,
      spaceBetween: 50,
      slidesPerGroup: 3,
    },
    2000: {
      slidesPerView: 3,
      spaceBetween: 120,
      slidesPerGroup: 3,
    },
    2100: {
      slidesPerView: 4,
      spaceBetween: 50,
      slidesPerGroup: 4,
    }

  }
});

// catalog tab
let tabsBtn = document.querySelectorAll('.catalog__btn-art');
let tabsItem = document.querySelectorAll('.catalog__tab');

tabsBtn.forEach(function (element) {
  element.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function (btn) { btn.classList.remove('catalog__btn-art--active') });
    e.currentTarget.classList.add('catalog__btn-art--active');

    tabsItem.forEach(function (element) { element.classList.remove('catalog__tab--active') });
    document.querySelector(`[data-target="${path}"]`).classList.add('catalog__tab--active');
  })
});

// catalog accordion
new Accordion('.accordion-container', {
  openOnInit: [0],
});

let tabsEl = document.querySelectorAll('.catalog__accordion-btn');
let tabsIt = document.querySelectorAll('.catalog__tab');

tabsEl.forEach(function (element) {
  element.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;

    tabsEl.forEach(function (btn) { btn.classList.remove('catalog__accordion-btn--active') });
    e.currentTarget.classList.add('catalog__accordion-btn--active');

    tabsIt.forEach(function (element) { element.classList.remove('catalog__tab--active') });
    document.querySelector(`[data-target="${path}"]`).classList.add('catalog__tab--active');
  })
});

// events swiper
var swiper = new Swiper('.events__swiper', {
  navigation: {
    nextEl: '.events__swiper-button-next',
    prevEl: '.events__swiper-button-prev',
    clickable: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
      slidesPerGroup: 1,
    },
    700: {
      spaceBetween: 40,
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    1000: {
      spaceBetween: 27,
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
    1200: {
      spaceBetween: 35,
    },
    1400: {
      spaceBetween: 40,
    },
    1600: {
      spaceBetween: 50,
      slidesPerView: 3,
      slidesPerGroup: 3,
    }
  }
});

// projects swiper
var swiper = new Swiper('.projects__swiper', {
  navigation: {
    nextEl: '.projects__swiper-button-next',
    prevEl: '.projects__swiper-button-prev',
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1
    },
    600: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1000: {
      slidesPerView: 2,
      spaceBetween: 50,
      slidesPerGroup: 2
    },
    1600: {
      slidesPerView: 3,
      spaceBetween: 50,
      slidesPerGroup: 3
    }
  }
});

// projects tooltip
tippy('.tooltip1', {
  content: "Пример современных тенденций — современная методология разработки",
  placement: 'top',
  arrow: true,
  maxWidth: 264,
  theme: 'violet',
});

tippy('.tooltip2', {
  content: "Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции",
  placement: 'top',
  arrow: true,
  maxWidth: 264,
  theme: 'violet',
});

tippy('.tooltip3', {
  content: "В стремлении повысить качество",
  placement: 'top',
  arrow: true,
  maxWidth: 264,
  theme: 'violet',
});

// form validate
let selector = document.querySelector("#tel");
let im = new Inputmask("+375 (99) 999-99-99");
im.mask(selector);

let validation = new JustValidate('#form')

validation.addField("#name", [
  {
    rule: 'required',
    errorMessage: "Вы не ввели имя"
  },
  {
    rule: 'minLength',
    value: 2,
    errorMessage: "Слишком короткое имя"
  },
  {
    rule: 'maxLength',
    value: 16,
    errorMessage: "Слишком длинное имя"
  }
])

  .addField("#tel", [
    {
      validator: (value) => {
        const phone = selector.inputmask.unmaskedvalue();
        return Boolean(Number(phone) && phone.length > 0)
      },
      errorMessage: "Вы не ввели телефон"
    },
    {
      validator: (value) => {
        const phone = selector.inputmask.unmaskedvalue();
        return Boolean(Number(phone) && phone.length === 9)
      },
      errorMessage: "Введите телефон полностью"
    }
  ])


// header burger
let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__burger');
let menuLinks = menu.querySelectorAll('.header__top-link');

burger.addEventListener('click',
  function () {
    burger.classList.toggle('burger--active');
    menu.classList.toggle('header__burger--active');
    document.body.classList.toggle('stop-scroll');
  })

menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {
    burger.classList.remove('burger--active');
    menu.classList.remove('header__burger--active');
    document.body.classList.remove('stop-scroll');
  })
})

// map
ymaps.ready(init);
function init() {
  var myMap = new ymaps.Map("myMap",
    {
      center: [55.758468, 37.601088],
      zoom: 14,
      controls: ["geolocationControl", "zoomControl"]
    },
    {
      suppressMapOpenBlock: true,
      geolocationControlSize: "large",
      geolocationControlPosition: { top: "300px", right: "20px" },
      geolocationControlFloat: "none",
      zoomControlSize: "small",
      zoomControlFloat: "none",
      zoomControlPosition: { top: "200px", right: "20px" }
    }
  );

  var myPlacemark = new ymaps.Placemark([55.758468, 37.601088], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/map-icon.svg',
    iconImageSize: [20, 20],
    iconImageOffset: [-15, -27]
  });

  myMap.behaviors.disable("scrollZoom");
  myMap.geoObjects.add(myPlacemark);
  myMap.container.fitToViewport();
}
