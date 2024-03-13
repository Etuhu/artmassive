//Слайдеры
new Swiper(".promo-swiper", {
	slidesPerView: 1,
	slidesPerGroup: 1,
	speed: 1000,
	simulateTouch: true,
	touchReleaseOnEdges: true,
	// autoplay: {
	//     delay: 5000,
	// },
	spaceBetween: 0,
	watchOverflow: true,
	pagination: {
		el: ".promo-swiper-pagination",
		clickable: "true",
	},
	navigation: {
		nextEl: ".promo-swiper-button-next",
		prevEl: ".promo-swiper-button-prev",
	},
});

new Swiper(".blog-item-page-swiper", {
	slidesPerView: 1,
	slidesPerGroup: 1,
	speed: 1000,
	simulateTouch: true,
	touchReleaseOnEdges: true,
	spaceBetween: 0,
	watchOverflow: true,
	pagination: {
		el: ".blog-item-page-swiper-pagination",
		clickable: "true",
		type: "fraction"
	},
	navigation: {
		nextEl: ".blog-item-page-swiper-button-next",
		prevEl: ".blog-item-page-swiper-button-prev",
	},
});

//Параметры для типового слайдера с карточками товаров
let productSliderParams = {
	slidesPerView: 5.5,
	slidesPerGroup: 1,
	speed: 500,
	grabCursor: true,
	simulateTouch: true,
	spaceBetween: 0,
	watchOverflow: true,
	touchReleaseOnEdges: true,
	slidesOffsetBefore: -30,
	freeMode: {
		enabled: true,
	},
	navigation: {},
	pagination: {},
	breakpoints: {
		300: {
			slidesPerView: 1.5,
			slidesPerGroup: 1,
			spaceBetween: 0,
			slidesOffsetBefore: -14,
		},
		450: {
			slidesPerView: 2,
			slidesOffsetBefore: -14,
		},
		768: {
			slidesPerView: 2.5,
			slidesOffsetBefore: -18,
		},
		992: {
			slidesPerView: 3.5,
			slidesOffsetBefore: -18,
		},
		1200: {
			slidesPerView: 3.5,
			slidesOffsetBefore: -18,
		},
		1400: {
			slidesPerView: 4,
			slidesOffsetBefore: -20,
		},
		1600: {
			slidesPerView: 4.5,
			slidesOffsetBefore: -20,
		},
		1921: {
			slidesPerView: 5.5,
			slidesOffsetBefore: -30,
		},
	},
};

//Заменяем параметры навигационных кнопок для слайдера с топовыми товарами на главной и инициализируем слайдер
productSliderParams.navigation.nextEl = ".top-product-swiper-button-next";
productSliderParams.navigation.prevEl = ".top-product-swiper-button-prev";
new Swiper(".top-product-swiper", productSliderParams);

//Заменяем параметры навигационных кнопок для слайдера с выгодными товарами на главной и инициализируем слайдер
productSliderParams.navigation.nextEl = ".sales-swiper-button-next";
productSliderParams.navigation.prevEl = ".sales-swiper-button-prev";
new Swiper(".sales-swiper", productSliderParams);

new Swiper(".partners-swiper", {
	slidesPerView: 6,
	slidesPerGroup: 1,
	speed: 500,
	simulateTouch: true,
	autoplay: {
		delay: 2000,
		disableOnInteraction: false,
	},
	loop: true,
	spaceBetween: 194,
	watchOverflow: true,
	touchReleaseOnEdges: true,
	// loopAddBlankSlides: false,
	breakpoints: {
		300: {
			slidesPerView: 3,
			slidesPerGroup: 1,
			spaceBetween: 20,
		},
		576: {
			slidesPerView: 3,
			spaceBetween: 50,
		},
		768: {
			slidesPerView: 4,
			slidesPerGroup: 1,
			spaceBetween: 50,
		},
		992: {
			slidesPerView: 5,
			slidesPerGroup: 1,
			spaceBetween: 50,
		},
		1200: {
			slidesPerView: 6,
			slidesPerGroup: 1,
			spaceBetween: 50,
		},
		1400: {
			spaceBetween: 75,
			slidesPerView: 6,
			slidesPerGroup: 1,
		},
		1600: {
			spaceBetween: 100,
			slidesPerView: 6,
			slidesPerGroup: 1,
		},
		1921: {
			spaceBetween: 194,
			slidesPerView: 6,
			slidesPerGroup: 1,
		},
	},
});

