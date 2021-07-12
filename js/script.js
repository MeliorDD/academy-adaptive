new Swiper ('.testimonials__content__carusel',{
    pagination:{
        el:'.swiper-pagination',
        clickable:true
    },
    grabCursor:true, //изменение курсора при наведении
    slideToClickedSlide:true, //переключение при клике на слайд
    // mousewheel:{
    //     sensitivity:1,
    //     eventsTarget:".testimonials__content__carusel"
    // }
    slidesPerView:"auto",
    watchOverFlow:true,
    spaceBetween:30,
    paginationBulletRender: function (swiper, index, className) {
        return '< div class=" '+ className +' ">< div class="inner-dot">< /div>< /div>';
      }
})