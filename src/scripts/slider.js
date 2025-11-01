export function slider() {
    const carouselWrapper = document.getElementById("carousel-wrapper");
    const carousel = carouselWrapper.querySelector(".carousel");
    const carouselItem = carouselWrapper.querySelectorAll(".carousel__item");
    const prevBtn = carouselWrapper.querySelector(".control--prev");
    const nextBtn = carouselWrapper.querySelector(".control--next");

    let currentIndex = 0;
    const totalItems = carouselItem.length;

    let autoSlideInterval;

    resumeSlider();
    initSliderPagination(totalItems);

    function updateSliderPosition() {
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    // Остановка автопереключения слайдера
    function pauseSlider() {
        clearInterval(autoSlideInterval);
    }

    // Возобновление автопереключения
    function resumeSlider() {
        autoSlideInterval = setInterval(() => {
            if (currentIndex < totalItems - 1) {
                currentIndex++;

            } else {
                currentIndex = 0;
            }
            
            switchPagination();
            updateSliderPosition();
        }, 3500);
    }

    // Добавление пагинации
    function initSliderPagination(quantity) {
        let paginationContainer =
            carouselWrapper.querySelector(".carousel__dots");

        for (let i = 0; i < quantity; i++) {
            let dot = document.createElement("span");
            dot.classList.add("carousel__dots-item");

            if (i === 0) {
                dot.classList.add("active");
            }

            dot.setAttribute("data-index", i);
            paginationContainer.appendChild(dot);
        }
    }

    // Логика клика на точки пагинации
    carouselWrapper.querySelectorAll(".carousel__dots-item").forEach((element, index) => {
        element.addEventListener("click", () => {
            currentIndex = index;

            pauseSlider();
            resumeSlider();

            switchPagination();
            updateSliderPosition();
        });
    });

    // Переключение пагинации
    function switchPagination () {
        carouselWrapper.querySelector(".carousel__dots-item.active").classList.remove("active");
        carouselWrapper.querySelectorAll(".carousel__dots-item")[currentIndex].classList.add("active");
    }

    // Остановка автопереключения слайдов при наведении
    carouselItem.forEach((element) => {
        element.addEventListener("mouseover", pauseSlider);
    });

    // Возобновление автопереключения слайдов
    carouselItem.forEach((element) => {
        element.addEventListener("mouseout", resumeSlider);
    });

    // Логика клика на кнопку "Вперёд"
    nextBtn.addEventListener("click", () => {
        if (currentIndex < totalItems - 1) {
            currentIndex++;
        } else {
            currentIndex = 0; // Возврат к первому слайду
        }
        switchPagination();
        updateSliderPosition();
    });

    // Логика клика на кнопку "Назад"
    prevBtn.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = totalItems - 1; // Переход на последний слайд
        }
        switchPagination();
        updateSliderPosition();
    });

    // Остановка автопереключения при взаимодействии с кнопками
    nextBtn.addEventListener("click", () => {
        pauseSlider();
        resumeSlider();
    });

    prevBtn.addEventListener("click", () => {
        pauseSlider();
        resumeSlider();
    });
}
