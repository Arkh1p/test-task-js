export function tabs() {
    const tabs = document.querySelector(".tabs");
    const tabItems = tabs.querySelectorAll(".tabs__item");
    const tabContents = tabs.querySelectorAll(".content");

    for (let i = 0; i < tabItems.length; i++) {
        tabItems[i].addEventListener("click", function (e) {
            e.preventDefault();

            let activeTabAttr = e.target.getAttribute("data-tab");

            for (let j = 0; j < tabItems.length; j++) {
                let contentAttr =
                    tabContents[j].getAttribute("data-tab-content");

                if (activeTabAttr === contentAttr) {
                    tabItems[j].classList.add("tabs__item--active");
                    tabContents[j].classList.add("content--active");
                    
                } else {
                    tabItems[j].classList.remove("tabs__item--active");
                    tabContents[j].classList.remove("content--active");
                }
            }
        });
    }
}