//Параметры для мобильного слайдера блога на главной
new Swiper(".blog-swiper", {
	slidesPerView: 2.5,
	slidesPerGroup: 1,
	speed: 500,
	grabCursor: true,
	simulateTouch: true,
	spaceBetween: 28,
	watchOverflow: true,
	touchReleaseOnEdges: true,
	slidesOffsetBefore: -20,
	freeMode: {
		enabled: true,
	},
	breakpoints: {
		300: {
			slidesPerView: 1.2,
			slidesPerGroup: 1,
			spaceBetween: 20,
			slidesOffsetBefore: -14,
		},
		400: {
			slidesPerView: 1.5,
			spaceBetween: 20,
			slidesOffsetBefore: -10,
		},
		450: {
			slidesPerView: 2.2,
			spaceBetween: 20,
			slidesOffsetBefore: -10,
		},
		768: {
			slidesPerView: 2.5,
			spaceBetween: 28,
			slidesOffsetBefore: -10,
		},
	},
});

const sliderItemThumbs = new Swiper(".catalog-item-gallery .swiper", {
	slidesPerView: 5,
	spaceBetween: 30,
	watchOverflow: true,
	touchReleaseOnEdges: true,
	navigation: {
		nextEl: ".slider__thumbs--item__next",
		prevEl: ".slider__thumbs--item__prev"
	},
	mousewheel: true,
	freeMode: true,
	breakpoints: {
		0: {
            spaceBetween: 5,
            slidesPerView: 3,
            mousewheel: false,
		},
		576: {
            spaceBetween: 10,
            slidesPerView: 3,
		},
		768: {
            slidesPerView: 3,
            spaceBetween: 10,
		},
        992: {
            spaceBetween: 15,
            slidesPerView: 3,
        },
        1200: {
            spaceBetween: 15,
            slidesPerView: 3.5,
			mousewheel: true,
        },
        1400: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        1700: {
            spaceBetween: 20,
            slidesPerView: 5,
        },
        1921: {
            spaceBetween: 30,
            slidesPerView: 5,
        }
	}
});


const sliderItemImages = new Swiper('.slider__images--item .swiper', {
	slidesPerView: 1,
	spaceBetween: 0,
	mousewheel: false,
	grabCursor: true,
	watchOverflow: true,
	touchReleaseOnEdges: true,
	pagination: {
		el: '.slider__images--item-pagination',
		clickable: true
	},
	thumbs: {
		swiper: sliderItemThumbs,
	},
});


//Прилипающая шапка
let headerIndex = document.querySelector(".header--index");
function onWindowScroll() {
	if (window.scrollY > headerIndex.clientHeight * 3) {
		headerIndex.classList.add("white");
	} else {
		headerIndex.classList.remove("white");
	}
}

if (headerIndex) {
	window.addEventListener("scroll", onWindowScroll);
	window.addEventListener("DOMContentLoaded", onWindowScroll);
}

//Кнопка прокрутки наверх
var scrollButton = document.getElementById("top-button");
function trackScroll() {
	var scrolled = window.pageYOffset;
	var coords = document.documentElement.clientHeight;

	if (scrolled > coords / 2) {
		scrollButton.classList.add("show");
	}
	if (scrolled < coords / 2) {
		scrollButton.classList.remove("show");
	}
}
function backToTop() {
	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});
}

// window.addEventListener("scroll", trackScroll);
// scrollButton.addEventListener("click", backToTop);

