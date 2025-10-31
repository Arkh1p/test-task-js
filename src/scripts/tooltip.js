export function tooltip() {
    const tooltip = document.getElementById("tooltip");
    const tooltipAnchor = document.getElementById("tooltip-anchor");
    const promocodeText = document.querySelector(".furniture-banner__promocode-text").textContent;

    const showTooltip = () => {
        tooltip.classList.remove("hidden");
    };

    const hideTooltip = () => {
        tooltip.classList.add("hidden");
    };

    const copiedTooltip = () => {
        navigator.clipboard.writeText(promocodeText);
        tooltip.classList.add("clicked");
        localStorage.setItem("promo", "1");

        setTimeout(function () {
            tooltip.classList.remove("clicked");
        }, 3000);
    };

    tooltipAnchor.addEventListener("mouseenter", showTooltip);
    tooltipAnchor.addEventListener("mouseleave", hideTooltip);
    tooltipAnchor.addEventListener("click", copiedTooltip);
}
