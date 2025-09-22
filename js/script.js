gsap.registerPlugin(ScrollTrigger)


let header = document.querySelector(".header__wrap");

const sections = document.querySelectorAll("section");
const buttons = document.querySelectorAll("[data-theme]");
const preferLight = window.matchMedia("(prefers-color-scheme:light)");

const themeButtons = document.querySelectorAll(".theme_button");
const root = document.querySelector("body");
const times = document.querySelector(".title_time");

const toastContainer = document.querySelector("#toast-container");

let savedTheme = localStorage.getItem("theme");

function tapEvent() {
    document.addEventListener("keydown", (e) => {
        if (e.key == "Tab") {
            e.preventDefault();

            const vh = window.innerHeight * 0.7;
            const direction = e.shiftKey ? -1 : 1;
            const maxScroll = document.body.scrollHeight - window.innerHeight;
            const nextScroll = window.scrollY + vh * direction;

            window.scrollTo({
                top: nextScroll,
                behavior: "smooth"
            })
        }
    })
}

function divEnter(now) {
    gsap.utils.toArray(`${now}`).forEach(nowDiv => {
        
        gsap.fromTo(nowDiv,
            { y: 20, x: 20, opacity: 0},
            {
                y: 0,
                x: 0,
                opacity: 1,
                duration: 0.6,
                stagger: 0.2,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: nowDiv,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "restart none none reverse"
                }
            }
        )
    })

}

function headerEnter() {
    header.classList.add("active");

    const tl = gsap.timeline();
    tl.fromTo(header.querySelectorAll("ul li"),
        { x: -20, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.3, stagger: 0.1, ease: "power3.out"},
    ).fromTo(header.querySelector(".nav__theme"),
        { x: -20, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.2, stagger: 0.1, ease: "power3.out"},
    )
}

function headerEvent() {
    const header = document.querySelector(".header__wrap");

    if (window.innerWidth >= 1025) {
        header.addEventListener("mouseenter", () => headerEnter());
        header.addEventListener("mouseleave", () => header.classList.remove("active"));
    } 
    header.addEventListener("pointerdown", e => {
        headerEnter();
    });    
    ["click", "pointerdown"].forEach(eventType => {
        themeButtons.forEach(btn => {
        btn.addEventListener(eventType, () => header.classList.remove("active"));
        });
    });
    document.addEventListener("pointerdown", e => {
        if (!header.contains(e.target)) {
        header.classList.remove("active");
        }
    });

    
}

function updateTime() {
    const now = new Date();
    let hoursReset = "AM";
    let hours = now.getHours();
    let minutes = now.getMinutes();

    if (hours < 10) hours = "0" + hours;
    if (hours > 12) hours = hours - 12, hoursReset = "PM";
    if (minutes < 10) minutes = "0" + minutes;

    times.innerText = `${hours}:${minutes} ${hoursReset}`;
}

function applyTheme(theme) {
    document.body.classList.remove("light", "dark");
    themeButtons.forEach(btn => btn.classList.remove("active"));
    if (theme === "light") {
        document.body.classList.add("light");
        themeButtons[0].classList.add("active");
    } else if (theme === "dark") {
        document.body.classList.add("dark");
        themeButtons[1].classList.add("active");
    }

    localStorage.setItem("theme", theme);
}

function toast(toastEl) {
    if (!toastEl) return;

    toastEl.addEventListener("click", () => {
        const toast = document.createElement("div");
        const toastElText = toastEl.dataset.info;
        toast.className = "toast";
        toast.textContent = `📌 ${toastElText} page는 현재 작업 중 입니다.`;

        toastContainer.appendChild(toast);

        if (toastContainer.children.length > 3) {
            toastContainer.firstChild.remove();
        }
        if (toastContainer.children.length > 1) {
            toastContainer.firstChild.classList.add("scale01");
        }
        if (toastContainer.children.length > 2) {
            toastContainer.children[0].classList.add("scale02");
            toastContainer.children[1].classList.add("scale01");
        }

        requestAnimationFrame(() => toast.classList.add("show"));

        let duration = 5000;
        let start = Date.now();
        let timeoutId = setTimeout(hideToast, duration);

        function hideToast() {
            toast.classList.remove("show");
            setTimeout(() => toast.remove(), 300);
        }

        toastContainer.addEventListener("mouseenter", () => {
            clearTimeout(timeoutId);
            duration -= Date.now() - start;
        })
        toastContainer.addEventListener("mouseleave", () => {
            start = Date.now();
            timeoutId = setTimeout(hideToast, duration);
        })
    });
}

const contact = document.querySelector(".contact");
const ground = document.querySelector(".ground");
const next = document.querySelector(".next");

toast(contact);
toast(ground);
toast(next);

const saveTheme = localStorage.getItem("theme");
applyTheme(saveTheme);

buttons.forEach(btn =>
    btn.addEventListener("click", () => {
        applyTheme(btn.dataset.theme);
    })
)
buttons.forEach(btn =>
    btn.addEventListener("pointerdown", () => {
        applyTheme(btn.dataset.theme);
    })
)

tapEvent();
headerEvent();
updateTime();

setInterval(updateTime, 1000);
window.addEventListener("resize", () => {
    // divMove()
    headerEvent();
    
})