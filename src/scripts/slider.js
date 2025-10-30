export function slider() {
    const carousel = document.querySelector(".carousel");
    const carouselItem = document.querySelectorAll(".carousel__item");
    const prevBtn = document.querySelector(".control--prev");
    const nextBtn = document.querySelector(".control--next");

    let currentIndex = 0;
    const totalItems = carouselItem.length;

    function updateSliderPosition() {
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    function pauseSlider() {
        clearInterval(autoSlideInterval);
        
    }

    function resumeSlider() {
        autoSlideInterval = setInterval(() => {
            if (currentIndex < totalItems - 1) {
                currentIndex++;
            } else {
                currentIndex = 0;
            }
            updateSliderPosition();
        }, 3500);
    }

    carouselItem.forEach(element => {
        element.addEventListener("mouseover", pauseSlider);
    });

    carouselItem.forEach(element => {
        element.addEventListener("mouseout", resumeSlider);
    });

    nextBtn.addEventListener("click", () => {
        if (currentIndex < totalItems - 1) {
            currentIndex++;
        } else {
            currentIndex = 0; // Возврат к первому слайду
        }
        updateSliderPosition();
    });

    prevBtn.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = totalItems - 1; // Переход на последний слайд
        }
        updateSliderPosition();
    });

    let autoSlideInterval = setInterval(() => {
        if (currentIndex < totalItems - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateSliderPosition();
    }, 3500); // Смена слайда каждые 3,5 секунды

    // Остановка автопереключения при взаимодействии с кнопками
    nextBtn.addEventListener("click", () => {
        clearInterval(autoSlideInterval);
        autoSlideInterval = setInterval(() => {
            if (currentIndex < totalItems - 1) {
                currentIndex++;
            } else {
                currentIndex = 0;
            }
            updateSliderPosition();
        }, 3500);
    });

    prevBtn.addEventListener("click", () => {
        clearInterval(autoSlideInterval);
        autoSlideInterval = setInterval(() => {
            if (currentIndex < totalItems - 1) {
                currentIndex++;
            } else {
                currentIndex = 0;
            }
            updateSliderPosition();
        }, 3500);
    });
}
