gsap.registerPlugin(ScrollTrigger)

const typingItem = document.querySelectorAll(".intro__changetext ul li");
const skills = document.querySelectorAll(".skillbox");
const skillBg = document.querySelector(".skillbox_bg");
const skillTap = document.querySelector(".skillbox_tap p")

const section01 = document.querySelectorAll("#about div")

// const viewportHeight = window.visualViewport ? window.visualViewport.height : window.innerHeight;
const works = document.querySelector(".works")
const worksWrap = document.querySelector(".works__wrap");
const stickyWrapper = document.querySelector(".workbox__wrapper");
const scrollSection = document.querySelector(".workbox__wrap");
const workBoxs = document.querySelectorAll(".workbox");
const sectionTitle = works.querySelector(".section_title");
const worksUrl = document.querySelector(".works__url")

let liIndex = 0;
let charIndex = 0;
let isDeleting = false;

let activeSkill = null;

function typeWriter() {
    typingItem.forEach(li => li.classList.remove("active"));
    const currentLi = typingItem[liIndex];
    const fullText = currentLi.dataset.text || currentLi.innerText;

    if (!currentLi.dataset.text) {
        currentLi.dataset.text = fullText;
    }

    currentLi.classList.add("active");

    if (isDeleting) {
        currentLi.innerText = fullText.substring(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
            isDeleting = false;
            liIndex = (liIndex + 1) % typingItem.length;
        }
    } else {
        currentLi.innerText = fullText.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === fullText.length) {
            isDeleting = true;
            setTimeout(typeWriter, 1500);
            return;
        }
    }
    const speed = isDeleting ? 120 : 140;
    setTimeout(typeWriter, speed);
}


function skillsClick() {
    skillTapText();
    skills.forEach(skill => {
        skill.addEventListener("pointerdown", () => {
            skills.forEach(e => e.classList.remove("active"));
            skillBg.classList.remove("active");

            skillTapTextActive();
            skill.classList.add("active");
            activeSkill = skill;
            skillBg.classList.add("active");

        });
        skillBg.addEventListener("pointerdown", e => {
            if (activeSkill && !activeSkill.contains(e.target)) {
                skillTapText();
                skills.forEach(e => e.classList.remove("active"));
                skillBg.classList.remove("active");
                activeSkill = null;
            }
        });
    });

}
function skillTapText() {
    if (window.innerWidth <= 1023) {
        skillTap.innerText = "Tap the moving items";
    } else {
        skillTap.innerText = "Click the moving items";
    }
}
function skillTapTextActive(){
    if (window.innerWidth <= 1023) {
        skillTap.innerText = "Tap the empty space";
    } else {
        skillTap.innerText = "Click the empty space";
    }
}
const moves = gsap.utils.toArray(".skillbox").map(el => {
    return gsap.to(el, {
        top: () => gsap.utils.random(0, 100) + "%",
        left: () => gsap.utils.random(0, 100) + "%",
        duration: () => gsap.utils.random(12, 18),
        ease: "power1.inOut",
        repeat: -1,
        repeatRefresh: true,
        paused: false
    });

})

function skillsMove() {
    if (document.querySelector(".skillbox.active")) {
        moves.forEach(move => move.pause());
    } else {
        moves.forEach(move => move.resume());
    }
}

const observer = new MutationObserver(skillsMove);
document.querySelectorAll(".skillbox").forEach(el => {
    observer.observe(el, { attributes: true, attributeFilter: ["class"] });
});


function setVh() {
    document.documentElement.style.setProperty("--vh", `${window.innerHeight * 0.01}px`)
}

function worksBgImage() {
    workBoxs.forEach((workBox, index) => {
        const bgImage = workBox.querySelector(".img_bg");
        const innerImage = workBox.querySelector(".img_inner");

        bgImage.style.backgroundImage = `url(./asset/works_0${index + 1}.jpg)`
        innerImage.style.backgroundImage = `url(./asset/works_inner0${index + 1}.jpg)`
    })
}

function setSlidesVariables() {
    let boxWidth,marginRight
    if (window.innerWidth <= 768) {
        boxWidth = window.innerWidth * 0.7;
        marginRight = 24;
    } else {
        boxWidth = 550;
        marginRight = 32;
    }
    const boxCount = workBoxs.length;
    const boxTop = (window.innerHeight - boxWidth) / 2;
    const totalHeight = ((boxWidth + marginRight) * boxCount) - window.innerWidth + window.innerHeight;
    
    const marginBottom = totalHeight - window.innerHeight;
    works.style.setProperty("--slides-width", `${totalHeight}px`);
    works.style.setProperty("--slide-width", `${boxWidth}px`);
    works.style.setProperty("--slide-marg", `${marginRight}px`);
    works.style.setProperty("--slide-top", `${boxTop}px`);
    works.style.setProperty("--slide-bottom", `${marginBottom}px`)
    
};


function toggleActive() {
    const Y = window.scrollY;
    const start = works.offsetTop;
    const end = works.offsetTop + works.offsetHeight - window.innerHeight;
    if (Y >= start && Y < end) {
        sectionTitle.classList.add("fixed")
        worksUrl.classList.add("fixed")
    } else {
        sectionTitle.classList.remove("fixed")
        worksUrl.classList.remove("fixed")   
    }
}

function blockScroll(e) {
  e.preventDefault();
}
function whellPrevent() {
    const Y = window.scrollY;
    const start = works.offsetTop;
    const end = works.offsetTop + works.offsetHeight - window.innerHeight;
    if (Y >= start && Y < end) {
        document.body.style.overflow = "hidden";
        window.addEventListener("wheel", blockScroll, { passive: false });
        window.addEventListener("touchmove", blockScroll, { passive: false });
        window.addEventListener("scroll", blockScroll, { passive: false });
    } else {
        document.body.style.overflow = "";
        window.removeEventListener("wheel", blockScroll);
        window.removeEventListener("touchmove", blockScroll);
        window.removeEventListener("scroll", blockScroll);
    }
}
function transform() {
    const offsetTop = document.querySelector(".works").offsetTop;
    
    const paddingLeft = getComputedStyle(stickyWrapper).getPropertyValue("--slide-marg").trim();
    const slidePadding = parseFloat(paddingLeft);
    const maxScrollX = scrollSection.scrollWidth - window.innerWidth + slidePadding;
    
    
    const maxScrollY = worksWrap.offsetHeight - window.innerHeight + slidePadding;
    
    const scrollY = window.scrollY - offsetTop;
    
    let progress = (scrollY * maxScrollX / maxScrollY);
    progress = Math.round(progress / 5) * 5;
    progress = progress < 0 ? 0 : progress > maxScrollX ? maxScrollX : progress;
    
    
    scrollSection.style.transform = `translate3d(${-(progress)}px,0 ,0)`
}


let ticking = false;
window.addEventListener("scroll", () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            toggleActive();
            transform();
            ticking = false;
        });
        ticking = true;
    }
    
})

window.addEventListener("resize", () => {
    setSlidesVariables()
    toggleActive()
    setVh();
    if (!ticking) {
        window.requestAnimationFrame(() => {
            transform();
            ticking = false;
        });
        ticking = true;
    }
})
window.addEventListener("load", () => {
    setSlidesVariables()
})


skillsMove();
skillsClick();
typeWriter();

worksBgImage();
setVh();

divEnter(".about>div")
divEnter(".ability>div")
divEnter(".about__toptext>div>div")
divEnter(".about__bottom>div")
divEnter(".top_strengthbox>div")
divEnter(".bottom_timelinewrap>div")
divEnter(".ability__bottomwrap>div")
divEnter(".skilltool_boxwrap>div")

