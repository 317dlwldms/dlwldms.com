gsap.registerPlugin(ScrollTrigger);

const viewportHeight = window.visualViewport ? window.visualViewport.height : window.innerHeight;


function setVh() {
    document.documentElement.style.setProperty("--vh", `${window.innerHeight * 0.01}px`)
}

window.addEventListener("resize", () => {
    setVh();
})

worksBgImage();

setVh();

