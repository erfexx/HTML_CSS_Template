$(document).ready(function () {

    const carSlide = document.querySelector('.carousel-slide');
    const carImg = document.querySelectorAll('.carousel-slide img');

    console.log(carImg[0])

    // Button

    const prevBtn = document.querySelector('#prevBtn');
    const nextBtn = document.querySelector('#nextBtn');

    // 
    let counter = 1;
    const size = carImg[0].clientWidth;

    carSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

    $(nextBtn).click(function () {
        if (counter >= carImg.length - 1) {
            return;
        }
        carSlide.style.transition = "transform 0.4s ease-in-out";
        counter++;

        carSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    });

    $(prevBtn).click(function () {
        if (counter <= 0) {
            return;
        }
        carSlide.style.transition = "transform 0.4s ease-in-out";
        counter--;

        carSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    });

    $(carSlide).on("transitionend", function () {
        if (carImg[counter].id === 'lastClone') {
            carSlide.style.transition = "none";
            counter = carImg.length - 2;
            carSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
        }

        if (carImg[counter].id === 'firstClone') {
            carSlide.style.transition = "none";
            counter = carImg.length - counter;
            carSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
        }
    });


});