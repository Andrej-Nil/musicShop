"use strict";
$(document).ready(function () {
    // кнопка закрыть
    $('._win-close').on('click', function () {
        $(this).parent().addClass('_dn');
    })
    // header top Start
    // ----------------------------------------

    // логика выбора города
    // показать/скрыть список выбора городов
    $("#selectedCity").on('click', function () {
        $('#selectionCityWin').toggleClass("_dn");
        $(this).toggleClass("_arrow-up");
    })

    // выбор города
    $('.select-city').on('click', function () {
        let city = $(this).text();

        $('._selected-city').removeClass('_selected-city');
        $(this).addClass('_selected-city');
        $('.select-city').each(function () {
            if ($(this).text() == city) {
                $(this).addClass('_selected-city');
            }
        });
        $(".city-activ").text(city);
        $('#selectionCityWin').addClass('_dn');
        $("#selectedCity").removeClass("_arrow-up");
    });

    $('#cityClose').on('click', function () {
        $("#selectedCity").removeClass("_arrow-up");
    })

    //  логика строки поиска Начало
    // случайная строка placeholdare
    let $searchInput = $('#searchInput');

    setAttrValue($searchInput, "data-random", 'placeholder');

    // добовляет классы активности кнопкам очистить и отправть в поле, при вводе
    $('#searchInput').on('input', function () {
        if ($(this).val().length) {
            $('#inputSumbit').addClass('_search-active');
            $('#inputClear').removeClass('_dn');
        } else {
            $('#inputSumbit').removeClass('_search-active');
            $('#inputClear').addClass('_dn');
        }
    });

    // Очищаяем поле поиска
    $('#inputClear').on("click", function () {
        $('#searchInput').val('');
        $('#inputSumbit').removeClass('_search-active');
        $('#inputClear').addClass('_dn');
    });


    //  логика строки поиска конец
    // -----------------------------------------------

    // меню пользователя
    $('._menu-icon').hover(function () {
        $(this).children('._window').removeClass('_dn');
        $(this).children('._window').animate({top: '100%'}, 50);
    }, function () {
        $(this).children('._window').addClass('_dn');
        $(this).children('._window').css('top', '');
    });

    // Показать форму регистрации и входа
    let $winLoginRegBtn = $('._win-button');
    let $logRegModal = $('#logReg');
    let $formTabs = $logRegModal.find('.log-reg-nav-tab');
    let $logRegModalForm = $logRegModal.find('.log-reg-form');

    $winLoginRegBtn.on('click', function () {
        let $_this = $(this);

        let $showElement = getIdForm($_this);
        let $modelWin = $showElement.closest('._modal-win');
        let showElementId = $showElement.attr('id');

        $('body').addClass('_not-scroll');
        $('#darkScreen').removeClass('_dn');
        $modelWin.removeClass('_dn');

        $formTabs.each(function () {
            $(this).removeClass('_tab-active')
            if ($(this).data('tab') == showElementId) {
                $(this).addClass('_tab-active')
            }
            ;
        });

        $logRegModalForm.each(function () {
            $(this).addClass('_dn');
        });

        $showElement.removeClass('_dn');
    });

    // переключение между формами входа и регистрации
    $formTabs.on('click', function () {
        let $_this = $(this);
        let $showElement = getIdForm($_this);
        let tabData = $_this.data('tab');

        $formTabs.each(function () {
            $(this).removeClass('_tab-active');
            if ($_this.data('tab') == tabData) {
                $_this.addClass('_tab-active')
            }
            ;
        });

        $logRegModalForm.each(function () {
            $(this).addClass('_dn');
        });

        $showElement.removeClass('_dn');

    });

    function getIdForm($elem) {
        let idElem = $elem.data('tab')
        let $showElement = $('#' + idElem);
        return $showElement;
    };

    // закрыть форму форму регистрации и входа
    let $darkScreen = $('#darkScreen');
    let $modalWin = $('._modal-win');
    $('#darkScreen').on('click', function (event) {
        if ($(event.target).hasClass('close-fixsed')) {
            hideModalWin();

        } else if ($(event.target).closest('._modal-win').length == 0) {
            hideModalWin();
        }
        ;
    });

    // ----------------------------------------
    // header top End

    // header nav Start
    // ----------------------------------------

    // показывает окно обратной связи
    $('#headerPhone').hover(function () {
        $('#phoneInfoWin').animate({top: '104%'}, 50);
        $('#phoneInfoWin').removeClass('_dn');
    }, function () {
        $('#phoneInfoWin').addClass('_dn');
        $('#phoneInfoWin').css('top', '');

    });

    $('#feedbackForm').on('click', function () {
        $('#phoneInfoWin').addClass('_dn');
    });


    // затемнение экрана при наведение на каторлог и поевление списка
    $('#productCatalog').hover(function () {
            $('#navDarkBg').fadeIn(300);
            $('#catalogList').fadeIn(300);
        }, function () {
            $('#navDarkBg').fadeOut(300);
            $('#catalogList').fadeOut(300);
        }
    );

    // ----------------------------------------
    // header nav End

    // header front start
    // ------------------------------------
    // owl carousel
    $(function () {
        let owl = $(".header-carousel-slide")
        owl.owlCarousel({
            items: 1,
            loop: true,
            smartSpeed: 400,
            autoplay: true,
            autoplayTimeout: 8000,
        });

        $('._right').click(function () {
            owl.trigger('next.owl.carousel');
        });

        $('._left').click(function () {
            owl.trigger('prev.owl.carousel');
        });

        owl.on('changed.owl.carousel', function (e) {
            owl.trigger('stop.owl.autoplay');
            owl.trigger('play.owl.autoplay');
        });
    });

    $(function () {
        let owl = $(".h-carousel-sliders-mb");

        owl.owlCarousel({
            items: 1,
            loop: true,
            smartSpeed: 400,
            autoplay: true,
            autoplayTimeout: 8000,
            dots: false,
        });

        $('#headerCarouselLeft').click(function () {
            owl.trigger('prev.owl.carousel');
        });

        $('#headerCarouselRight').click(function () {
            owl.trigger('next.owl.carousel');
        });

        owl.on('changed.owl.carousel', function (e) {
            owl.trigger('stop.owl.autoplay');
            owl.trigger('play.owl.autoplay');
        });
    });


    // ------------------------------------
    // header front End

    // storefront start
    // -------------------------------------
    $(function () {
        $('.storefront-product-block').each(function () {
            let owl = $(this);
            owl.owlCarousel({
                smartSpeed: 200,
                items: 1,
                dots: false,
                mouseDrag: false,
                margin: 5,
                responsive: {
                    0: {
                        items: 1,
                        mouseDrag: true,
                    },
                    460: {
                        items: 2,
                        mouseDrag: true,
                    },
                    720: {
                        items: 3,
                        mouseDrag: true,
                    },
                    1024: {
                        items: 4,
                        mouseDrag: true,
                    },
                    1280: {
                        items: 5,
                        mouseDrag: false,
                    },
                },
            });
        });
        $('.storefront-nav-right').click(function () {
            let $storefrontSection = $(this).parents('.storefront-section');
            let $thisOwl = $storefrontSection.find(".storefront-product-block")
            $thisOwl.trigger('next.owl.carousel');
        });

        $('.storefront-nav-left').click(function () {
            let $storefrontSection = $(this).parents('.storefront-section');
            let $thisOwl = $storefrontSection.find(".storefront-product-block")
            $thisOwl.trigger('prev.owl.carousel');
        });
    });

    // калькуляьтор скидок
    let $productCard = $('.storefront-product-card');
    $productCard.each(function (index) {
        if ($(this).find('.old-price').length == 0) {
            return;
        }

        let $elemOldPrise = $(this).find('.old-price');

        let oldPrice = $elemOldPrise.text();
        oldPrice = getCleanSpaces(oldPrice);

        let $elemDiscontSize = $(this).find('.product-card-discon__size');
        let discontSize = $elemDiscontSize.text();


        discontSize = getCleanSpaces(discontSize);

        let totalPrace = calcPercent(oldPrice, discontSize);
        totalPrace = (totalPrace).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
        let $totalPraceHtml = $(this).find('.total-price-price');
        $totalPraceHtml.text(totalPrace + ' ₽');
    })

    function calcPercent(num, percent) {
        let numberPercent = percent * (num / 100);
        let total = num - numberPercent;
        total = total.toFixed();
        return total;
    }

    // product cart slide
    $productCard.hover(function () {
        let _this = this;
        let imgProductCard = _this.querySelector('.product-card__img');
        let image = imgProductCard.getAttribute('data-slide').split(';');
        let daraStart = imgProductCard.setAttribute('data-start', imgProductCard.src);
        let count = 0;
        imgProductCard.timer = setInterval(function () {
            count++;
            if (count > image.length - 1) {
                count = 0;
            }
            imgProductCard.src = image[count];
        }, 1500);

    }, function () {
        let imgProductCard = this.querySelector('.product-card__img');
        imgProductCard.src = imgProductCard.getAttribute('data-start');
        imgProductCard.removeAttribute('data-start');
        clearInterval(imgProductCard.timer);
    });

    // добовляем в карзину
    let textEmptyCart = $('#cartMassage').text();
    $('.product-cart-icon').on('click', function () {
        $(this).toggleClass('_add-cart');
        let addedCount = $('._add-cart');
        let totalPriceProduct = getSumPrice(addedCount) + " ₽";
        let countProducts = addedCount.length;

        IsFullCart(countProducts, totalPriceProduct);
    })

    // добовляем в избраное
    let $countFavourites = $('#countFavourites');

    $('.product-card-favourites-icon').on('click', function () {
        $(this).toggleClass('_add-favourites');
        let countAddedFavourites = $('._add-favourites').length;
        if (countAddedFavourites) {
            $countFavourites.removeClass('_dn');
            $countFavourites.text(countAddedFavourites);
        } else {
            $countFavourites.addClass('_dn');
            $countFavourites.text(countAddedFavourites);
        }
    });
    // -------------------------------------
    // storefront END


    // servise start
    // ----------------------------------------
    $('.service-item').on('click', function () {
        let indexService = $(this).data('index');
        let $detailServise = $('#' + indexService);

        $detailServise.removeClass('_dn');

        $detailServise.animate({top: 0}, 200);
        $detailServise.addClass('_visible-detail');

    });

    // Закрываем детали сервиса
    $(document).on('click', function (event) {
        if ($(event.target).closest('.service-list').length) {
            return;
        }
        $('._visible-detail').animate({top: '100%'}, 200);

        setTimeout(() => $('._visible-detail').addClass('_dn'), 200);
        $('._visible-detail').removeClass('._visible-detail');
    })

    $('.service-detail__close').on('click', function () {
        let $detailServise = $(this).parent();

        $detailServise.animate({top: '100%'}, 200);

        setTimeout(() => $detailServise.addClass('_dn'), 200);
        $detailServise.removeClass('._visible-detail');
    });

    $(function () {
        let owl = $("#serviceCaruoselMb");

        owl.owlCarousel({
            items: 1,
            dots: false,
        });

        $('.service-nav-right').click(function () {
            owl.trigger('next.owl.carousel');
        });

        $('.service-nav-left').click(function () {
            owl.trigger('prev.owl.carousel');
        });


    });
    // ----------------------------------------
    // servise end
    // footer
    // ----------------------------------------
    // заолняем информацию о магазине в зависимости от выбраного города
    let objCityList = {
        moscow: {
            city: 'в Москве',
            street: 'пер. Маяковского, дом 8.',
            phone: '(499) 755-55-00, 755-55-01.',
            opening: 'Без выходных с 10:00 до 22:00.',
        },

        saintPetersburg: {
            city: 'в Cанкт-петербурге',
            street: 'ул. Арсенальная , дом 32.',
            phone: '(812) 555-44-40, 555-44-41.',
            opening: 'Без выходных с 9:00 до 20:00.',
        },

        ekateriburg: {
            city: 'в Екатеринбурге',
            street: 'ул. 8 марта, дом 83.',
            phone: '(343) 345-65-43, 345-65-44.',
            opening: 'Без выходных с 10:00 до 21:00.',
        },

        sochi: {
            city: 'в Сочи',
            street: 'пер. Белых Акаций, дом 16.',
            phone: '(918) 467-00-10, 467-00-11.',
            opening: 'Без выходных с 9:00 до 21:00.',
        },

        kazan: {
            city: 'в Казане',
            street: 'ул. Брянская, дом 103.',
            phone: '(843) 234-33-15, 234-33-16.',
            opening: 'Без выходных с 9:00 до 20:00.',
        },

        rostov: {
            city: 'в Растове-на-Дону',
            street: 'ул. Беляева, дом 1.',
            phone: '(863) 545-99-90, 545-99-91.',
            opening: 'Без выходных с 8:00 до 19:00.',
        },

        vladivostok: {
            city: 'во Владивостоке',
            street: 'ул. Морская 1-я, дом 20.',
            phone: '(423) 202-22-20, 202-22-21.',
            opening: 'Без выходных с 10:00 до 21:00.',
        },
    };
    $('.select-city').on('click', function () {
        let selectedCity = $(this).data('city');

        let selectedCityName = objCityList[selectedCity].city;
        let selectedCityStreet = objCityList[selectedCity].street;
        let selectedCityPhone = objCityList[selectedCity].phone;
        let selectedCityOpening = objCityList[selectedCity].opening;

        $('.city').text(selectedCityName);
        $('.street').text(selectedCityStreet);
        $('.phone').text(selectedCityPhone);
        $('.opening').text(selectedCityOpening);

    });

    // показыает сообщение при пустом поле
    $('._input-text').on('input', function () {
        let $_this = $(this);
        showEmptyMassege($_this);

    });

    // показывает сообщение при не актвном чекбоксе
    $('.check-label').on('click', function (event) {
        let $_this = $(this);
        let $checkboxWr = $(this).parent();
        let $checkbox = $checkboxWr.find('.check-consent');
        let $messageNeedConsent = $checkboxWr.find('.need-consent');

        if ($(event.target).hasClass('check-label')) {
            $checkbox.each(function () {
                if ($(this).is(':checked')) {
                    $_this.removeClass('_check-active');
                    $messageNeedConsent.removeClass('_dn');
                } else {
                    $_this.addClass('_check-active');
                    $messageNeedConsent.addClass('_dn');
                }
                ;
            });
        }
        ;
    });

    // проверка формы и отправка
    let regularEmail = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
    let inputDataEmail = 'email';
    let inputDataCheckbox = 'checkbox';
    let inputDataUserName = 'user-name';
    let inputDataUserPassword = 'user-password';
    let inputDataName = "name";
    let inputDataPassword = 'password';
    let inputDataPhone = 'phone';
    let inputDataSearch = 'search';


    let user = {
        name: 'bill',
        password: 'qwe',
    }

    $('.form').submit(function () {
        let $thisForm = $(this);
        let formId = this.id;
        let isValid = true;
        let $inputInForm = $(this).find('input');

        $inputInForm.each(function () {
            let $_this = $(this);
            let $inputLabel = $(this).closest()
            let thisDataType = $_this.data('type');
            if (thisDataType == inputDataSearch) {
                return;
            } else if (thisDataType == inputDataEmail) {

                isValid = isEmailValid($_this) && isValid;
                showEmptyMassege($_this);

            } else if (thisDataType == inputDataCheckbox) {

                isValid = isCheck($_this) && isValid;
                showEmptyMassege($_this);

            } else if (thisDataType == inputDataUserName) {

                let $inputUserPas = $thisForm.find('#user-password');
                isValid = checkingLoginPas($_this) && isValid;
                showEmptyMassege($_this);
                showEmptyMassege($inputUserPas);

            } else if (thisDataType == inputDataName) {
                isValid = isCheckName($_this) && isValid;
                showEmptyMassege($_this);

            } else if (thisDataType == inputDataPassword) {
                let $inputRepeatPassword = $thisForm.find('#repeat-password');
                isValid = checkPasswordsAreSame($_this, $inputRepeatPassword) && isValid;
                showEmptyMassege($_this);
                showEmptyMassege($inputRepeatPassword);
            } else if (thisDataType == inputDataPhone) {

                isValid = isPhoneValid($_this) && isValid;
                showEmptyMassege($_this);
            }
            ;
        });

        if (isValid == true) {
            if (formId == 'subscribeForm') {
                setTimeout(
                    hideFormSubscriptionShowMessageSuccess, 400);

            } else if (formId == 'callbackMb') {
                setTimeout(function () {
                    $inputInForm.each(function () {
                        let $input = $(this)
                        if ($input.attr('type') == 'submit') {
                            return;
                        } else if ($input.attr('type') == 'checkbox') {
                            return;
                        } else {
                            clearInput($input);
                        }
                        ;
                    });
                    closeNavMb();
                }, 400)

            } else {
                setTimeout(function () {
                    hideModalWin();
                    $inputInForm.each(function () {
                        let $input = $(this)
                        if ($input.attr('type') == 'submit') {
                            return;
                        } else if ($input.attr('type') == 'checkbox') {
                            return;
                        } else {
                            clearInput($input);
                        }
                        ;

                    });

                }, 400);
            }
            ;
        } else {
            return false;
        }
        ;

        return false;

    });


    // news
    let $newsItems = $('.subscribe-news-item');
    let $newsItemsText = $('.news-item__text');

    limitLengthText($newsItemsText, 110);
    setInterval(newsFeed, 8000);

// footer-bottom-mb	

    $('.footer-item-header-mb').on('click', function () {
        let $thisParent = $(this).parent('.footer-nav-item-mb');
        let $content = $thisParent.find('.footer-item-content-mb');
        $content.slideToggle(200);
        // меняем напровление стрелки
        $(this).toggleClass('_open-content')
    });

    // ----------------------------------------
    // footer end

    // Мобильная версия mobail
// меняем высоту окна поиска
    let $searchMb = $('#searchMb');
    let $navWrapMb = $('#navWrapMb');
    let $navMb = $('#navMb');
    let $catalogMb = $('#catalogMb');
    reSizeHeight($searchMb);

    $(window).resize(function () {
        reSizeHeight($searchMb);

        if ($(this).width() > 720) {
            closeNavMb();
        }
        ;
    });

    let $searchFormInputMb = $searchMb.find('.search-form__input-mb');
// показывает окно поиска для мобилок
    $('#searchIconMb').on('click', function () {
        $searchMb.slideDown(100);
        $searchFormInputMb.focus();
        $('body').addClass('_not-scroll')
    });

// прячем окно поиска для мобилок
    $('.search__close-mb').on('click', function () {
        $('#searchMb').slideUp(100)
        $('body').removeClass('_not-scroll')
    });

// открываем навигаци.
    $('#catalogIconMb').on('click', function () {
        $navMb.css('display', "block");
        $navWrapMb.addClass('_nav-open-mb');
        $('body').addClass('_not-scroll');
    });
    // закрываем навигацию.

    // при нажатии кнопки закрытия
    $('#navCloseBtnMb').on('click', function () {
        closeNavMb();
    });

    // при выборе города
    $('._city-mb').on('click', function () {
        closeNavMb();
    });

    // кнопка назад управляющая подменю основного меню
    $('.nav-mb-submenu-back').on('click', function () {
        let $submenu = $('._navMb-submemu');
        backSubmenu($submenu, $navMb)
    });

    // кнопка назад управляющая подменю каталога
    $('.catalog-submenu-back').on('click', function () {
        let $submenu = $('._catalog-submenu');
        backSubmenu($submenu, $catalogMb)
    });

    // открываем подменю
    $('.has-submenu').on('click', function () {
        let $_this = $(this);
        openSubmenu($_this, $navMb);
    });

    $('.has-catalog-submenu-mb').on('click', function () {
        let $_this = $(this);
        openSubmenu($_this, $catalogMb);
    });

// функции
    function hideModalWin() {
        $modalWin.addClass('_dn');
        $darkScreen.addClass('_dn');
        $('body').removeClass('_not-scroll');

    };

    function hideFormSubscriptionShowMessageSuccess($inputInForm) {
        $('#subscribeLeft').addClass('_dn');
        $('#subscribeSuccess').removeClass('_dn');
    };

    function clearInput($input) {
        let $inputWr = $input.closest('.input-wr');
        $inputWr.removeClass('_success');
        $input.val('');
    };

    function setAttrValue($elem, attrData, attr) {
        let dataValue = $elem.attr(attrData);
        let arrDataValue = dataValue.split(';')
        let countValue = arrDataValue.length - 1;

        let number = getRandomNum(0, countValue);
        let attrValue = arrDataValue[number];
        $elem.attr(attr, attrValue);

    };

    function getRandomNum(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        let num = Math.floor(Math.random() * (max - min + 1)) + min;
        return num;
    };

    function productCartSlide($elem, arrDataValue, countValue, attr) {
        count++
        if (count > countValue) {
            count = 0;
        }
        ;
        console.log(count);
        $elem.attr(attr, arrDataValue[count]);
    };

    function getSumPrice(listProducts) {
        let total = 0;
        for (let elem of listProducts) {
            let product = elem.closest('.storefront-product-card');
            let productPriceHtml = product.querySelector('.total-price-price').innerHTML;
            let productPrice = getCleanSpaces(productPriceHtml);
            total += +productPrice;
        }
        ;
        return (total + '').replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
    };

    // удалет пробелы и возврощает число перед первым попавщимся не числовым символом
    function getCleanSpaces(str) {
        str = str.replace(/\s/g, '');
        let num = parseInt(str);
        return num;
    };

    function IsFullCart(countProducts, TotalPrice) {
        $('._cart-count').text(countProducts);

        if (countProducts) {
            $('._cart-count').removeClass('_dn');
            $('#distopCart').addClass('_cart-active');
            $('#cartInfo').addClass('_cart-info-active');
            $('#cartIcon').addClass('_cart-icon-active');
            $('#cartMassage').text('Общая сумма');
            $('#cartTotalPrice').text(TotalPrice);

        } else {
            $('._cart-count').addClass('_dn');
            $('#distopCart').removeClass('_cart-active');
            $('#cartInfo').removeClass('_cart-info-active');
            $('#cartIcon').removeClass('_cart-icon-active');
            $('#cartMassage').text(textEmptyCart);
            $('#cartTotalPrice').text('');
        }
        ;
    };

    function newsFeed() {
        $('.subscribe-news-item:first-child').animate({"margin-left": "100%"})
        $('.subscribe-news-item:first-child').slideUp(function () {

            $(this).appendTo($('.subscribe-news-item-wr'));

            $(this).css("margin-left", "");

        });
        $('.subscribe-news-item:nth-child(3)').fadeIn(2000);

    };

    function limitLengthText($elements, textLength) {
        $elements.each(function () {
            let text = $(this).text();
            let textWithPartWordAtEnd = text.slice(0, textLength);
            let indexLastSpice = textWithPartWordAtEnd.lastIndexOf(' ');
            let textWithFulltWordAtEnd = textWithPartWordAtEnd.slice(0, indexLastSpice);
            let textPublication = textWithFulltWordAtEnd + "...";

            $(this).text(textPublication);

        });
    };

    // Функции проверки input
    function showEmptyMassege($input) {
        let $label = $input.closest('.label-input');
        let $inputWr = $label.find('.input-wr');
        let $inputEmeil = $input;
        let $messageEmptyInput = $label.find('.empty');
        let $messageErrorInput = $label.find('.error');
        let inInput = $inputEmeil.val();
        if ($input.data('type') == 'search') {
            return;
        } else if (inInput.length == 0) {
            $messageEmptyInput.removeClass('_dn');
            $messageErrorInput.addClass('_dn');
            $inputWr.addClass('_error');
            $inputWr.removeClass('_success');
            $inputEmeil.addClass('_red-color');
        }
        ;
    };

    function isEmailValid($input) {

        if (regularEmail.test($input.val())) {
            inputIsValid($input, true);
            return true;

        } else {
            inputIsValid($input, false);
            return false;
        }
        ;
    };

    function inputIsValid($input, boolean) {

        let $inputLabel = $input.closest('.label-input');
        let $inputWr = $input.closest('.input-wr');
        let $messageEmpty = $inputLabel.find('.empty');
        let $messageError = $inputLabel.find('.error');
        if (boolean == true) {

            $inputWr.removeClass('_error');
            $inputWr.addClass('_success');

            $input.removeClass('_red-color');
            $messageEmpty.addClass('_dn');
            $messageError.addClass('_dn');

        } else if (boolean == false) {

            $inputWr.removeClass('_success');
            $inputWr.addClass('_error');

            $input.addClass('_red-color');
            $messageEmpty.addClass('_dn');
            $messageError.removeClass('_dn');

        }
        ;
    };

    function isCheck($checkbox) {
        if ($checkbox.is(':checked')) {
            return true;
        } else {
            return false;
        }
        ;
    };

    function checkingLoginPas($inputUserName) {
        let $form = $inputUserName.closest('.form');
        let $messageNameEmpty = $inputUserName.find('.empty');
        let $messageNameError = $inputUserName.find('.empty');
        let $inputUserPas = $form.find('#user-password');

        let userName = $inputUserName.val().toLowerCase();
        let userPas = $inputUserPas.val();

        if (user.name == userName && user.password == userPas) {
            inputIsValid($inputUserName, true);
            inputIsValid($inputUserPas, true);
            return true;
        } else {
            inputIsValid($inputUserName, false);
            inputIsValid($inputUserPas, false);
            return false;
        }
        ;
    };

    function isCheckName($input) {
        if ($input.val()) {
            inputIsValid($input, true);
            return true;
        } else {
            inputIsValid($input, false);
            return false;
        }
        ;
    };

    function checkPasswordsAreSame($input, $inputRepeatPassword) {

        let password = $input.val();
        let repeatPassword = $inputRepeatPassword.val();
        if (password != repeatPassword || (password + repeatPassword).length == 0) {
            inputIsValid($input, false);
            inputIsValid($inputRepeatPassword, false);
            return false;
        } else if (password == repeatPassword) {
            inputIsValid($input, true);
            inputIsValid($inputRepeatPassword, true);
            return true;
        } else {
            return false;
        }
        ;
    };

    function isPhoneValid($input) {
        let regExPhone = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{5,10}$/;
        let estimatedPhone = $input.val();

        if (regExPhone.test(estimatedPhone)) {
            inputIsValid($input, true);
            return true;
        } else {
            inputIsValid($input, false);
            return false;
        }
        ;
    };

    // функции мобильной версии
    function reSizeHeight($elem) {
        let heightSearchMb = $(window).height();
        $elem.css('height', heightSearchMb)
    }

    // открывает субменю в навигации для мобилок
    function openSubmenu($clickElem, $closeElem) {
        let dataSubmenuId = $clickElem.data('submenu-id');
        let $submenuId = $("#" + dataSubmenuId);
        $closeElem.animate({left: -100 + "%"}, 200);
        $submenuId.css("display", "block");
        $submenuId.animate({left: 0 + "%"}, 200,
            function () {
                $closeElem.css({"display": "none", "left": "-100%"});
            }
        );
        $navWrapMb.scrollTop(0);
    };

    // функция кнопки назад для мобилок
    function backSubmenu($backElem, $comeBackElem) {
        $navWrapMb.scrollTop(0);
        $backElem.animate({left: 100 + "%"}, 200, function () {
            $backElem.css({"display": "", "left": ""});
        });
        $comeBackElem.css("display", "block");
        $comeBackElem.animate({left: 0 + "%"}, 200);
    };

// зхакрываем навигацию мобилок
    function closeNavMb() {
        $navWrapMb.removeClass('_nav-open-mb');
        $navWrapMb.scrollTop(0);
        setTimeout(function () {
            $navMb.css("left", "");
            $('.nav-submenu-mb').css({"display": "", "left": ""})
        }, 200);
        $('body').removeClass('_not-scroll');
    };
});