//Подключение кастомного скролла при ширине экрана больше 991 пикселя
if ($(window).width() > 991) {
	(function ($) {
		$(window).on("load", function () {
			$(".text-content-scroll").mCustomScrollbar({
				theme: "dark",
				scrollInertia: "300",
				advanced: {
					updateOnContentResize: "true",
				},
			});
		});
	})(jQuery);
}

//Подключение маски в поле телефона
$(document).ready(function () {
	$(".phone-input").inputmask("+7 (999) 999 9999");
});

//Инициализация плавного скролла для блока с id=butter
// butter.init({
// 	wrapperId: 'butter',
// 	cancelOnTouch: true,
// 	wrapperDamper: 0.06
// });


//Удаляем лишние атрибуты у раскрывающихся пунктов мобильного меню
if ($(window).width() < 992) {
	let dropdownMenuLinks = document.querySelectorAll(".top-menu .dropdown-toggle");
	dropdownMenuLinks.forEach(function(menuLink){
		let menuLinkText = menuLink.innerHTML;
		// Создаем новый span элемент, с текстовым содержанием, аналогичным текстовому содержанию ссылки
		menuSpan = document.createElement("span");
		menuSpan.textContent = menuLinkText;
		// заменим ссылку menuLink на menuSpan
		menuLink.replaceWith(menuSpan);
	});
}

//Отображение фильтров каталога по клику на кнопку "Фильтры"
let openFiltersButton = document.getElementById("filters-open-button");
let closeFiltersButton = document.querySelector(".catalog__wrapper-filters .btn-close");
let catalogFilters = document.querySelector(".catalog__wrapper .catalog__wrapper-filters");
let body = document.body;

let openFiltersHandler = function () {
	if (!catalogFilters.classList.contains('show')) {
		catalogFilters.classList.add('show');
		body.classList.add('fixed');
	}
}

let closeFiltersHandler = function () {
	if (catalogFilters.classList.contains('show')) {
		catalogFilters.classList.remove('show');
		body.classList.remove('fixed');
	}
}

if (openFiltersButton) {
	openFiltersButton.addEventListener('click', function() {
		openFiltersHandler();
	});
}

if (closeFiltersButton) {
	closeFiltersButton.addEventListener('click', function() {
		closeFiltersHandler();
	});
}

//Открытие/закрытие блока расшаривания на странице записи блога
let sharedLinks = document.querySelectorAll(".shared-link");
if (sharedLinks) {
	sharedLinks.forEach(function(sharedLink){
		let sharedBlock = sharedLink.closest(".blog-item-page-features").querySelector(".shared-block");
		let sharedCloseButton = sharedLink.closest(".blog-item-page-features").querySelector(".shared-block-close");
		sharedLink.addEventListener("click", function(e) {
			e.preventDefault();
			if (!sharedBlock.classList.contains("show")) {
				sharedBlock.classList.add("show");
			}
		});
		sharedCloseButton.addEventListener("click", function() {
			if (sharedBlock.classList.contains("show")) {
				sharedBlock.classList.remove("show");
			}
		});
	});
}

//Карта 2GIS в контактах
let map = document.getElementById("map");

if (map) {
    DG.then(function () {
        map = DG.map("map", {
            center: [55.342993, 86.004726],
            zoom: 16,
        });
		let pinSize = [92, 108];
		let anchorValue = [46, 108];
		if ((document.documentElement.clientWidth < 768) && (document.documentElement.clientWidth > 575)) {
			pinSize = [80, 93];
			anchorValue = [40, 93];
		} else if (document.documentElement.clientWidth < 576)  {
			pinSize = [38, 45];
			anchorValue = [19, 45];
		}
        mapicon = DG.icon({
            iconUrl: "img/pin-dark.svg" /* Иконка маркера */,
            iconAnchor: anchorValue,
            className: "map-icon",
            iconSize: pinSize /* Размер иконки */,
        });
        DG.marker([55.342993, 86.004726], { icon: mapicon }).addTo(map); /* Координаты маркера */
    });
}