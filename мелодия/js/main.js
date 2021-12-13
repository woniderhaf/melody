$(document).ready(function () {
    var currentFloor = 2;
    var floorPath = $('.home-image path') //этажи
    var counterUp = $('.counter-up') //кнока вверх
    var counterDown = $('.counter-down') //кнока вниз
    var modal =$(".modal"); // модальное окно
    var modalClose = $(".modal-close-button"); //кнопка закрытия модального окна
    var flat = $(".flats path"); //квартиры
    var flatLink = $('.flat-link') //ссылки с номером квартиры и площадью
    viewFlatsBtn = $(".view-flats") // кнопка для вызова модального кона

    floorPath.on('click', toggleModal); //при клике на этаж вызвать окно
    viewFlatsBtn.on('click', toggleModal);
    modalClose.on('click', toggleModal); // закрыть модальное окно
    function toggleModal() { //функция открыть/закрыть окно
        modal.toggleClass('is-open');
    };

    $(floorPath).on('mouseover', function () {
        $(floorPath).removeClass('current-floor');
        currentFloor = $(this).attr('data-floor');
        $('.counter').text(currentFloor);
    });
    counterDown.on('click', () =>{
        if (currentFloor > 2) {
            currentFloor--;
            usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2,
             useGrouping: false});
            $('.counter').text(usCurrentFloor);
            $(floorPath).removeClass('current-floor')
            $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor")
        }
    })

    counterUp.on("click", function() {
        if (currentFloor < 18) {
            currentFloor++;
            usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
            $('.counter').text(usCurrentFloor);
            $(floorPath).removeClass('current-floor')
            $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor")
        };

    })


});