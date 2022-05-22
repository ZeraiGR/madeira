// Импорт функционала ==============================================================================================================================================================================================================================================================================================================================
// import { isMobile } from "./functions.js";
// import { formsModules } from "./forms/forms.js";

/*
Подключение бегущей строки:
*/

import "./../libs/jquery.js";
import "./../libs/jQuery-Marquee.js";

// Инициализация бегущей строки
$('.runline').marquee({
		duration: 25000,
		startVisible: true,
		duplicated: true,
});

export function headerFixed() {
    const header = document.querySelector('.header'),
        windowHeight = document.documentElement.clientHeight,
        arrowTopBtn = document.querySelector('.arrow-top');

    window.addEventListener('scroll', function () {
        if (window.scrollY > windowHeight) {
            header.classList.add('fixed');
            arrowTopBtn.classList.add('active');
        } else {
            header.classList.remove('fixed');
            arrowTopBtn.classList.remove('active');
        }
    });
}

	/*-----------------------Plus/minus amount---------------*/
	$('.minus').on('click', function () {
		var $input = $(this).parent().find('input');
		var count = parseInt($input.val()) - 1;
		count = count < 1 ? 1 : count;
		$input.val(count);
		$input.change();
		return false;
	});
	
	$('.plus').on('click', function () {
		var $input = $(this).parent().find('input');
		$input.val(parseInt($input.val()) + 1);
		$input.change();
		return false;
	});


