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
		// sticky: true,
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
		},
		768: {
			slidesPerView: 2.5,
			slidesOffsetBefore: -20,
		},
		992: {
			slidesPerView: 3.5,
		},
		1200: {
			slidesPerView: 3.5,
		},
		1600: {
			slidesPerView: 4.5,
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
		},
		992: {
			slidesPerView: 5,
		},
		1200: {
			slidesPerView: 6,
		},
		1400: {
			spaceBetween: 75,
		},
		1600: {
			spaceBetween: 100,
		},
		1921: {
			spaceBetween: 194,
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
		// sticky: true,
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

//Прилипающая шапка
let header = document.querySelector(".header");
function onWindowScroll() {
	if (window.scrollY > header.clientHeight * 3) {
		header.classList.add("white");
	} else {
		header.classList.remove("white");
	}
}

window.addEventListener("scroll", onWindowScroll);
window.addEventListener("DOMContentLoaded", onWindowScroll);

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
		menuSpan = document.createElement('span');
		menuSpan.textContent = menuLinkText;
		// заменим ссылку menuLink на menuSpan
		menuLink.replaceWith(menuSpan);
	});
}