gsap.registerPlugin(ScrollTrigger);

const workHeader = document.querySelector(".work__header"); 
const workSpace = document.querySelector(".workspace");
const workboxWrap = document.querySelector(".workbox__wrap");
const worknavs = document.querySelectorAll(".worknav ul li");


function setSlidesVariables() {
    workSpace.style.setProperty("--workspace-top", `${workHeader.clientHeight}px`)
}

function resizeGridItem(item) {
    let grid = document.querySelector(".workbox__wrap");
    const rowHeight = parseInt(
        window.getComputedStyle(grid).getPropertyValue("grid-auto-rows")
    );
    const rowGap = parseInt(
        window.getComputedStyle(grid).getPropertyValue("gap")
    );
    const rowSpan = Math.ceil(
        (item.querySelector("img").offsetHeight + rowGap) / (rowHeight + rowGap)
    );
    const height = Math.ceil(
        item.querySelector("img").offsetHeight
    )
    item.style.setProperty("--row-span", rowSpan);
    item.style.setProperty("--img-height", height)
}

function resizeAllGridItem() {
    const items = document.querySelectorAll(".workbox");
    items.forEach(item => resizeGridItem(item))
}

function workboxActiveToggle() {
    let workboxs = document.querySelectorAll(".workbox");

    workboxs.forEach(workbox => {
        if (window.innerWidth >= 1025) {
            workbox.addEventListener("mouseenter", () => workbox.classList.add("active"));
            workbox.addEventListener("mouseleave", () => workbox.classList.remove("active"));
        }
        workbox.addEventListener("click", () => {
            workbox.classList.toggle("active")
        })
        document.addEventListener("click", e => {
            if (!workbox.contains(e.target)) {
            workbox.classList.remove("active");
            }
        });
        const link = workbox.querySelector("a");
        link.addEventListener("click", (e) => {
            e.stopPropagation();
        })
    });

}

function workNavClick() {
    worknavs.forEach(worknav => {
        worknav.addEventListener("click", () => {
            worknavs.forEach(e => e.classList.remove("active"));
            worknav.classList.add("active");
            workNavActive()
        });
    });
}

function workNavActive() {
    let workboxs = document.querySelectorAll(".workbox");
    if (worknavs[0].classList.contains("active")) { 
        workboxs.forEach(e => e.classList.remove("none"));

    } else if (worknavs[1].classList.contains("active")) {
        workboxs.forEach(e => {
            e.classList.remove("none");
            if (!e.classList.contains("develop")) {
                e.classList.add("none")
            }
        })
    } else if (worknavs[2].classList.contains("active")) {
        workboxs.forEach(e => {
            e.classList.remove("none");
            if (!e.classList.contains("design")) {
                e.classList.add("none")
            }
        })        
    }
}


window.addEventListener("resize", () => {
    setSlidesVariables()
    resizeAllGridItem()
    workboxActiveToggle();
    workNavClick();
})
window.addEventListener("load", () => {
    setSlidesVariables()
    resizeAllGridItem()
    workboxActiveToggle();
    workNavClick();
})