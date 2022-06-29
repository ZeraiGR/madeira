/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Autoplay, Keyboard, EffectFade, Pagination, Navigation, Thumbs} from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Добавление классов слайдерам
// swiper главному блоку, swiper-wrapper оболочке, swiper-slide для слайдов
function bildSliders() {
	//BildSlider
	let sliders = document.querySelectorAll('[class*="__swiper"]:not(.swiper-wrapper)');
	if (sliders) {
		sliders.forEach(slider => {
			slider.parentElement.classList.add('swiper');
			slider.classList.add('swiper-wrapper');
			for (const slide of slider.children) {
				slide.classList.add('swiper-slide');
			}
		});
	}
}
// Инициализация слайдеров
function initSliders() {
	// Добавление классов слайдера
	// при необходимости отключить
	bildSliders();

	
	if (document.querySelector('.swiper')) {
		new Swiper('.tours__slider', {
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation],
			/*
			effect: 'fade',
			*/
			observer: true,
			observeParents: true,
			slidesPerView: 'auto',
			spaceBetween: 50,
			speed: 800,
			loop: true,
			centeredSlides: true,
			//touchRatio: 0,
			//simulateTouch: false,
			// loop: false,
			//preloadImages: false,
			//lazy: true,
			// Dotts
			//pagination: {
			//	el: '.slider-quality__pagging',
			//	clickable: true,
			//},
			// Arrows
			navigation: {
				nextEl: '.tours__button-prev',
				prevEl: '.tours__button-next',
			},
			breakpoints: {
				320: {
					centeredSlides: false,
					spaceBetween: 20,
				},
				768: {
					centeredSlides: true,
					spaceBetween: 30,
				},
				1024: {
					spaceBetween: 40,
				},
				1366: {
					spaceBetween: 50,
				}
			},
		
			on: {

			}
		});
		if (window.innerWidth <= 991) {
			new Swiper('.howitwork__slider', {
				// Подключаем модули слайдера
				// для конкретного случая
				/*
				effect: 'fade',
				*/
				modules: [Navigation],
				observer: true,
				observeParents: true,
				slidesPerView: 'auto',
				spaceBetween: 20,
				speed: 800,
				//touchRatio: 0,
				//simulateTouch: false,
				//preloadImages: false,
				//lazy: true,
				// Dotts
				//pagination: {
				//	el: '.slider-quality__pagging',
				//	clickable: true,
				//},
				// Arrows
				navigation: {
					nextEl: '.howitwork__button-next',
					prevEl: '.howitwork__button-prev',
				},
				breakpoints: {
					320: {
						spaceBetween: 15,
					},
					525: {
						spaceBetween: 20,
					}
				},
			
				on: {

				}
			});
		}
		if (window.innerWidth <= 768) {
			new Swiper('.about__slider', {
				// Подключаем модули слайдера
				// для конкретного случая
				/*
				effect: 'fade',
				*/
				observer: true,
				observeParents: true,
				slidesPerView: 'auto',
				spaceBetween: 20,
				speed: 800,
				//touchRatio: 0,
				//simulateTouch: false,
				//preloadImages: false,
				//lazy: true,
				// Dotts
				//pagination: {
				//	el: '.slider-quality__pagging',
				//	clickable: true,
				//},
				// Arrows
				// navigation: {
				// 	nextEl: '.about__more .more__item_next',
				// 	prevEl: '.about__more .more__item_prev',
				// },
				breakpoints: {
					320: {
						spaceBetween: 15,
					},
					525: {
						spaceBetween: 20,
					}
				},
			
				on: {

				}
			});
		}
	}
}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
	// Добавление классов слайдера
	// при необходимости отключить
	bildSliders();

	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});