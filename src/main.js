// Импорт скриптов
import { tabs } from "./scripts/tabs.js";
import { tooltip } from "./scripts/tooltip.js";
import { slider } from "./scripts/slider.js";
import { timer } from "./scripts/timer.js";

document.addEventListener("DOMContentLoaded", () => {
    // Подключение скриптов
    tabs();
    tooltip();
    slider();
    timer();
});
